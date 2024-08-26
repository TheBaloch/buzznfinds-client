import LatestBlogs from "@/components/blog/latestBlogs";
import AllCategoryBlock from "@/components/category/allCategoryBlock";
import CategoryBlock from "@/components/category/categoryBlock";

const translations = {
  en: {
    title: "Buzz N Finds - Discover the Best Trends, Tips, and Reviews",
    description:
      "Welcome to Buzz N Finds, your go-to source for the latest trends, helpful tips, and in-depth reviews on a wide range of topics. Stay informed and entertained with our expert insights.",
    keywords:
      "trends, tips, reviews, latest news, trending topics, expert insights, Buzz N Finds",
  },
  es: {
    title: "Buzz N Finds - Descubre las Mejores Tendencias, Consejos y Reseñas",
    description:
      "Bienvenido a Buzz N Finds, tu fuente confiable para las últimas tendencias, consejos útiles y reseñas detalladas sobre una amplia gama de temas. Mantente informado y entretenido con nuestras opiniones de expertos.",
    keywords:
      "tendencias, consejos, reseñas, últimas noticias, temas de tendencia, opiniones de expertos, Buzz N Finds",
  },
  fr: {
    title:
      "Buzz N Finds - Découvrez les Meilleures Tendances, Conseils et Avis",
    description:
      "Bienvenue sur Buzz N Finds, votre source de référence pour les dernières tendances, conseils utiles et avis approfondis sur une large gamme de sujets. Restez informé et diverti grâce à nos analyses d'experts.",
    keywords:
      "tendances, conseils, avis, dernières nouvelles, sujets tendance, analyses d'experts, Buzz N Finds",
  },
  de: {
    title:
      "Buzz N Finds - Entdecken Sie die Besten Trends, Tipps und Bewertungen",
    description:
      "Willkommen bei Buzz N Finds, Ihrer Anlaufstelle für die neuesten Trends, hilfreichen Tipps und ausführlichen Bewertungen zu einer Vielzahl von Themen. Bleiben Sie informiert und unterhalten mit unseren Experteneinschätzungen.",
    keywords:
      "trends, tipps, bewertungen, neueste nachrichten, trendthemen, experteneinschätzungen, Buzz N Finds",
  },
  ja: {
    title: "Buzz N Finds - 最高のトレンド、ヒント、レビューを発見する",
    description:
      "Buzz N Findsへようこそ。最新のトレンド、有用なヒント、幅広いトピックに関する詳細なレビューのための頼れる情報源です。専門家の洞察で情報を得て楽しんでください。",
    keywords:
      "トレンド, ヒント, レビュー, 最新ニュース, トレンドトピック, 専門家の洞察, Buzz N Finds",
  },
  ar: {
    title: "Buzz N Finds - اكتشف أفضل الاتجاهات والنصائح والمراجعات",
    description:
      "مرحبًا بكم في Buzz N Finds، مصدرك الموثوق للحصول على أحدث الاتجاهات والنصائح المفيدة والمراجعات المتعمقة حول مجموعة واسعة من المواضيع. ابقَ على اطلاع واستمتع بتحليلات خبرائنا.",
    keywords:
      "اتجاهات, نصائح, مراجعات, آخر الأخبار, مواضيع رائجة, تحليلات الخبراء, Buzz N Finds",
  },
};

export async function generateMetadata({ params: { locale } }) {
  const translation = translations[locale] || translations.en;

  return {
    title: translation.title,
    description: translation.description,
    keywords: translation.keywords,
    authors: [{ name: "buzzNfinds Team" }],
    openGraph: {
      title: translation.title,
      description: translation.description,
      url: `https://buzznfinds.com/${locale}`,
      siteName: "buzzNfinds",
      images: [
        {
          url: "https://buzznfinds.com/favicon.ico",
          width: 50,
          height: 50,
          alt: "Buzznfinds icon",
        },
      ],
      locale: locale,
      type: "website",
    },
    icons: {
      icon: "https://buzznfinds.com/favicon.ico",
      apple: "https://buzznfinds.com/favicon.ico",
    },
    alternates: {
      canonical: `https://buzznfinds.com/${locale}`,
      languages: {
        en: "https://buzznfinds.com/en",
        es: "https://buzznfinds.com/es",
        fr: "https://buzznfinds.com/fr",
        de: "https://buzznfinds.com/de",
        ar: "https://buzznfinds.com/ar",
        pt: "https://buzznfinds.com/js",
      },
    },
    robots: "index, follow",
  };
}

export default function Home({ params: { locale } }) {
  return (
    <main>
      <LatestBlogs limit={10} locale={locale} />
      <CategoryBlock category={"technology"} limit={6} locale={locale} />
      <AllCategoryBlock locale={locale} />
      <CategoryBlock category={"lifestyle"} limit={5} locale={locale} />
      <CategoryBlock category={"health"} limit={3} locale={locale} />
      <CategoryBlock category={"marketing"} limit={4} locale={locale} />
      <CategoryBlock category={"business"} limit={3} locale={locale} />
    </main>
  );
}
