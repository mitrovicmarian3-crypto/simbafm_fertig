import React from 'react';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Datenschutzerklärung',
  description: 'Ausführliche Datenschutzerklärung von Simba Facility Management. Erfahren Sie alles über die Erhebung, Verarbeitung, sichere Verwahrung und Ihre Rechte bezüglich Ihrer personenbezogenen Daten.',
  canonical: '/datenschutz',
});

export default function DatenschutzPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen pt-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-16 pb-12 md:pt-20 md:pb-14 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(240,249,255,0.7)_0%,rgba(255,255,255,0)_50%)] z-0" />
        
        <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full text-center lg:text-left">
          <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#003067]/85 mb-4 font-bold block leading-none font-sans">
            RECHTLICHES &amp; MEISTERBETRIEB
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-black text-[#003067] leading-[1.125] tracking-tight mb-2 font-sans">
            Datenschutzerklärung
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-2xl font-semibold leading-relaxed">
            Transparente Informationen über den meisterhaften Schutz Ihrer persönlichen Daten. Wir verarbeiten Ihre Daten streng vertraulich und im Einklang mit DSGVO, DSG und TKG 2021.
          </p>
        </div>
      </section>

      {/* 2. MAIN DETAILED CONTENT BODY */}
      <section className="py-12 md:py-16">
        <div className="max-w-[960px] mx-auto px-6">
          <div className="bg-white border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.012)] p-6 sm:p-12 lg:p-14 rounded-none space-y-12 text-[#003067] text-sm sm:text-base leading-relaxed font-medium">
            
            {/* Präambel */}
            <div className="border-b border-slate-100 pb-6 text-slate-500 text-xs sm:text-sm italic">
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein elementares Anliegen. Wir behandeln die von Ihnen anvertrauten Daten mit höchster Diskretion, Sorgfalt und Verantwortung. Auf dieser Seite informieren wir Sie lückenlos und im Detail darüber, welche personenbezogenen Daten wir im Rahmen Ihres Besuchs auf unserer Website sowie bei einer direkten Kontaktaufnahme erfassen, wie wir diese nutzen, auf welcher Rechtsgrundlage dies basiert und welche Rechte Ihnen zustehen.
              </p>
            </div>

            {/* 1. Einleitung und grundlegende Begrifflichkeiten */}
            <div>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-[#0052b4] mb-4 font-sans border-b border-slate-100 pb-2">
                1. Allgemeine Hinweise &amp; Begriffsbestimmungen
              </h2>
              <div className="text-slate-600 space-y-4 text-xs sm:text-sm">
                <p>
                  Diese Datenschutzerklärung gilt für das Internetangebot von <strong>Simba Facility Management</strong>, erreichbar unter der Domain dieser Webpräsenz.
                </p>
                <p>
                  Unsere Datenverarbeitungspraktiken stehen im Einklang mit der <strong>Datenschutz-Grundverordnung (DSGVO)</strong> der Europäischen Union, dem österreichischen <strong>Datenschutzgesetz (DSG)</strong> sowie dem <strong>Telekommunikationsgesetz (TKG 2021)</strong>.
                </p>
                <p>
                  Im Folgenden klären wir über zentrale Begrifflichkeiten auf, wie sie in Artikel 4 der DSGVO verwendet werden:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-500">
                  <li>
                    <strong>Personenbezogene Daten (Art. 4 Nr. 1 DSGVO):</strong> Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (z. B. Name, E-Mail-Adresse, Telefonnummer, IP-Adresse).
                  </li>
                  <li>
                    <strong>Verarbeitung (Art. 4 Nr. 2 DSGVO):</strong> Jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang im Zusammenhang mit personenbezogenen Daten (wie das Erheben, Erfassen, Speichern, Auslesen, Abfragen, Verwenden oder Löschen).
                  </li>
                  <li>
                    <strong>Betroffene Person:</strong> Jede natürliche Person, deren personenbezogene Daten von dem für die Verarbeitung Verantwortlichen verarbeitet werden.
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Verantwortliche Stelle */}
            <div>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-[#0052b4] mb-4 font-sans border-b border-slate-100 pb-2">
                2. Verantwortliche Stelle für die Datenverarbeitung
              </h2>
              <div className="text-slate-600 space-y-4">
                <p>
                  Für die Datenverarbeitungen im Rahmen dieses Internetauftritts zeichnet folgendes Einzelunternehmen als Verantwortlicher im Sinne des Art. 4 Nr. 7 DSGVO verantwortlich:
                </p>
                <div className="bg-[#f0f9ff]/50 border border-[#bae6fd]/50 p-6 sm:p-8 rounded-none space-y-2 font-sans text-sm sm:text-base">
                  <p className="font-extrabold text-[#003067] text-lg sm:text-xl">Jasmina Marinkovic</p>
                  <p className="font-bold text-slate-800 uppercase tracking-wider text-xs">Simba Facility Management</p>
                  <p className="text-slate-600">Herthergasse 37/15/1</p>
                  <p className="text-slate-600">1120 Wien, Österreich</p>
                  <div className="pt-3 border-t border-slate-100 mt-2 space-y-1 text-sm">
                    <p><span className="font-bold text-[#003067]">Telefon:</span> <a href="tel:06601470316" className="text-[#0052b4] hover:underline font-bold">0660 / 1470316</a></p>
                    <p><span className="font-bold text-[#003067]">E-Mail:</span> <a href="mailto:simbafacility@outlook.com" className="text-[#0052b4] hover:underline font-bold break-all">simbafacility@outlook.com</a></p>
                  </div>
                </div>
                <p className="text-xs text-slate-400">
                  Da unser Unternehmen keine Kerntätigkeit ausführt, die in einer systematischen, umfangreichen Überwachung oder der Verarbeitung sensibler Datenkategorien besteht, ist die Bestellung eines dedizierten Datenschutzbeauftragten gesetzlich nicht erforderlich. Sie können alle Anfragen bezüglich Ihrer Daten direkt an den oben genannten Inhaber richten.
                </p>
              </div>
            </div>

            {/* 3. Zwecke und Rechtsgrundlagen der Verarbeitung */}
            <div>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-[#0052b4] mb-4 font-sans border-b border-slate-100 pb-2">
                3. Erhebung, Zwecke und Rechtsgrundlagen der Datenverarbeitung
              </h2>
              <div className="text-slate-600 space-y-6">
                
                {/* A. Server-Logfiles */}
                <div className="space-y-2.5">
                  <h3 className="text-[#003067] font-extrabold text-base sm:text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#0052b4] rounded-full inline-block"></span>
                    A. Bereitstellung der Website und Server-Logfiles (Hosting)
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Beim reinen Informationsbesuch unserer Website werden durch den Webbrowser Ihres Endgerätes automatisch Verbindungsdaten an den Hostinganbieter unserer Webpräsenz übermittelt. Diese technischen Daten werden kurzzeitig in log-basierten Tabellen (Server-Logfiles) dokumentiert.
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700">
                    Die dabei aufgezeichneten Daten umfassen:
                  </p>
                  <ul className="list-disc pl-5 text-slate-500 text-xs sm:text-sm space-y-1">
                    <li>Ihre IP-Adresse (wird zur Wahrung der Privatsphäre meist anonymisiert bzw. gekürzt)</li>
                    <li>Datum und präzise Uhrzeit der Server-Anfrage</li>
                    <li>Aufgerufene URL (Name der angeforderten Datei)</li>
                    <li>Statuscode der Übertragung (z. B. 200 OK, 404 Fehler)</li>
                    <li>Übertragene Datenmenge beim Abruf in Byte</li>
                    <li>Browsertyp nebst Versionsnummer und genutztes Betriebssystem (User-Agent string)</li>
                    <li>Referrer-URL (die zuvor besuchte Webseite, von der aus Sie uns gefunden haben)</li>
                  </ul>
                  <p className="text-xs">
                    <span className="font-bold text-[#003067]">Rechtsgrundlage:</span> Die vorübergehende Erfassung und Speicherung dieser Protokolldaten erfolgt auf Basis von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Unser berechtigtes Interesse liegt in der Gewährleistung der technischen Sicherheit, der Abwehr von Cyber-Angriffen (DDoS-Attacken, Spam-Bots), der Behebung von Systemfehlern sowie der Aufrechterhaltung der Stabilität unserer Serverinfrastruktur.
                  </p>
                  <p className="text-xs">
                    <span className="font-bold text-[#003067]">Speicherdauer:</span> Diese Protokolldaten werden nach maximal 14 Tagen automatisiert gelöscht, sofern keine Anhaltspunkte für eine rechtswidrige Nutzung vorliegen, die eine Beweissicherung im Rahmen eines behördlichen oder gerichtlichen Verfahrens erforderlich machen.
                  </p>
                </div>

                {/* B. Kontaktformular und Direktanfragen */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <h3 className="text-[#003067] font-extrabold text-base sm:text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#0052b4] rounded-full inline-block"></span>
                    B. Kontaktaufnahme über Formular oder E-Mail
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Auf unserer Website stehen Ihnen interaktive Online-Kontaktformulare zur Verfügung, mit denen Sie unkompliziert meisterhafte Angebote anfordern oder allgemeine Fragen stellen können. Zudem können Sie uns direkt per E-Mail kontaktieren. Diesfalls verarbeiten wir die von Ihnen freiwillig eingegebenen personenbezogenen Daten.
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700">
                    Erfasste Daten im Kontaktformular:
                  </p>
                  <ul className="list-disc pl-5 text-slate-500 text-xs sm:text-sm space-y-1">
                    <li>Vollständiger Name des Ansprechpartners</li>
                    <li>Gültige E-Mail-Adresse (für Rückmeldungen und Angebote)</li>
                    <li>Telefonnummer (optional bzw. für Rückfragen)</li>
                    <li>Gewählter Betreff / Leistungsgebiet (z. B. Büroreinigung, Hausbetreuung etc.)</li>
                    <li>Persönlicher Nachrichtentext (beschreibendes Anliegen)</li>
                  </ul>
                  <p className="text-xs">
                    <span className="font-bold text-[#003067]">Rechtsgrundlage:</span> Liegt das Ziel Ihrer Kontaktaufnahme in der Anbahnung eines meisterhaften Reinigungsvertrags, in einer Angebotslegung oder der Durchführung vorvertraglicher Abstimmungsmaßnahmen, so stützt sich die rechtliche Grundlage auf <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> (Vertragserfüllung und vorvertragliche Maßnahmen). Bei allgemeinen, informellen Anfragen stützt sich die Datenverarbeitung auf Ihre freiwillig erteilte Einwilligung gemäß <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> beim Absenden des Nachrichtenschaltknopfs bzw. auf unsere berechtigten Interessen gemäß <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (effiziente und rasche Klärung von Kundenanliegen).
                  </p>
                  <p className="text-xs">
                    <span className="font-bold text-[#003067]">Speicherdauer:</span> Ihre Angaben verbleiben in unserer geschützten lokalen Datenbank und im sicheren Mailsystem, bis der konkrete Kommunikationszweck entfallen ist (vollständige Bearbeitung Ihrer Anfrage oder Beendigung des Beratungsverhältnisses) oder Sie uns zur Löschung auffordern. Gesetzliche handelsrechtliche oder steuerrechtliche Aufbewahrungspflichten (z. B. im Rahmen von Rechnungslegung oder geschäftlichen Verträgen gemäß § 212 UGB oder § 132 BAO für 7 Jahre) bleiben davon unberührt.
                  </p>
                </div>

                {/* C. Bewerber- und Karrieredaten */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <h3 className="text-[#003067] font-extrabold text-base sm:text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#0052b4] rounded-full inline-block"></span>
                    C. Verarbeitung von Bewerberdaten (Karriere-Portal)
                  </h3>
                  <p className="text-xs sm:text-sm">
                    In unserer Rubrik „Karriere“ können sich reinigungserfahrene Kräfte für eine Anstellung in unserem Meisterbetrieb in Wien bewerben. Wir verarbeiten die uns bereitgestellten Bewerbungsunterlagen streng zweckgebunden.
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700">
                    Zu den verarbeiteten Bewerbungsdaten zählen:
                  </p>
                  <ul className="list-disc pl-5 text-slate-500 text-xs sm:text-sm space-y-1">
                    <li>Stammdaten (Vorname, Nachname, Titel)</li>
                    <li>Kontaktdaten (E-Mail-Adresse, Telefonnummer, Wohnanschrift)</li>
                    <li>Qualifikationsdaten (Lebenslauf, Ausbildungszeugnisse, Arbeitszeugnisse)</li>
                    <li>Lichtbild (falls freiwillig auf dem Lebenslauf hinterlegt)</li>
                    <li>Angaben zur Arbeitsgenehmigung und dem frühestmöglichen Arbeitsbeginn</li>
                  </ul>
                  <p className="text-xs">
                    <span className="font-bold text-[#003067]">Rechtsgrundlage:</span> Die Datenverarbeitung im Bewerbungsverfahren zur Begründung eines Beschäftigungsverhältnisses erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> (Anbahnung eines Dienstverhältnisses) in Verbindung mit den nationalen gesetzlichen Bestimmungen des österreichischen Arbeitsrechts.
                  </p>
                  <p className="text-xs">
                    <span className="font-bold text-[#003067]">Speicherdauer:</span> Führt das Bewerbungsverfahren zu einer Einstellung, werden Ihre Daten in unsere geschützte Personalakte übermittelt. Im Falle einer Absage bewahren wir Ihre Dokumente für exakt <strong>6 Monate</strong> ab dem Datum der Absage auf, um eine gesetzliche Beweisführung im Sinne des österreichischen Gleichbehandlungsgesetzes (GIBG) zu gewährleisten (Schutz vor klageweisen Ansprüchen). Nach Ablauf von 6 Monaten werden die Daten unwiderruflich gelöscht. Eine längere Aufbewahrung zwecks Evidenzhaltung für zukünftige Stellenangebote bedarf Ihrer ausdrücklichen schriftlichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
                  </p>
                </div>

              </div>
            </div>

            {/* 4. Cookies und lokale Speicherung */}
            <div>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-[#0052b4] mb-4 font-sans border-b border-slate-100 pb-2">
                4. Cookies &amp; lokale Browser-Speicherung
              </h2>
              <div className="text-slate-600 space-y-4 text-xs sm:text-sm">
                <p>
                  Unsere Internetpräsenz nutzt Cookies. Das sind kleine, standardisierte Text- und Datenelemente, die von unserer Website an Ihren Browser gesendet und lokal auf Ihrem Endgerät (Computer, Mobiltelefon etc.) abgelegt werden, um das Surfen benutzerfreundlicher und stabiler zu gestalten.
                </p>
                <div className="bg-slate-50 p-4 border border-slate-100 space-y-3">
                  <p className="font-extrabold text-[#003067]">Ausschließliche Verwendung technisch notwendiger Cookies</p>
                  <p className="text-slate-500 text-xs">
                    Um Ihre Privatsphäre maximal zu schützen, verzichten wir auf dieser Website gänzlich auf Tracking-Cookies von Drittanbietern, Analyse-Zuckerelemente (wie Google Analytics) und Werbe-Retargeting-Scraping.
                  </p>
                  <p className="text-slate-500 text-xs">
                    Wir setzen lediglich <strong>technisch zwingend erforderliche Cookies</strong> ein (z. B. um den Cookie-Einwilligungsstatus zu speichern, damit der Banner beim nächsten Aufruf nicht erneut aufpoppt).
                  </p>
                  <p className="text-slate-500 text-xs">
                    Dieser Cookie hat eine maximale Speicherdauer von 1 Jahr und speichert keine personenbezogenen Identifikationsdaten, sondern lediglich einen binären Statuswert.
                  </p>
                </div>
                <p>
                  <span className="font-bold text-[#003067]">Deaktivierung von Cookies:</span> Sie können Ihren Webbrowser so konfigurieren, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                </p>
              </div>
            </div>

            {/* 5. Empfänger der Daten und Übermittlung an Drittländer */}
            <div>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-[#0052b4] mb-4 font-sans border-b border-slate-100 pb-2">
                5. Empfänger der Daten und Datentransfer in Drittländer
              </h2>
              <div className="text-slate-600 space-y-4 text-xs sm:text-sm">
                <p>
                  Ihre personenbezogenen Daten werden von uns absolut vertraulich behandelt. Innerhalb unseres Betriebs erhalten nur jene Personen Zugriff auf Ihre Daten, die unmittelbar mit der Bearbeitung Ihres Anliegens, der Angebotslegung oder dem Rekrutierungsablauf befasst sind.
                </p>
                <p>
                  Eine Weitergabe oder Übermittlung an sonstige Dritte erfolgt grundsätzlich nicht, es sei denn, dass wir gesetzlich dazu verpflichtet sind (z. B. auf Anordnung staatlicher Ermittlungsbehörden) oder dies zur Durchführung von Vertragsvereinbarungen unerlässlich ist.
                </p>
                <p>
                  <span className="font-bold text-[#003067]">Auftragsverarbeiter:</span> Für den sicheren Betrieb dieser Website arbeiten wir mit vertrauenswürdigen, ISO/IEC 27001 zertifizierten IT-Dienstleistern und Webhosting-Plattformen zusammen. Diese Dienstleister verarbeiten die Serverdaten ausschließlich in unserem Auftrag, auf unsere explizite Weisung hin und auf Basis strenger Verträge zur Auftragsverarbeitung gemäß <strong>Art. 28 DSGVO</strong>.
                </p>
                <p>
                  <span className="font-bold text-[#003067]">Keine Übermittlung an Drittländer:</span> Alle von uns genutzten Hosting-Dienste betreiben ihre Rechenzentren innerhalb der Europäischen Union bzw. im europäischen Wirtschaftsraum (EWR). Ein ungesicherter Transfer Ihrer Daten in Drittländer ohne adäquates Datenschutzniveau findet zu keinem Zeitpunkt statt.
                </p>
              </div>
            </div>

            {/* 6. Schutz vor Datenabfluss durch SSL-Verschlüsselung */}
            <div>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-[#0052b4] mb-4 font-sans border-b border-slate-100 pb-2">
                6. Datensicherheit &amp; SSL-/TLS-Verschlüsselung
              </h2>
              <div className="text-slate-600 space-y-4 text-xs sm:text-sm">
                <p>
                  Um Ihre vertraulichen Kommunikationselemente und die per Webformular versendeten Daten bestmöglich vor dem Zugriff unbefugter Dritter zu schützen, betreiben wir diese Internetplattform unter einer hochgradig abgesicherten, modernen <strong>SSL- bzw. TLS-Sicherheitsverschlüsselung</strong> (Secure Sockets Layer / Transport Layer Security).
                </p>
                <p>
                  Sie erkennen diese aktive Verschlüsselung auf einen Blick in der Adressleiste Ihres Webbrowsers, wo das standardmäßige „http://“ durch ein sicheres <strong>„https://“</strong> abgelöst und ein geschlossenes <strong>Schloss-Symbol</strong> eingeblendet wird.
                </p>
                <p>
                  Dank dieser kryptographischen Verschlüsselung können sämtliche Daten, die Sie auf unserer Website eingeben (Anfragen, Bewerbungen, Browser-Klicks), nicht von Dritten auf dem Übertragungsweg abgefangen oder entschlüsselt werden. Wir überprüfen und aktualisieren unsere technischen Schutzmaßnahmen (TOMs) kontinuierlich auf Basis der aktuellen Industriestandards.
                </p>
              </div>
            </div>

            {/* 7. Keine Tracker, Google Fonts Lokal, Social Media passive Links */}
            <div>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-[#0052b4] mb-4 font-sans border-b border-slate-100 pb-2">
                7. Besonderer Verzicht auf Social-Media-Tracker &amp; Schriftarten-Verschlüsselung
              </h2>
              <div className="text-slate-600 space-y-4 text-xs sm:text-sm">
                <p>
                  Viele moderne Webseiten laden Webfonts, Tracking-Pixel oder Plugins von Drittanbietern dynamisch herunter, wodurch automatisch Ihre IP-Adresse an externe Konzerne übertragen wird. Im Sinne unserer datenschutzfreundlichen Unternehmensphilosophie haben wir diesbezüglich weitreichende Vorkehrungen getroffen:
                </p>
                <ul className="list-decimal pl-5 space-y-3.5 text-slate-500">
                  <li>
                    <strong>Lokale Bereitstellung von Webfonts (Google Fonts):</strong> Wir binden sämtliche genutzten Google-Schriftarten (wie Inter, Space Grotesk, Outfit oder JetBrains Mono) ausschließlich lokal über unsere eigenen Webserver ein. Es findet somit zu keinem Zeitpunkt eine dynamische Verbindungsanfrage zu Servern der Google Inc. (USA) statt. Ihre IP-Adresse wird in diesem Kontext nicht an Google übertragen.
                  </li>
                  <li>
                    <strong>Passive Verlinkung von Social-Media-Präsenzen:</strong> Die im Fußbereich (Footer) unserer Website hinterlegten Symbole von sozialen Netzwerken (Instagram, Facebook, TikTok, LinkedIn) sind als rein statische Hyperlinks implementiert. Beim bloßen Laden unserer Website werden keinerlei Skripte oder Datenpakete dieser Konzerne heruntergeladen. Es erfolgt erst dann ein Datentransfer an den jeweiligen Dienstleister, wenn Sie den entsprechenden Link explizit anklicken – also eine bewusste Weiterleitung in einem neuen Browsertab durchführen.
                  </li>
                </ul>
              </div>
            </div>

            {/* 8. Ihre gesetzlichen Betroffenenrechte ausführlich */}
            <div>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-[#0052b4] mb-4 font-sans border-b border-slate-100 pb-2">
                8. Ihre gesetzlichen Rechte als betroffene Person (Betroffenenrechte)
              </h2>
              <div className="text-slate-600 space-y-4 text-xs sm:text-sm">
                <p>
                  Als betroffene Person im Sinne der DSGVO stehen Ihnen umfassende gesetzliche Rechte zu, um die Kontrolle über Ihre personenbezogenen Daten vollumfänglich auszuüben. Sie können diese Rechte jederzeit kostenlos und formlos gegenüber uns geltend machen (z. B. per E-Mail an <a href="mailto:simbafacility@outlook.com" className="text-[#0052b4] font-bold hover:underline">simbafacility@outlook.com</a>).
                </p>
                
                <div className="space-y-4 mt-6">
                  
                  <div className="border-l-2 border-[#0052b4] pl-4 space-y-1">
                    <h4 className="font-extrabold text-[#003067] text-sm">A. Recht auf Auskunft (Artikel 15 DSGVO)</h4>
                    <p className="text-slate-500 text-xs">
                      Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen, ob wir Sie betreffende personenbezogene Daten verarbeiten. Ist dies der Fall, haben Sie ein Recht auf detaillierte Auskunft über diese Daten, die Verarbeitungszwecke, die Kategorien von Daten, die Speicherdauer sowie allfällige Empfänger dieser Daten.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0052b4] pl-4 space-y-1">
                    <h4 className="font-extrabold text-[#003067] text-sm">B. Recht auf Berichtigung (Artikel 16 DSGVO)</h4>
                    <p className="text-slate-500 text-xs">
                      Sollten die von uns verarbeiteten personenbezogenen Daten unrichtig, fehlerhaft oder unvollständig sein, haben Sie das Recht, die unverzügliche Richtigstellung oder Vervollständigung dieser Daten zu verlangen.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0052b4] pl-4 space-y-1">
                    <h4 className="font-extrabold text-[#003067] text-sm">C. Recht auf Löschung („Recht auf Vergessenwerden“ – Artikel 17 DSGVO)</h4>
                    <p className="text-slate-500 text-xs">
                      Sie können die sofortige Löschung Ihrer personenbezogenen Daten bei uns verlangen, sofern einer der folgenden Gründe zutrifft: Die Daten sind für die ursprünglichen Zwecke nicht mehr notwendig; Sie widerrufen Ihre Einwilligung und es fehlt an einer anderweitigen Rechtsgrundlage; Sie legen Widerspruch gegen eine berechtigte Interessenverarbeitung ein; oder die Daten wurden unrechtmäßig verarbeitet.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0052b4] pl-4 space-y-1">
                    <h4 className="font-extrabold text-[#003067] text-sm">D. Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</h4>
                    <p className="text-slate-500 text-xs">
                      Sie haben das Recht, die Einschränkung der Datenverarbeitung zu verlangen, wenn: Sie die Richtigkeit der Daten bestreiten (für die Dauer unserer Überprüfung); die Verarbeitung unrechtmäßig ist, Sie aber statt der Löschung die Einschränkung wählen; wir die Daten nicht mehr benötigen, Sie diese jedoch zur Geltendmachung von Rechtsansprüchen brauchen; oder Sie Widerspruch gemäß Art. 21 Abs. 1 DSGVO eingelegt haben.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0052b4] pl-4 space-y-1">
                    <h4 className="font-extrabold text-[#003067] text-sm">E. Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</h4>
                    <p className="text-slate-500 text-xs">
                      Sie können verlangen, die uns bereitgestellten personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, oder dass wir diese Daten direkt einem anderen Verantwortlichen übermitteln, sofern die Verarbeitung auf Ihrer Einwilligung oder einem Vertrag basiert und automatisiert erfolgt.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0052b4] pl-4 space-y-1">
                    <h4 className="font-extrabold text-[#003067] text-sm">F. Gesetzliches Widerspruchsrecht (Artikel 21 DSGVO)</h4>
                    <p className="text-slate-500 text-xs font-semibold text-slate-700">
                      Sofern wir Ihre personenbezogenen Daten auf Basis eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO) verarbeiten, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen diese Verarbeitung einzulegen. Wir stellen die Verarbeitung ein, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen überwiegen.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0052b4] pl-4 space-y-1">
                    <h4 className="font-extrabold text-[#003067] text-sm">G. Widerruf einer erteilten Einwilligung (Artikel 7 Abs. 3 DSGVO)</h4>
                    <p className="text-slate-500 text-xs">
                      Einwilligungen, die Sie uns für bestimmte Verarbeitungsschritte erteilt haben (z. B. eine Evidenzhaltung Ihrer Bewerbung), können Sie jederzeit und ohne Angabe von Gründen mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt davon unberührt.
                    </p>
                  </div>

                </div>

                <div className="pt-6 border-t border-slate-100 mt-6">
                  <p className="font-bold text-[#003067] mb-2">Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde (Artikel 77 DSGVO):</p>
                  <p>
                    Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die Vorgaben der Datenschutz-Grundverordnung verstößt, steht Ihnen ein Beschwerderecht bei einer zuständigen Aufsichtsbehörde Ihrer Wahl zu. In Österreich ist hierfür die folgende Bundesbehörde zuständig:
                  </p>
                  <div className="bg-slate-50 border border-slate-100 p-5 font-sans text-xs sm:text-sm mt-3 space-y-1">
                    <p className="font-extrabold text-[#003067]">Österreichische Datenschutzbehörde (DSB)</p>
                    <p className="text-slate-600">Barichgasse 40-42</p>
                    <p className="text-slate-600">1030 Wien, Österreich</p>
                    <div className="pt-2 text-xs text-slate-500">
                      <p>Telefon: +43 1 52 152-0</p>
                      <p>E-Mail: <a href="mailto:dsb@dsb.gv.at" className="text-[#0052b4] font-bold hover:underline">dsb@dsb.gv.at</a></p>
                      <p>Webseite: <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="text-[#0052b4] font-bold hover:underline">www.dsb.gv.at</a></p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 9. Stand der Datenschutzerklärung */}
            <div className="pt-8 border-t border-slate-100 text-[#003067]/40 text-xs flex justify-between items-center font-mono uppercase tracking-widest mt-8">
              <span>Status: Gültig</span>
              <span>Zuletzt Aktualisiert: Juni 2026</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
