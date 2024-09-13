"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@heroicons/react/solid";
import i18nConfig from "../../../i18nConfig";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [languageDropdown, setLanguageDropdown] = useState(false);

  const languages = [
    { value: "en", name: "English", id: "en" },
    { value: "es", name: "Español", id: "es" },
    { value: "fr", name: "Français", id: "fr" },
    { value: "de", name: "Deutsch", id: "de" },
    { value: "ar", name: "العربية", id: "ar" },
    { value: "ja", name: "日本語", id: "ja" },
  ];

  const handleChange = (newLocale) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="relative z-10">
      <button
        onClick={() => setLanguageDropdown(!languageDropdown)}
        className="bg-white text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
      >
        {languages.find((lang) => lang.value === currentLocale)?.name ||
          "Language"}
        <ChevronDownIcon className=" h-5 w-5" aria-hidden="true" />
      </button>
      {languageDropdown && (
        <div className="absolute right-0 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            {languages.map((lang) => (
              <span
                key={lang.id}
                onClick={() => handleChange(lang.value)}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                  currentLocale === lang.value ? "font-bold" : ""
                }`}
                role="menuitem"
              >
                {lang.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
