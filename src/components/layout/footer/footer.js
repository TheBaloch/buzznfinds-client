import Link from "next/link";
import initTranslations from "@/app/i18n";
import { LinkedinIcon, MailIcon, PhoneIcon, TwitterIcon } from "lucide-react";

export default async function Footer({ locale }) {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link
              href="/"
              className="flex items-center text-white hover:text-blue-400 transition-colors"
            >
              <span className="font-bold font-serif text-3xl">BUZZ</span>
              <span className="font-mono text-3xl font-bold text-blue-400">
                N
              </span>
              <span className="font-bold font-serif text-3xl">FINDS</span>
            </Link>
            <p className="mt-4 text-sm">{t("about_line")}</p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MailIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t("categories")}
            </h3>
            <ul className="space-y-2">
              {[
                "technology",
                "lifestyle",
                "health",
                "marketing",
                "business",
              ].map((category) => (
                <li key={category}>
                  <Link
                    href={`/${category}`}
                    className="hover:text-white transition-colors"
                  >
                    {t(category)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t("resources")}
            </h3>
            <ul className="space-y-2">
              {["about", "contact"].map((resource) => (
                <li key={resource}>
                  <Link
                    href={`/${resource}`}
                    className="hover:text-white transition-colors"
                  >
                    {t(resource)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {t("contact_us")}
              </h3>
              <p className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </p>
              <p className="flex items-center space-x-2 mt-2">
                <MailIcon className="h-5 w-5" />
                <span>info@buzznfinds.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          &copy; {new Date().getFullYear()} Buzznfinds.{" "}
          {t("all_rights_reserved")}
        </div>
      </div>
    </footer>
  );
}
