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
  Award,
  Clock,
  ShieldPlus,
  CheckCircle
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

export function HighlightTitle({ text }: { text: string }) {
  if (!text) return null;
  const keywords = [
    "Gesundheitszentren & Ordinationen", "Hotels & Gastronomien", "Arztpraxen & Ordinationen",
    "Hotels & Gastronomie", "Hotelreinigung", "Ordinationsreinigung", "Gebäudereinigung",
    "Wien", "Simba FM", "Meisterklasse", "Praxen & Kliniken", 
    "Schulen & Kindergärten", "Hotels", "Fitnessstudios", "Gastronomie", "Baustellen",
    "Hausbetreuung", "Unterhaltsreinigung", "Büroreinigung", "Fensterreinigung", 
    "Sonderreinigung", "Winterdienst", "Leistungen", "Hygiene", "Ablauf", "Fragen"
  ];
  
  for (const kw of keywords) {
    const r = new RegExp(`\\b(${kw})\\b`, 'i');
    if (r.test(text)) {
      const parts = text.split(r);
      return (
        <>
          {parts.map((part, index) => {
            const isMatch = part.toLowerCase() === kw.toLowerCase();
            return isMatch ? (
              <span key={index} className="text-[#0052b4]">{part}</span>
            ) : (
              part
            );
          })}
        </>
      );
    }
  }

  const words = text.split(" ");
  if (words.length <= 2) {
    return <span className="text-[#0052b4]">{text}</span>;
  }
  
  const mainPart = words.slice(0, -2).join(" ");
  const highlightPart = words.slice(-2).join(" ");
  return (
    <>
      {mainPart}{" "}
      <span className="text-[#0052b4]">{highlightPart}</span>
    </>
  );
}

export interface BenefitItem {
  title: string;
  desc: string;
}

export interface PerformanceItem {
  title: string;
  desc: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface BranchePageData {
  slug: string;
  title: string;
  subtitle: string;
  kicker?: string;
  heroImage: string;
  heroImagePositionClass?: string;
  benefits: BenefitItem[];
  leistungenTitle?: string;
  leistungenDesc?: string;
  leistungenList: string[];
  uspTitle?: string;
  usps: PerformanceItem[];
  faqs: FAQItem[];
  industryReinigung: string;
  systematicCleanTitle?: string;
  trustHeading?: string;
  portfolioKicker?: string;
  challengesKicker?: string;
}

interface SlugSpecificContent {
  keyBenefits: string[];
  challengesIntro: string;
  challenges: { nr: string; title: string; desc: string }[];
  areasIntro: string;
  areas: { title: string; items: string[] }[];
  aspects: { title: string; desc: string }[];
  results: string[];
  customMehrwertTitle?: string;
  customChallengesTitle?: string;
  customAreasTitle?: string;
  customAspectsTitle?: string;
  customResultsTitle?: string;
  customPortfolioTitle?: string;
  customTrustTitle?: string;
}

// Master crafted mapping configurations for each industry
const slugContentMap: Record<string, SlugSpecificContent> = {
  "ordinationsreinigung-wien": {
    keyBenefits: [
      "Zertifizierte Sterilität",
      "Patientenvertrauen",
      "Zuverlässiger Infektionsschutz",
      "HACCP-geschultes Stammpersonal",
      "Lückenlose Dokumentation"
    ],
    challengesIntro: "Ein modernes Gesundheitszentrum verlangt kompromisslose Sterilität. Wir begegnen diesen Hygieneherausforderungen mit zertifizierter Desinfektion:",
    challenges: [
      { nr: "01", title: "Behandlungsräume", desc: "Wiederkehrende Wischdesinfektion aller Behandlungsstühle und medizintechnischer Oberflächen nach HACCP-Richtlinien." },
      { nr: "02", title: "Wartezimmer", desc: "Eine hohe Viren- und Bakterienbelastung verlangt nach kontinuierlicher Raum- und Griffedesinfektion zum Schutz Ihrer Patienten." },
      { nr: "03", title: "Sanitärbereiche", desc: "Nasszellen- und Toilettendesinfektion zur sofortigen Keimminderung und Unterbrechung aller Infektionswege." },
      { nr: "04", title: "Laborbereiche", desc: "Äußerste Sorgfalt und Disziplin bei der Entsorgung und keimfreien Reinigung kontaminierter Flächen nach ÖNORM." }
    ],
    areasIntro: "Ein meisterlich abgestimmtes Hygieneverzeichnis nach den Richtlinien der Ärztekammer Wien sorgt für lückenlose Keimfreiheit:",
    areas: [
      { title: "Behandlungs- & Therapieräume", items: ["Therapieliegen & Patientenstühle desinfizieren", "Medizinische Apparateflächen abwischen", "Schutzrelevante Wischdesinfektionen", "Wandpaneele & Glastrennwände"] },
      { title: "Wartezimmer & Rezeption", items: ["Eingangstresen & Anmeldetische", "Wartezimmer-Stühle & Zeitschriftenregale", "Büroarbeitsflächen & Telefonanlagen", "Staubfreie Beleuchtungskörper"] },
      { title: "Sanitäranlagen", items: ["Waschbecken, Fliesen & Armaturen", "Spiegel & Glasflächen streifenfrei", "Toilettenbecken & Urinalschnitt", "Verbrauchsmaterialen & Händedesinfektion auffüllen"] }
    ],
    aspects: [
      { title: "HACCP- & Hygiene-Kompetenz", desc: "Wir verpflichten uns strengsten gesetzlichen Richtlinien nach aktuellen EU-Vorgaben für maximale Patientensicherheit." },
      { title: "VAH-gelistete Desinfektion", desc: "Wir nutzen ausschließlich geprüfte, VAH-gelistete Wirkstoffe, die maximale Keimreduktion mit bester Materialverträglichkeit verbinden." },
      { title: "Lückenloses Audit-Protokoll", desc: "Sämtliche Intervalle und Desinfektionsmaßnahmen werden digital oder handschriftlich für Ihr QM-System erfasst." },
      { title: "Verschwiegenes Stammpersonal", desc: "Unsere Kräfte arbeiten mit besonnenem Respekt und sind vertraglich auf die strikte medizinische Schweigepflicht verpflichtet." }
    ],
    results: [
      "Zertifizierte Behandlungssterilität nach Ärztekammer-Vorgaben",
      "Keimfreie, beruhigende Wartebereichs-Atmosphäre",
      "QM-gerechter und gesetzlich nachvollziehbarer Hygienestatus",
      "Effektiver Infektionsschutz für Patienten und Praxispersonal",
      "Sicheres Entsorgungsnetz für sensible Praxisabfälle nach ÖNORM",
      "Konsequent glänzender, vertrauenserweckender erster Eindruck"
    ],
    customMehrwertTitle: "Erstklassige Praxishygiene als Säule des Patientenvertrauens",
    customChallengesTitle: "Strengste Hygieneauflagen im medizinischen Behandlungsalltag",
    customAreasTitle: "Systematische Desinfektion sensibler Behandlungs- und Ordinationsräume",
    customAspectsTitle: "Klinische Reinheitsfaktoren für Ihre nächste Praxisbegehung",
    customResultsTitle: "Das messbare Ergebnis einer zertifizierten Desinfektionspflege",
    customPortfolioTitle: "Hygienekonzepte und Services für Wiener Ordinationen",
    customTrustTitle: "Warum führende Wiener Arztpraxen auf unsere Kompetenz bauen"
  },
  "hotelreinigung-wien": {
    keyBenefits: [
      "Makelloses Willkommen",
      "Bettenhygiene der Extraklasse",
      "Liebe zum kleinsten Detail",
      "Hocheffizientes Timing",
      "Flexible Belegungssteuerung"
    ],
    challengesIntro: "Der erstklassige Zustand der Zimmer entscheidet direkt über Ihre Gästebewertungen. Wir sichern diesen Standard im dichten Zimmerwechsel:",
    challenges: [
      { nr: "01", title: "Pünktliches Check-In", desc: "Die genaue Bereitstellung gereinigter Zimmer zwischen Abreise- und Ankunftszeiten verlangt straff organisierte Housekeeping-Prozesse." },
      { nr: "02", title: "Badezimmer-Brillanz", desc: "Restlose Removal von Kalk, Seifenrückständen und Kosmetikrückständen an Edelstahlarmaturen und Fliegentrakten." },
      { nr: "03", title: "Lobbys & Allgemeinflächen", desc: "Empfangshallen, Aufzüge und Flure müssen bei kontinuierlichem Gästebetrieb jederzeit staubfrei und hochglänzend strotzen." },
      { nr: "04", title: "Wellness & Spa-Areale", desc: "Konsequente Wischpflege und keimtötende Fleckenbehandlung in Nass- und Saunazone zur Pilz- und Rutschprävention." }
    ],
    areasIntro: "Unser hocheffizientes Housekeeping-System verknüpft makellose Sauberkeit mit geräuschlosen und unaufdringlichen Arbeitswegen:",
    areas: [
      { title: "Gästezimmer & Apartments", items: ["Flawless Bettenservice & glatter Lakenwechsel", "Staub-, Fingerabdruck- & Oberflächenreinigung", "Müllabtransport & hygienische Durchlüftung", "Faserreinigung auf Teppichen & Böden"] },
      { title: "Allgemeinbereiche & Lobbys", items: ["Rezeptionstresen, Sitzmöbel & Beistelltische", "Aufzugsinnenreinigung & Spiegelpolitur", "Eingangstüren & Frontglas-Schlierenbeseitigung", "Dekorationen & Leuchtmittel entstauben"] },
      { title: "Gästebadezimmer", items: ["Duschen, Badewannen & Duschwände entkalken", "Armaturen & Edelstahl auf Hochglanz polieren", "Toilettenbecken tiefenhygienisch wischen", "Bodenplatten saugen & feucht nachpflegen"] }
    ],
    aspects: [
      { title: "Umfassender Zimmer-Check", desc: "Vor der digitalen Meldung an Ihre Rezeption durchläuft jedes Gästezimmer unsere meisterhafte Qualitätsprüfung." },
      { title: "Einheitliches Auftreten", desc: "Unser Zimmermädchen- und Housekeeper-Stamm arbeitet diskret, freundlich und in gepflegter Hotel-Dienstkleidung." },
      { title: "Belegungs-Anpassungen", desc: "Wir passen die Teamstärken unkompliziert an Ihre saisonale Auslastung und Buchungsschwankungen an." },
      { title: "Ehrlichkeit & Diskretion", desc: "Unsere Kräfte sind fest angestellt, polizeilich geprüft und speziell auf den Schutz der Gästeprivatsphäre geschult." }
    ],
    results: [
      "Makellos staubfreie, perfekt hergerichtete Gästezimmer",
      "Erfrischender Duft und einladender Eindruck in der Lobby",
      "Kalkfreie Badezimmer-Oasen mit Hochglanz-Armaturen",
      "Sichere Einhaltung aller Check-In-Zeitpläne",
      "Herausragende Sternebewertungen für die Sauberkeit Ihres Hauses",
      "Geräuschloses, für Gäste unsichtbares Arbeiten im Hintergrund"
    ],
    customMehrwertTitle: "Makellose Sauberkeit als Schlüssel zu erstklassigen Gästebewertungen",
    customChallengesTitle: "Effiziente Housekeeping-Logistik im dichten Belegungswechsel",
    customAreasTitle: "Ganzheitliche Zimmer- und Wellnesspflege auf Premium-Niveau",
    customAspectsTitle: "Zentrale Qualitätsfaktoren für glänzenden Gästekomfort",
    customResultsTitle: "Sichtbar gehobener Standard für Ihr Beherbergungs-Erlebnis",
    customPortfolioTitle: "Housekeeping- und Reinigungsservices für die Wiener Hotellerie",
    customTrustTitle: "Premium-Qualität, der anspruchsvolle Hotels in Wien vertrauen"
  },
  "sonderreinigung-wien": {
    keyBenefits: [
      "Zertifizierte Industrieverfahren",
      "Ausgebildete Werksteams",
      "Werterhalt der Anlagen",
      "Moderner Maschinenpark",
      "Flexibles Timing"
    ],
    challengesIntro: "Hartnäckiger Schmutz, Altöle, Schmierstoffe und Metallspäne in Produktionsbetrieben verlangen nach maßgeschneiderten Spezialreinigungskonzepten:",
    challenges: [
      { nr: "01", title: "Maschinenausfall-Prävention", desc: "Staub- und Ölablagerungen an Ihren Sensoren und Führungen können teure Stillstände auslösen." },
      { nr: "02", title: "Rutschgefahr auf Böden", desc: "Schmierfilme und Fette auf Werkshallenböden gefährden die Sicherheit Ihrer Mitarbeiter." },
      { nr: "03", title: "Hallenstaub in der Höhe", desc: "Feinststaub lagert sich an Deckenrohren, Trägern und Lüftungskanälen ab und rieselt unkontrolliert hinab." },
      { nr: "04", title: "Stillstandsrevisions-Druck", desc: "Wartungsfenster sind knapp bemessen. Eine termingetreue und schnelle Taktung ist unverzichtbar." }
    ],
    areasIntro: "Unsere Spezialkräfte sichern eine saubere und reibungslose Produktionsumgebung:",
    areas: [
      { title: "Produktions- & Werkshallen", items: ["Bodenreinigung mit schweren Aufsitz-Kehrmaschinen", "Beseitigung von Schmierstoffen, Ölen & Fetten", "Reinigung von Transportwegen & Fahrspuren"] },
      { title: "Maschinen- & Anlagenpflege", items: ["Spezifische Gehäuse- & Gestellabwischung", "Entfernung von Spänen, Abrieben & Rückständen", "Pflege von Fertigungslinien & Fließbändern"] },
      { title: "Hochbau- & Deckenentstaubung", items: ["Reinigung von Deckenträgern, Kabelbahnen & Lüftungsrohren", "Glastrennwände & Kranbahnpflege", "Industrie-Bauendreinigung bei Erweiterungen"] }
    ],
    aspects: [
      { title: "Sicherheits-Werksteams", desc: "Erfahrene, schutzgeschulte Industriereinigungskräfte unter permanenter meisterhafter Objektleitung." },
      { title: "Minimale Betriebsunterbrechung", desc: "Revisionsarbeiten und Grundreinigungen legen wir bevorzugt in Schichtpausen, an Wochenenden oder nachts." },
      { title: "Schwerstarbeitstaugliche Geräte", desc: "Einsatz von schweren Scheuersaugmaschinen, Industriestaubsaugern und tensidfreien Spezialprodukten." },
      { title: "Gesetzeskonforme Entsorgung", desc: "Fachgerechte und umweltzertifizierte Abscheidung und Entsorgung von Industrie-Restschadstoffen." }
    ],
    results: [
      "Ungestörte Produktionsprozesse durch planmäßige Anlageninspektionen und -reinigungen",
      "Sichere Arbeitsbedingungen mit rückstandslos entfetteten Hallenböden und Laufwegen",
      "Optimierte Lebensdauer Ihrer kostspieligen Produktions- und Bestückungsanlagen",
      "Verhinderung von Staubablagerungen auf sensiblen elektronischen Bedienelementen",
      "Einhaltung aller gesetzlichen Sicherheits- und Umweltschutzstandards",
      "Preissicher kalkulierte Reinigungsplanung ohne Produktionsausfälle"
    ],
    customMehrwertTitle: "Nachhaltiger Substanzschutz durch meisterhafte Werkspflege",
    customChallengesTitle: "Spezifische Anforderungen und arbeitstechnische Sicherheitsvorgaben meistern",
    customAreasTitle: "Gründliche Maschinen- und Hallenreinigung für höchste Funktionalität",
    customAspectsTitle: "Arbeitsschutz-Richtlinien und schwerer Maschineneinsatz im Werk",
    customResultsTitle: "Makellose Sauberkeit für einen sicheren und produktiven Industriebetrieb",
    customPortfolioTitle: "Industriereinigungen und Sonderdienste im Wiener Ballungsraum",
    customTrustTitle: "Warum anspruchsvolle Industriebetriebe uns ihr Werk anvertrauen"
  },
  "schul-kindergartenreinigung-wien": {
    keyBenefits: [
      "Umfassender Infektionsschutz",
      "Schadstofffreie Öko-Produkte",
      "Verlässliche Fleckenentfernung",
      "Gesundes Lernumfeld",
      "Polizeilich geprüfte Teams"
    ],
    challengesIntro: "Gemeinschaftseinrichtungen verlangen maximale Keimbarrieren bei gleichzeitig absoluter Chemikalienfreiheit. Wir lösen diesen Spagat meisterhaft:",
    challenges: [
      { nr: "01", title: "Klassenzimmer", desc: "Rasche Staub- und Keimentwicklung durch hohe Schülerdichte an Tischen, Stühlen und interaktiven Arbeitsflächen." },
      { nr: "02", title: "Bodenbündiges Spielen", desc: "Krabbelkinder berühren Böden direkt. Das erfordert schadstofffreie Naturreiniger ohne giftige Dämpfe." },
      { nr: "03", title: "Sanitäranlagen", desc: "Hochfrequentierte Waschtische und WCs sind Hotspots. Gezielte Wischdesinfektion durchbricht Infektionsketten." },
      { nr: "04", title: "HACCP in Speiseräumen", desc: "Mensen und Teeküchen verlangen lückenbefreite Hygienepläne zur Einhaltung strenger Lebensmittelsicherheit." }
    ],
    areasIntro: "Kombination aus biologisch unbedenklichen Reinigungsmitteln und validiertem Infektionsschutz für unsere Kleinsten:",
    areas: [
      { title: "Klassen- & Gruppenräume", items: ["Schülertische, Spieltische & Kindersessel feucht wischen", "Bodenbeläge (Linoleum, Kautschuk) biologisch reinigen", "Spieleecken & Teppiche saugen und keimmindern", "Müllbehälter leeren & desinfizieren"] },
      { title: "Gänge, Aulen & Turnhallen", items: ["Turnhallenböden trittsicher pflegen nach DIN 18032", "Handläufe, Geländer & Lichtschalter desinfizierend wischen", "Eingangsportale & Spindsäuberung", "Glastüren- & Raumteilerreinigung"] },
      { title: "Sanitäranlagen (Hygienefokus)", items: ["Toilettenbecken, Brillen & Urinals desinfizierend reinigen", "Waschbecken, Fliesenwände & Duschbereiche wischen", "Streng farbcodiertes Tuchsystem gegen Keimverschleppung", "Spender mit Seife, Papier & Desinfektion nachbestücken"] }
    ],
    aspects: [
      { title: "Allergikerfreundliche Reiniger", desc: "Wir verzichten in Kinderbereichen komplett auf reizende Chlorpräparate oder ausdünstende Duftstoffe." },
      { title: "Strafregistergeprüfte Kräfte", desc: "Für Schulen & Kindergärten setzen wir ausschließlich Stammpersonal mit einwandfreiem, aktuellem Leumund ein." },
      { title: "Ferien-Grundreinigung", desc: "Wir nutzen Schließungszeiten optimal für intensive Beschichtungen, Grundreinigungen und Einpflegen der Böden." },
      { title: "Infektionsschutz-Konzept", desc: "Wischdesinfektion von Griffen und Touchpoints zur Abwehr saisonaler Grippe-, Magen-Darm- oder Coronawellen." }
    ],
    results: [
      "Hygienisch frische Lernumfelder zur idealen Förderung der Konzentration",
      "Effektive Barriere gegen die Ausbreitung von Krankheits- und Erkältungswellen",
      "Schadstofffreies Spielen auf allen Böden ohne allergische Hautreizungen",
      "Dokumentierte, behördengerechte Einhaltung aller Hygienepläne",
      "Tiefensaubere, geruchsfreie und glänzende Toilettentrakte",
      "Zufriedene Pädagogen, Eltern und fröhlich spielende Kinder"
    ],
    customMehrwertTitle: "Gesunde Lernwelten durch ökologische, absolut schadstofffreie Pflege",
    customChallengesTitle: "Verantwortungsvoller Infektionsschutz in hochfrequentierten Räumen",
    customAreasTitle: "Hygienische Aufbereitung von Schultrakten, Spielzonen und Sanitäranlagen",
    customAspectsTitle: "Hautverträgliche Sauberkeit und Leumundsprüfung im Fokus",
    customResultsTitle: "Sichere Keimbarrieren für das unbeschwerte Heranwachsen unserer Kinder",
    customPortfolioTitle: "Nachhaltige Schul- und Kindergartenreinigung für Wien",
    customTrustTitle: "Warum Wiener Bildungseinrichtungen unserer Fürsorge vertrauen"
  },
  "hausbetreuung-wien": {
    keyBenefits: [
      "Werterhalt der Liegenschaft",
      "Zufriedene Mietergemeinschaft",
      "Technisches Auge vor Ort",
      "Gepflegte Außenbereiche",
      "Gesetzliche Haftungsübernahme"
    ],
    challengesIntro: "Stiegenhäuser und Wohnhausanlagen stehen täglich unter starker Witterungs- und Trittbelastung. Wir sichern den Werterhalt meisterhaft:",
    challenges: [
      { nr: "01", title: "Flurentwertung", desc: "Witterungsbedingter Schmutzeintrag und aggressive Salzränder im Winter schädigen Marmor, Holz oder Terrazzo." },
      { nr: "02", title: "Keller- & Müllbereiche", desc: "Mülltonnenplätze und mietereigene Kellerebenen neigen rasch zu unansehnlichem Unrat und unangenehmen Gerüchen." },
      { nr: "03", title: "Außenanlagen & Grün", desc: "Ungemähte Rasenflächen, wucherndes Unkraut und ungekehrte Zugangswege mindern das Wohngefühl nachhaltig." },
      { nr: "04", title: "Haustechnik-Prüfung", desc: "Defekte Glühbirnen, klemmende Brandschutztüren oder verstopfte Abläufe müssen sofort erkannt und gemeldet werden." }
    ],
    areasIntro: "Unsere ganzheitlichen Hausbetreuungskonzepte für Wiener Hausverwaltungen bürgen für zufriedene Bewohner und Werterhalt:",
    areas: [
      { title: "Stiegenhaus & Gänge", items: ["Treppen & Podeste kehren und gründlich nasswischen", "Treppengeländer, Handläufe & Briefkästen entstauben", "Eingangsportale, Glastüren & Hausnummern wischen", "Aufzugskabinen innen reinigen & spiegelpolieren"] },
      { title: "Kellergänge & Nebenräume", items: ["Kellerebenen, Kinderwagen- & Fahrradräume kehren", "Waschküchen reinigen & Maschinenflächen säubern", "Müllplätze fegen, desinfizieren & geruchsneutralisieren", "Mülltonnen-Präzisionsreinigung"] },
      { title: "Außenflächen & Grünanlagen", items: ["Gehwege, Innenhöfe & Parkplätze kehren", "Rasenpflege, Grasschnitt & Laubbeseitigung im Herbst", "Austausch defekter Leuchtmittel im Allgemeinbereich", "Störungserfassung & Meldung an Ihre Verwaltung"] }
    ],
    aspects: [
      { title: "Zuverlässiger Verwaltungspartner", desc: "Transparente, tabellarisch dokumentierte Protokolle und pünktliche Tourenpläne sichern reibungslose Einbindung." },
      { title: "Alles-aus-einer-Hand-Komfort", desc: "Vom wöchentlichen Kehrdienst bis zur Haustechnikkontrolle decken wir das gesamte Segment meisterhaft ab." },
      { title: "Liegenschaftshaftung nach StVO", desc: "Wir arbeiten pünktlich nach Hausordnung und übernehmen verlässlich die Haftung für die vereinbarten Verkehrsflächen." }
    ],
    results: [
      "Stets einladender, sauberer erster Eindruck für Mieter und Wohnungskäufer",
      "Vandalismus- & Schmierereiprävention durch gepflegte Hausstrukturen",
      "Garantierter Schutz und Werterhalt wertvoller Naturstein- oder Holzstiegen",
      "Störungsfreie Beleuchtung und funktionsfähige Fluchttüren im Alltag",
      "Sorgenfreie Betriebskostenabrechnung dank klar fixierter Pauschaltarife",
      "Schnelle Schadensminimierung durch proaktive Vor-Ort-Meldungen"
    ],
    customMehrwertTitle: "Ganzheitlicher Werterhalt für Ihre Liegenschaften und Wohnanlagen",
    customChallengesTitle: "Kontinuierliche Beanspruchung gemeinschaftlicher Verkehrsflächen",
    customAreasTitle: "Stiegenhausnasspflege, Müllplatzhygiene und Außenbereichsbetreuung",
    customAspectsTitle: "Rechtssichere Liegenschaftspflege nach ÖNORM-Standards",
    customResultsTitle: "Ein einladendes Wohnumfeld und reibungsloses Schadens-Monitoring",
    customPortfolioTitle: "Hausbetreuung und Liegenschaftsservices für Wiener Immobilien",
    customTrustTitle: "Warum renommierte Wiener Hausverwaltungen auf unsere Partnerschaft setzen"
  },
  "reinigung-oeffentliche-einrichtungen-wien": {
    keyBenefits: [
      "Ausschreibungskonform",
      "ANKÖ-gelisteter Partner",
      "High-Traffic-Erprobt",
      "Umweltsichere Grünreinigung",
      "Feste Fixpreisgarantie"
    ],
    challengesIntro: "Öffentliche Objekte fordern absolute Budgetdisziplin bei gleichzeitig maximaler Tritt- und Keimbelastung. Wir sichern diesen Spagat meisterhaft:",
    challenges: [
      { nr: "01", title: "Hundertfache Frequenz", desc: "Wartehallen und Kundenschalter stehen unter unbändigem Schmutz- und Feuchtigkeitseintrag des öffentlichen Publikums." },
      { nr: "02", title: "Handlauf-Sterilisierung", desc: "Geländer, Kundencounter und Aufzugsknöpfe sind Virenüberträger. Laufende Keimbarrieren brechen Infektionswege." },
      { nr: "03", title: "Öffentliche Sanitärzone", desc: "Waschräume und Toiletten der Kundschaft erfordern eng getaktete, geruchsbekämpfende Wischhygiene." },
      { nr: "04", title: "Gesetzliche Vorgaben", desc: "Erfüllung aller arbeitsrechtlichen, tariflichen und ökologischen Kriterien bei behördlichen Ausschreibungen." }
    ],
    areasIntro: "Transparent kalkulierte, meisterhaft ausgeführte Gebäudereinigung in allen Wiener Gemeindebezirken:",
    areas: [
      { title: "Kundenzonen & Wartehallen", items: ["Wartebänke & Sitzflächen feucht wischen & desinfizieren", "Amtschreiber counter & Informationsschalter entstauben", "Bodenbeläge gleitsicher & porentief maschinenschrubben", "Glastüren, Raumteiler & Fensterfronten säubern"] },
      { title: "Behördenbüros & Verwaltungszeilen", items: ["Amtliche Schreibtische im Staubbindeverfahren wischen", "Monitore, EDV-Bereiche & Telefonanlagen wischen", "Müllbehälter unter meisterhafter Wertstofftrennung leeren", "Dokumentenschränke, Sideboards & Aktenläufe abstauben"] },
      { title: "Öffentliche Sanitärbereiche", items: ["WC-Becken, Urinale, Brillen & Deckel desinfizieren", "Waschbecken, Fliesenwände, Fugen & Armaturen entkalken", "Toilettenpapiere, Handpapiere & Seifenspender nachbestücken", "Streng farbcodiertes Wischsystem gegen Keimübertragung"] }
    ],
    aspects: [
      { title: "ANKÖ-Zertifizierung", desc: "Simba FM is vollständig im österreichischen Auftragnehmerkataster gelistet und erfüllt alle Eignungsnachweise." },
      { title: "Geprüfte Trittsicherheit", desc: "Wir arbeiten nach DIN-Sicherheitsnormen und nutzen gleitsichere, materialschonende Pflegemittel." },
      { title: "Umweltbewusste Reiniger", desc: "Strikter Einsatz biologisch abbaubarer und schadstofffreier Reinigungsmittel (Österreichisches Umweltzeichen)." },
      { title: "Strikte Budget-Garantie", desc: "Volle Preistreue ohne verdeckte Nachberechnungen innerhalb des gesamten Vertragslaufraums." }
    ],
    results: [
      "Sicher und gleitgeschützt gepflegte Gänge und Wartehallen",
      "Tiefenhygienische Toilettenanlagen ohne störende Geruchsbildungen",
      "Zuverlässig eingedämmte Infektionsketten auf allen Publikums-Griffflächen",
      "Staubfreie, motivierende und gesunde Büros für alle Bediensteten",
      "Ausgezeichnetes Ausschreibungskonformität und reibungslose Audits",
      "Kostensicherheit durch fix kalkulierte Meister-Pauschalen"
    ],
    customMehrwertTitle: "Maximale Frequenzstabilität und lückenlose Ausschreibungskonformität",
    customChallengesTitle: "Budgetdisziplin bei extrem hoher Publikumsfrequenz",
    customAreasTitle: "Systematische Amtshauspflege, Magistratsreinigung und Kundensicherheithygiene",
    customAspectsTitle: "Vergabekonforme Qualitätsnachweise und bewährter Gleitschutz",
    customResultsTitle: "Sicherer, normgerechter Unterhalt für den täglichen Behördenbetrieb",
    customPortfolioTitle: "Vergabekonforme Reinigungskonzepte für den öffentlichen Sektor",
    customTrustTitle: "Warum Wiener Magistrats- und Amtsstellen unserem Versprechen vertrauen"
  },
  "eventreinigung-wien": {
    keyBenefits: [
      "Punktgenaue Einsatzbereitschaft",
      "Hygienische Toilettenhüter",
      "Sofortige Müllfreiheit",
      "Blitzschneller Abbau-Support",
      "24/7 Rufbereitschaft"
    ],
    challengesIntro: "Großveranstaltungen verlangen nach präziser Personal-Koordination und sofortiger Schmutzbeseitigung. Wir begleiten Ihre Event-Logistik:",
    challenges: [
      { nr: "01", title: "Rasch ansteigender Müll", desc: "Zertifiziertes Müllmanagement für unaufschiebbare Beseitigung leerer Becher, Pappteller und Verpackungsabfälle." },
      { nr: "02", title: "Überlaufende WCs", desc: "Kontinuierliches Wischen und Nachbestücken von Sanitärräumen bei extrem beanspruchtem Publikumsverkehr." },
      { nr: "03", title: "Unerwartete Malheurs", desc: "Schnelles Aufwischen verschütteter Getränke oder Beseitigen von gefährlichem Scherbenglas im Saal." },
      { nr: "04", title: "Harter Abbau-Termindruck", desc: "Sofortige nächtliche Komplettreinigung nach Eventende sichert die pünktliche und mängelfreie Saalabgabe." }
    ],
    areasIntro: "Unsere meisterhaften Eventreinigungs-Spezialisten sichern Sauberkeit vor, während und nach Ihrem großen Auftritt:",
    areas: [
      { title: "Eventfläche & Gänge", items: ["Grundkehren vor Einlass & Stand-by-Müllsammlung", "Entfernen von klebrigen Getränkeflecken & klebrigen Laufwegen", "Eingangshalle, Garderoben & Kassenbereich freiräumen", "Teppichbodenreinigung in Tagungs- & Messebereichen"] },
      { title: "Backstage & Künstlergarderoben", items: ["Künstlergarderobe & Teeküche auf Hochglanz wischen", "Aufflackern staubfreier VIP-Lounges", "Polstermöbel- und Sesselreinigung vor Ort", "Verbrauchsmaterialen vorbestücken"] },
      { title: "Sanitärbereiche (Dauerhafte Präsenz)", items: ["Toilettenbecken & Pissoirs dauerhaft wischen", "Waschbecken- & Spiegelreinigung im Sekundenturnus", "Bodenflächen trocken- & nasspflegen wegen Rutschgefahr", "Wandfliesen & Türklinker keimmindernd abreiben"] }
    ],
    aspects: [
      { title: "24/7 Einsatztrupps", desc: "Unsere schlagkräftigen Teams arbeiten im Schichtwechsel rund um die Uhr, am Wochenende sowie feiertags." },
      { title: "Erfahrenes Führungsauge", desc: "Ein staatlich geprüfter Objektleiter koordiniert die Kräfte vor Ort und korrigiert Kapazitäten an Engpässen." },
      { title: "Grandiose Mülltrennung", desc: "Professionelle Wertstoff- und Flaschen-Sortierung zur Reduktion von Zusatzgebühren bei Messe- und Großhallenabgabe." },
      { title: "Unaufdringliche Präsenz", desc: "Durch diskretes, gepflegtes Auftreten in einheitlicher Arbeitsbekleidung wirkt unser Personal stets repräsentativ." }
    ],
    results: [
      "Sofort bezugsfertige, einwandfrei glänzende Festsäle und Hallen",
      "Durchgehend frischer und sauberer Hygienestatus der sanitären Räume",
      "Unfallfreie Laufbereiche dank sofortiger Beseitigung von Scherben",
      "Ausgezeichnetes Feedback von Gästen, Künstlern und Ausstellern",
      "Pünktliche Rückgabe des Objekts an den Vermieter ohne Beanstandungen",
      "Volle, preissicher planbare Budgettreue ohne versteckte Zuschläge"
    ],
    customMehrwertTitle: "Einwandfreie Eventflächen als Rahmen für Ihr perfektes Event",
    customChallengesTitle: "Strikte Terminvorgaben und unvorhersehbare Reinigungsanforderungen",
    customAreasTitle: "Systematische Aufbereitung von Eventhallen, Backstage-Zonen und VIP-Bereichen",
    customAspectsTitle: "Zentrale Erfolgsfaktoren für einen reibungslosen Ablauf und raschen Abbau",
    customResultsTitle: "Sorgenfreie Rückgabe und besenreine Räumlichkeiten direkt nach Veranstaltungsende",
    customPortfolioTitle: "Messe- und Eventreinigungskonzepte für Wiener Veranstalter",
    customTrustTitle: "Warum führende Wiener Agenturen und Veranstalter auf Simba FM setzen"
  }
};

// Default fallback content for any other branch page slug not specifically mapped
const defaultFallback: SlugSpecificContent = {
  keyBenefits: [
    "Individuelle Lösungen",
    "Feste Teams & Stammpersonal",
    "Meisterliche Aufsicht",
    "Werterhalt der Räume",
    "Pünktlicher Service"
  ],
  challengesIntro: "Jedes anspruchsvolle Objekt verlangt nach einer differenzierten Behandlungsliste. Wir begegnen diesen Hygieneherausforderungen mit gezielten Konzeptlösungen:",
  challenges: [
    { nr: "01", title: "Oberflächenhygiene", desc: "Konsequente Staub- und Keimreduzierung auf allen Arbeitsflächen, Displays und hochfrequentierten Touchpoints für gesunde Räume." },
    { nr: "02", title: "Gemeinschaftszonen", desc: "Hygienischer Unterhalt für Küchen, Kaffeestationen und Aufenthaltsräume zur Vermeidung von Keimverschleppung." },
    { nr: "03", title: "Sanitärbereiche", desc: "Pünktliche, keimtötende Wischdesinfektion aller Sanitärtrakte für ein durchgehend frisches Geruchserlebnis." },
    { nr: "04", title: "Werterhalt der Böden", desc: "Regelmäßige materialschonende Nass- und Feuchtpflege aller Bodenbeläge für langlebige Strukturen." }
  ],
  areasIntro: "Unser meisterliches Leistungsverzeichnis bürgt mit geschultem Stammpersonal für makellose Sauberkeit im gesamten Objekt:",
  areas: [
    { title: "Haupt- & Arbeitsbereiche", items: ["Schreibtische & Oberflächen abstauben", "Bodenbeläge saugen & nasswischen", "Glastüren & Raumtrenner reinigen", "Papierkörbe entleeren & säubern"] },
    { title: "Gemeinschafts- & Nebenräume", items: ["Teeküchen & Kaffeebars wischen", "Geschirr- & Abwaschservice ausführen", "Besprechungs- & Wartezonen entstauben", "Mülltrennung & Recycling koordinieren"] },
    { title: "Sanitäranlagen (Farbcodiert)", items: ["Waschbecken, Fliesen & Armaturen entkalken", "Spiegel- & Toilettendesinfektion", "Toilettenbecken tiefenreinigen", "Spender mit Seifen & Papieren füllen"] }
  ],
  aspects: [
    { title: "Meisterbetrieb-Garantie", desc: "Als inhabergeführter Wiener Meisterbetrieb stehen wir persönlich für die erstklassige Ausführung aller Leistungen." },
    { title: "Individuelle Taktung", desc: "Wir passen unsere Arbeitszeiten unkompliziert an Ihre Geschäftszeiten an – früh morgens, abends oder am Wochenende." },
    { title: "Schonende Wirkstoffe", desc: "Verwendung materialschonender, umweltschonender Reinigungsmittel für nachhaltigen Erhalt Ihrer Werte." },
    { title: "Haftpflichtversicherung", desc: "Simba FM ist vollumfänglich haftpflichtversichert – für absolute Sicherheit und Sorgenfreiheit bei Ihnen vor Ort." }
  ],
  results: [
    "Pünktlich hergerichtetes, makellos sauberes Objekt jeden Tag aufs Neue",
    "Frischer Wohlgeruch und hygienisch reines Gesamtgefühl beim Betreten",
    "Nachhaltiger Erhalt aller wertvollen Einrichtungsstücke und Möbel",
    "Dramatisch reduzierte Ausfälle durch gezielte Touchpoint-Desinfektion",
    "Sichere Einhaltung aller gesetzlichen Hygiene- und Entsorungsvorgaben",
    "Einwandfreie, glänzende Repräsentativität bei Kunden, Gästen und Partnern"
  ]
};

export function BranchePageClient({ data }: { data: BranchePageData }) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Retrieve content from template map, falling back elegantly to global defaults
  const content = slugContentMap[data.slug] || defaultFallback;

  // Key performance services across Simba FM
  const portfolioServices = [
    {
      title: "Unterhaltsreinigung",
      desc: `Das tägliche oder wöchentliche Fundament für makellose Frische in Ihren Räumen. Speziell angepasst an ${data.kicker || 'Ihre Branche'}. Planbar, meistergeprüft und transparent.`,
      path: "/unterhaltsreinigung-wien"
    },
    {
      title: "Glasreinigung",
      desc: "Streifenfreie Transparenz für all Ihre Verglasungen, Außenfenster, Glastüren und Raumteiler. Für maximalen Lichteinfall und klare Sicht.",
      path: "/fensterreinigung-wien"
    },
    {
      title: "Sonderreinigung",
      desc: "Spezialisierte Grundpflege, Fleckenentfernung, Spannteppich- und Polstermöbel-Tiefenreinigung sowie meisterbegleitete Bauendreinigungen.",
      path: "/sonderreinigung-wien"
    },
    {
      title: "Hausbetreuung",
      desc: "Vertrauensvolle Pflegeerhalt-Konzepte für Wohnhausanlagen, Gebäude, Stiegenhäuser, Außenanlagen und gewerbliche Liegenschaften in ganz Wien.",
      path: "/hausbetreuung-wien"
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 font-sans text-slate-800">
      
      {/* =========================================================
          1. HERO SECTION WITH SLEEK FULL-HEIGHT FRAME
          ========================================================= */}
      <section className="relative overflow-hidden bg-white pt-16 pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20 border-b border-slate-100" id="hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(240,249,255,0.7)_0%,rgba(255,255,255,0)_50%)] z-0" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start justify-between py-1">
              <div>
                <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#0052b4] mb-5 font-bold block leading-none font-sans">
                  BRANCHENPAGE: {(data.kicker || "Simba Branchenlösung").toUpperCase()}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] font-black text-[#003067] leading-[1.12] tracking-tight mb-5 font-sans">
                  <HighlightTitle text={data.title} />
                </h1>
                <p className="text-slate-600 text-sm md:text-base max-w-2xl leading-relaxed mb-8 font-medium">
                  {data.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
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

            {/* Right Image Display Column - Sleek frame styling */}
            <div className="lg:col-span-5 flex relative min-h-[350px] lg:min-h-full w-full">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,30,100,0.06)] bg-slate-50">
                <Image
                  src={data.heroImage}
                  alt={data.title}
                  fill
                  priority
                  className={`object-cover hover:scale-[1.03] transition-transform duration-700 ${data.heroImagePositionClass || 'object-center'}`}
                  referrerPolicy="no-referrer"
                  unoptimized
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          2. STRATEGISCHER MEHRWERT SECTION
          ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <span className="text-[#0052b4] font-bold text-xs uppercase tracking-widest block mb-3">Strategischer Mehrwert</span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#003067] tracking-tight font-sans mb-5">
              <HighlightTitle text={content.customMehrwertTitle || `Warum professionelle {${data.industryReinigung}} mehr als Sauberkeit ist`} />
            </h2>
            
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 font-semibold border-l-4 border-[#0052b4] pl-5 max-w-3xl">
              Eine professionell gepflegte und keimfrei präparierte Umgebung ist direkte Visitenkarte Ihrer Räumlichkeiten und unverzichtbares Fundament für Wohlbefinden, Motivation und Sicherheit. Staubfreie Arbeitszonen, hygienische Sanitäranlagen und meisterhafte, materialschonende Wischdesinfektion bürgen für gesundheitliche Vorsorge Ihrer Mitarbeiter und Gäste und sichern den langfristigen Werterhalt Ihrer Ausstattung.
            </p>

            {/* Elegant Checkpoints - Easily scannable */}
            <div className="mt-8 border-t border-slate-100 pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.keyBenefits.map((benefit, idx) => (
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

      {/* =========================================================
          3. DIE GRÖSSTEN HERAUSFORDERUNGEN IN DER BRANCHE
          ========================================================= */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-10 text-left">
            <span className="text-[#0052b4] font-bold text-xs uppercase tracking-widest block mb-3">BRANCHE IM FOKUS</span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#003067] tracking-tight font-sans mb-3">
              <HighlightTitle text={content.customChallengesTitle || `Die {größten Herausforderungen} in ${data.challengesKicker || data.kicker || "modernen Objekten"}`} />
            </h2>
            <p className="text-slate-500 text-sm font-semibold max-w-2xl leading-relaxed">
              {content.challengesIntro}
            </p>
          </div>

          {/* Minimal corporate divider-based layout (No Cards) */}
          <div className="max-w-4xl mx-auto border-t border-slate-200 mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 py-10">
              
              {content.challenges.map((challenge, idx) => (
                <div key={idx} className={`flex gap-4 ${idx >= 2 ? 'border-t border-slate-200/50 pt-8 md:border-t-0 md:pt-0' : ''}`}>
                  <span className="text-[17px] font-black text-[#0052b4] font-mono leading-none pt-1">{challenge.nr}</span>
                  <div>
                    <h3 className="text-base font-bold text-[#003067] mb-2 leading-none">{challenge.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {challenge.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. WELCHE BEREICHE WIR REINIGEN (SYSTEMATIC)
          ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-14">
            <span className="text-[#0052b4] font-bold text-xs uppercase tracking-widest block mb-3">SYSTEMATISCHE HYGIENEPFLEGE</span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#003067] tracking-tight font-sans">
              <HighlightTitle text={content.customAreasTitle || data.systematicCleanTitle || `Welche Bereiche wir in der ${data.industryReinigung || "Objektpflege"} reinigen`} />
            </h2>
            <p className="text-slate-500 text-sm mt-3 font-semibold leading-relaxed">
              {content.areasIntro}
            </p>
          </div>

          {/* Split dynamic box columns */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            
            {/* Column 1 */}
            <div className="space-y-10">
              {content.areas.slice(0, Math.ceil(content.areas.length / 2)).map((area, idx) => (
                <div key={idx}>
                  <h3 className="text-lg md:text-xl font-bold text-[#003067] mb-4 border-b border-slate-200 pb-2">
                    {area.title}
                  </h3>
                  <ul className="space-y-2.5 pl-4">
                    {area.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2 text-slate-600 text-sm md:text-[15px] font-medium">
                        <span className="w-1.5 h-1.5 bg-[#0052b4] rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-10">
              {content.areas.slice(Math.ceil(content.areas.length / 2)).map((area, idx) => (
                <div key={idx}>
                  <h3 className="text-lg md:text-xl font-bold text-[#003067] mb-4 border-b border-slate-200 pb-2">
                    {area.title}
                  </h3>
                  <ul className="space-y-2.5 pl-4">
                    {area.items.map((item, itemIdx) => {
                      return (
                        <li key={itemIdx} className="flex items-center gap-2 text-slate-600 text-sm md:text-[15px] font-medium">
                          <span className="w-1.5 h-1.5 bg-[#0052b4] rounded-full shrink-0" />
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          5. DARAUF KOMMT ES AN SECTION
          ========================================================= */}
      <section className="py-14 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#003067] tracking-tight font-sans">
              <HighlightTitle text={content.customAspectsTitle || `Darauf kommt es bei der {${data.industryReinigung}} an`} />
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.aspects.map((aspect, idx) => (
              <div key={idx} className="border-l-2 border-[#0052b4]/60 pl-4 py-0.5">
                <h3 className="text-sm sm:text-base font-bold text-[#003067] mb-1.5">{aspect.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                  {aspect.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          6. DAS ERGEBNIS EINER PROFESSIONELLEN REINIGUNG
          ========================================================= */}
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
              <HighlightTitle text={content.customResultsTitle || `Das Ergebnis einer {professionellen ${data.industryReinigung}}`} />
            </h2>

            {/* Checklist results table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-100 pt-8">
              {content.results.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="stroke-[3.5]" />
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#003067] leading-snug">
                      {item}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                      Perfekt gepflegt, gründlich desinfiziert und sofort einsatzbereit für Ihr Team und Ihre Gäste.
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          7. PASSENDE LEISTUNGEN PORTFOLIO (ROW ROW GRID)
          ========================================================= */}
      <section id="leistungen-passend" className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-10">
            <span className="text-[#0052b4] font-bold text-xs uppercase tracking-widest block mb-2">PORTFOLIO</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#003067] tracking-tight font-sans">
              <HighlightTitle text={content.customPortfolioTitle || `{Leistungen} für ${data.portfolioKicker || data.kicker || "Betriebe"} in Wien`} />
            </h2>
            <p className="text-slate-500 text-sm mt-2 font-semibold">
              Als inhabergeführter Wiener Meisterbetrieb bieten wir Ihnen perfekt verzahnte Einzelleistungen und Full-Service-Konzepte:
            </p>
          </div>

          <div className="max-w-4xl mx-auto divide-y divide-slate-200/60 border-t border-b border-slate-200/55">
            {portfolioServices.map((svc, idx) => (
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

      {/* =========================================================
          8. MEISTERGEPRÜFTER STRUKTUR USP
          ========================================================= */}
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
              <HighlightTitle text={content.customTrustTitle || data.trustHeading || "Warum Wiener Partnerschaften Simba FM vertrauen"} />
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-semibold max-w-3xl">
              Als einer der führenden meistergeprüften Reinigungsbetriebe in Wien stehen wir für erstklassige Handwerkerkompetenz, lückenlose Zuverlässigkeit und absolute Vertraulichkeit. Wir stellen Ihnen feste, eingespielte Stammkräfte, kurze Reaktionswege und einen persönlichen Meister-Ansprechpartner zur Seite.
            </p>
          </div>

          {/* Clean checkpoints list */}
          <div className="max-w-4xl mx-auto border-t border-slate-100 pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Schnelle Reaktionszeiten",
                "Individuelle Reinigungskonzepte",
                "Flexible Einsatzzeiten",
                "Persönliche Betreuung",
                "Transparente Kommunikation",
                "Hohe Qualitätsstandards"
              ].map((checkpoint, idx) => (
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

      {/* =========================================================
          9. SEO FAQS ACCORDION IN 2 COLUMNS
          ========================================================= */}
      <section id="faq" className="py-20 bg-slate-50 border-t border-b border-indigo-50/40 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-[#0052b4] font-bold text-xs uppercase tracking-widest block mb-3 font-sans">
              HÄUFIG GESTELLT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#003067] tracking-tight font-sans">
              Fragen zur <span className="text-[#0052b4]">{data.industryReinigung}</span> in <span className="text-[#0052b4]">Wien</span>
            </h2>
          </div>

          {/* 2-Column Responsive Grid for FAQs */}
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            
            {/* Column Left (FAQs 1-2) */}
            <div className="space-y-4">
              {data.faqs.slice(0, Math.ceil(data.faqs.length / 2)).map((item, idx) => {
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

            {/* Column Right (FAQs 3+) */}
            <div className="space-y-4">
              {data.faqs.slice(Math.ceil(data.faqs.length / 2)).map((item, idx) => {
                const globalIdx = idx + Math.ceil(data.faqs.length / 2);
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

      {/* =========================================================
          10. FINAL CONTACT & REQUEST FLOW
          ========================================================= */}
      <section id="kontakt" className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[#003067] leading-tight mb-6 tracking-tight font-sans">
                Kontakt <span className="text-[#0052b4]">Details</span>
              </h2>
              
              <div className="space-y-4 text-slate-600 text-base md:text-lg mb-8 max-w-md font-medium leading-relaxed">
                <p>
                  Sollten Sie noch weitere Fragen zu unseren differenzierten Branchenkonzepten haben, stehen wir Ihnen jederzeit gerne zur Verfügung.
                </p>
                <p>
                  Sichern Sie sich meisterhafte Hygiene ohne Abzüge. Binnen 24 Stunden erhalten Sie Ihr präzises Festpreisangebot in ganz Wien und Umgebung.
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
              <ContactForm defaultSubject={`Branchen-Anfrage: ${data.kicker || data.title}`} />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
