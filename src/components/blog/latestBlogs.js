import Image from "next/image";
import Link from "next/link";
import initTranslations from "@/app/i18n";

async function getLatestBlogs(limit, locale) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/blog/latest?limit=${limit}&lang=${locale}`,
    {
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) {
    return {
      data: null,
      pagination: null,
    };
  }
  return res.json();
}

export default async function LatestBlogs({ limit, locale }) {
  const { data, pagination } = await getLatestBlogs(limit, locale);
  const { t } = await initTranslations(locale, ["common"]);

  if (!data) return null;

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t("latest_from_the_blog")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("check_out_our_latest_blog_posts_for_insights_and_updates")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
          {data.map((blog, index) => (
            <Link
              href={`/article/${blog?.slug}`}
              className={`group ${
                index % 5 === 0 || index % 5 === 3
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              }`}
              prefetch={false}
              key={index}
            >
              <article className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                <div
                  className={`relative ${
                    index % 5 === 0 || index % 5 === 3 ? "h-96" : "h-64"
                  }`}
                >
                  <Image
                    src={blog?.mainImage}
                    alt={blog?.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                    {blog?.title}
                  </h3>
                  <p
                    className={`text-gray-600 ${
                      index % 5 === 0 || index % 5 === 3 ? "" : "line-clamp-3"
                    }`}
                  >
                    {blog?.overview}
                  </p>
                  <div className="mt-auto pt-4">
                    <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide">
                      {t("read_more")}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
