import Link from "next/link";
import initTranslations from "@/app/i18n";
import LanguageChanger from "@/components/Language/languageChanger";

export default async function Navbar({ locale }) {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="font-bold font-serif text-blue-800 text-2xl">
                BUZZ
              </span>
              <span className="font-mono text-2xl font-bold relative px-1">
                <span className="relative z-10">N</span>
                <span className="absolute inset-0 bg-yellow-300 transform -rotate-3 z-0"></span>
              </span>
              <span className="font-bold font-serif text-blue-800 text-2xl">
                FINDS
              </span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink href="/technology">{t("technology")}</NavLink>
            <NavLink href="/health">{t("health")}</NavLink>
            <NavLink href="/lifestyle">{t("lifestyle")}</NavLink>
            <NavLink href="/about">{t("about")}</NavLink>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <LanguageChanger />
          </div>
          <div className="flex items-center sm:hidden">
            <MobileMenu t={t} />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      {children}
    </Link>
  );
}

function MobileMenu({ t }) {
  return (
    <div className="relative">
      <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
      <label
        htmlFor="mobile-menu-toggle"
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 cursor-pointer"
      >
        <span className="sr-only">Open main menu</span>
        <MenuIcon className="block h-6 w-6" />
      </label>
      <div className="hidden peer-checked:block absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
        <Link
          href="/technology"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {t("technology")}
        </Link>
        <Link
          href="/health"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {t("health")}
        </Link>
        <Link
          href="/lifestyle"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {t("lifestyle")}
        </Link>
        <Link
          href="/about"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {t("about")}
        </Link>
        <div className="px-4 py-2">
          <LanguageChanger />
        </div>
      </div>
    </div>
  );
}

function MenuIcon(props) {
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
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
