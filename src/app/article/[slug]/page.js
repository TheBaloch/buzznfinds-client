import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import RelatedBlogs from "@/components/blog/relatedblog/relatedblog";

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
  const SEO = data?.blog?.content?.SEO;
  return {
    metadataBase: new URL("https://buzznfinds.com"),
    title: data?.blog?.title || "Blog Post",
    description: SEO?.metaDescription || "Blog post description",
    keywords: SEO?.metaKeywords || "blog, post",
    authors: [{ name: data?.blog?.author?.name || "Author" }],
    openGraph: {
      title: SEO?.OGtitle || data?.blog?.title,
      description: SEO?.OGdescription || SEO?.metaDescription,
      url: `/article/${data?.blog?.slug}`,
      siteName: "Buzz N Finds",
      images: [
        {
          url: data?.blog?.mainImage,
          width: 800,
          height: 450,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    icons: {
      icon: "https://buzznfinds.com/favicon.ico",
      apple: "https://buzznfinds.com/favicon.ico",
    },
    alternates: {
      canonical: `/article/${data?.blog?.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({ params }) {
  const data = await fetchBlog(params?.slug);
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
                <Link href={`/${data?.category?.slug}`}>
                  {/* <span className="inline-block text-xs font-2xl tracking-wider uppercase mt-5 text-blue-600"> */}
                  <span className={styles.category}>
                    {blog?.category?.category}
                  </span>
                </Link>
              </div>
            </div>
            {/* <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug"> */}
            <h1 className={styles.title}>{blog?.title}</h1>
            {/* <h2 className="text-brand-primary mb-3 mt-2 text-center text-lg lg:text-xl lg:leading-snug"> */}
            <h2 className={styles.subtitle}>{blog?.subtitle}</h2>
          </div>
          <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg mb-8 mt-8">
            <Image
              src={blog?.mainImage}
              alt={blog?.title || "Blog image"}
              sizes="(max-width: 768px) 100vw, 800px"
              width={800}
              height={450}
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
              priority
            />
          </div>
          <article className={styles.article}>
            {blog?.content?.introduction && (
              <div
                dangerouslySetInnerHTML={{
                  __html: blog?.content?.introduction,
                }}
              />
            )}
            {blog?.content?.content && (
              <div
                dangerouslySetInnerHTML={{ __html: blog?.content?.content }}
              />
            )}
            {blog?.content?.conclusion && (
              <div
                dangerouslySetInnerHTML={{ __html: blog?.content?.conclusion }}
              />
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
          <RelatedBlogs related={related} id={blog?.id} />
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
