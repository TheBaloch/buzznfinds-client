import Image from "next/image";

export default function Footer1() {
  return (
    <footer className="py-4 mt-auto">
      <div className="container mx-auto h-16 text-center grid grid-cols-3 ">
        <div>
          <Image
            src="/images/logo.png"
            alt="Buzz N Finds"
            width={250}
            height={150}
            className="p-1 max-w-full h-auto"
            loading="eager"
          />
        </div>
        <div>
          <p>
            <b>Solution</b>
          </p>
          <p>Marketing</p>
        </div>
        <div>
          <p>
            <b>Company</b>
          </p>
          <p>About</p>
        </div>
      </div>
    </footer>
  );
}
