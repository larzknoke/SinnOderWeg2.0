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
            <h1 className="font-bold text-2xl">AGB</h1>
            <h5>Allgemeine Gesch&auml;ftsbedingungen der</h5>
            <p>
              Sinn oder weg GmbH
              <br />
              Steige 14
              <br />
              37603 Holzminden
            </p>
            <h5>Stand 1. M&auml;rz 2021</h5>
            <h5>Pr&auml;ambel</h5>
            <p>
              Bei Sinn oder weg arbeiten wir gerne mit unseren Kunden zusammen
              und helfen ihnen, strategisch wichtige Herausforderungen zu
              bew&auml;ltigen. Diese Beratungsarbeit setzt ein gegenseitiges
              Vertrauensverh&auml;ltnis voraus. Nicht immer sind die
              gegenseitigen Erwartungen vollst&auml;ndig transparent. Aus diesem
              Grunde wurden nachfolgend einige wesentliche Eckpunkte in den von
              Sinn oder weg verwendeten Gesch&auml;ftsbedingungen festgehalten.
            </p>
            <h5>1. Allgemeine Grundlagen / Geltungsbereich</h5>
            <p>
              1.1
              <br />
              F&uuml;r s&auml;mtliche Rechtsgesch&auml;fte zwischen dem
              Auftraggeber und der Sinn oder weg GmbH (Sinn oder weg) gelten
              ausschlie&szlig;lich diese Gesch&auml;ftsbedingungen.
              Ma&szlig;geblich ist jeweils die zum Zeitpunkt des
              Vertragsabschlusses g&uuml;ltige Fassung.
              <br />
              1.2
              <br />
              Gegen&uuml;ber Unternehmern und juristischen Personen des
              &ouml;ffentlichen Rechts gelten unsere Bedingungen auch f&uuml;r
              alle zuk&uuml;nftigen Gesch&auml;ftsbeziehungen.
              <br />
              1.3
              <br />
              Entgegenstehende Allgemeine Gesch&auml;ftsbedingungen des
              Auftraggebers sind f&uuml;r Sinn oder weg nur dann verbindlich,
              wenn diese von Sinn oder weg ausdr&uuml;cklich schriftlich
              anerkannt wurden.
            </p>
            <h5>
              2. Vertragsbestandteile, Leistungsumfang, Vertrags- und
              Leistungs&auml;nderungen
            </h5>
            <p>
              2.1
              <br />
              Der Umfang eines konkreten Beratungsauftrages wird im Einzelfall
              vertraglich vereinbart.
              <br />
              2.2
              <br />
              Soweit nicht ausdr&uuml;cklich etwas anderes vereinbart wurde, ist
              Gegenstand des Beratungsvertrages die vereinbarte
              Beratungst&auml;tigkeit, nicht die Herbeif&uuml;hrung eines
              bestimmten wirtschaftlichen Erfolges oder Herstellung eines
              Werkes.
              <br />
              2.3
              <br />
              Die Leistungen von Sinn oder weg sind erbracht, wenn die
              erforderlichen Untersuchungen, Analysen und die sich daraus
              ergebenden Schlussfolgerungen mit dem Auftraggeber erarbeitet
              sind. Unerheblich ist, ob oder wann unsere Schlussfolgerungen oder
              Empfehlungen vom Auftraggeber umgesetzt werden.
              <br />
              2.4
              <br />
              &Auml;nderungen, Erg&auml;nzungen oder Erweiterungen des
              Angebotes, des Auftrages, des Leistungsumfanges/-inhaltes, der
              Aufgabenstellung, der Vorgehensweise und der Art der
              Arbeitsergebnisse bed&uuml;rfen der Schriftform.
              <br />
              2.5
              <br />
              Soll ein schriftlicher Bericht gegen&uuml;ber dem Auftraggeber,
              insbesondere zur Vorlage an Dritte erstellt werden, muss dies
              vorab gesondert vereinbart werden.
              <br />
              2.6
              <br />
              Sinn oder weg ist berechtigt, die ihm obliegenden Aufgaben ganz
              oder teilweise durch Dritte erbringen zu lassen. Die Bezahlung des
              Dritten erfolgt ausschlie&szlig;lich durch Sinn oder weg selbst.
              Es entsteht kein wie immer geartetes direktes
              Vertragsverh&auml;ltnis zwischen dem Dritten und dem Auftraggeber.
            </p>
            <h5>
              3. Aufkl&auml;rungspflicht des Auftraggebers /
              Vollst&auml;ndigkeitserkl&auml;rung
            </h5>
            <p>
              3.1
              <br />
              Der Auftraggeber sorgt daf&uuml;r, dass die organisatorischen
              Rahmenbedingungen bei Erf&uuml;llung des Beratungsauftrages an
              seinem Gesch&auml;ftssitz ein m&ouml;glichst ungest&ouml;rtes, dem
              raschen Fortgang des Beratungsprozesses f&ouml;rderliches Arbeiten
              erlauben.
              <br />
              3.2
              <br />
              Der Auftraggeber wird Sinn oder weg auch &uuml;ber vorher
              durchgef&uuml;hrte und/oder laufende Beratungen &ndash; auch auf
              anderen Fachgebieten &ndash; umfassend informieren.
              <br />
              3.3
              <br />
              Der Auftraggeber sorgt daf&uuml;r, dass Sinn oder weg auch ohne
              dessen besondere Aufforderung alle f&uuml;r die Erf&uuml;llung und
              Ausf&uuml;hrung des Beratungsauftrages notwendigen Informationen
              zeitgerecht vorgelegt werden und ihm von allen Vorg&auml;ngen und
              Umst&auml;nden Kenntnis gegeben wird, die f&uuml;r die
              Ausf&uuml;hrung des Beratungsauftrages von Bedeutung sind. Dies
              gilt auch f&uuml;r alle Unterlagen, Vorg&auml;nge und
              Umst&auml;nde, die erst w&auml;hrend der T&auml;tigkeit des
              Beraters bekannt werden.
              <br />
              3.4
              <br />
              Der Auftraggeber sorgt daf&uuml;r, dass seine Mitarbeiter und die
              gesetzlich vorgesehene und gegebenenfalls eingerichtete
              Arbeitnehmervertretung (Betriebsrat) bereits vor Beginn der
              T&auml;tigkeit Sinn oder wegs von dieser informiert werden.
            </p>
            <h5>4. Sicherung der Unabh&auml;ngigkeit</h5>
            <p>
              4.1
              <br />
              Die Vertragspartner verpflichten sich zur gegenseitigen
              Loyalit&auml;t.
              <br />
              4.2
              <br />
              Die Vertragspartner verpflichten sich gegenseitig, alle
              Vorkehrungen zu treffen, die geeignet sind, die Gef&auml;hrdung
              der Unabh&auml;ngigkeit der beauftragten Dritten und Mitarbeiter
              Sinn oder wegs zu verhindern. Dies gilt insbesondere f&uuml;r
              Angebote des Auftraggebers auf Anstellung bzw. der &Uuml;bernahme
              von Auftr&auml;gen auf eigene Rechnung.
            </p>
            <h5>5. Schutz des geistigen Eigentums</h5>
            <p>
              5.1
              <br />
              Soweit abweichend von Ziffer 2.2 dieser Bedingungen im Rahmen
              eines Beratungsauftrages Werkleistungen zu erbringen sind,
              r&auml;umen wir dem Auftraggeber an den erarbeiteten Ergebnissen
              (beispielsweise Konzepten, Gutachten oder &Auml;hnlichem), soweit
              nicht vertraglich ausdr&uuml;cklich etwas anderes geregelt ist,
              ein einfaches, d.h. nicht ausschlie&szlig;liches Nutzungsrecht
              ein. Die Ausgestaltung des Nutzungsrechtes ergibt sich aus der
              jeweils konkret getroffenen Vereinbarung. Soweit die Ergebnisse
              nicht von Sinn oder weg erarbeitet wurden, vermittelt Sinn oder
              weg regelm&auml;&szlig;ig lediglich einen Vertrag mit dem
              Fremdanbieter. Der Auftraggeber erkennt deshalb die mitgelieferten
              Nutzungsbedingungen des Fremdanbieters an, auf die wir
              ausdr&uuml;cklich hinweisen; diese sind f&uuml;r den Umfang der
              Rechteeinr&auml;umung durch den Fremdanbieter ma&szlig;geblich.
              <br />
              5.2.
              <br />
              Unabh&auml;ngig vom Umfang der Rechte&uuml;bertragung auf den
              Auftraggeber ist es Sinn oder weg in jedem Fall gestattet, Ideen,
              Konzeptionen, erworbenes Know-how usw. f&uuml;r weitere Leistungen
              auch f&uuml;r andere Auftraggeber zu nutzen.
              <br />
              5.3
              <br />
              Der Versto&szlig; des Auftraggebers gegen diese Bestimmungen
              berechtigt Sinn oder weg zur Geltendmachung anderer gesetzlicher
              Anspr&uuml;che, insbesondere auf Unterlassung und/oder
              Schadensersatz.
            </p>
            <h5>
              6. M&auml;ngelanspr&uuml;che f&uuml;r gesonderte Werkleistungen
            </h5>
            <p>
              6.1
              <br />
              Sinn oder weg ist berechtigt und verpflichtet, bekanntwerdende
              Unrichtigkeiten und M&auml;ngel an seiner Leistung zu beheben.
              Sinn oder weg wird den Auftraggeber hiervon unverz&uuml;glich in
              Kenntnis setzen.
              <br />
              6.2
              <br />
              Sind &ndash; abweichend von Ziffer 2.2 dieser Bedingungen &ndash;
              neben der Beratung gesondert vereinbarte Werkleistungen Gegenstand
              des Vertrages, gelten f&uuml;r M&auml;ngelanspr&uuml;che die
              nachfolgen Bestimmungen.
              <br />
              6.3
              <br />
              Sinn oder weg hat einen Mangel dann nicht zu vertreten, wenn der
              Mangel auf der vom Auftraggeber gegebenen Aufgabenstellung oder
              der fehlerhaften oder unzureichenden Mitwirkung des Auftraggebers
              beruht. Hat der Auftraggeber Eingriffe in das gelieferte
              Arbeitsergebnis vorgenommen, so bestehen M&auml;ngelanspr&uuml;che
              nur, wenn der Auftraggeber nachweist, dass sein Eingriff nicht
              urs&auml;chlich f&uuml;r den Mangel war.
            </p>
            <h5>7. Haftung / Schadensersatz</h5>
            <p>
              7.1
              <br />
              Sinn oder weg haftet dem Auftraggeber f&uuml;r Sch&auml;den nur im
              Falle groben Verschuldens (Vorsatz oder grobe
              Fahrl&auml;ssigkeit). Au&szlig;er im Falle von Vorsatz ist unsere
              Ersatzpflicht der H&ouml;he nach auf den Ersatz des
              vertragstypischen vorhersehbaren Schadens begrenzt. Soweit wir in
              F&auml;llen einfacher Fahrl&auml;ssigkeit haften, gilt jedoch in
              jedem Fall: f&uuml;r Verm&ouml;genssch&auml;den pro Schadensfall
              eine Begrenzung auf maximal &euro; 50.000; bei Sachsch&auml;den
              gilt in F&auml;llen einfacher Fahrl&auml;ssigkeit pro Schadensfall
              eine Begrenzung von &euro; 100.000. Die Haftung f&uuml;r
              Sch&auml;den aus der Verletzung des Lebens, des K&ouml;rpers oder
              der Gesundheit und die Produkthaftung bleiben von vorstehenden
              Haftungsregelungen unber&uuml;hrt.
              <br />
              7.2
              <br />
              Soweit gem&auml;&szlig; vorstehender Regelungen unsere Haftung auf
              Schadensersatz ausgeschlossen oder beschr&auml;nkt ist, erstreckt
              sich dies auch auf die pers&ouml;nliche Haftung unserer Organe,
              Arbeitnehmer und sonstiger Mitarbeiter, Vertreter und
              Erf&uuml;llungsgehilfen und gilt auch f&uuml;r alle Anspr&uuml;che
              wegen Verschuldens bei Vertragsverhandlungen, Verletzung von
              Nebenpflichten und Anspr&uuml;chen aus unerlaubter Handlung
              (&sect;&sect; 823 ff. BGB), nicht hingegen f&uuml;r Anspr&uuml;che
              gem&auml;&szlig; der &sect;&sect; 1, 4 ProdHaftG.
            </p>
            <h5>8. Verj&auml;hrung</h5>
            <p>
              8.1
              <br />
              Soweit M&auml;ngelanspr&uuml;che des Auftraggebers betroffen sind,
              verj&auml;hren diesen in einem Jahr von dem gesetzlichen
              Verj&auml;hrungsbeginn an. Ausgenommen hiervon sind Anspr&uuml;che
              nach 634a Abs.1 Nr. 2 BGB.
              <br />
              8.2
              <br />
              Weiterhin ausgenommen sind M&auml;ngelanspr&uuml;che von
              Verbrauchern sowie Schadensersatzanspr&uuml;che wegen der
              Verletzung von Leben, K&ouml;rper oder Gesundheit und/oder
              Schadensersatzanspr&uuml;che aufgrund von grob fahrl&auml;ssig
              oder vors&auml;tzlich verursachten Sch&auml;den durch Sinn oder
              weg. Insoweit gelten die gesetzlichen Verj&auml;hrungsfristen.
              <br />
              8.3
              <br />
              Sonstige vertragliche Anspr&uuml;che wegen Pflichtverletzungen
              verj&auml;hren nach einem Jahr von dem gesetzlichen
              Verj&auml;hrungsbeginn an.
            </p>
            <h5>9. Geheimhaltung / Datenschutz</h5>
            <p>
              9.1
              <br />
              Sinn oder weg verpflichtet sich zu unbedingtem Stillschweigen
              &uuml;ber alle ihm zur Kenntnis gelangenden gesch&auml;ftlichen
              Angelegenheiten, insbesondere Gesch&auml;fts- und
              Betriebsgeheimnisse sowie jedwede Information, die Sinn oder weg
              &uuml;ber Art, Betriebsumfang und praktische T&auml;tigkeit des
              Auftraggebers erh&auml;lt.
              <br />
              9.2
              <br />
              Weiterhin verpflichtet sich Sinn oder weg, &uuml;ber den gesamten
              Inhalt des Projektes sowie s&auml;mtliche Informationen und
              Umst&auml;nde, die ihm im Zusammenhang mit der Erbringung der
              Beratungsleistungen zugegangen sind, insbesondere auch &uuml;ber
              die Daten von Gesch&auml;ftspartnern des Auftraggebers, Dritten
              gegen&uuml;ber Stillschweigen zu bewahren.
              <br />
              9.3
              <br />
              Sinn oder weg ist von der Schweigepflicht gegen&uuml;ber
              Mitarbeitern und herangezogenen Dritten (Erf&uuml;llungsgehilfen),
              denen es sich bedient, entbunden. Sinn oder weg hat die
              Schweigepflicht aber auf diese vollst&auml;ndig zu &uuml;bertragen
              und haftet f&uuml;r deren Versto&szlig; gegen die
              Verschwiegenheitsverpflichtung wie f&uuml;r einen eigenen
              Versto&szlig;.
              <br />
              9.4
              <br />
              Die Schweigepflicht reicht unbegrenzt auch &uuml;ber das Ende
              dieses Vertragsverh&auml;ltnisses hinaus. Ausnahmen bestehen im
              Falle gesetzlich vorgesehener Aussageverpflichtungen.
              <br />
              9.5
              <br />
              Sinn oder weg verarbeitet personenbezogene Daten nach den jeweils
              einschl&auml;gigen datenschutzrechtlichen Bestimmungen,
              insbesondere den Regelungen der EU-Datenschutzgrundverordnung
              (DSGVO). Soweit wir personenbezogene Daten im Auftrag der
              Auftraggeber verarbeiten, schaffen wir hierf&uuml;r die notwendige
              Rechtsgrundlage und schlie&szlig;en erforderlichenfalls
              Auftragsverarbeitungsvereinbarungen gem&auml;&szlig; Artikel 28
              DSGVO ab.
              <br />
              9.6
              <br />
              Auftraggeber und Sinn oder weg verpflichten sich, alle
              gesch&auml;ftlichen Informationen, die Gegenstand dieses Vertrages
              sind, streng vertraulich zu behandeln sowie alle erforderlichen
              Ma&szlig;nahmen zu treffen, um zu verhindern, dass sie Dritten
              zug&auml;nglich oder von diesen f&uuml;r eigene Zwecke verwendet
              werden. Hierzu sind auch ggf. Arbeitnehmer und sonstige
              Erf&uuml;llungsgehilfen zu verpflichten.
              <br />
              9.7
              <br />
              Der Auftraggeber stimmt zu, dass Sinn oder weg das Projekt Dritten
              gegen&uuml;ber m&uuml;ndlich wie schriftlich als Referenz benennen
              darf. Eine weitergehende Verwendung der Projektergebnisse im
              Rahmen des Marketings ist nach schriftlicher Zustimmung des
              Auftraggebers m&ouml;glich.
            </p>
            <h5>10. Honorar</h5>
            <p>
              10.1
              <br />
              Nach Vollendung des vereinbarten Projektes erh&auml;lt Sinn oder
              weg ein Honorar gem&auml;&szlig; der Vereinbarung zwischen dem
              Auftraggeber und Sinn oder weg. Sinn oder weg als Auftragnehmer
              ist berechtigt, dem Arbeitsfortschritt entsprechend monatliche
              Zwischenabrechnungen zu legen und dem jeweiligen Fortschritt
              entsprechende Abschlagszahlungen zu verlangen. Das Honorar ist
              jeweils mit Rechnungslegung durch Sinn oder weg f&auml;llig.
              <br />
              10.2
              <br />
              Sinn oder weg wird jeweils eine zum Vorsteuerabzug berechtigende
              Rechnung mit allen gesetzlich erforderlichen Merkmalen ausstellen.
              <br />
              10.3
              <br />
              Unterbleibt die Ausf&uuml;hrung des vereinbarten Projektes aus
              Gr&uuml;nden, die auf Seiten des Auftraggebers liegen oder
              aufgrund einer berechtigten vorzeitigen Beendigung des
              Vertragsverh&auml;ltnisses durch Sinn oder weg, so beh&auml;lt
              Sinn oder weg den Anspruch auf Zahlung des vereinbarten Honorars
              abz&uuml;glich ersparter Aufwendungen.
              <br />
              &bull; Bei Absage von weniger als elf Werktagen vor
              Leistungserbringung: 25 % des Honorars.
              <br />
              &bull; Bei Absage von weniger als sechs Werktagen vor
              Leistungserbringung: 50 % des Honorars.
              <br />
              &bull; Bei Absage von weniger als drei Werktagen vor
              Leistungserbringung: 100 % des Honorars.
              <br />
              Dem Auftraggeber bleibt es unbenommen, Sinn oder weg nachzuweisen,
              dass Sinn oder weg kein oder ein wesentlich geringerer Schaden
              entstanden ist, als die pauschalierten Honorare. Ist der Schaden
              von Sinn oder weg geringer oder sind die Pauschalen nicht
              anwendbar, wird Sinn oder weg seinen Schaden konkret berechnen.
              <br />
              10.4
              <br />
              Im Falle der Vereinbarung eines Stundenhonorars ist das Honorar
              f&uuml;r jene Stundenanzahl, die f&uuml;r die gesamte vereinbarte
              Beratungsleistung zu erwarten gewesen ist, abz&uuml;glich der
              ersparten Aufwendungen zu leisten. Soweit der Auftraggeber keinen
              h&ouml;heren Anteil an ersparten Aufwendungen nachweist, sind
              diese mit 30 Prozent des Honorars f&uuml;r jene Leistungen, die
              Sinn oder weg bis zum Tage der Beendigung des
              Vertragsverh&auml;ltnisses noch nicht erbracht hat, pauschaliert
              vereinbart.
              <br />
              10.5
              <br />
              Im Falle der Nichtzahlung von Zwischenabrechnungen ist Sinn oder
              weg von seiner Verpflichtung, weitere Leistungen zu erbringen,
              befreit. Die Geltendmachung weiterer aus der Nichtzahlung
              resultierender Anspr&uuml;che wird dadurch aber nicht
              ber&uuml;hrt.
            </p>
            <h5>11. Nebenkosten</h5>
            <p>
              11.1
              <br />
              Zus&auml;tzlich zur Verg&uuml;tung sind die im Rahmen des
              Beratungsauftrages angefallenen, erforderlichen und angemessenen
              Spesen, Reisekosten und sonstigen Auslagen zu erstatten.
              <br />
              11.2
              <br />
              Soweit keine anderweitige Regelung getroffen wurde, gilt folgende
              Reisekosten-Regelung inkl. der genannten Pauschalen:
              <br />
              &Uuml;bernachtungskosten nach Anfall
              <br />
              Fahrtkosten: PKW &euro; 0,50/km
              <br />
              Flug: Economy
              <br />
              Bahn: 1. Klasse mit Bahncard
              <br />
              Sonstige Verkehrsmittel (z.B. Mietwagen) und Nebenkosten (z.B.
              Parkgeb&uuml;hren) nach Beleg
              <br />
              Reisezeiten im Inland werden nicht berechnet. Reisezeiten im
              Ausland berechnen wir separat je nach Dauer der jeweiligen Reise
              (ein Weg) wie folgt:
              <br />5 bis 8 Stunden Pauschale 250 &euro;.
              <br />
              &gt;8 bis 12 Stunden Pauschale 500 &euro;.
              <br />
              &gt; 12 Stunden Pauschale 1.000 &euro;.
              <br />
              Alle Materialien (z.B. Workshop-Materialien) werden zu
              Selbstkosten berechnet.&nbsp;S&auml;mtliche Betr&auml;ge verstehen
              sich dabei zzgl. der jeweils g&uuml;ltigen Umsatzsteuer.
            </p>
            <p>
              11.3
              <br />
              Druck- und Materialkosten werden nach Aufwand berechnet.
              S&auml;mtliche Betr&auml;ge verstehen sich dabei zzgl. der jeweils
              g&uuml;ltigen Umsatzsteuer.
            </p>
            <h5>12. Elektronische Rechnungslegung</h5>
            <p>
              Sinn oder weg ist berechtigt, dem Auftraggeber Rechnungen auch in
              elektronischer Form zu &uuml;bermitteln. Der Auftraggeber
              erkl&auml;rt sich mit der Zusendung von Rechnungen in
              elektronischer Form durch Sinn oder weg ausdr&uuml;cklich
              einverstanden.
            </p>
            <h5>13. Dauer des Vertrages</h5>
            <p>
              13.1
              <br />
              Der jeweilige Beratungsvertrag endet grunds&auml;tzlich mit dem
              Abschluss des Projekts.
              <br />
              13.2
              <br />
              Der jeweilige Beratungsvertrag kann dessen ungeachtet jederzeit
              aus wichtigen Gr&uuml;nden von jeder Seite ohne Einhaltung einer
              K&uuml;ndigungsfrist gel&ouml;st werden. Als wichtiger Grund ist
              insbesondere anzusehen,
              <br />
              &bull; wenn ein Vertragspartner wesentliche
              Vertragsverpflichtungen verletzt oder
              <br />
              &bull; wenn ein Vertragspartner nach Er&ouml;ffnung eines
              Insolvenzverfahrens in Zahlungsverzug ger&auml;t,
              <br />
              &bull; wenn berechtigte Bedenken hinsichtlich der Bonit&auml;t
              eines Vertragspartners, &uuml;ber den kein Insolvenzverfahren
              er&ouml;ffnet ist, bestehen und dieser auf Begehren Sinn oder wegs
              weder Vorauszahlungen leistet noch vor Leistung Sinn oder wegs
              eine taugliche Sicherheit leistet und die schlechten
              Verm&ouml;gensverh&auml;ltnisse dem anderen Vertragspartner bei
              Vertragsabschluss nicht bekannt waren.
            </p>
            <h5>14. Schlussbestimmungen</h5>
            <p>
              14.1
              <br />
              Die Vertragsparteien best&auml;tigen, alle Angaben im Vertrag
              gewissenhaft und wahrheitsgetreu gemacht zu haben und verpflichten
              sich, etwaige &Auml;nderungen wechselseitig umgehend bekannt zu
              geben.
              <br />
              14.2
              <br />
              &Auml;nderungen des Vertrages und dieser AGB bed&uuml;rfen der
              Schriftform; ebenso ein Absehen von diesem Formerfordernis.
              M&uuml;ndliche Nebenabreden bestehen nicht.
              <br />
              14.3
              <br />
              F&uuml;r alle Gesch&auml;fts- und die gesamten Rechtsbeziehungen
              zwischen dem Auftraggeber und Sinn oder weg gilt
              ausschlie&szlig;lich das Recht der Bundesrepublik Deutschland
              unter Ausschluss der Bestimmungen des internationalen
              Privatrechts; die Anwendung des &Uuml;bereinkommens der Vereinten
              Nationen &uuml;ber Vertr&auml;ge &uuml;ber den Internationalen
              Warenkauf (CISG) ist ausgeschlossen.
              <br />
              14.4
              <br />
              Erf&uuml;llungsort ist der Ort der jeweiligen Niederlassung, aus
              der heraus Sinn oder weg operiert.
              <br />
              14.5
              <br />
              Die Abtretung von Anspr&uuml;chen, die dem Auftraggeber aus der
              Gesch&auml;ftsverbindung gegen Sinn oder weg zustehen, ist
              ausgeschlossen.
              <br />
              14.6
              <br />
              F&uuml;r Streitigkeiten aus der Gesch&auml;ftsverbindung
              herr&uuml;hrenden Anspr&uuml;che gegen&uuml;ber Kaufleuten und
              juristischen Personen des &ouml;ffentlichen Rechts ist das Gericht
              am Unternehmensort Sinn oder wegs zust&auml;ndig.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
