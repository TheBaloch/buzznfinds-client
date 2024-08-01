import Blogs from "@/components/blog/blogs/blogs";
import MainBlogs from "@/components/mainblogs/mainblogs";

export default function Home() {
  return (
    <main>
      <MainBlogs />
      <Blogs />
    </main>
  );
}
