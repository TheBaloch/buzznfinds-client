import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center p-6 justify-center">
      <h3 className="text-2xl font-bold text-gray-800">Uh-oh, bunny trail!</h3>
      <h4 className="mt-4 text-gray-600 text-lg">
        Feeling a bit lost? Give the bunny a pook—who knows, it might just turn
        your frown upside down!
      </h4>
      <div>
        <Link href="/">
          <Image
            src="https://images.buzznfinds.com/assets/404/transparentbunny.png"
            width={500}
            height={500}
            alt="Pooka Bunny"
            priority
          />
        </Link>
      </div>
    </div>
  );
}
