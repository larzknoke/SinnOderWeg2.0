import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-sow-blue py-10 text-white flex ">
      <div className="max-w-6xl m-auto flex flex-row justify-between w-full text-base">
        <div>
          <span className="font-bold">Sinn oder weg GmbH</span>
          <div className="mt-4 flex flex-row gap-16">
            <div>
              Steige 14 <br /> 37603 Holzminden <br /> Germany
            </div>
            <div>
              +49 5531 8140558 <br />
              hello@sinnoderweg.de
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 justify-start">
          <Link href="/impressum" className="hover:underline">
            Impressum{" "}
          </Link>
          <Link href="/datenschutz" className="hover:underline">
            Datenschutz{" "}
          </Link>
          <Link href="/agb" className="hover:underline">
            AGB{" "}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
