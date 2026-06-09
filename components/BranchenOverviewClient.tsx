"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Heart, 
  Utensils, 
  Home, 
  Factory, 
  School, 
  Dumbbell, 
  Scale, 
  ShoppingBag, 
  Landmark, 
  Car, 
  Users, 
  Sparkles, 
  ArrowRight,
  Check,
  Phone,
  Mail,
  ChevronDown
} from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export function BranchenOverviewClient() {
  const [showAllBranchen, setShowAllBranchen] = useState(false);

  const topBranchen = [
    {
      title: "Büros & Unternehmen",
      desc: "Saubere Arbeitsumgebungen für mehr Produktivität, Wohlbefinden und einen professionellen Eindruck.",
      path: "/branchen/bueros-unternehmen-wien",
      img: "/images/branchen/buero.webp",
      icon: Building2,
      highlights: ["Eingespielte Stammteams", "Flexible Arbeitszeiten", "Schonende PC & IT Pflege"]
    },
    {
      title: "Arztpraxen & Ordinationen",
      desc: "Zertifizierte Desinfektion und höchste Hygiene für Patienten, Personal und sensible medizinische Bereiche.",
      path: "/branchen/ordinationsreinigung-wien",
      img: "/images/branchen/ordination.webp",
      icon: Heart,
      highlights: ["HACCP-Konformität", "Ärztekammer-Hygienestandards", "Gelistete Desinfektionsmittel"]
    },
    {
      title: "Hotels & Gastronomie",
      desc: "Perfekte Sauberkeit für unvergessliche Gästeerlebnisse, Restaurants und Wellnessbereiche.",
      path: "/branchen/hotelreinigung-wien",
      img: "/images/branchen/hotel.webp",
      icon: Utensils,
      highlights: ["Laufendes Housekeeping", "Flexibler Zimmerwechsel", "Gepflegte Hotelkleidung"]
    },
    {
      title: "Hausverwaltungen & Wohnanlagen",
      desc: "Regelmäßige Stiegenhausreinigung, Haustechnik-Checks und Gartenpflege für höchste Zufriedenheit.",
      path: "/branchen/hausbetreuung-wien",
      img: "/images/branchen/hausverwaltung.webp",
      icon: Home,
      highlights: ["Liegenschaftshaftung", "Stiegenhausnasspflege", "Umfassender Winterdienst"]
    }
  ];

  const weiteBranchen = [
    {
      title: "Industrie & Produktion",
      desc: "Professionelle Werkshallen- und Maschinenpflege auf höchstem Niveau für einen reibungslosen und sicheren Betriebsablauf.",
      path: "/branchen/sonderreinigung-wien",
      img: "/images/branchen/industrie.webp",
      icon: Factory,
      highlights: ["Anlagenpflege", "Hallenbodendienst", "Arbeitsschutz-konform"]
    },
    {
      title: "Schulen & Kindergärten",
      desc: "Hygienische, gesundheitlich unbedenkliche Sauberkeit mit ökologischen Produkten für die Kleinsten.",
      path: "/branchen/schul-kindergartenreinigung-wien",
      img: "/images/branchen/schule.webp",
      icon: School,
      highlights: ["Öko-Zertifizierte Reiniger", "Polizeilich geprüftes Personal", "Ferien-Grundreinigung"]
    },
    {
      title: "Öffentliche Einrichtungen",
      desc: "Zielgerichtete, budgetgetreue Hygiene für Ämter, Kulturstätten und Magistratsgebäude.",
      path: "/branchen/reinigung-oeffentliche-einrichtungen-wien",
      img: "/images/branchen/oeffentlice-einrichtung.webp",
      icon: Landmark,
      highlights: ["ANKÖ-gelisteter Partner", "Öko-Label Reinigungsmittel", "Erfüllung aller Auflagen"]
    },
    {
      title: "Veranstaltungsflächen & Eventreinigung",
      desc: "Sorgenfreie Event-Reinigung vor, während und nach Ihren Großerlebnissen und Feierlichkeiten.",
      path: "/branchen/eventreinigung-wien",
      img: "/images/branchen/veranstaltung.webp",
      icon: Sparkles,
      highlights: ["Express-Eventabwicklung", "Müllmanagement", "Meisterhafte Nachreinigung"]
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24">
      
      {/* 1. HERO HEADER WITH EMBEDDED TRANSPARENT CARTOON GRAPHIC */}
      <section className="relative overflow-hidden bg-white pt-16 pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(240,249,255,0.7)_0%,rgba(255,255,255,0)_50%)] z-0" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#0052b4] mb-5 font-bold block leading-none font-sans">
                UNSERE BRANCHENLÖSUNGEN
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-black text-[#003067] leading-[1.12] tracking-tight mb-5 font-sans">
                Spezifische Konzepte für <br className="hidden md:inline" />
                jede <span className="text-[#0052b4]">Anforderung &amp; Branche.</span>
              </h1>
              <p className="text-slate-600 text-sm md:text-base max-w-3xl leading-relaxed font-medium">
                Als staatlich geprüfter Wiener Meisterbetrieb verstehen wir, dass jede Branche eigene Hygieneregeln besitzt. Ob medizinische Ordination, sterile Bürowelt, lebhafter Kindergarten oder schwere Produktionshalle – wir liefern maßgenaue Meister-Qualität.
              </p>
            </div>

            {/* Right Transparent Cartoon Illustration - No frame, seamlessly integrated into background */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[450px] aspect-[4/3] md:aspect-[1.4] lg:aspect-[4/3]">
                <Image
                  src="/images/branchen/cartoon.png"
                  alt="Simba Branchen Illustration"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE BRANCHEN COLLAPSIBLE GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center md:text-left mb-12 lg:mb-16">
            <span className="text-[#0052b4] font-bold text-xs uppercase tracking-widest block mb-3">Spezialisierte Branchen</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#003067] tracking-tight font-sans">
              Unsere Branchenlösungen mit Detailkonzepten
            </h2>
            <p className="text-slate-500 text-sm mt-3 max-w-2xl font-medium leading-relaxed">
              Klicken Sie auf eine Branche, um detaillierte Informationen zu unseren Leistungen, Checklisten und meisterlichen Standards zu erhalten.
            </p>
          </div>

          {/* Primary Top 6 Branchen */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topBranchen.map((branche, idx) => {
              const IconComponent = branche.icon;
              return (
                <Link
                  href={branche.path}
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col group hover:border-[#0052b4]/20 transition-all duration-300 h-full animate-fade-in"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={branche.img}
                      alt={branche.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 to-transparent" />
                  </div>

                  <div className="relative px-6 pb-6 pt-8 flex flex-col flex-grow">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-md flex items-center justify-center text-[#003067] absolute -top-6 left-6 z-10 transition-transform group-hover:scale-105">
                      <IconComponent size={20} className="stroke-[2.2]" />
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-lg md:text-[19px] font-bold text-[#003067] mb-2 leading-snug group-hover:text-primary transition-colors">
                        {branche.title}
                      </h3>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-5">
                        {branche.desc}
                      </p>

                      <ul className="mb-6 space-y-2 border-t border-slate-55 pt-4">
                        {branche.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                            <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                              <Check size={10} className="stroke-[3]" />
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-primary font-bold text-[11px] uppercase tracking-wider">
                      <span>Leistungsdetails ansehen</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Collapsible / Expanding Additional Branchen (Revealed smoothly under primary section) */}
          <AnimatePresence>
            {showAllBranchen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                  {weiteBranchen.map((branche, idx) => {
                    const IconComponent = branche.icon;
                    return (
                      <Link
                        href={branche.path}
                        key={idx}
                        className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col group hover:border-[#0052b4]/20 transition-all duration-300 h-full"
                      >
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={branche.img}
                            alt={branche.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 380px"
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 to-transparent" />
                        </div>

                        <div className="relative px-6 pb-6 pt-8 flex flex-col flex-grow">
                          <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-md flex items-center justify-center text-[#003067] absolute -top-6 left-6 z-10 transition-transform group-hover:scale-105">
                            <IconComponent size={20} className="stroke-[2.2]" />
                          </div>

                          <div className="flex-grow">
                            <h3 className="text-lg md:text-[19px] font-bold text-[#003067] mb-2 leading-snug group-hover:text-primary transition-colors">
                              {branche.title}
                            </h3>
                            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-5">
                              {branche.desc}
                            </p>

                            <ul className="mb-6 space-y-2 border-t border-slate-55 pt-4">
                              {branche.highlights.map((h, hIdx) => (
                                <li key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                                  <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                    <Check size={10} className="stroke-[3]" />
                                  </span>
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-primary font-bold text-[11px] uppercase tracking-wider">
                            <span>Leistungsdetails ansehen</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Button for the Collapsible/Fanning Accordion Effect */}
          <div className="mt-16 text-center">
            <button 
              onClick={() => setShowAllBranchen(!showAllBranchen)}
              className="inline-flex items-center gap-2 bg-[#003067] hover:bg-[#0052b4] text-white px-10 py-5 rounded-2xl font-bold text-sm tracking-wide transition-all shadow-md cursor-pointer group"
            >
              {showAllBranchen ? "Weniger Branchen anzeigen" : "Alle Branchen anzeigen"}
              <ChevronDown size={16} className={`transition-transform duration-300 ${showAllBranchen ? 'rotate-180' : ''}`} />
            </button>
          </div>

        </div>
      </section>

      {/* 3. CONTACT FORM ELEMENT - White Background & Deleted Thick Bar */}
      <section id="kontakt" className="py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[#003067] leading-tight mb-6 tracking-tight">
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
                    <svg viewBox="0 0 24 24" width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 inline-block">
                      <ellipse cx="12" cy="21" rx="4" ry="1.5" fill="#A6A6A6" opacity="0.3" />
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
                      <circle cx="12" cy="9" r="3.5" fill="#FFFFFF" />
                    </svg>
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
                  <a href="mailto:simbafacility@outlook.com" className="text-base md:text-lg font-bold text-[#003067] hover:text-[#004e9a] transition-colors break-all">simbafacility@outlook.com</a>
                </div>
              </div>
            </div>

            {/* Right Contact Form Box - clean white background with no black thick border */}
            <div className="max-w-xl mx-auto lg:mx-0 w-full bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.015)]">
              <div className="mb-6">
                 <h3 className="text-xl md:text-2xl font-bold text-[#003067] mb-2">Unverbindliche Anfrage senden</h3>
                 <p className="text-slate-500 text-xs md:text-sm">Kontaktieren Sie uns für ein meisterhaftes Angebot in Wien &amp; Umgebung.</p>
              </div>
              <ContactForm defaultSubject="Allgemeine Branchen-Anfrage: Übersicht" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
