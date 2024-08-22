import initTranslations from "@/app/i18n";
import Image from "next/image";
import Link from "next/link";

async function getLatestBlogs(limit, locale) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/blog/latest?limit=${limit}&lang=${locale}`,
    {
      // cache: "force-cache",
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
  if (data)
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="grid gap-8 px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-10">
              {t("latest_from_the_blog")}
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-10">
              {t("check_out_our_latest_blog_posts_for_insights_and_updates")}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data?.map((blog, key) => (
              <Link
                href={`/article/${blog?.slug}`}
                className="group"
                prefetch={false}
                key={key}
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={blog?.mainImage}
                    alt={blog?.title}
                    width={600}
                    height={400}
                    className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold transition-colors group-hover:underline">
                    {blog?.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-muted-foreground">
                    {blog?.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
}
