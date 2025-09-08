import Image from "next/image";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import TestiCarousel from "@/components/TestiCarousel";
import { testimonials } from "@/data/testimonials";
import { partners } from "@/data/partners";
import Link from "next/link";
import PartnerCarousel from "@/components/PartnerCarousel";
import Footer from "@/components/Footer";

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
        <section className="flex flex-row items-center justify-center sm:items-start gap-[16px] text-white pt-16 w-full bg-sow-blue ">
          <div className="flex flex-col items-center  gap-[16px]">
            <Image
              className=""
              src="/Aufkleber_Rund blau.png"
              alt="Sinn oder Weg Aufkleber Rund"
              width={425}
              height={425}
              priority
            />
            <div className="flex flex-col text-3xl">
              <h1>Coaching . Beratung.</h1>
              <h2>Interim Management</h2>
            </div>
          </div>
          <Image
            className=""
            src="/Carolin2.png"
            alt="Carolin Home"
            width={800}
            height={640}
            priority
          />
        </section>
        <section className="bg-sow-orange py-16 text-xl flex flex-col gap-8 text-sow-blue">
          <div className="max-w-5xl self-center flex flex-col gap-6 leading-snug">
            <p>
              In dieser Welt ist kein Platz mehr für Business-Theater, noch mehr
              Powerpoint und schicke Kommunikationskampagnen. Wir müssen unsere
              Entscheidungs- und Handlungsprinzipien nachhaltig überdenken und
              die knappen Ressourcen an den richtigen Stellen einsetzen.
            </p>
            <p>Mit Klarheit und Mut in Entscheidungen.</p>
            <p>Mit Konsequenz und Verantwortung in der Umsetzung.</p>
            <p>Dafür stehe ich mit “Hat das Sinn oder kann das weg?”</p>
          </div>
        </section>
        <section className="flex flex-row items-center justify-center  gap-10 text-white pt-16 w-full bg-sow-gold">
          <div className="max-w-7xl flex flex-row items-center justify-center gap-10">
            <Image
              className=""
              src="/Carolin4.png"
              alt="Carolin Profil"
              width={600}
              height={640}
            />
            <div className="flex flex-col items-start  gap-16">
              <div className="flex flex-col text-3xl">
                <span className="font-bold">Ich bin Carolin Peinecke.</span>
                <span>Coach | Beraterin | Interim Managerin</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl leading-snug">
                  Diplom-Psychologin | Anders Denkerin | Systemische Beraterin |
                  Pain in the neck | Unternehmerin | Neugierige Lernerin |
                  Organisationsentwicklerin | Führungskraft | Mutter | Agile
                  Projektmanagerin | Kommunikatorin
                </span>
              </div>
              <div className="flex flex-row items-center gap-6">
                <div className="button1 text-sow-gold bg-white hover:bg-sow-blue hover:text-white ">
                  Profil herunterladen
                </div>
                <Link
                  href={"https://linkedin.com/company/sinnoderweg"}
                  target="_blank"
                >
                  <Image
                    className=""
                    src="/linked_white.svg"
                    alt="LinkedIn Profil"
                    width={48}
                    height={48}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-sow-orange p-16 text-2xl flex flex-col gap-8 text-sow-blue">
          <div className="max-w-5xl self-center flex flex-col gap-6 mb-12">
            <h3 className="text-3xl font-bold my-10">Meine Leistungen</h3>
            <div className="grid grid-cols-3 gap-24">
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <Image
                    className="rounded-xl border-sow-blue border-2"
                    src="/Leistungen1.jpg"
                    alt="Einzel-Coaching"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }} // optional
                  />
                </div>
                <h4 className="font-bold text-xl uppercase">Einzel-Coaching</h4>
                <p className="text-base leading-relaxed mb-6">
                  Langfristiger Coaching-Prozess oder intensiver Coaching-Tag:
                  Ich challenge, unterstütze, inspiriere dich in deinen
                  Herausforderungen als Führungskraft. Gemeinsam hinterfragen
                  wir deine Prinzipien, Methoden und Strukturen, entwickeln dein
                  Führungshandeln zielgerichtet weiter und entwickeln
                  zukunftsrobuste Lösungen für deinen Verantwortungsbereich.
                </p>
                <Link
                  target="_blank"
                  href={
                    "leistungen/Produktblatt Einzel-Coaching Sinn oder weg GmbH - 2025.pdf"
                  }
                  className="button1 mt-auto w-full! text-center text-white bg-sow-blue hover:bg-white hover:text-sow-blue hover:border-sow-blue border-2"
                >
                  mehr erfahren
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <Image
                    className="rounded-xl border-sow-blue border-2"
                    src="/Leistungen2.jpg"
                    alt="Einzel-Coaching"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }} // optional
                  />
                </div>
                <h4 className="font-bold text-xl uppercase">Team-Coaching</h4>
                <p className="text-base leading-relaxed mb-6">
                  Gemeinsam als Führungsteam wachsen. In einem klar
                  strukturierten Prozess hinterfragen, ob Strategie, Strukturen
                  und Kultur noch die richtigen Antworten für diese Zeit sind.
                  Szenarien entwickeln, neue Lösungsmöglichkeiten durchdenken
                  und konkrete Schritte der Umsetzung einleiten. Daran arbeiten
                  wir gemeinsam in einem Team-Coaching.
                </p>
                <Link
                  target="_blank"
                  href={
                    "leistungen/Produktblatt Team-Coaching Sinn oder weg GmbH - 2025.pdf"
                  }
                  className="button1 mt-auto w-full! text-center text-white bg-sow-blue hover:bg-white hover:text-sow-blue hover:border-sow-blue border-2"
                >
                  mehr erfahren
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <Image
                    className="rounded-xl border-sow-blue border-2"
                    src="/Leistungen3.jpg"
                    alt="Einzel-Coaching"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }} // optional
                  />
                </div>
                <h4 className="font-bold text-xl uppercase">
                  Interim Management
                </h4>
                <p className="text-base leading-relaxed mb-6">
                  Change Management ist Führungsaufgabe. Doch gleichzeitig das
                  Geschäft am Laufen zu halten und notwendige Veränderungen
                  voranzutreiben, ist eine nahezu unmögliche Herausforderung.
                  Als Interim Managerin für Change-Prozesse halte ich die
                  Umsetzungsschritte im Blick, evaluiere die Ergebnisse, leite
                  Maßnahmen ein und unterstütze bei der zielgerichteten
                  Kommunikation.
                </p>
                <Link
                  target="_blank"
                  href={
                    "leistungen/Produktblatt Interim Management Sinn oder weg GmbH - 2025.pdf"
                  }
                  className="button1 mt-auto w-full! text-center text-white bg-sow-blue hover:bg-white hover:text-sow-blue hover:border-sow-blue border-2"
                >
                  mehr erfahren
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-row justify-center  gap-10 text-white py-28 w-full bg-sow-gold">
          <div className="max-w-6xl flex flex-row items-center justify-center gap-12 ">
            <div className="flex flex-col items-start  gap-16 ">
              <div className="flex flex-col text-4xl font-bold gap-8 leading-snug">
                <span>
                  Du suchst Prozessbegleitung für dein Change- oder
                  Transformationsprojekt?
                </span>
                <span>
                  Hier arbeite ich im Netzwerk der <br />
                  <span className="text-sow-pink">
                    Balancing Business Alliance
                  </span>
                </span>
              </div>
              <Link
                className="button1 text-sow-gold bg-white hover:bg-sow-pink hover:text-white "
                target="_blank"
                href={"https://www.balancingbusiness.de/"}
              >
                {" "}
                Zur Balancing Business Alliance
              </Link>
            </div>
            <div>
              <Image
                className="animate-[spin_20s_linear_infinite]"
                src="/bb_logo.png"
                alt="Balancing Business Alliance Logo"
                width={350}
                height={350}
              />
            </div>
          </div>
        </section>
        <section className="py-16 text-sow-blue">
          <div className="max-w-6xl m-auto flex flex-col my-20 gap-12">
            <h3 className="text-3xl font-bold  text-center">Kunden</h3>
            <PartnerCarousel partners={partners} />
          </div>
        </section>
        <section className="py-28 bg-sow-blue text-white">
          <div className="max-w-5xl m-auto flex flex-col">
            <h3 className="text-3xl font-bold  text-center">Feedback</h3>
            <TestiCarousel testimonials={testimonials} />
          </div>
        </section>
        <section className="bg-sow-orange p-16 text-2xl flex flex-col gap-8 text-sow-blue">
          <div className="max-w-6xl self-center flex flex-col gap-6 mb-12">
            <h3 className="text-3xl font-bold my-10">
              Lass uns in Kontakt bleiben!
            </h3>
            <div className="grid grid-cols-3 gap-16">
              <div className="flex flex-col gap-6 bg-sow-gold text-white p-6 rounded-xl text-center font-bold">
                <p className="text-lg leading-relaxed">
                  Folge mir auf LinkedIn und Instagram für Eindrücke meiner
                  Arbeit.
                </p>
                <div className="flex flex-row self-center items-center gap-6">
                  <Link
                    href="https://linkedin.com/company/sinnoderweg"
                    target="_blank"
                  >
                    <Image
                      className=""
                      src="/linked_white.svg"
                      alt="LinkedIn Profil"
                      width={36}
                      height={36}
                    />
                  </Link>
                  <Link
                    href={"https://www.instagram.com/sinnoderweg/"}
                    target="_blank"
                  >
                    <Image
                      className=""
                      src="/insta_white.svg"
                      alt="Instagram Profil"
                      width={36}
                      height={36}
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-6 bg-sow-gold text-white p-6 rounded-xl text-center font-bold">
                <p className="text-lg leading-relaxed">
                  Erhalte spannende Impulse zu Change, Führung und Strategie in
                  meinem Newsletter.
                </p>
                <div className="button1 mt-auto px-5! self-center text-sow-gold bg-white hover:bg-sow-blue hover:text-white ">
                  Newsletter abonnieren{" "}
                </div>
              </div>
              <div className="flex flex-col gap-6 bg-sow-gold text-white p-6 rounded-xl text-center font-bold">
                <p className="text-lg leading-relaxed">
                  Oder lass’ uns persönlich miteinander sprechen!
                </p>
                <Link
                  href={"https://calendly.com/sinn-oder-weg/kennenlernen"}
                  target="_blank"
                  className="button1 mt-auto self-center text-sow-gold bg-white hover:bg-sow-blue hover:text-white "
                >
                  Termin vereinbaren{" "}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
