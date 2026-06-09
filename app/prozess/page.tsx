import React from 'react';
import { constructMetadata } from '@/lib/metadata';
import { ProzessClient } from '@/components/ProzessClient';

export const metadata = constructMetadata({
  title: 'Unser Ablauf: In 4 Schritten zum Angebot | Simba FM',
  description: 'Vom Erstkontakt über die kostenlose Besichtigung vor Ort bis zum meisterhaften Endergebnis – erfahren Sie, wie unkompliziert und transparent wir für Sie arbeiten.',
  canonical: '/prozess',
});

export default function ProcessPage() {
  return <ProzessClient />;
}
