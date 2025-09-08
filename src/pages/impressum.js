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
            <h1 className="font-bold text-2xl">Impressum</h1>
            <p>
              Sinn oder weg GmbH
              <br />
              Steige 14
              <br />
              37603 Holzminden
              <br />
              +49 5531 8140558
              <br />
              carolin.peinecke@sinnoderweg.de
              <br />
              www.sinnoderweg.de
            </p>
            <p>
              Handelsregister&nbsp;Registergericht: Hildesheim
              <br />
              Registernummer: HRB 207431
              <br />
              Gesch&auml;ftsf&uuml;hrende Gesellschafterin: Carolin
              Peinecke-Gr&uuml;nig
            </p>
            <p>
              Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect;27 a
              Umsatzsteuergesetz:DE341434492
            </p>
            <p>
              <strong>Inhaltlich Verantwortlicher gem. </strong>
              <strong>&sect;5 TMG:</strong>
              <br />
              Carolin Peinecke
              <br />
              E-Mail: carolin.peinecke@sinnoderweg.de&nbsp;
            </p>
            <p>
              <strong>
                Inhaltlich Verantwortlicher gem. &sect;55 RStV (V. i. S. d. P.):
              </strong>
              <strong> </strong>
            </p>
            <p>Carolin Peinecke</p>
            <p>E-Mail: carolin.peinecke@sinnoderweg.de</p>
            <p>
              <strong>Fotos</strong>
              <br />
              Expomotion, Jennifer Pitton
              <br />
              Knusperfarben f&uuml;r It&rsquo;s about Leadership
            </p>
            <p>
              <strong>Konzept und Design</strong>
              <br />
              Agentur Weserwerk, Anja Beineke
            </p>
            <p>
              <strong>Umsetzung</strong>
              <br />
              COLOR+ GmbH, Lars Knoke
            </p>
            <h4>Disclaimer &ndash; rechtliche Hinweise</h4>
            <h5>1. Haftungsbeschr&auml;nkung</h5>
            <p>
              Die Inhalte dieser Website werden mit
              gr&ouml;&szlig;tm&ouml;glicher Sorgfalt erstellt. Der Anbieter
              &uuml;bernimmt jedoch keine Gew&auml;hr f&uuml;r die Richtigkeit,
              Vollst&auml;ndigkeit und Aktualit&auml;t der bereitgestellten
              Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene
              Gefahr des Nutzers. Namentlich gekennzeichnete Beitr&auml;ge geben
              die Meinung des jeweiligen Autors und nicht immer die Meinung des
              Anbieters wieder. Mit der reinen Nutzung der Website des Anbieters
              kommt keinerlei Vertragsverh&auml;ltnis zwischen dem Nutzer und
              dem Anbieter zustande.
            </p>
            <h5>2. Externe Links</h5>
            <p>
              Diese Website enth&auml;lt Verkn&uuml;pfungen zu Websites Dritter
              (&bdquo;externe Links&ldquo;). Diese Websites unterliegen der
              Haftung der jeweiligen Betreiber. Der Anbieter hat bei der
              erstmaligen Verkn&uuml;pfung der externen Links die fremden
              Inhalte daraufhin &uuml;berpr&uuml;ft, ob etwaige
              Rechtsverst&ouml;&szlig;e bestehen. Zu dem Zeitpunkt waren keine
              Rechtsverst&ouml;&szlig;e ersichtlich. Der Anbieter hat keinerlei
              Einfluss auf die aktuelle und zuk&uuml;nftige Gestaltung und auf
              die Inhalte der verkn&uuml;pften Seiten. Das Setzen von externen
              Links bedeutet nicht, dass sich der Anbieter die hinter dem
              Verweis oder Link liegenden Inhalte zu Eigen macht. Eine
              st&auml;ndige Kontrolle dieser externen Links ist f&uuml;r den
              Anbieter ohne konkrete Hinweise auf Rechtsverst&ouml;&szlig;e
              nicht zumutbar. Bei Kenntnis von Rechtsverst&ouml;&szlig;en werden
              jedoch derartige externe Links unverz&uuml;glich gel&ouml;scht.
            </p>
            <h5>3. Urheber- und Leistungsschutzrechte</h5>
            <p>
              Die auf dieser Website ver&ouml;ffentlichten Inhalte unterliegen
              dem deutschen Urheber- und Leistungsschutzrecht. Jede vom
              deutschen Urheber- und Leistungsschutzrecht nicht zugelassene
              Verwertung bedarf der vorherigen schriftlichen Zustimmung des
              Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere
              f&uuml;r Vervielf&auml;ltigung, Bearbeitung, &Uuml;bersetzung,
              Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in
              Datenbanken oder anderen elektronischen Medien und Systemen.
              Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet.
              Die unerlaubte Vervielf&auml;ltigung oder Weitergabe einzelner
              Inhalte oder kompletter Seiten ist nicht gestattet und strafbar.
              Lediglich die Herstellung von Kopien und Downloads f&uuml;r den
              pers&ouml;nlichen, privaten und nicht kommerziellen Gebrauch ist
              erlaubt. Die Darstellung dieser Website in fremden Frames ist nur
              mit schriftlicher Erlaubnis zul&auml;ssig.
            </p>
            <h5>4. Google Analytics</h5>
            <p>
              Diese Website benutzt Google Analytics, einen Webanalysedienst der
              Google Inc. (&ldquo;Google&rdquo;). Google Analytics verwendet
              sog. &ldquo;Cookies&rdquo;, Textdateien, die auf Ihrem Computer
              gespeichert werden und die eine Analyse der Benutzung der Website
              erm&ouml;glichen. Die durch den Cookie erzeugten Informationen
              &uuml;ber Ihre Benutzung dieser Website werden in der Regel an
              einen Server von Google in den USA &uuml;bertragen und dort
              gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf
              dieser Webseite wird Ihre IP-Adresse von Google jedoch innerhalb
              von Mitgliedstaaten der Europ&auml;ischen Union oder in anderen
              Vertragsstaaten des Abkommens &uuml;ber den Europ&auml;ischen
              Wirtschaftsraum zuvor gek&uuml;rzt. Nur in Ausnahmef&auml;llen
              wird die volle IP-Adresse an einen Server von Google in den USA
              &uuml;bertragen und dort gek&uuml;rzt. Im Auftrag des Betreibers
              dieser Website wird Google diese Informationen benutzen, um Ihre
              Nutzung der Website auszuwerten, um Reports &uuml;ber die
              Websiteaktivit&auml;ten zusammenzustellen und um weitere mit der
              Websitenutzung und der Internetnutzung verbundene Dienstleistungen
              gegen&uuml;ber dem Websitebetreiber zu erbringen. Die im Rahmen
              von Google Analytics von Ihrem Browser &uuml;bermittelte
              IP-Adresse wird nicht mit anderen Daten von Google
              zusammengef&uuml;hrt. Sie k&ouml;nnen die Speicherung der Cookies
              durch eine entsprechende Einstellung Ihrer Browser-Software
              verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem
              Fall gegebenenfalls nicht s&auml;mtliche Funktionen dieser Website
              vollumf&auml;nglich werden nutzen k&ouml;nnen. Sie k&ouml;nnen
              dar&uuml;ber hinaus die Erfassung der durch das Cookie erzeugten
              und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer
              IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch
              Google verhindern, indem sie das unter dem folgenden Link
              verf&uuml;gbare Browser-Plugin herunterladen und installieren:
              http://tools.google.com/dlpage/gaoptout?hl=de. Der Anbieter weist
              ausdr&uuml;cklich darauf hin, dass die Daten&uuml;bertragung im
              Internet (z.B. bei der Kommunikation per E-Mail)
              Sicherheitsl&uuml;cken aufweisen und nicht l&uuml;ckenlos vor dem
              Zugriff durch Dritte gesch&uuml;tzt werden kann. Die Verwendung
              der Kontaktdaten des Impressums zur gewerblichen Werbung ist
              ausdr&uuml;cklich nicht erw&uuml;nscht, es sei denn der Anbieter
              hatte zuvor seine schriftliche Einwilligung erteilt oder es
              besteht bereits eine Gesch&auml;ftsbeziehung. Der Anbieter und
              alle auf dieser Website genannten Personen widersprechen hiermit
              jeder kommerziellen Verwendung und Weitergabe ihrer Daten.
            </p>
            <h5>5. Besondere Nutzungsbedingungen</h5>
            <p>
              Soweit besondere Bedingungen f&uuml;r einzelne Nutzungen dieser
              Website von den vorgenannten Nummern 1. bis 4. abweichen, wird an
              entsprechender Stelle ausdr&uuml;cklich darauf hingewiesen. In
              diesem Falle gelten im jeweiligen Einzelfall die besonderen
              Nutzungsbedingungen.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
