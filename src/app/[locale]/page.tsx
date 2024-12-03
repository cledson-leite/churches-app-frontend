'use client'

import { redirect, useParams } from 'next/navigation';

export default function Home() {
  const { locale } = useParams();
  redirect(`${locale}/finance`);
}
