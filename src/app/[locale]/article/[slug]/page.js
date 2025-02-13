import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import RelatedBlogs from "@/components/blog/relatedblog/relatedblog";
import BlogDetail from "@/components/blog/blogDetails/blogDetails";

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
    locale: params?.locale,
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
      //canonical: `/${params?.locale}/article/${data?.blog?.slug}`,
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

  function constructBlogUrl(slug, locale) {
    return `https://buzznfinds.com/${
      locale !== "en" ? locale + "/" : ""
    }article/${slug}`;
  }

  if (blog) {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": constructBlogUrl(blog.slug, params?.locale),
      },
      headline: blog.title,
      image: blog.mainImage,
      author: {
        "@type": "Person",
        name: blog.author.name,
        description: blog.author.about,
      },
      publisher: {
        "@type": "Organization",
        name: "Buzz N Finds",
        logo: {
          "@type": "ImageObject",
          url: "https://buzznfinds.com/favicon.ico",
        },
      },
      datePublished: blog.createdAt,
      dateModified: blog.updatedAt,
      description: blog.overview,
      articleBody:
        blog.introduction + blog.content + blog.content1 + blog.content2,
      articleSection: [blog.category.name, blog.subcategory.name],
      keywords: blog.tags.map((tag) => tag.name),
      inLanguage: params?.locale,
      about: blog.tags.map((tag) => ({
        "@type": "Thing",
        name: tag.name,
      })),
      potentialAction: {
        "@type": "SubscribeAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://buzznfinds.com/newsletter-subscription",
        },
      },
    };
    return (
      <>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </head>
        <BlogDetail blog={blog} related={related} />
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
