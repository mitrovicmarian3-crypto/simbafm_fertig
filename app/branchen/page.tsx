import React from 'react';
import { constructMetadata } from '@/lib/metadata';
import { BranchenOverviewClient } from '@/components/BranchenOverviewClient';

export const metadata = constructMetadata({
  title: "Spezialisierte Branchen-Reinigung Wien | Simba FM",
  description: "Professionelle B2B-Reinigungskonzepte in Wien. Maßgeschneiderte Hygienepläne für Büros, Ordinationen, Hotels, Schulen, Hausverwaltungen & Industrie.",
  canonical: "/branchen",
});

export default function BranchenPage() {
  return <BranchenOverviewClient />;
}

