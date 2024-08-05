import Blogs from "@/components/blog/blogs/blogs";
import CategoryBlock from "@/components/category/categoryBlock";
import MainBlogs from "@/components/mainblogs/mainblogs";

export const metadata = {
  title: "Buzz N Finds - Discover the Best Trends, Tips, and Reviews",
  description:
    "Welcome to Buzz N Finds, your go-to source for the latest trends, helpful tips, and in-depth reviews on a wide range of topics. Stay informed and entertained with our expert insights.",
  keywords:
    "trends, tips, reviews, latest news, trending topics, expert insights, Buzz N Finds",
  authors: [{ name: "Buzz N Finds Team" }],
  openGraph: {
    title: "Buzz N Finds - Discover the Best Trends, Tips, and Reviews",
    description:
      "Welcome to Buzz N Finds, your go-to source for the latest trends, helpful tips, and in-depth reviews on a wide range of topics. Stay informed and entertained with our expert insights.",
    url: "https://buzznfinds.com",
    siteName: "Buzz N Finds",
    images: [
      {
        url: "https://buzznfinds.com/images/logo.png",
        width: 230,
        height: 63,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: "index, follow",
  canonical: "https://buzznfinds.com",
};

export default function Home() {
  return (
    <main>
      <MainBlogs />
      <CategoryBlock />
      <Blogs />
    </main>
  );
}
