import initTranslations from "@/app/i18n";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

async function getCategoryBlogs(category, limit, locale) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/category/${category}?lang=${locale}&limit=${limit}`,
    {
      next: { revalidate: 86000 },
    }
  );
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export function generateMetadata({ params }) {
  const localizedTitles = {
    de: `BuzzNFinds - ${params?.category
      ?.replace("-", " ")
      .toUpperCase()} Trends`,
    ar: `BuzzNFinds - أحدث الاتجاهات في ${params?.category?.replace("-", " ")}`,
    en: `BuzzNFinds - ${params?.category?.toUpperCase().replace("-", " ")}`,
    es: `BuzzNFinds - Tendencias en ${params?.category
      ?.replace("-", " ")
      .toUpperCase()}`,
    fr: `BuzzNFinds - Tendances ${params?.category
      ?.replace("-", " ")
      .toUpperCase()}`,
    ja: `BuzzNFinds - 最新トレンド ${params?.category?.replace("-", " ")}`,
  };

  const localizedDescriptions = {
    de: `Entdecken Sie die neuesten Einblicke und Trends in ${params?.category.replace(
      "-",
      " "
    )} bei BuzzNFinds. Bleiben Sie informiert mit unseren ausführlichen Artikeln und Expertenanalysen.`,
    ar: `استكشف أحدث الأفكار والاتجاهات في ${params?.category.replace(
      "-",
      " "
    )} على BuzzNFinds. كن مطلعًا على مقالاتنا المتعمقة وتحليلات الخبراء.`,
    en: `Explore the latest insights and trends in ${params?.category.replace(
      "-",
      " "
    )} at BuzzNFinds. Stay informed with our in-depth articles and expert analysis.`,
    es: `Descubre las últimas ideas y tendencias en ${params?.category.replace(
      "-",
      " "
    )} en BuzzNFinds. Mantente informado con nuestros artículos detallados y análisis expertos.`,
    fr: `Explorez les dernières idées et tendances en ${params?.category.replace(
      "-",
      " "
    )} sur BuzzNFinds. Restez informé avec nos articles approfondis et analyses d'experts.`,
    ja: `${params?.category.replace(
      "-",
      " "
    )}に関する最新の洞察とトレンドをBuzzNFindsで探求しましょう。詳細な記事と専門家の分析で情報を入手してください。`,
  };

  const localizedKeywords = {
    de: `${params?.category?.replace(
      "-",
      " "
    )}, neueste Trends, Expertenanalyse`,
    ar: `${params?.category?.replace("-", " ")}, أحدث الاتجاهات, تحليل الخبراء`,
    en: `${params?.category?.replace(
      "-",
      " "
    )}, latest trends, expert analysis`,
    es: `${params?.category?.replace(
      "-",
      " "
    )}, últimas tendencias, análisis de expertos`,
    fr: `${params?.category?.replace(
      "-",
      " "
    )}, dernières tendances, analyse d'experts`,
    ja: `${params?.category?.replace("-", " ")}, 最新トレンド, 専門家の分析`,
  };

  const title = localizedTitles[params?.locale] || localizedTitles.en;
  const description =
    localizedDescriptions[params?.locale] || localizedDescriptions.en;
  const keywords = localizedKeywords[params?.locale] || localizedKeywords.en;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Buzz N Finds Editorial Team" }],
    openGraph: {
      title,
      description,
      url: `https://buzznfinds.com/${params?.locale}/${params?.category}`,
      siteName: "Buzz N Finds",
      images: [
        {
          url: "https://buzznfinds.com/favicon.ico",
          width: 50,
          height: 50,
          alt: "Buzz N Finds logo",
        },
      ],
      type: "article",
    },
    robots: "index, follow",
  };
}

export default async function Page({ params }) {
  const { t } = await initTranslations(params?.locale, ["common"]);
  const category = params?.category;
  const data = await getCategoryBlogs(category, 20, params?.locale);

  if (data)
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <div className="flex justify-center px-4 py-2 mt-10 mb-10 md:px-6">
          <span className="pb-2 text-4xl text-gray-600 font-bold shadow-sm border-b border-gray-200">
            <span className="text-teal-500">#</span>
            {t(data?.slug)}
          </span>
        </div>
        <main className="grid gap-8 py-8 px-4 md:px-6 min-h-screen">
          {data?.blogs?.data?.length > 0 ? (
            <div className={styles.customGrid}>
              {data?.blogs?.data?.map((blog, key) => (
                <Link href={`/article/${blog?.slug}`} key={key}>
                  <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                    <Image
                      src={blog?.mainImage}
                      alt={blog?.title}
                      width={400}
                      height={500}
                      className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                      style={{ aspectRatio: "400/500", objectFit: "cover" }}
                      priority
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold tracking-tight group-hover:underline">
                        {blog?.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        By {blog?.author?.name} • {formatDate(blog?.createdAt)}
                      </p>
                      <p className="mt-4 line-clamp-3 text-muted-foreground">
                        {blog?.overview}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="h-64"></div>
            </div>
          ) : (
            <div className="flex flex-col items-center p-6">
              <h3 className="text-xl font-semibold text-gray-700">Hmmmmm...</h3>
              <h4 className="mt-2 text-gray-500">
                No blogs found for #{data?.category}. Our writers are whipping
                up something special!
              </h4>
              <div>
                <Image
                  src="https://images.buzznfinds.com/assets/empty/cooking.png"
                  width={400}
                  height={400}
                  alt="Cooking something up"
                  priority
                />
              </div>
              <div className="mt-4">
                <Link href="/" className="text-gray-800 hover:underline">
                  Back to Home
                </Link>
              </div>
            </div>
          )}
        </main>
      </div>
    );
  else {
    return (
      <div className="flex flex-col items-center p-6 justify-center">
        <h3 className="text-2xl font-bold text-gray-800">Oopsie Daisy!</h3>
        <h4 className="mt-4 text-gray-600 text-lg">
          Looks like you&apos;ve wandered off the trail. But don&apos;t worry!
          Give the bear a pook and find your way back!
        </h4>
        <Link href="/">
          <Image
            src="https://images.buzznfinds.com/assets/lost/pookabear.png"
            width={500}
            height={500}
            alt="Pooka Bear"
            priority
          />
        </Link>
      </div>
    );
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.getDate()} ${date.toLocaleString("default", {
    month: "long",
  })}`;
}
