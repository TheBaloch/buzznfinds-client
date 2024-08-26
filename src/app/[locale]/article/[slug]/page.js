import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import RelatedBlogs from "@/components/blog/relatedblog/relatedblog";

async function fetchBlog(slug, lang) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/blog/${slug}?lang=${lang}`,
    {
      cache: "force-cache",
    }
  );
  if (!res.ok) {
    //throw new Error("Failed to fetch data");
    return null;
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await fetchBlog(params?.slug, params?.locale);
  const SEO = data?.blog?.SEO;
  return {
    metadataBase: new URL("https://buzznfinds.com"),
    title: data?.blog?.title || "Blog Post",
    description: SEO?.metaDescription || "Blog post description",
    keywords: SEO?.metaKeywords || "blog, post",
    authors: [{ name: data?.blog?.author?.name || "Author" }],
    openGraph: {
      title: SEO?.OGtitle || data?.blog?.title,
      description: SEO?.OGdescription || SEO?.metaDescription,
      url: `/${params?.locale}/article/${data?.blog?.slug}`,
      siteName: "Buzz N Finds",
      images: [
        {
          url: data?.blog?.mainImage,
          width: 800,
          height: 450,
        },
      ],
      locale: params?.locale,
      type: "article",
    },
    icons: {
      icon: "https://buzznfinds.com/favicon.ico",
      apple: "https://buzznfinds.com/favicon.ico",
    },
    alternates: {
      canonical: `/${params?.locale}/article/${data?.blog?.slug}`,
      languages: {
        ar: `/ar/article/${data?.blog?.slug}`,
        de: `/de/article/${data?.blog?.slug}`,
        en: `/en/article/${data?.blog?.slug}`,
        es: `/es/article/${data?.blog?.slug}`,
        fr: `/fr/article/${data?.blog?.slug}`,
        ja: `/ja/article/${data?.blog?.slug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({ params }) {
  const data = await fetchBlog(params?.slug, params?.locale);
  const blog = data?.blog;
  const related = data?.related;
  //console.log(data);

  if (blog) {
    return (
      <>
        <div className="container  mx-auto max-w-screen-lg py-2 px-2 lg:py-7 md:px-7 lg:px-7">
          <div className="mx-auto max-w-screen-md">
            <div className="flex justify-center">
              <div className="flex gap-3">
                <Link href={`/${blog?.category?.slug}`}>
                  {/* <span className="inline-block text-xs font-2xl tracking-wider uppercase mt-5 text-blue-600"> */}
                  <span className="text-md font-mono hover:underline">
                    {blog?.category?.name}
                  </span>
                </Link>
                /
                <span className="text-md font-mono">
                  {" "}
                  {blog?.subcategory?.name}
                </span>
              </div>
            </div>
            {/* <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug"> */}
            <h1 className={styles.title}>{blog?.title}</h1>
            {/* <h2 className="text-brand-primary mb-3 mt-2 text-center text-lg lg:text-xl lg:leading-snug"> */}
            <h2 className="font-mono text-lg text-teal-700">
              {blog?.subtitle}
            </h2>
          </div>
          <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg mb-8 mt-8">
            <Image
              src={blog?.mainImage}
              alt={blog?.title || "Blog image"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              width={800}
              height={450}
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
              loading="eager"
            />
          </div>
          <article className={styles.article}>
            {blog?.introduction && (
              <div
                dangerouslySetInnerHTML={{
                  __html: blog?.introduction,
                }}
              />
            )}
            {blog?.content && (
              <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
            )}
            {blog?.conclusion && (
              <div dangerouslySetInnerHTML={{ __html: blog?.conclusion }} />
            )}
            <div className={styles.authorSection}>
              <p id="author" className={styles.authorName}>
                {blog?.author?.name}
              </p>
              <p id="author-bio" className={styles.authorAbout}>
                {blog?.author?.about}
              </p>
            </div>
          </article>
        </div>
        <div>
          <RelatedBlogs
            related={related}
            id={blog?.id}
            locale={params?.locale}
          />
        </div>
      </>
    );
  } else {
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
