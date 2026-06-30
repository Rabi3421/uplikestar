'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { ENQUIRY_STATUSES, type EnquiryStatus } from '@/lib/enquiry-status';

type EnquiryStatusSelectProps = {
  enquiryId: string;
  initialStatus: EnquiryStatus;
  initialStatusUpdatedAt?: string;
  initialStatusUpdatedBy?: string;
};

function formatStatusUpdatedAt(value?: string) {
  if (!value) return null;

  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  }).format(new Date(value));
}

export default function EnquiryStatusSelect({
  enquiryId,
  initialStatus,
  initialStatusUpdatedAt,
  initialStatusUpdatedBy,
}: EnquiryStatusSelectProps) {
  const router = useRouter();
  const [status, setStatus] = useState<EnquiryStatus>(initialStatus);
  const [statusUpdatedAt, setStatusUpdatedAt] = useState(initialStatusUpdatedAt);
  const [statusUpdatedBy, setStatusUpdatedBy] = useState(initialStatusUpdatedBy);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  const handleStatusChange = async (nextStatus: EnquiryStatus) => {
    if (nextStatus === status || isSaving) return;

    const previousStatus = status;
    setStatus(nextStatus);
    setError('');
    setIsSaving(true);

    try {
      const response = await fetch(`/api/dashboard/enquiries/${enquiryId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: nextStatus }),
      });
      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
        enquiry?: {
          status: EnquiryStatus;
          statusUpdatedAt?: string;
          statusUpdatedBy?: string;
        };
      };

      if (response.status === 401) {
        router.replace('/login');
        return;
      }

      if (!response.ok || !result.success || !result.enquiry) {
        throw new Error(result.message || 'Unable to update enquiry status.');
      }

      setStatus(result.enquiry.status);
      setStatusUpdatedAt(result.enquiry.statusUpdatedAt);
      setStatusUpdatedBy(result.enquiry.statusUpdatedBy);
      router.refresh();
    } catch (error) {
      setStatus(previousStatus);
      setError(error instanceof Error ? error.message : 'Unable to update enquiry status.');
    } finally {
      setIsSaving(false);
    }
  };

  const formattedStatusUpdatedAt = formatStatusUpdatedAt(statusUpdatedAt);

  return (
    <div className="w-full">
      <label htmlFor={`status-${enquiryId}`} className="mb-1 block text-xs font-800 uppercase tracking-widest text-[#52627A]">
        Status
      </label>
      <select
        id={`status-${enquiryId}`}
        value={status}
        disabled={isSaving}
        onChange={(event) => handleStatusChange(event.target.value as EnquiryStatus)}
        className="w-full rounded-[8px] border border-[#CCD5E6] bg-white px-3 py-2 text-sm font-800 text-[#111827] outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {ENQUIRY_STATUSES.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="mt-2 min-h-[38px] text-xs font-700 leading-5 text-[#52627A]">
        {isSaving ? <p>Saving status...</p> : null}
        {!isSaving && formattedStatusUpdatedAt ? (
          <p>
            Updated {formattedStatusUpdatedAt}
            {statusUpdatedBy ? ` by ${statusUpdatedBy}` : ''}
          </p>
        ) : null}
        {error ? <p className="text-red-600">{error}</p> : null}
      </div>
    </div>
  );
}
