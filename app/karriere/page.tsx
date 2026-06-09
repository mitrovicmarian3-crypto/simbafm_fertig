import React from 'react';
import { constructMetadata } from '@/lib/metadata';
import { KarriereClient } from '@/components/KarriereClient';

export const metadata = constructMetadata({
  title: 'Jobs & Karriere in Wien | Werden Sie Teil unseres Teams | Simba FM',
  description: 'Attraktive Stellenangebote in der Reinigung in Wien. Bewerben Sie sich bei unserem meistergeführten Team und genießen Sie faire Bezahlung und ein starkes Miteinander.',
  canonical: '/karriere',
});

export default function KarrierePage() {
  return <KarriereClient />;
}
