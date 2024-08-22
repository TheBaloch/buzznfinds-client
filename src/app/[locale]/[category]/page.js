import Image from "next/image";
import Link from "next/link";

async function getCategoryBlogs(category, limit, locale) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/category/${category}?limit=${limit}&lang=${locale}`,
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
  const title = `BuzzNFinds - ${params?.category
    ?.toUpperCase()
    .replace("-", " ")}`;
  const description = `Explore the latest insights and trends in ${params?.category.replace(
    "-",
    " "
  )} at Buzz N Finds. Stay informed with our in-depth articles and expert analysis.`;
  const keywords = `${params?.category?.replace(
    "-",
    " "
  )}, ${params?.category?.replace("-", " ")}, latest trends, expert analysis`;
  const authors = [{ name: "Buzz N Finds Editorial Team" }];
  const openGraphTitle = title;
  const openGraphDescription = description;

  return {
    title,
    description,
    keywords,
    authors,
    openGraph: {
      title: openGraphTitle,
      description: openGraphDescription,
      url: `https://buzznfinds.com/${params?.category}`,
      siteName: "Buzz N Finds",
      images: [
        {
          url: "https://buzznfinds.com/images/logo.png",
          width: 230,
          height: 63,
          alt: "Buzz N Finds logo",
        },
      ],
      locale: "en_US",
      type: "article",
    },
    robots: "index, follow",
    canonical: `https://buzznfinds.com/${params?.category}`,
  };
}

export default async function Page({ params }) {
  const category = params.category;
  const data = await getCategoryBlogs(category, 20);

  if (data)
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <div className="flex justify-center px-4 py-2 mt-10 mb-10 md:px-6">
          <span className="pb-2 text-4xl text-gray-600 font-bold shadow-sm border-b border-gray-200">
            #{data?.category}
          </span>
        </div>
        <main className="grid gap-8 py-8 px-4 md:px-6 min-h-screen">
          {data?.blogs?.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {data?.blogs?.map((blog, key) => (
                <Link href={`/article/${blog?.slug}`} key={key}>
                  <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                    <Image
                      src={blog?.mainImage}
                      alt={blog?.title}
                      width={400}
                      height={500}
                      className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                      style={{ aspectRatio: "400/500", objectFit: "cover" }}
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold tracking-tight group-hover:underline">
                        {blog?.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        By {blog?.author?.name} • {formatDate(blog?.createdAt)}
                      </p>
                      <p className="mt-4 line-clamp-3 text-muted-foreground">
                        {blog?.subtitle}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
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
