import React from 'react';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Impressum',
  description: 'Rechtliche Informationen, Offenlegung und Impressum von Simba Facility Management Wien.',
  canonical: '/impressum',
});

export default function ImpressumPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen pt-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-16 pb-12 md:pt-20 md:pb-14 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(240,249,255,0.7)_0%,rgba(255,255,255,0)_50%)] z-0" />
        
        <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full text-center lg:text-left">
          <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#003067]/85 mb-4 font-bold block leading-none font-sans">
            RECHTLICHES
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-black text-[#003067] leading-[1.12] tracking-tight mb-2 font-sans">
            Impressum
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl font-semibold">
            Offenlegung und Pflichtangaben gemäß österreichischem Gewerberecht, ECG, UGB und Mediengesetz.
          </p>
        </div>
      </section>

      {/* 2. MAIN IMPRESSUM CONTENT */}
      <section className="py-16 md:py-20">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="bg-white border border-slate-200/60 shadow-[0_5px_40px_rgba(0,0,0,0.01)] p-8 sm:p-12 rounded-none space-y-10 text-[#003067]">
            
            {/* Unternehmensdaten */}
            <div className="border-b border-slate-100 pb-8">
              <h2 className="text-lg font-black uppercase tracking-wider text-[#0052b4] mb-4 font-sans">
                Unternehmensangaben
              </h2>
              <div className="text-slate-600 space-y-2 text-sm sm:text-base leading-relaxed font-medium">
                <p className="text-lg font-extrabold text-[#003067]">
                  Jasmina Marinkovic
                </p>
                <p className="font-extrabold text-slate-800">
                  Simba Facility Management
                </p>
                <p>Herthergasse 37/15/1</p>
                <p>1120 Wien</p>
                <p>Österreich</p>
                <p className="text-xs text-slate-400 mt-2">
                  (Einzelunternehmen / Nicht im Firmenbuch protokolliert)
                </p>
              </div>
            </div>

            {/* Kontakt */}
            <div className="border-b border-slate-100 pb-8">
              <h2 className="text-lg font-black uppercase tracking-wider text-[#0052b4] mb-4 font-sans">
                Kontaktmöglichkeit
              </h2>
              <div className="text-slate-600 space-y-3 text-sm sm:text-base font-medium">
                <p className="flex items-center gap-3">
                  <span className="font-bold text-[#003067]">Telefon:</span> 
                  <a href="tel:06601470316" className="font-bold text-[#0052b4] hover:underline">0660 / 1470316</a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-bold text-[#003067]">E-Mail:</span> 
                  <a href="mailto:simbafacility@outlook.com" className="font-bold text-[#0052b4] hover:underline break-all">simbafacility@outlook.com</a>
                </p>
              </div>
            </div>

            {/* Gewerberechtliche Angaben */}
            <div className="border-b border-slate-100 pb-8">
              <h2 className="text-lg font-black uppercase tracking-wider text-[#0052b4] mb-4 font-sans">
                Gewerbe & Berufsrecht
              </h2>
              <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed font-medium">
                <p>
                  <span className="font-bold text-[#003067]">Unternehmensgegenstand:</span> Denkmal-, Fassaden- und Gebäudereinigung (Meisterbetrieb), Hausbetreuung (Hausbetreuungstätigkeiten).
                </p>
                <p>
                  <span className="font-bold text-[#003067]">Berufsbezeichnung:</span> Denkmal-, Fassaden- und Gebäudereiniger (Meisterprüfung verliehen in Österreich).
                </p>
                <p>
                  <span className="font-bold text-[#003067]">Umsatzsteuer-Status:</span> Umsatzsteuerbefreit aufgrund der Kleinunternehmerregelung gemäß § 6 Abs. 1 Z 27 UStG. Es wird keine Umsatzsteuer ausgewiesen.
                </p>
                <p>
                  <span className="font-bold text-[#003067]">Kammerzugehörigkeit:</span> Mitglied der Wirtschaftskammer Wien (Fachgruppe der Denkmal-, Fassaden- und Gebäudereiniger).
                </p>
                <p>
                  <span className="font-bold text-[#003067]">Aufsichtsbehörde / Gewerbebehörde:</span> Magistratisches Bezirksamt des XII. Bezirkes (Wien).
                </p>
                <p>
                  <span className="font-bold text-[#003067]">Anwendbare gewerberechtliche Vorschriften:</span> Gewerbeordnung 1994 (GewO), insbesondere zugänglich im Rechtsinformationssystem des Bundes (RIS) unter <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-[#0052b4] hover:underline font-semibold">www.ris.bka.gv.at</a>.
                </p>
              </div>
            </div>

            {/* Streitschlichtung */}
            <div className="border-b border-slate-100 pb-8">
              <h2 className="text-lg font-black uppercase tracking-wider text-[#0052b4] mb-4 font-sans">
                Online-Streitbeilegung
              </h2>
              <div className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium space-y-3">
                <p>
                  Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der Europäischen Kommission unter <a href="http://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-[#0052b4] hover:underline break-all font-semibold">http://ec.europa.eu/odr</a> zu richten.
                </p>
                <p>
                  Sie können Ihre allfälligen Beschwerden auch direkt an unsere oben genannte E-Mail-Adresse (<a href="mailto:simbafacility@outlook.com" className="hover:underline">simbafacility@outlook.com</a>) richten. Wir bemühen uns, Unstimmigkeiten stets direkt und einvernehmlich mit unseren Kunden zu klären.
                </p>
              </div>
            </div>

            {/* Haftungsausschluss */}
            <div className="space-y-4">
              <h2 className="text-lg font-black uppercase tracking-wider text-[#0052b4] mb-4 font-sans">
                Rechtliche Hinweise & Disclaimer
              </h2>
              <div className="text-slate-600 text-sm leading-relaxed space-y-4 font-medium">
                <p>
                  <span className="font-bold text-[#003067]">Haftung für Inhalte dieser Website:</span> Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns, korrekte und aktuelle Informationen bereitzustellen. Eine Haftung für die Korrektheit aller Inhalte – insbesondere für solche, die von Dritten bereitgestellt oder verlinkt werden – können wir jedoch nicht übernehmen. Sollten Ihnen fehlerhafte, rechtswidrige oder problematische Inhalte auffallen, bitten wir Sie, uns umgehend zu kontaktieren.
                </p>
                <p>
                  <span className="font-bold text-[#003067]">Haftung für Links auf dieser Website:</span> Unsere Webseite enthält Links zu anderen Webseiten, für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht für uns nicht, da uns keine rechtswidrigen Tätigkeiten oder Informationen bekannt sind und uns solche Rechtswidrigkeiten auch nicht auffallen, bis Links entfernt werden. Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitten wir Sie, uns zu kontaktieren.
                </p>
                <p>
                  <span className="font-bold text-[#003067]">Urheberrechtshinweis:</span> Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Marken) unterliegen dem österreichischen Urheberrecht. Jede Vervielfältigung, Verbreitung oder sonstige Verwertung bedarf unserer ausdrücklichen vorherigen schriftlichen Zustimmung.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
