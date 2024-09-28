import Image from "next/image";
import Link from "next/link";
import { Share2, Facebook, Twitter, Linkedin } from "lucide-react";

export default function BlogDetail({ blog, related }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          {blog.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          {blog.subtitle}
        </p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <span>By {blog.author.name}</span>
          <span>•</span>
          <span>
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span>•</span>
          <span>{blog.category.name}</span>
        </div>
      </header>

      <Image
        src={blog.mainImage}
        alt={blog.title}
        width={1200}
        height={600}
        className="w-full h-auto rounded-lg mb-12 shadow-md"
        loading="eager"
      />

      <div className="flex flex-col lg:flex-row gap-12">
        <article className="lg:w-2/3">
          <div className="prose max-w-none mb-12">
            <StyledContent html={blog?.introduction} />
            <StyledContent html={blog?.content} />
            <StyledContent html={blog?.content1} />
            <StyledContent html={blog?.content2} />
            <StyledContent html={blog?.conclusion} />
          </div>

          <div className="flex justify-center space-x-4 mb-12">
            {["Facebook", "Twitter", "Linkedin", "Share2"].map(
              (icon, index) => {
                const Icon = { Facebook, Twitter, Linkedin, Share2 }[icon];
                return (
                  <button
                    key={index}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label={`Share on ${icon}`}
                  >
                    <Icon className="h-5 w-5 text-gray-600" />
                  </button>
                );
              }
            )}
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-12 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                {blog.author.avatar ? (
                  <Image
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    layout="fill"
                    objectFit="cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600 text-2xl font-bold">
                    {blog.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {blog.author.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {blog.category.name} - {blog.subcategory.name}
                </p>
                <div className="text-sm text-gray-600">
                  <StyledContent html={blog?.author.about} />
                </div>
              </div>
            </div>
          </div>
        </article>

        <aside className="lg:w-1/3">
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <StyledContent html={blog?.cta} />
            <form className="mt-4 flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="space-y-6">
              {related.map((article) => (
                <Link
                  href={`/article/${article.slug}`}
                  key={article.id}
                  className="block group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Image
                      src={article.mainImage}
                      alt={article.title}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {article.overview}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

const StyledContent = ({ html }) => (
  <div
    dangerouslySetInnerHTML={{ __html: html ? html : "" }}
    className="prose max-w-none
      [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:text-gray-900
      [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mb-3 [&_h2]:text-gray-800
      [&_h3]:text-xl [&_h3]:font-medium [&_h3]:mb-2 [&_h3]:text-gray-700
      [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-gray-600
      [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4
      [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4
      [&_li]:mb-2
      [&_a]:text-blue-600 [&_a]:underline [&_a]:hover:text-blue-800
      [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-4
      [&_code]:bg-gray-100 [&_code]:rounded [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-sm
      [&_pre]:bg-gray-100 [&_pre]:p-4 [&_pre]:rounded [&_pre]:overflow-x-auto
      [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded [&_img]:my-4
      [&_table]:w-full [&_table]:border-collapse [&_table]:my-4
      [&_th]:bg-gray-100 [&_th]:border [&_th]:border-gray-300 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left
      [&_td]:border [&_td]:border-gray-300 [&_td]:px-4 [&_td]:py-2
      [&_hr]:my-8 [&_hr]:border-t [&_hr]:border-gray-300"
  />
);
