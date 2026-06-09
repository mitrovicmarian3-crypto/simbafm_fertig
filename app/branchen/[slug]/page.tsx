import React from 'react';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/metadata';
import { BranchePageClient } from '@/components/BranchePageClient';
import { BuerosUnternehmenClient } from '@/components/BuerosUnternehmenClient';
import { branchenData } from '@/lib/branchen-data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(branchenData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const data = branchenData[resolvedParams.slug];
  if (!data) return {};

  return constructMetadata({
    title: `${data.title} | Simba FM`,
    description: data.subtitle.slice(0, 160) + "...",
    canonical: `/branchen/${resolvedParams.slug}`,
  });
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const data = branchenData[resolvedParams.slug];
  if (!data) {
    notFound();
  }
  if (resolvedParams.slug === 'bueros-unternehmen-wien') {
    return <BuerosUnternehmenClient />;
  }
  return <BranchePageClient data={data} />;
}
