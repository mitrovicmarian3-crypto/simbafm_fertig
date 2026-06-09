import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Kontakt & Angebot anfordern | Simba FM Wien',
  description: 'Sie haben Fragen oder wünschen ein unverbindliches Angebot? Nehmen Sie einfach Kontakt mit unserem Meisterbetrieb auf – wir kümmern uns um Ihre Anliegen.',
  canonical: '/kontakt',
});

// A highly polished, custom SVG component styled in the Google Maps brand colors
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

export default function KontaktPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 pb-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-18 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(240,249,255,0.7)_0%,rgba(255,255,255,0)_50%)] z-0" />
        
        <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full text-center lg:text-left">
          <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#003067]/85 mb-5 font-bold block leading-none font-sans">
            KONTAKT
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-black text-[#003067] leading-[1.12] tracking-tight mb-4 font-sans">
            Wir kümmern uns <span className="text-[#0052b4] font-black">um Ihre Anliegen.</span>
          </h1>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl leading-relaxed mt-2 font-medium">
            Ihr Wiener Meisterbetrieb für erstklassige Reinigungslösungen. Nehmen Sie jetzt ganz einfach unverbindlich Kontakt mit uns auf.
          </p>
        </div>
      </section>

      {/* 3. CORPORATE CONTACT FORM SECTION */}
      <section className="py-16 lg:py-20 scroll-mt-24 border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Contact details */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-black text-[#003067] leading-tight mb-6 tracking-tight font-sans">
                <span className="text-[#0052b4]">Kontakt Details</span>
              </h2>
              
              <div className="space-y-4 text-slate-600 text-base md:text-lg mb-8 max-w-md font-medium leading-relaxed">
                <p>
                  Sollten Sie noch weitere Fragen haben, stehen wir Ihnen selbstverständlich zur Verfügung.
                </p>
                <p>
                  Innerhalb von 24 Stunden erhalten Sie eine Antwort.
                </p>
              </div>
              
              <div className="space-y-5 mb-10">
                {/* Address Line info */}
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-[#F0F7FF] border border-slate-100/80 rounded-xl flex items-center justify-center shadow-sm">
                    <GoogleMapsPin size={22} />
                  </div>
                  <span className="text-base md:text-lg font-bold text-[#003067]">Herthergasse 37/15/1, 1120 Wien</span>
                </div>

                {/* Phone Line info */}
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center shadow-sm">
                    <Phone size={18} className="text-[#EA4335] fill-[#EA4335]" />
                  </div>
                  <a href="tel:06601470316" className="text-base md:text-lg font-bold text-[#003067] hover:text-[#004e9a] transition-colors font-sans">+43 660 1470 316</a>
                </div>
                
                {/* Email Line info */}
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center shadow-sm">
                    <Mail size={18} className="text-[#0078D4] fill-[#0078D4]/10" />
                  </div>
                  <a href="mailto:simbafacility@outlook.com" className="text-base md:text-lg font-bold text-[#003067] hover:text-[#004e9a] transition-colors break-all font-sans">simbafacility@outlook.com</a>
                </div>

                {/* Clock Line info */}
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center shadow-sm">
                    <Clock size={18} className="text-amber-600" />
                  </div>
                  <span className="text-base md:text-lg font-bold text-[#003067] font-sans">Mo-Fr 08-18 Uhr, Sa 08-12 Uhr</span>
                </div>
              </div>

              {/* Visual Decorative Icon */}
              <div className="hidden lg:block relative w-full max-w-[420px] h-[180px] opacity-70">
                <svg viewBox="0 0 500 200" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="250" cy="100" r="80" stroke="#bae6fd" strokeWidth="0.75" opacity="0.25" />
                  <line x1="20" y1="170" x2="480" y2="170" stroke="#003067" strokeWidth="1" opacity="0.4" />
                  <path d="M150 170 C 200 120, 300 120, 350 170" stroke="#0052b4" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                </svg>
              </div>
            </div>

            {/* Right Side: Contact Form Wrapper (Matches Service Pages) */}
            <div className="max-w-xl mx-auto lg:mx-0 w-full bg-white border border-slate-200/60 rounded-none p-8 sm:p-10 text-left shadow-[0_8px_30px_rgb(0,0,0,0.015)]">
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-bold text-[#003067] mb-2 uppercase tracking-wide font-sans">Unverbindliche Anfrage</h3>
                <p className="text-slate-400 text-xs font-semibold leading-relaxed">Kontaktieren Sie uns für ein meisterhaftes Angebot in Wien &amp; Umgebung.</p>
              </div>
              <ContactForm defaultSubject="Allgemeine Anfrage" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
