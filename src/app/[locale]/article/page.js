import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center p-6 justify-center">
        <h3 className="text-2xl font-bold text-gray-800">Hmmmmm...</h3>
        <h4 className="mt-4 text-gray-600 text-lg">
          You&apos;re not so far from home, buddy. Let the hamster guide you
          back!
        </h4>
        <div>
          <Link href="/">
            <Image
              src="https://images.buzznfinds.com/assets/lost/hamster.png"
              width={500}
              height={500}
              alt="Hamster"
              priority
            />
          </Link>
        </div>
      </div>
    </>
  );
}
