import Image from "next/image";
import styles from "./style.module.css";

async function fetchBlog(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/blog/${slug}`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    //throw new Error("Failed to fetch data");
    return null;
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await fetchBlog(params?.slug);
  const SEO = data?.content?.SEO;
  return {
    title: data?.title,
    description: SEO?.metaDescription,
    keywords: SEO?.metaKeywords,
    authors: [{ name: data?.content?.Author?.name }],
    openGraph: {
      title: SEO?.OGtitle,
      description: SEO?.OGdescription,
      url: `https://buzznfinds.com/article/${data?.slug}`,
      siteName: "Buzz N Finds",
      images: [
        {
          url: data?.mainImage,
          width: 800,
          height: 450,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function Page({ params }) {
  const data = await fetchBlog(params?.slug);
  const name = data?.author?.name?.split(" ");
  const authorInit = name ? name[0][0] + name[1][0] : "NA";

  if (data) {
    return (
      <>
        <div className="container px-7 mx-auto max-w-screen-lg py-4 lg:py-7">
          <div className="mx-auto max-w-screen-md">
            <div className="flex justify-center">
              <div className="flex gap-3">
                <a href="#">
                  <span className="inline-block text-xs font-2xl tracking-wider uppercase mt-5 text-yellow-500">
                    {data?.category?.category}
                  </span>
                </a>
              </div>
            </div>
            <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug">
              {data?.title}
            </h1>
            <h2 className="text-brand-primary mb-3 mt-2 text-center text-lg lg:text-xl lg:leading-snug">
              {data?.subtitle}
            </h2>
          </div>
          <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg mb-8 mt-8">
            <Image
              src={data?.mainImage}
              alt={data?.title || "Blog image"}
              sizes="(max-width: 768px) 100vw, 800px"
              width={800}
              height={450}
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
              priority
            />
          </div>
          <article className={styles.article}>
            <div
              dangerouslySetInnerHTML={{ __html: data?.content?.introduction }}
            />
            <div dangerouslySetInnerHTML={{ __html: data?.content?.content }} />
            <div
              dangerouslySetInnerHTML={{ __html: data?.content?.conclusion }}
            />
            <div className={styles.authorSection}>
              <p id="author" className={styles.authorName}>
                {authorInit}
              </p>
              <p id="author-bio" className={styles.authorAbout}>
                {data?.author?.about}
              </p>
            </div>
          </article>
        </div>
      </>
    );
  } else {
    return (
      <div className="container px-8 mx-auto max-w-screen-lg py-5 lg:py-8 min-h-screen">
        <h1 className="text-center text-3xl font-semibold text-red-600">
          Error: Blog post not found
        </h1>
        <p className="text-center text-lg mt-3">
          We couldn&apos;t find the blog post you&apos;re looking for. Please
          try again later.
        </p>
      </div>
    );
  }
}
