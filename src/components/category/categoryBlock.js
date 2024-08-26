import initTranslations from "@/app/i18n";
import Image from "next/image";
import Link from "next/link";
import styles from "./categoryblock.module.css";

async function getCategoryBlogs(category, limit, locale) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/category/${category}?limit=${limit}&lang=${locale}`,
    {
      // cache: "force-cache",
      next: { revalidate: 86000 },
    }
  );
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function CategoryBlock({ category, limit, locale }) {
  const data = await getCategoryBlogs(category, limit, locale);
  const { t } = await initTranslations(locale, ["common"]);
  //console.log(data);
  return (
    <>
      <section className="px-4 py-8 mb-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl text-teal-500 font-bold">{t(data?.slug)}</h2>
          <Link
            href={`/${data?.slug}`}
            className="text-blue-600 hover:underline"
            rel="ugc"
          >
            {t("more_in")} {t(data?.slug)} →
          </Link>
        </div>
        <div className={styles.customGrid}>
          {data?.blogs?.data?.map((blog, index) => (
            <Link
              key={index}
              href={`/article/${blog?.slug}`}
              className="group shadow-md p-2"
            >
              <div className="space-y-4 mt-10">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={blog?.mainImage}
                    alt={blog?.title}
                    className="w-full h-auto transition-all duration-300 group-hover:scale-105"
                    width="400"
                    height="300"
                    style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                    priority
                  />
                </div>
                <h3 className="text-xl font-semibold group-hover:underline">
                  {blog?.title}
                </h3>

                <div className="text-gray-600">
                  <span>{blog?.author?.name}</span> <span>•</span>{" "}
                  <span>{formatDate(blog?.createdAt)}</span>
                </div>
                <p className="text-gray-700">{blog?.overview}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.toLocaleString("default", {
    month: "long",
  })} ${date.getDate()}, ${date.getFullYear()}`;
}
