import Image from "next/image";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import TestiCarousel from "@/components/TestiCarousel";
import { testimonials } from "@/data/testimonials";
import { partners } from "@/data/partners";
import Link from "next/link";
import PartnerCarousel from "@/components/PartnerCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  // weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className={`${roboto.className} `}>
      <main className="flex flex-col">
        <Header />
        <section className="p-16 flex flex-col gap-8 text-sow-blue">
          <div className="max-w-5xl m-auto flex flex-col gap-5">
            <h1 className="font-bold text-2xl">Datenschutz</h1>
            <p>
              Meine Website-Adresse ist: https://sinnoderweg.de.
              <br />
              Ich freue mich &uuml;ber Dein Interesse an meiner Website. Ich
              nehme den Schutz Deiner Daten sehr ernst. Ich halte mich strikt an
              die gesetzlichen Bestimmungen der Datenschutz-Grundverordnung und
              des Telemediengesetzes. Gegenstand des Datenschutzes sind
              personenbezogene Daten. Hier erf&auml;hrst Du, welche Daten ich
              wann erheben und wie ich sie verwenden.
            </p>
            <h5>Verantwortlichkeit</h5>
            <p>
              Die f&uuml;r die Verarbeitung Verantwortliche ist Carolin
              Peinecke, s&auml;mtliche Kontaktdaten findest Du auch im
              Impressum.
            </p>
            <h5>Erfassung allgemeiner Informationen</h5>
            <p>
              Du kannst meine Webseite besuchen, ohne Angaben zu Deiner Person
              zu machen. Sobald Du meine Seiten &ouml;ffnest, werden allerdings
              durch mich, respektive meinen Webspace-Betreiber, automatisch
              Informationen erfasst. Hierbei handelt es sich um die sogenannten
              Server-Logfiles, welche eher allgemein sind und keine
              R&uuml;ckschl&uuml;sse (bis auf die IP-Adresse, siehe weiter
              unten) auf den Benutzer zulassen. Es werden unter anderem erfasst:
            </p>
            <ul>
              <li>Name der Website</li>
              <li>Datei,</li>
              <li>Datum,</li>
              <li>Datenmenge,</li>
              <li>Webbrowser und Webbrowser-Version,</li>
              <li>Betriebssystem,</li>
              <li>der Domainname Deines Internet-Providers,</li>
              <li>
                die sogenannte Referrer-URL (die Seite von der aus Du auf meine
                Seiten gelangt bist &ndash; z. B. Google im Rahmen einer
                Suchanfrage) und
              </li>
              <li>die IP-Adresse</li>
              <li>Deine IP-Adresse</li>
            </ul>
            <p>
              Ohne Internet-Protokoll-Adressen, kurz &bdquo;IP-Adressen&ldquo;,
              w&uuml;rde &ndash; sehr vereinfacht ausgedr&uuml;ckt &ndash; das
              Internet nicht funktionieren. Eine IP-Adresse stellt in
              Computernetzen eine Adresse dar, damit dar&uuml;ber Webserver
              und/oder einzelne Endger&auml;te angesprochen und erreicht werden
              k&ouml;nnen. IP-Adressen gelten nach inzwischen &uuml;berwiegender
              Rechtsauffassung als personenbezogene Daten. Wir speichern die
              IP-Adressen unserer Besucher nicht in den Logfiles. Anstelle der
              tats&auml;chlichen IP der Besucher steht dort immer nur die Zahl
              127.0.0.1. Deine IP-Adresse ist somit anonymisiert!
            </p>
            <p>
              Ich verwende die Protokolldaten ohne Zuordnung zur Person des
              Nutzers oder sonstiger Profilerstellung entsprechend den
              gesetzlichen Bestimmungen nur f&uuml;r statistische Auswertungen
              zum Zweck des Betriebs, der Sicherheit und der Optimierung des
              Angebotes. Ich behalte mir jedoch vor, die Protokolldaten
              nachtr&auml;glich zu &uuml;berpr&uuml;fen, wenn aufgrund konkreter
              Anhaltspunkte der berechtigte Verdacht einer rechtswidrigen
              Nutzung besteht.
            </p>
            <h5>Personenbezogene Daten</h5>
            <p>
              Personenbezogene Daten sind Daten, mittels derer eine Person
              eindeutig identifizierbar ist. Hierzu z&auml;hlen z. B. Name,
              Vorname, Adresse, Geburtsdatum, Telefonnummer aber auch
              Internetseiten der Person etc. Erst wenn Du mit mir in Kontakt
              trittst und mir dazu eine E-Mail schickst, gibst Du
              personenbezogene Daten an.
            </p>
            <p>
              Ich erhebe, speichere oder verarbeite Daten nur f&uuml;r die
              Aus&uuml;bung eigener Gesch&auml;ftszwecke. Personenbezogene Daten
              werden ausschlie&szlig;lich in dem Umfang abgefragt, verarbeitet
              und genutzt, in dem es erforderlich ist, um von dir abgefragte
              Leistungen zu erbringen oder Inhalte bereitzustellen.
              <br />
              Ich leite die Daten an Dritte weiter, wenn dies auf Grundlage
              einer Einwilligung geschieht oder gesetzlich erlaubt ist, um meine
              vertraglichen Pflichten den Nutzern gegen&uuml;ber zu
              erf&uuml;llen.
            </p>
            <h5>Kontakt per Mail</h5>
            <p>
              Wenn Du mir eine E-Mail sendest, wird Deine E-Mail-Adresse nur
              f&uuml;r die Korrespondenz mit Dir verwendet. Auf andere Zwecke
              w&uuml;rde ich ausdr&uuml;cklich hinweisen und hierf&uuml;r Deine
              Einwilligung erbitten.
            </p>
            <h5>Cookies</h5>
            <p>
              Auf meiner Webseite werden einige wenige Cookies verwendet. Bei
              Cookies handelt es sich um kleine Textdateien, die eine Webseite
              auf dem Computer eines Webseitenbesuchers ablegt, also lokal
              speichern kann. Cookies erleichtern die Nutzung der Webseite. So
              speichern Cookies z. B. die Eingabe der Daten im Kontaktformular,
              was Dir eine erneute Eingabe erleichtert. Welche Cookies ich genau
              verwende, kannst Du erkennen, indem Du in Deiner Browser-Software
              auf Einstellungen, gegebenenfalls weitere Einstellungen, und dann
              auf Inhaltseinstellungen und/oder Cookie-Verwaltung klickst (jede
              Browser-Software hat hier eine leicht andere
              Men&uuml;-F&uuml;hrung).
              <br />
              Du kanst die Installation von Cookies verhindern, indem Du die
              Installation der Cookies durch eine entsprechende Einstellung in
              der Browser-Software unterbindest (unter Einstellungen bei den
              meisten Browsern zu finden). Es ist allerdings darauf hinzuweisen,
              dass Du in diesem Fall gegebenenfalls nicht s&auml;mtliche
              Funktionen meiner Webseite vollumf&auml;nglich nutzen kannst.
            </p>
            <h5>L&ouml;schung von Daten</h5>
            <p>
              Ich bin den Grunds&auml;tzen der Datenvermeidung und
              Datensparsamkeit verpflichtet. Soweit nicht vorliegend anders be-
              oder gesetzlich vorgeschrieben, speichere ich Deine Daten nur so
              lange, wie ich Deine Daten, z. B. zur Bearbeitung eines Anliegens,
              ben&ouml;tigen.
            </p>
            <h5>Dein Recht auf Auskunftserteilung</h5>
            <p>
              Gem. &sect; 34 und &sect; 35 des Bundesdatenschutzgesetzes hast Du
              als Nutzer das Recht, jederzeit Auskunft dar&uuml;ber zu
              verlangen, welche Daten &uuml;ber Dich bei mir gespeichert sind
              und zu welchem Zweck diese Speicherung erfolgt. Zus&auml;tzlich
              hast Du als Nutzer das Recht auf Berichtigung unrichtiger Daten,
              Widerruf von Einwilligungen, Sperrung und L&ouml;schung Deiner
              personenbezogenen Daten sowie das Recht, im Fall der Annahme einer
              unrechtm&auml;&szlig;igen Datenverarbeitung eine Beschwerde bei
              der zust&auml;ndigen Aufsichtsbeh&ouml;rde einzureichen.
            </p>
            <h5>Sicherheit Deiner Daten</h5>
            <p>
              Deine uns zur Verf&uuml;gung gestellten pers&ouml;nlichen Daten
              werden durch Ergreifung aller technischen sowie organisatorischen
              Sicherheitsma&szlig;nahmen so gesichert, dass sie f&uuml;r den
              Zugriff unberechtigter Dritter m&ouml;glichst unzug&auml;nglich
              sind. Ich weise darauf hin, dass die Daten&uuml;bertragung im
              Internet (z. B. bei der Kommunikation per E-Mail)
              Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz
              der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich. Bei
              Versendung von sehr sensiblen Daten oder Informationen ist es
              empfehlenswert, den Postweg zu nutzen.
            </p>
            <h5>&Auml;nderung meiner Datenschutzbestimmungen</h5>
            <p>
              Ich behalte mir vor, diese Datenschutzerkl&auml;rung gelegentlich
              anzupassen, damit sie stets den aktuellen rechtlichen
              Anforderungen entspricht oder um &Auml;nderungen unserer
              Leistungen in der Datenschutzerkl&auml;rung umzusetzen, z. B. bei
              der Einf&uuml;hrung neuer Services. F&uuml;r deinen erneuten
              Besuch gilt dann die neue Datenschutzerkl&auml;rung. Mit der
              Nutzung der Webseite erkl&auml;rst Du dich mit den Bedingungen
              dieser Richtlinien zum Schutz pers&ouml;nlicher Daten
              einverstanden. Bei Fragen zu diesen Datenschutzbestimmungen wende
              Dich bitte &uuml;ber meine Kontakt-Seite an mich.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
