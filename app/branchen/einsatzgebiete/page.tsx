import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle, Navigation, Award, Sparkles, Building2, HelpCircle } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Einsatzgebiete | Meister-Reinigung in Wien & Umland | Simba FM',
  description: 'In welchen Bezirken ist Simba Facility Management aktiv? Entdecken Sie unsere lückenlose Abdeckung aller 23 Wiener Gemeindebezirke sowie ausgewählter Umlandgemeinden in NÖ.',
  canonical: '/branchen/einsatzgebiete',
});

// Detailed Vienna districts map for supreme SEO & user value
const viennaDistricts = [
  { zip: "1010", name: "Innere Stadt" },
  { zip: "1020", name: "Leopoldstadt" },
  { zip: "1030", name: "Landstraße" },
  { zip: "1040", name: "Wieden" },
  { zip: "1050", name: "Margareten" },
  { zip: "1060", name: "Mariahilf" },
  { zip: "1070", name: "Neubau" },
  { zip: "1080", name: "Josefstadt" },
  { zip: "1090", name: "Alsergrund" },
  { zip: "1100", name: "Favoriten" },
  { zip: "1110", name: "Simmering" },
  { zip: "1120", name: "Meidling" },
  { zip: "1130", name: "Hietzing" },
  { zip: "1140", name: "Penzing" },
  { zip: "1150", name: "Rudolfsheim-Fünfhaus" },
  { zip: "1160", name: "Ottakring" },
  { zip: "1170", name: "Hernals" },
  { zip: "1180", name: "Währing" },
  { zip: "1190", name: "Döbling" },
  { zip: "1200", name: "Brigittenau" },
  { zip: "1210", name: "Floridsdorf" },
  { zip: "1220", name: "Donaustadt" },
  { zip: "1230", name: "Liesing" }
];

// Additional locations requested by the business model
const lowerAustriaLocations = [
  { name: "Schwechat", code: "NÖ-Ost" },
  { name: "Gumpoldskirchen", code: "Mödling" },
  { name: "Baden", code: "Baden" },
  { name: "Wiener Neudorf", code: "NÖ-Süd" },
  { name: "Strebersdorf / Umland", code: "Korneuburg" },
  { name: "Hagenbrunn", code: "Korneuburg" },
  { name: "Kottingbrunn", code: "Baden" }
];

// A highly polished, custom SVG component styled in Google Maps brand colors
const GoogleMapsPin = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 inline-block">
    <ellipse cx="12" cy="21" rx="4" ry="1.5" fill="#A6A6A6" opacity="0.3" />
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
    <path d="M12 2C10.05 2 8.35 2.8 7.15 4.1L12 9V2z" fill="#4285F4" />
    <path d="M7.15 4.1C5.8 5.3 5 7.05 5 9c0 1.95.82 3.8 2.15 5.1L12 9 7.15 4.1z" fill="#34A853" />
    <path d="M12 22s7-7.75 7-13c0-1.95-.8-3.7-2.15-4.9L12 9v13z" fill="#FBBC05" />
    <circle cx="12" cy="9" r="3.5" fill="#FFFFFF" />
    <circle cx="12" cy="9" r="1.5" fill="#4285F4" />
  </svg>
);

export default function EinsatzgebietePage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 pb-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-18 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(240,249,255,0.7)_0%,rgba(255,255,255,0)_50%)] z-0" />
        
        <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full text-center lg:text-left">
          <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#003067]/85 mb-5 font-bold block leading-none font-sans">
            EINSATZGEBIETE & REGIONEN
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-black text-[#003067] leading-[1.12] tracking-tight mb-4 font-sans">
            In ganz Wien <span className="text-[#0052b4] font-black">schnell vor Ort.</span>
          </h1>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl leading-relaxed mt-2 font-medium">
            Als inhabergeführter Wiener Meisterbetrieb decken wir das gesamte Wiener Stadtgebiet sowie ausgewählte Bezirke in Niederösterreich lückenlos ab. Erfahren Sie hier, wo wir für Ihren perfekten Werterhalt sorgen.
          </p>
        </div>
      </section>

      {/* 2. REGIONAL ADVANTAGES */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 border border-slate-100 rounded-lg flex gap-4">
              <div className="p-3 bg-[#E0F2FE] rounded-lg shrink-0 h-12 w-12 flex items-center justify-center">
                <Navigation className="text-[#0052b4] h-6 w-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-[#003067] text-base mb-2 font-sans">Keine Anfahrtskosten</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                  Innerhalb aller 23 Wiener Gemeindebezirke berechnen wir Ihnen bei regelmäßigen Touren keinerlei Fahrt- oder Anfahrtskosten.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 border border-slate-100 rounded-lg flex gap-4">
              <div className="p-3 bg-red-50 rounded-lg shrink-0 h-12 w-12 flex items-center justify-center">
                <Clock className="text-[#EA4335] h-6 w-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-[#003067] text-base mb-2 font-sans">Express-Bereitschaft</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                  Kurze, optimal eingeteilte Tourenpläne sichern Ihnen im Notfall eine blitzschnelle Reaktion unserer Objektaufseher in Ihrer Nähe.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 border border-slate-100 rounded-lg flex gap-4">
              <div className="p-3 bg-amber-50 rounded-lg shrink-0 h-12 w-12 flex items-center justify-center">
                <Award className="text-amber-600 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-[#003067] text-base mb-2 font-sans">Vor-Ort-Qualitätssicherung</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                  Unsere geprüften Meister koordinieren die Reinigungskräfte dezentral und direkt an jedem Wiener oder NÖ Standort vor Ort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VIENNA DISTRICTS GRID (ORIENTED TO KONTAKT PAGE WITH MORE CRAFT) */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center lg:text-left mb-12">
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#0052b4] mb-3 font-bold block leading-none font-sans">
              WIENER GEMEINDEBEZIRKE
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003067] tracking-tight font-sans">
              Von 1010 bis 1230 Wien
            </h2>
            <p className="text-slate-500 text-sm mt-3 max-w-xl font-medium">
              Wir reinigen jede Adresse im Wiener Stadtgebiet. Jährlich sichern wir Hunderte Gewerbeimmobilien, Arztpraxen, Ordinationen und Stiegenhäuser in allen 23 Bezirken.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {viennaDistricts.map((district) => (
              <div 
                key={district.zip} 
                className="bg-white border border-slate-200/80 p-4 rounded-xs hover:border-[#0052b4] hover:shadow-sm transition-all duration-305 group flex flex-col items-center justify-center text-center cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <span className="font-black text-lg text-[#003067] group-hover:text-[#0052b4] transition-colors font-sans mb-1">
                  {district.zip}
                </span>
                <h3 className="font-bold text-xs sm:text-sm text-slate-800 font-sans">
                  {district.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LOWER AUSTRIA / NIEDERÖSTERREICH (VIENNA OUTSKIRTS) */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center lg:text-left mb-12">
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-cyan-600 mb-3 font-bold block leading-none font-sans">
              WIENER UMLAND & NIEDERÖSTERREICH
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003067] tracking-tight font-sans">
              Liegenschaftspflege in NÖ-Süd, Ost & Nord
            </h2>
            <p className="text-slate-500 text-sm mt-3 max-w-xl font-medium">
              Zusätzlich zum Wiener Stadtgebiet betreuen wir Partnerbetriebe, gewerbliche Stützpunkte und private Auftraggeber in den angrenzenden niederösterreichischen Wachstumsregionen.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {lowerAustriaLocations.map((loc) => (
              <div 
                key={loc.name} 
                className="bg-white border border-slate-200/80 p-4 rounded-xs hover:border-cyan-600 hover:shadow-sm transition-all duration-300 flex flex-col items-center justify-center text-center group"
              >
                <h3 className="font-bold text-xs sm:text-sm text-slate-800 font-sans mb-1 group-hover:text-cyan-600 transition-colors">
                  {loc.name}
                </h3>
                <span className="bg-cyan-50 text-[9px] text-[#0891b2] px-2 py-0.5 rounded-full font-black uppercase tracking-wider">
                  {loc.code}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REGIONAL FAQS BASED ON REAL INTERACTION */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#0052b4] mb-3 font-bold block leading-none font-sans">
              FRAGEN & ANTWORTEN
            </span>
            <h2 className="text-3xl font-black text-[#003067] tracking-tight font-sans">
              Häufige Fragen zu den Gebieten
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 border border-slate-200/60 rounded-xs">
              <h3 className="font-extrabold text-[#003067] text-sm md:text-base mb-2 flex items-start gap-2.5 font-sans">
                <HelpCircle size={18} className="text-[#0052b4] shrink-0 mt-0.5" />
                <span>Fallen für Einsätze im 23. Bezirk oder entlegenen Wiener Gebieten Anfahrtskosten an?</span>
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold pl-7">
                Nein. Für das gesamte offizielle Wiener Stadtgebiet (Bezirk 1 bis 23) stellen wir Ihnen bei fortlaufenden Dienstleistungen wie der Unterhaltsreinigung ordnungsgemäß keinerlei Fahrtkosten oder Anfahrtsspesen in Rechnung.
              </p>
            </div>

            <div className="bg-white p-6 border border-slate-200/60 rounded-xs">
              <h3 className="font-extrabold text-[#003067] text-sm md:text-base mb-2 flex items-start gap-2.5 font-sans">
                <HelpCircle size={18} className="text-[#0052b4] shrink-0 mt-0.5" />
                <span>Werden auch Gemeinden außerhalb der aufgelisteten Umlandgebiete in NÖ gereinigt?</span>
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold pl-7">
                Abhängig vom genauen Leistungsumfang (zum Beispiel bei größeren Sonderreinigungen, Baureinigungen oder Industriegebäuden) übernehmen wir auch bundesländerübergreifend Aufträge im Umkreis. Kontaktieren Sie unser Büro für eine direkte, meisterprüfte Einschätzung.
              </p>
            </div>

            <div className="bg-white p-6 border border-slate-200/60 rounded-xs">
              <h3 className="font-extrabold text-[#003067] text-sm md:text-base mb-2 flex items-start gap-2.5 font-sans">
                <HelpCircle size={18} className="text-[#0052b4] shrink-0 mt-0.5" />
                <span>Wie steuern und kontrollieren Sie die Qualität in so vielen Bezirken?</span>
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold pl-7">
                Unsere Qualitätssicherung beruht auf territorialen Objektaufsehern. Jedes Objekt wird festen Reinigungskräften zugeteilt, die von dem für dieses Wiener Gebiet eingeteilten Objektleiter oder Meister dezentral per unangekündigter Kontrolle auditiert werden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONVERSION ANFRAGE SECTION (ORIENTED TO KONTAKT PAGE WRAPPER) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Regional direct contact details */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-black text-[#003067] leading-tight mb-6 tracking-tight font-sans">
                Dienstleistung <span className="text-[#0052b4]">anfragen</span>
              </h2>
              
              <div className="space-y-4 text-slate-600 text-base md:text-lg mb-8 max-w-md font-medium leading-relaxed">
                <p>
                  Sichern Sie sich ein unverbindliches Meisterangebot für Ihren Standort in Wien oder Niederösterreich.
                </p>
                <p>
                  Unser Kalkulationsteam analysiert Ihre Flächen und übersendet Ihnen innerhalb von 24 Stunden ein unverbindliches Pauschalangebot.
                </p>
              </div>
              
              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-[#F0F7FF] border border-slate-100/80 rounded-xl flex items-center justify-center shadow-sm">
                    <GoogleMapsPin size={22} />
                  </div>
                  <span className="text-base md:text-lg font-bold text-[#003067]">Herthergasse 37/15/1, 1120 Wien</span>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center shadow-sm">
                    <Phone size={18} className="text-[#EA4335] fill-[#EA4335]" />
                  </div>
                  <a href="tel:06601470316" className="text-base md:text-lg font-bold text-[#003067] hover:text-[#004e9a] transition-colors font-sans">+43 660 1470 316</a>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center shadow-sm">
                    <Mail size={18} className="text-[#0078D4] fill-[#0078D4]/10" />
                  </div>
                  <a href="mailto:simbafacility@outlook.com" className="text-base md:text-lg font-bold text-[#003067] hover:text-[#004e9a] transition-colors break-all font-sans">simbafacility@outlook.com</a>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center shadow-sm">
                    <Clock size={18} className="text-amber-600" />
                  </div>
                  <span className="text-base md:text-lg font-bold text-[#003067] font-sans">Mo-Fr 08-18 Uhr, Sa 08-12 Uhr</span>
                </div>
              </div>

              {/* Decorative SVG */}
              <div className="hidden lg:block relative w-full max-w-[420px] h-[180px] opacity-70">
                <svg viewBox="0 0 500 200" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="250" cy="100" r="80" stroke="#bae6fd" strokeWidth="0.75" opacity="0.25" />
                  <line x1="20" y1="170" x2="480" y2="170" stroke="#003067" strokeWidth="1" opacity="0.4" />
                  <path d="M150 170 C 200 120, 300 120, 350 170" stroke="#0052b4" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                </svg>
              </div>
            </div>

            {/* Right Side: Fast Inquiry Box */}
            <div className="max-w-xl mx-auto lg:mx-0 w-full bg-white border border-slate-200/60 rounded-none p-8 sm:p-10 text-left shadow-[0_8px_30px_rgb(0,0,0,0.015)]">
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-bold text-[#003067] mb-2 uppercase tracking-wide font-sans">Ortstarif-Angebot</h3>
                <p className="text-slate-400 text-xs font-semibold leading-relaxed">Teilen Sie uns Ihren Einsatzort mit. Wir melden uns umgehend bei Ihnen.</p>
              </div>
              <ContactForm defaultSubject="Inquiry about Service Area" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
