import Link from "next/link";

async function getCategory() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/category`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function AllCategoryBlock() {
  const categories = await getCategory();
  if (categories)
    return (
      <>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              View Blogs from All Categories
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl lg:text-2xl xl:text-2xl">
              Check out our latest blog posts for every category.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/${category?.slug}`}
                className="mb-5 mt-5"
              >
                <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">
                  <h3 className="text-lg font-semibold">
                    {category?.category}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </>
    );
}
