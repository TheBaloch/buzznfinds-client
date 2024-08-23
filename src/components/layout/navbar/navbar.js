import LanguageChanger from "@/components/Language/languageChanger";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex items-center justify-between w-full max-w-6xl p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <span className="text-2xl font-bold">Buzz N Finds</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageChanger />
        </div>
      </div>
    </div>
  );
}

function MenuUp(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 17H13M5 12H19M11 7H19" />
    </svg>
  );
}

function MenuDown(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 17H19M5 12H19M5 7H19" />
    </svg>
  );
}
