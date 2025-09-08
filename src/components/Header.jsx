import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <section className="flex flex-row items-center justify-center sm:items-start gap-[16px] text-white pt-16 w-full bg-sow-blue ">
      <div className="flex flex-col items-center  gap-[16px]">
        <Link href="/">
          <Image
            className=""
            src="/Aufkleber_Rund blau.png"
            alt="Sinn oder Weg Aufkleber Rund"
            width={425}
            height={425}
            priority
          />
        </Link>
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
  );
}

export default Header;
