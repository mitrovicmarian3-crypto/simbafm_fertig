import { constructMetadata } from '@/lib/metadata';
import { UeberUnsClient } from '@/components/UeberUnsClient';

export const metadata = constructMetadata({
  title: 'Über Uns | Ihr meistergeführter Reinigungsbetrieb | Simba FM',
  description: 'Erfahren Sie mehr über Simba FM – Ihren meistergeführten Partner für erstklassige Gebäudereinigung in Wien. Gemäß unserem Versprechen sorgen wir für Qualität & Verlässlichkeit.',
  canonical: '/ueber-uns',
});

export default function UeberUnsPage() {
  return <UeberUnsClient />;
}
