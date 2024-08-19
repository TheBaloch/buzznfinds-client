import LatestBlogs from "@/components/blog/latestBlogs";
import AllCategoryBlock from "@/components/category/allCategoryBlock";
import CategoryBlock from "@/components/category/categoryBlock";

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
    siteName: "buzzNfinds",
    images: [
      {
        url: "https://buzznfinds.com/favicon.ico",
        width: 50,
        height: 50,
        alt: "Buzznfinds icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "https://buzznfinds.com/favicon.ico",
    apple: "https://buzznfinds.com/favicon.ico",
  },
  alternates: {
    canonical: `https://buzznfinds.com`,
  },
  robots: "index, follow",
  canonical: "https://buzznfinds.com",
};

export default function Home() {
  return (
    <main>
      <LatestBlogs limit={15} />
      <AllCategoryBlock />
      <CategoryBlock category={"technology"} limit={9} />
    </main>
  );
}
