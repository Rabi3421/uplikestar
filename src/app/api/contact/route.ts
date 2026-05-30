import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
};

const serviceLabelMap: Record<string, string> = {
  'custom-software': 'Custom Software Development',
  website: 'Website Development',
  inventory: 'Inventory Management System',
  'erp-crm': 'ERP / CRM Solution',
  ecommerce: 'E-commerce Platform',
  automation: 'Business Automation',
  support: 'Technical Support',
};

function parseSpreadsheetId() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  if (!spreadsheetId) {
    throw new Error('Missing GOOGLE_SHEETS_SPREADSHEET_ID');
  }
  return spreadsheetId;
}

function sanitizePrivateKey(privateKey: string) {
  const trimmedKey = privateKey.trim().replace(/^['"]|['"]$/g, '');
  return trimmedKey.includes('\\n') ? trimmedKey.replace(/\\n/g, '\n') : trimmedKey;
}

function isPlaceholderPrivateKey(privateKey: string) {
  const normalizedKey = privateKey.toLowerCase();
  return normalizedKey.includes('...') || normalizedKey.includes('your_private_key') || normalizedKey.includes('placeholder');
}

function assertValidPrivateKey(privateKey: string, sourceLabel: string) {
  if (isPlaceholderPrivateKey(privateKey)) {
    throw new Error(`${sourceLabel} looks like placeholder text. Paste the real Google service account private key from Google Cloud.`);
  }

  if (!privateKey.includes('BEGIN PRIVATE KEY')) {
    throw new Error(`${sourceLabel} is invalid. Paste the full PEM private key from Google Cloud.`);
  }
}

function getServiceAccountCredentials() {
  const rawServiceAccount = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

  if (rawServiceAccount) {
    try {
      const credentials = JSON.parse(rawServiceAccount) as {
        client_email?: string;
        private_key?: string;
      };

      if (!credentials.client_email || !credentials.private_key) {
        throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON must contain client_email and private_key');
      }

      const privateKey = sanitizePrivateKey(credentials.private_key);
      assertValidPrivateKey(privateKey, 'GOOGLE_SERVICE_ACCOUNT_JSON.private_key');

      return {
        client_email: credentials.client_email.trim(),
        private_key: privateKey,
      };
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON must be valid JSON');
      }

      throw error;
    }
  }

  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (clientEmail && privateKey) {
    const sanitizedPrivateKey = sanitizePrivateKey(privateKey);
    assertValidPrivateKey(sanitizedPrivateKey, 'GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY');

    return {
      client_email: clientEmail,
      private_key: sanitizedPrivateKey,
    };
  }

  throw new Error(
    'Missing Google service account credentials. Set GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.',
  );
}

function getSheetsAuth() {
  const credentials = getServiceAccountCredentials();

  return new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

function getMailer() {
  const user = process.env.GMAIL_USER || 'arntechsofficial@gmail.com';
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, '');

  if (!pass) {
    throw new Error('Missing GMAIL_APP_PASSWORD');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  });
}

function normalizeValue(value?: string) {
  return value?.trim() || '-';
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = normalizeValue(body.name);
    const email = normalizeValue(body.email);
    const company = normalizeValue(body.company);
    const service = normalizeValue(body.service);
    const message = normalizeValue(body.message);

    if (!name || !email || !message || name === '-' || email === '-' || message === '-') {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }

    const timestamp = new Date().toISOString();
    const serviceLabel = serviceLabelMap[service] || service;
    const spreadsheetId = parseSpreadsheetId();
    const spreadsheetRange = process.env.GOOGLE_SHEETS_RANGE || 'Sheet1!A:H';

    const mailer = getMailer();
    const sender = process.env.GMAIL_USER || 'arntechsofficial@gmail.com';
    const recipient = process.env.CONTACT_TO_EMAIL || 'rnpmech.enggr@gmail.com';

    const subject = `New UpLikeStar enquiry from ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Service: ${serviceLabel}`,
      '',
      'Message:',
      message,
    ].join('\n');

    const html = `
      <h2 style="margin:0 0 16px;font-size:20px;">New UpLikeStar Enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Service:</strong> ${escapeHtml(serviceLabel)}</p>
      <p><strong>Submitted:</strong> ${escapeHtml(timestamp)}</p>
      <div style="margin-top:20px;padding:16px;border:1px solid #e5e7eb;border-radius:12px;white-space:pre-wrap;">${escapeHtml(message)}</div>
    `;

    let sheetSaved = false;
    try {
      const auth = getSheetsAuth();
      const sheets = google.sheets({ version: 'v4', auth });

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: spreadsheetRange,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[timestamp, name, email, company, serviceLabel, message, 'Website Contact Form', 'New Lead']],
        },
      });

      sheetSaved = true;
    } catch (sheetError) {
      console.error('Google Sheets save error:', sheetError);
    }

    let emailSent = false;
    try {
    await mailer.sendMail({
      from: `UpLikeStar <${sender}>`,
      to: recipient,
      replyTo: email,
      subject,
      text,
      html,
    });
      emailSent = true;
    } catch (mailError) {
      console.error('Contact email send error:', mailError);
    }

    if (sheetSaved && emailSent) {
      return NextResponse.json({ success: true, message: 'Your enquiry has been submitted successfully.' });
    }

    if (emailSent) {
      return NextResponse.json(
        {
          success: true,
          message:
            'Your enquiry was emailed successfully, but the Google Sheet save failed. Please check the server configuration.',
        },
        { status: 207 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          'Unable to submit your enquiry right now. Please check the Google service account and Gmail settings, then try again.',
      },
      { status: 500 },
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Unable to submit your enquiry right now. Please try again later.',
      },
      { status: 500 },
    );
  }
}
