export type EnquiryStatus = 'New Lead' | 'Contacted' | 'In Review' | 'Closed';

export const ENQUIRY_STATUSES: EnquiryStatus[] = ['New Lead', 'Contacted', 'In Review', 'Closed'];

export function isValidEnquiryStatus(status: unknown): status is EnquiryStatus {
  return typeof status === 'string' && ENQUIRY_STATUSES.includes(status as EnquiryStatus);
}
