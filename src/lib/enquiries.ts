import { ObjectId, type WithId } from 'mongodb';

import { getAuthDb } from '@/lib/auth/db';
import type { EnquiryStatus } from '@/lib/enquiry-status';

export type ContactEnquiryInput = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  serviceKey: string;
  message: string;
};

export type ContactEnquiry = ContactEnquiryInput & {
  id: string;
  status: EnquiryStatus;
  source: string;
  sheetSaved: boolean;
  emailSent: boolean;
  createdAt: string;
  updatedAt: string;
  statusUpdatedAt?: string;
  statusUpdatedBy?: string;
};

type ContactEnquiryDocument = Omit<ContactEnquiryInput, 'phone'> & {
  phone?: string;
  status: EnquiryStatus;
  source: string;
  sheetSaved: boolean;
  emailSent: boolean;
  createdAt: Date;
  updatedAt: Date;
  statusUpdatedAt?: Date;
  statusUpdatedBy?: string;
};

const ENQUIRIES_COLLECTION = 'contact_enquiries';

function mapEnquiry(document: WithId<ContactEnquiryDocument>): ContactEnquiry {
  return {
    id: document._id.toString(),
    name: document.name,
    email: document.email,
    phone: document.phone || '-',
    company: document.company,
    service: document.service,
    serviceKey: document.serviceKey,
    message: document.message,
    status: document.status,
    source: document.source,
    sheetSaved: document.sheetSaved,
    emailSent: document.emailSent,
    createdAt: document.createdAt.toISOString(),
    updatedAt: document.updatedAt.toISOString(),
    statusUpdatedAt: document.statusUpdatedAt?.toISOString(),
    statusUpdatedBy: document.statusUpdatedBy,
  };
}

export async function createContactEnquiry(input: ContactEnquiryInput) {
  const db = await getAuthDb();
  const now = new Date();
  const result = await db.collection<ContactEnquiryDocument>(ENQUIRIES_COLLECTION).insertOne({
    ...input,
    status: 'New Lead',
    source: 'Website Contact Form',
    sheetSaved: false,
    emailSent: false,
    createdAt: now,
    updatedAt: now,
  });

  return result.insertedId;
}

export async function updateContactEnquiryDeliveryStatus(
  id: ObjectId,
  status: Pick<ContactEnquiryDocument, 'sheetSaved' | 'emailSent'>,
) {
  const db = await getAuthDb();
  await db.collection<ContactEnquiryDocument>(ENQUIRIES_COLLECTION).updateOne(
    { _id: id },
    {
      $set: {
        ...status,
        updatedAt: new Date(),
      },
    },
  );
}

export async function getRecentContactEnquiries(limit = 50) {
  const db = await getAuthDb();
  const enquiries = await db
    .collection<ContactEnquiryDocument>(ENQUIRIES_COLLECTION)
    .find({})
    .sort({ createdAt: -1 })
    .limit(limit)
    .toArray();

  return enquiries.map(mapEnquiry);
}

export async function updateContactEnquiryStatus(id: string, status: EnquiryStatus, updatedBy: string) {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const db = await getAuthDb();
  const now = new Date();
  const result = await db.collection<ContactEnquiryDocument>(ENQUIRIES_COLLECTION).findOneAndUpdate(
    { _id: new ObjectId(id) },
    {
      $set: {
        status,
        statusUpdatedAt: now,
        statusUpdatedBy: updatedBy,
        updatedAt: now,
      },
    },
    { returnDocument: 'after' },
  );

  return result ? mapEnquiry(result) : null;
}

export async function getContactEnquirySummary() {
  const db = await getAuthDb();
  const collection = db.collection<ContactEnquiryDocument>(ENQUIRIES_COLLECTION);
  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - 7);

  const [total, thisWeek, newLeads] = await Promise.all([
    collection.countDocuments({}),
    collection.countDocuments({ createdAt: { $gte: weekStart } }),
    collection.countDocuments({ status: 'New Lead' }),
  ]);

  return { total, thisWeek, newLeads };
}
