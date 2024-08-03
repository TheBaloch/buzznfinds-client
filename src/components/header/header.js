import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="border-b-4 border-gray-100">
        <ul className="flex justify-center items-center  lg:text-xl md:text-lg">
          {/* <li className="hidden sm:block px-4 lg:p-10">Home</li>
          <li className="hidden sm:block px-4 lg:p-10">Commerce</li>
          <li className="hidden sm:block px-4 lg:p-10">Marketing</li> */}
          <li>
            <Image
              src="/images/logo.png"
              alt="Buzz N Finds"
              width={250}
              height={150}
              className="p-1 max-w-full h-auto"
              loading="eager"
            />
          </li>
          {/* <li className="hidden sm:block px-4 lg:p-10">Health</li>
          <li className="hidden sm:block px-4 lg:p-10">Beauty</li>
          <li className="hidden sm:block px-4  lg:p-10">Technology</li> */}
        </ul>
      </header>
    </>
  );
}
