import Image from "next/image";
import Link from "next/link";

async function getCategoryBlogs(category, limit, blogslug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/category/${category}?limit=${limit + 1}`,
    {
      next: { revalidate: 86000 },
    }
  );
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  const blogs = Array(...data?.blogs);

  //remove the current blog from related
  let index = blogs?.findIndex((blog) => blog.slug === blogslug);
  if (index !== -1) {
    blogs?.splice(index, 1);
  }

  //if blogs are less than the limit then fetch more from latest
  if (blogs.length < limit) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/blog/latest?limit=${
        limit + 1 - blogs.length
      }`,
      {
        next: { revalidate: 86000 },
      }
    );
    const latest = await res.json();
    blogs.push(...latest?.data);
  }

  //remove the current blog from related again
  index = blogs?.findIndex((blog) => blog.slug === blogslug);
  if (index !== -1) {
    blogs?.splice(index, 1);
  }
  if (blogs.length > limit) blogs.length = limit;
  return blogs;
}

export default async function RelatedBlogs({ category, limit, blogslug }) {
  const data = await getCategoryBlogs(category, limit, blogslug);
  //console.log(data);
  return (
    <>
      <section className="px-4 py-8 mb-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Explore more . . .</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data?.map((blog, index) => (
            <Link key={index} href={`/article/${blog?.slug}`} className="group">
              <div className="space-y-4 mt-10">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={blog?.mainImage}
                    alt={blog?.title}
                    className="w-full h-auto transition-all duration-300 group-hover:scale-105"
                    width="400"
                    height="300"
                    style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-semibold group-hover:underline">
                  {blog?.title}
                </h3>

                <div className="text-gray-600">
                  <span>{blog?.author?.name}</span> <span>•</span>{" "}
                  <span>{formatDate(blog?.createdAt)}</span>
                </div>
                <p className="text-gray-700">{blog?.subtitle}</p>
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
