"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../../i18nConfig";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const languages = [
    { value: "en", name: "English", id: "en" },
    { value: "es", name: "Español", id: "es" },
    { value: "fr", name: "Français", id: "fr" },
    { value: "de", name: "Deutsch", id: "de" },
    { value: "ar", name: "العربية", id: "ar" },
  ];

  const handleChange = (selectedOption) => {
    const newLocale = selectedOption.target.value;
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
    <select
      id="language-select"
      name="language"
      defaultValue={currentLocale}
      onChange={handleChange}
    >
      {languages.map((lang) => (
        <option key={lang.id} value={lang.value} id={lang.id}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}
