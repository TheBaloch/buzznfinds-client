import initTranslations from "@/app/i18n";
import Link from "next/link";

export default async function Footer({ locale }) {
  const { t } = await initTranslations(locale, ["common"]);
  return (
    <footer className="bg-gray-800 text-white py-8 pt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0 flex flex-col items-start">
            <Link href="/" className="flex items-center">
              <span className="font-bold font-serif text-teal-400 text-3xl">
                BUZZ
              </span>
              <span className="font-mono text-teal-500 text-3xl font-bold">
                N
              </span>
              <span className="font-bold font-serif text-teal-400 text-3xl">
                FINDS
              </span>
            </Link>
            <p className="font-mono mt-4 text-lg">{t("about_line")}</p>

            <div className="mb-6 md:mb-0 mt-10">
              <h3 className="text-lg font-bold mb-4 text-teal-300">
                {t("categories")}
              </h3>
              <ul className="space-y-2 font-mono text-gray-300">
                <li>
                  <Link className="hover:text-white" href="/technology">
                    {t("technology")}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" href="/lifestyle">
                    {t("lifestyle")}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" href="/health">
                    {t("health")}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" href="/marketing">
                    {t("marketing")}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" href="/business">
                    {t("business")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0 mt-10">
              <h3 className="text-lg font-bold mb-4 text-teal-300">
                {t("resources")}
              </h3>
              <ul className="space-y-2 font-mono text-gray-300">
                <li>
                  <Link className="hover:text-white" href="/about">
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" href="/lifestyle">
                    {t("contact")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-gray-400 text-sm text-center md:text-left">
          &copy; 2024 Buzznfinds. {t("all_rights_reserved")}
        </div>
      </div>
    </footer>
  );
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
