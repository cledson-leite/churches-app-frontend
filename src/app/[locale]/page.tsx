'use client';
export const dynamic = 'force-dynamic';

import { redirect, useParams } from 'next/navigation';

export default function Home() {
  const { locale } = useParams();
  redirect(`${locale}/finance`);
}
