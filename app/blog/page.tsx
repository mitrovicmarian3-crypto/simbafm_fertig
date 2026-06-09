import React, { Suspense } from 'react';
import { constructMetadata } from '@/lib/metadata';
import { BlogClientContent } from '@/components/BlogClient';

export const metadata = constructMetadata({
  title: 'Ratgeber & Reinigungstipps | Simba FM Wien',
  description: 'Erfahren Sie wertvolle Tipps zur Büroreinigung und Gebäudehygiene – unser Experten-Ratgeber teilt meisterhaftes Wissen für eine rundum saubere Immobilie.',
  canonical: '/blog',
});

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center text-slate-500 font-bold">Laden...</div>}>
      <BlogClientContent />
    </Suspense>
  );
}
