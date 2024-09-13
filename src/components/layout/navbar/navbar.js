import initTranslations from "@/app/i18n";
import LanguageChanger from "@/components/Language/languageChanger";
import Link from "next/link";

export default async function Navbar({ locale }) {
  const { t } = await initTranslations(locale, ["common"]);
  return (
    <div className="flex items-center justify-between bg-gray-200 rounded-lg w-full shadow-md md:p-2 lg:p-4 p-2">
      <div className="flex items-center">
        <Link href="/">
          <span class="font-bold font-serif text-teal-700 text-lg md:text-2xl lg:text-3xl">
            BUZZ
          </span>
          <span class="font-mono text-teal-600 text-lg font-bold md:text-2xl lg:text-3xl">
            N
          </span>
          <span class="font-bold font-serif text-teal-700 text-lg md:text-2xl lg:text-3xl">
            FINDS
          </span>
        </Link>
      </div>
      <div className="flex items-center p-2">
        <nav className="flex space-x-10 text-xl text-teal-700 mx-12 font-mono">
          <Link href="/technology" className="hidden lg:block">
            {t("technology")}
          </Link>
          <Link href="/health" className="hidden lg:block">
            {t("health")}
          </Link>
          <Link href="/lifestyle" className="hidden lg:block md:block">
            {t("lifestyle")}
          </Link>
          <Link href="/about" className="hidden lg:block md:block">
            {t("about")}
          </Link>
        </nav>
        <div>
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
