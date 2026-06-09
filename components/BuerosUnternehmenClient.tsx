"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Check, 
  ArrowRight, 
  Phone, 
  Mail, 
  ChevronDown, 
  Sparkles,
  ShieldCheck,
  Award
} from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

// Dynamic Pin SVG in Google Maps branding format
const GoogleMapsPin = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 inline-block font-sans">
    <ellipse cx="12" cy="21" rx="4" ry="1.5" fill="#A6A6A6" opacity="0.3" />
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
    <path d="M12 2C10.05 2 8.35 2.8 7.15 4.1L12 9V2z" fill="#4285F4" />
    <path d="M7.15 4.1C5.8 5.3 5 7.05 5 9c0 1.95.82 3.8 2.15 5.1L12 9 7.15 4.1z" fill="#34A853" />
    <path d="M12 22s7-7.75 7-13c0-1.95-.8-3.7-2.15-4.9L12 9v13z" fill="#FBBC05" />
    <circle cx="12" cy="9" r="3.5" fill="#FFFFFF" />
    <circle cx="12" cy="9" r="1.5" fill="#4285F4" />
  </svg>
);

export function BuerosUnternehmenClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const keyBenefits = [
    "Produktivere Arbeitsplätze",
    "Besserer Eindruck bei Kunden",
    "Weniger Krankheitsausfälle",
    "Höhere Mitarbeiterzufriedenheit",
    "Werterhalt der Einrichtung"
  ];

  const resultsSection = [
    "Saubere Arbeitsplätze & schmierfreie Bildschirme",
    "Gepflegte, repräsentative Besprechungsräume",
    "Hygienische, geruchsfreie Küchenbereiche",
    "Polierter, einladender Empfangsbereich",
    "Angenehmes, motivationsförderndes Arbeitsumfeld",
    "Konsequent positiver erster Eindruck bei Ihren Kunden"
  ];

  const checkpointsSection6 = [
    "Schnelle Reaktionszeiten",
    "Individuelle Reinigungskonzepte",
    "Flexible Einsatzzeiten",
    "Persönliche Betreuung",
    "Transparente Kommunikation",
    "Hohe Qualitätsstandards"
  ];

  const services = [
    {
      title: "Unterhaltsreinigung",
      desc: "Das tägliche oder wöchentliche Fundament für makellose Frische in Ihren Arbeitsräumen. Planbar, meistergeprüft und zu transparent kalkulierbaren Tarifen.",
      path: "/unterhaltsreinigung-wien"
    },
    {
      title: "Glasreinigung",
      desc: "Streifenfreie Transparenz für all Ihre Büroverglasungen, Außenfenster, Glastüren und Raumteiler. Für maximalen Lichteinfall und klare Sicht.",
      path: "/fensterreinigung-wien"
    },
    {
      title: "Sonderreinigung",
      desc: "Spezialisierte Grundpflege, Spannteppich- und Polstermöbel-Tiefenreinigung sowie fachgerechte meisterbegleitete Bauendreinigungen.",
      path: "/sonderreinigung-wien"
    },
    {
      title: "Hausbetreuung",
      desc: "Vertrauensvolle Pflegeerhalt-Konzepte für Firmengebäude, Stiegenhäuser, Außenanlagen und gewerbliche Liegenschaften in ganz Wien.",
      path: "/hausbetreuung-wien"
    }
  ];

  const faqs = [
    {
      q: "Was kostet eine Büroreinigung in Wien?",
      a: "Die genauen Kosten hängen von Faktoren wie Quadratmeterzahl, Nutzungshäufigkeit und Leistungsspektrum ab. Nach einer kostenlosen Erstbesichtigung vor Ort erstellen wir Ihnen binnen 24 Stunden ein transparentes Festpreis-Angebot ohne versteckte Nebenkosten."
    },
    {
      q: "Wie oft sollte ein Büro gereinigt werden?",
      a: "Das optimale Intervall richtet sich nach Mitarbeiterzahl und Kundenfrequenz. Kleinere Büros oder Kanzleien buchen meist 1- bis 3-mal pro Woche, während hochfrequentierte Geschäftsräume meisterlich täglich gepflegt werden."
    },
    {
      q: "Wird außerhalb der Geschäftszeiten gereinigt?",
      a: "Ja, selbstverständlich. Um Ihre internen Betriebsprozesse absolut gar nicht zu stören, arbeiten unsere Teams bevorzugt in den frühen Morgenstunden vor Arbeitsbeginn, am Abend nach feierabendlichem Betriebsschluss oder am Wochenende."
    },
    {
      q: "Müssen Mitarbeiter anwesend sein?",
      a: "Nein. Die meisten Partner übergeben uns projektbezogen einen Objektschlüssel. Unser Stammpersonal arbeitet eigenständig und absolut diskret. Ein streng dokumentiertes Schlüsselprotokoll sorgt für lückenlose Sicherheit."
    },
    {
      q: "Welche Leistungen sind standardmäßig enthalten?",
      a: "Dazu gehören das Staubwischen und Reinigen aller Arbeitsplätze, Tische und Oberflächen, Bodenpflege, Teeküchenreinigung, Müllentleerung inklusive korrekter Abfalltrennung sowie die gründliche Hygiene-Desinfektion gebäudeeigener Sanitärbereiche."
    },
    {
      q: "Können auch empfindliche Glasflächen gereinigt werden?",
      a: "Ja. Ob große Glas-Raumteiler, Außenfenster oder anspruchsvolle Vitrinen – wir verfügen über professionelle Wiener Fenster- und Glasreinigungsverfahren, die nach Bedarf fest in den Turnus eingebaut werden können."
    },
    {
      q: "Betreuen Sie mehrere Firmenstandorte?",
      a: "Ja, Simba FM betreut überregional Firmen und Filialnetze in ganz Wien. Sie erhalten meisterhafte Qualität aus einer Hand mit einem festen Ansprechpartner für die gesamte Koordination und transparente Zentralabrechnung."
    },
    {
      q: "Bieten Sie regelmäßige Kontrollen durch Objektleiter?",
      a: "Ja, absolut. Als meistergeführter Betrieb führen unsere Objektleiter in Abständen unangekündigte Qualitätsaudits durch. Dies sichert dauerhaft die exzellente Note und den kompromisslosen Standard unserer Serviceleistung vor Ort."
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 font-sans text-slate-800">
      
      {/* 1. HERO SECTION WITH PASSENGER PASSEPARTOUT IMAGE FRAME */}
      <section className="relative overflow-hidden bg-white pt-16 pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(240,249,255,0.7)_0%,rgba(255,255,255,0)_50%)] z-0" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start justify-between py-1">
              <div>
                <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#0052b4] mb-5 font-bold block leading-none font-sans">
                  BRANCHENPAGE: BÜROS
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-black text-[#003067] leading-[1.12] tracking-tight mb-5 font-sans">
                  Professionelle Büroreinigung <br className="hidden md:inline" />
                  für Wiener <span className="text-[#0052b4]">Unternehmen</span>
                </h1>
                <p className="text-slate-600 text-sm md:text-base max-w-2xl leading-relaxed mb-8 font-medium">
                  Saubere Arbeitsumgebungen für mehr Produktivität, Wohlbefinden und einen makellosen professionellen Eindruck bei Partnern, Kunden und Mitarbeitern. Verlassen Sie sich auf feste Teams, verlässliche Reinigungspläne und staatlich geprüfte Meisterqualität in allen Bezirken Wiens.
                </p>
              </div>

              {/* Home Page Call to Actions */}
              <div className="flex flex-wrap gap-4 w-full sm:w-auto justify-center lg:justify-start mt-auto">
                <Link 
                  href="#kontakt" 
                  className="w-full sm:w-auto text-center bg-[#003067] hover:bg-[#0052b4] text-white font-bold px-8 py-3.5 rounded-xl text-sm md:text-base transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group"
                >
                  Kostenloses Angebot anfordern
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="#leistungen-passend" 
                  className="w-full sm:w-auto text-[#004e9a] font-bold px-8 py-3.5 rounded-xl text-sm md:text-base transition-all flex items-center justify-center gap-2 bg-[#f0f9ff] hover:bg-[#e0f2fe] border border-[#bae6fd]"
                >
                  Leistungsportfolio
                </Link>
              </div>
            </div>

            {/* Right Image Display Column - Sleek borderless styling matched exactly to left-column height */}
            <div className="lg:col-span-5 flex relative min-h-[350px] lg:min-h-full w-full">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,30,100,0.06)] bg-slate-50">
                <Image
                  src="/images/branchen/buero.webp"
                  alt="Simba Büro und Unternehmensreinigung Wien"
                  fill
                  priority
                  className="object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WARUM PROFESSIONELLE BÜROREINIGUNG MEHR IST ALS SAUBERKEIT */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <span className="text-[#0052b4] font-bold text-xs uppercase tracking-widest block mb-3">Strategischer Mehrwert</span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#003067] tracking-tight font-sans mb-5">
              Warum professionelle <span className="text-[#0052b4]">Büroreinigung mehr</span> als Sauberkeit ist
            </h2>
            
            {/* Short, precise executive intro */}
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 font-semibold border-l-4 border-[#0052b4] pl-5 max-w-3xl">
              Ein professionell gereinigtes Büro ist das sichtbare Aushängeschild Ihres Unternehmens und direktes Fundament für Motivation und Gesundheit. Staubfreie Arbeitsplätze, hygienische Gemeinschaftsflächen und keimfreie Sanitärtrakte steigern das tägliche Wohlbefinden Ihrer Mitarbeiter spürbar und sichern den nachhaltigen Werterhalt Ihrer Ausstattung.
            </p>

            {/* Elegant Checkpoints - Easily scannable */}
            <div className="mt-8 border-t border-slate-100 pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check size={13} className="stroke-[3]" />
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-700 leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DIE GRÖSSTEN HERAUSFORDERUNGEN IN MODERNEN BÜROS - NO CARDS, HIGH CORPORATE STYLE */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-10 text-left">
            <span className="text-[#0052b4] font-bold text-xs uppercase tracking-widest block mb-3">BRANCHE IM FOKUS</span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#003067] tracking-tight font-sans mb-3">
              Die <span className="text-[#0052b4]">größten Herausforderungen</span> in modernen Büros
            </h2>
            <p className="text-slate-500 text-sm font-semibold max-w-2xl leading-relaxed">
              Jede Zone stellt hochgradig individuelle Ansprüche an Mensch, Material und Reinigungsfrequenz. Wir begegnen diesen Schwachstellen mit gezielten Konzeptlösungen:
            </p>
          </div>

          {/* Minimal corporate divider-based layout (No Cards) */}
          <div className="max-w-4xl mx-auto border-t border-slate-200 mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 py-10">
              
              {/* Challenge 01 */}
              <div className="flex gap-4">
                <span className="text-[17px] font-black text-[#0052b4] font-mono leading-none pt-1">01</span>
                <div>
                  <h3 className="text-base font-bold text-[#003067] mb-2 leading-none">Open-Space-Büros</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    Eine hohe Personaldichte führt in Großraumbüros zu einer rasanten Staub- und Keimentwicklung. Unsere Kräfte fokussieren auf die konstante Staubreduktion an Arbeitsplatzinseln, Tastaturen, Monitoren und hochfrequentierten Laufwegen.
                  </p>
                </div>
              </div>

              {/* Challenge 02 */}
              <div className="flex gap-4">
                <span className="text-[17px] font-black text-[#0052b4] font-mono leading-none pt-1">02</span>
                <div>
                  <h3 className="text-base font-bold text-[#003067] mb-2 leading-none">Besprechungsräume</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    Konferenztische, Displays, Whiteboards und große Glasabtrennungen müssen jederzeit absolut frei von Fingerabdrücken sein. Wir reinigen diese Flächen bedarfsgerecht und rückstandslos für Ihren perfekten Firmenauftritt.
                  </p>
                </div>
              </div>

              {/* Challenge 03 */}
              <div className="flex gap-4 border-t border-slate-200/50 pt-8 md:border-t-0 md:pt-0">
                <span className="text-[17px] font-black text-[#0052b4] font-mono leading-none pt-1">03</span>
                <div>
                  <h3 className="text-base font-bold text-[#003067] mb-2 leading-none">Gemeinschaftsküchen</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    Küchentresen, Kühlschränke, Kaffeemaschinentasten und Spülbecken sind biologische Hotspots. Hier arbeiten wir mit streng farblich getrennten Tüchern und lebensmittelechten Reinigungsmethoden für eine sterile Hygiene.
                  </p>
                </div>
              </div>

              {/* Challenge 04 */}
              <div className="flex gap-4 border-t border-slate-200/50 pt-8 md:border-t-0 md:pt-0">
                <span className="text-[17px] font-black text-[#0052b4] font-mono leading-none pt-1">04</span>
                <div>
                  <h3 className="text-base font-bold text-[#003067] mb-2 leading-none">Sanitärbereiche</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    Hygienische Frische durch lückenlose, materialschonende Wischdesinfektion aller Toiletten, Armaturen und Waschbecken. Das senkt effektiv Übertragungswege für gesundheitliche Ausfallzeiten Ihres Teams.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. WELCHE BEREICHE WIR IN BÜROS REINIGEN */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-14">
            <span className="text-[#0052b4] font-bold text-xs uppercase tracking-widest block mb-3">SYSTEMATISCHE BÜROPFLEGE</span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#003067] tracking-tight font-sans">
              Welche Bereiche wir in <span className="text-[#0052b4]">Büros reinigen</span>
            </h2>
            <p className="text-slate-500 text-sm mt-3 font-semibold leading-relaxed">
              Ein meisterlich abgestimmtes Reinigungsverzeichnis nach dem professionellen 4-Farben-System sorgt für makellose Hygiene und verhindert jegliche Keimverschleppung:
            </p>
          </div>

          {/* 2-column layout - NO CARDS - clear structured blocks */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            
            {/* Column 1 */}
            <div className="space-y-10">
              
              {/* Box 1 */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#003067] mb-4 border-b border-slate-200 pb-2">
                  Arbeitsplätze
                </h3>
                <ul className="space-y-2.5 pl-4">
                  {["Schreibtische & Monitore", "Böden", "Glasflächen", "Allgemeine Kontaktflächen"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-600 text-sm md:text-[15px] font-medium">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Box 2 */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#003067] mb-4 border-b border-slate-200 pb-2">
                  Besprechungsräume
                </h3>
                <ul className="space-y-2.5 pl-4">
                  {["Konferenztische", "Präsentationsbereiche", "Glaswände", "Böden"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-600 text-sm md:text-[15px] font-medium">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Box 3 */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#003067] mb-4 border-b border-slate-200 pb-2">
                  Empfangsbereiche
                </h3>
                <ul className="space-y-2.5 pl-4">
                  {["Eingangsbereiche", "Empfangstresen", "Wartezonen", "Glasflächen"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-600 text-sm md:text-[15px] font-medium">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Column 2 */}
            <div className="space-y-10">
              
              {/* Box 4 */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#003067] mb-4 border-b border-slate-200 pb-2">
                  Küchen &amp; Sozialräume
                </h3>
                <ul className="space-y-2.5 pl-4">
                  {["Arbeitsflächen", "Küchengeräte", "Essbereiche", "Böden"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-600 text-sm md:text-[15px] font-medium">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Box 5 */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#003067] mb-4 border-b border-slate-200 pb-2">
                  Sanitäranlagen
                </h3>
                <ul className="space-y-2.5 pl-4">
                  {[
                    "Waschbecken, Fliesen & Armaturen",
                    "Spiegel & Glasflächen",
                    "WC-Becken, Urinale & Brillen",
                    "Präzisions-Wischdesinfektion"
                  ].map((itemName, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-600 text-sm md:text-[15px] font-medium">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                      <span>{itemName}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. DARAUF KOMMT ES BEI DER BÜROREINIGUNG AN - NO BADGE, REMOVED SEO TEXT BADGE, COMPACT DESIGN */}
      <section className="py-14 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#003067] tracking-tight font-sans">
              Darauf kommt es bei der <span className="text-[#0052b4]">Büroreinigung an</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Aspect 1 */}
            <div className="border-l-2 border-[#0052b4]/60 pl-4 py-0.5">
              <h3 className="text-sm sm:text-base font-bold text-[#003067] mb-1.5">Reinigung ohne Betriebsunterbrechung</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                Unsere meisterhaft abgestimmten Arbeitsprozesse laufen im Hintergrund und stören Ihre betrieblichen Abläufe nicht. Wir arbeiten flexibel morgens, abends oder am Wochenende für optimale Betriebsruhe.
              </p>
            </div>

            {/* Aspect 2 */}
            <div className="border-l-2 border-[#0052b4]/60 pl-4 py-0.5">
              <h3 className="text-sm sm:text-base font-bold text-[#003067] mb-1.5">Hygiene in stark frequentierten Bereichen</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                Gemeinschaftsräume, Teeküchen und Kaffeebars werden intensiv desinfizierend gepflegt, um Keimketten und gesundheitliche Ausfälle Ihres Teams nachhaltig zu reduzieren.
              </p>
            </div>

            {/* Aspect 3 */}
            <div className="border-l-2 border-[#0052b4]/60 pl-4 py-0.5">
              <h3 className="text-sm sm:text-base font-bold text-[#003067] mb-1.5">Werterhalt von Böden und Oberflächen</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                Ihr exklusives Büro-Interieur verdient materialschonende, umweltschonende Öko-Reiniger. pH-neutrale Reinigungsmethoden bürgen für nachhaltige Wertstabilität.
              </p>
            </div>

            {/* Aspect 4 */}
            <div className="border-l-2 border-[#0052b4]/60 pl-4 py-0.5">
              <h3 className="text-sm sm:text-base font-bold text-[#003067] mb-1.5">Flexibilität bei wechselnder Auslastung</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                Homeoffice und flexible Besetzungen schwanken fortlaufend. Unsere Reinigungsprozesse passen sich unkompliziert dem tatsächlichen Bedarf und Belegungsgrad an.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. DAS ERGEBNIS EINER PROFESSIONELLEN BÜROREINIGUNG */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-[#0052b4]" />
              <span className="text-[#0052b4] font-bold text-xs uppercase tracking-widest block font-sans">
                IHR TÄGLICHER GEWINN
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#003067] tracking-tight font-sans mb-8">
              Das Ergebnis einer <span className="text-[#0052b4]">professionellen Büroreinigung</span>
            </h2>

            {/* Structured checkpoint grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-100 pt-8">
              {resultsSection.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="stroke-[3.5]" />
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#003067] leading-snug">
                      {item}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                      Perfekt gepflegt, gründlich desinfiziert und sofort einsatzbereit für Ihr Team.
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. PASSENDE LEISTUNGEN FÜR UNTERNEHMEN - SLEEK NO-BORDER/NO-CARD DIRECT ROW DESIGN */}
      <section id="leistungen-passend" className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-10">
            <span className="text-[#0052b4] font-bold text-xs uppercase tracking-widest block mb-2">PORTFOLIO</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#003067] tracking-tight font-sans">
              <span className="text-[#0052b4]">Leistungen</span> für Bürogebäude in <span className="text-[#0052b4]">Wien</span>
            </h2>
            <p className="text-slate-500 text-sm mt-2 font-semibold">
              Als inhabergeführter Wiener Meisterbetrieb bieten wir Ihnen perfekt verzahnte Einzelleistungen und Full-Service-Konzepte:
            </p>
          </div>

          {/* Clean, gorgeous minimalist list of rows - No borders around cards, highly streamlined B2B corporate */}
          <div className="max-w-4xl mx-auto divide-y divide-slate-200/60 border-t border-b border-slate-200/55">
            {services.map((svc, idx) => (
              <div key={idx} className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="max-w-xl">
                  <h3 className="text-base font-bold text-[#003067] font-sans leading-tight">{svc.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1 font-medium">{svc.desc}</p>
                </div>
                <Link 
                  href={svc.path} 
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-extrabold text-[#0052b4] hover:text-[#003067] transition-colors shrink-0 group font-sans uppercase tracking-wider"
                >
                  Mehr erfahren
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WARUM UNTERNEHMEN SIMBA FACILITY MANAGEMENT VERTRAUEN */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Award size={16} className="text-[#0052b4]" />
              <span className="text-[#0052b4] font-bold text-xs uppercase tracking-widest block font-sans">
                MEISTERGEPRÜFTE SERVICEQUALITÄT
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#003067] tracking-tight font-sans mb-5">
              Warum Wiener Unternehmen <span className="text-[#0052b4]">Simba FM</span> vertrauen
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-semibold max-w-3xl">
              Als einer der führenden meistergeprüften Reinigungsbetriebe in Wien stehen wir für erstklassige Handwerkerkompetenz, lückenlose Zuverlässigkeit und absolute Vertraulichkeit. Wir stellen Ihnen feste, eingespielte Stammkräfte und einen persönlichen Meister-Ansprechpartner zur Seite.
            </p>
          </div>

          {/* Clean checkpoints - NO CARDS */}
          <div className="max-w-4xl mx-auto border-t border-slate-100 pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {checkpointsSection6.map((checkpoint, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#0052b4]/5 text-[#0052b4] flex items-center justify-center shrink-0">
                    <Check size={11} className="stroke-[3]" />
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#003067] tracking-tight">
                    {checkpoint}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 9. FAQ ACCORDION SECTION - 2 COLUMN GRID LAYOUT WITH 8 EXPERT QUESTIONS */}
      <section id="faq" className="py-20 bg-slate-50 border-t border-b border-indigo-50/40 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-[#0052b4] font-bold text-xs uppercase tracking-widest block mb-3 font-sans">
              HÄUFIG GESTELLT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#003067] tracking-tight font-sans">
              Fragen zur <span className="text-[#0052b4]">Büroreinigung</span> in <span className="text-[#0052b4]">Wien</span>
            </h2>
          </div>

          {/* 2-Column Responsive Grid for FAQs */}
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            
            {/* Column Left (FAQs 1-4) */}
            <div className="space-y-4">
              {faqs.slice(0, 4).map((item, idx) => {
                const globalIdx = idx;
                const isOpen = activeFaq === globalIdx;
                return (
                  <div 
                    key={globalIdx} 
                    className="bg-white rounded-2xl border border-slate-100/85 shadow-[0_4px_16px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.02)] transition-all duration-300"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : globalIdx)}
                      className="w-full flex items-start gap-4 p-5 text-left cursor-pointer focus:outline-none bg-transparent border-none"
                    >
                      <span className="text-[#0052b4] font-bold text-sm font-sans shrink-0 pt-0.5 min-w-[20px]">
                        0{globalIdx + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm sm:text-base font-bold text-[#003067] font-sans leading-snug">
                            {item.q}
                          </h3>
                          <span className="text-[#0052b4] font-light text-lg leading-none shrink-0 select-none ml-2">
                            {isOpen ? "−" : "+"}
                          </span>
                        </div>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-slate-100 mt-4 pt-3">
                                <p className="text-slate-500 font-normal text-xs sm:text-sm leading-relaxed font-sans">
                                  {item.a}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Column Right (FAQs 5-8) */}
            <div className="space-y-4">
              {faqs.slice(4, 8).map((item, idx) => {
                const globalIdx = idx + 4;
                const isOpen = activeFaq === globalIdx;
                return (
                  <div 
                    key={globalIdx} 
                    className="bg-white rounded-2xl border border-slate-100/85 shadow-[0_4px_16px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.02)] transition-all duration-300"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : globalIdx)}
                      className="w-full flex items-start gap-4 p-5 text-left cursor-pointer focus:outline-none bg-transparent border-none"
                    >
                      <span className="text-[#0052b4] font-bold text-sm font-sans shrink-0 pt-0.5 min-w-[20px]">
                        0{globalIdx + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm sm:text-base font-bold text-[#003067] font-sans leading-snug">
                            {item.q}
                          </h3>
                          <span className="text-[#0052b4] font-light text-lg leading-none shrink-0 select-none ml-2">
                            {isOpen ? "−" : "+"}
                          </span>
                        </div>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-slate-100 mt-4 pt-3">
                                <p className="text-slate-500 font-normal text-xs sm:text-sm leading-relaxed font-sans">
                                  {item.a}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 10. CTA SECTION (Exactly like on other pages) */}
      <section id="kontakt" className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[#003067] leading-tight mb-6 tracking-tight font-sans">
                Kontakt <span className="text-[#0052b4]">Details</span>
              </h2>
              
              <div className="space-y-4 text-slate-600 text-base md:text-lg mb-8 max-w-md font-medium leading-relaxed">
                <p>
                  Sollten Sie noch weitere Fragen zu unseren Branchenkonzepten haben, stehen wir Ihnen jederzeit gerne zur Verfügung.
                </p>
                <p>
                  Sichern Sie sich meisterhafte Hygiene ohne Kompromisse. Binnen 24 Stunden erhalten Sie Ihr präzises Festpreisangebot in Wien.
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                {/* Geolocation info */}
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-blue-50/50 border border-slate-100 rounded-xl flex items-center justify-center shadow-sm">
                    <GoogleMapsPin size={22} />
                  </div>
                  <span className="text-base md:text-lg font-bold text-[#003067]">Herthergasse 37/15/1, 1120 Wien</span>
                </div>

                {/* Telephone */}
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center shadow-sm">
                    <Phone size={18} className="text-[#EA4335] fill-[#EA4335]" />
                  </div>
                  <a href="tel:06601470316" className="text-base md:text-lg font-bold text-[#003067] hover:text-[#004e9a] transition-colors">+43 660 1470 316</a>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center shadow-sm">
                    <Mail size={18} className="text-[#0078D4] fill-[#0078D4]/10" />
                  </div>
                  <a href="mailto:simbafacility@outlook.com" className="text-base md:text-lg font-bold text-[#003067] hover:text-[#004e9a] transition-colors break-all hidden sm:inline-block">simbafacility@outlook.com</a>
                  <a href="mailto:simbafacility@outlook.com" className="text-sm font-bold text-[#003067] hover:text-[#004e9a] transition-colors break-all sm:hidden inline-block">simbafacility@outlook.com</a>
                </div>
              </div>
            </div>

            {/* Right Contact Form Box */}
            <div className="max-w-xl mx-auto lg:mx-0 w-full bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.015)]">
              <div className="mb-6">
                 <h3 className="text-xl md:text-2xl font-bold text-[#003067] mb-2">Unverbindliche Anfrage senden</h3>
                 <p className="text-slate-500 text-xs md:text-sm">Kontaktieren Sie uns für ein meisterhaftes Angebot in Wien &amp; Umgebung.</p>
              </div>
              <ContactForm defaultSubject="Anfrage: Büro- &amp; Unternehmensreinigung Wien" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
