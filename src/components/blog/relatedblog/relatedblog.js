import Image from "next/image";
import Link from "next/link";

// async function getCategoryBlogs(category, limit, blogslug) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API}/category/${category}?limit=${limit + 1}`,
//     {
//       next: { revalidate: 86000 },
//     }
//   );
//   if (!res.ok) {
//     return null;
//   }
//   const data = await res.json();
//   const blogs = Array(...data?.blogs);

//   //remove the current blog from related
//   let index = blogs?.findIndex((blog) => blog.slug === blogslug);
//   if (index !== -1) {
//     blogs?.splice(index, 1);
//   }

//   //if blogs are less than the limit then fetch more from latest
//   if (blogs.length < limit) {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API}/blog/latest?limit=${
//         limit + 1 - blogs.length
//       }`,
//       {
//         next: { revalidate: 86000 },
//       }
//     );
//     const latest = await res.json();
//     blogs.push(...latest?.data);
//   }

//   //remove the current blog from related again
//   index = blogs?.findIndex((blog) => blog.slug === blogslug);
//   if (index !== -1) {
//     blogs?.splice(index, 1);
//   }
//   if (blogs.length > limit) blogs.length = limit;
//   return blogs;
// }

export default function RelatedBlogs({ related, id }) {
  const o = (id || 0) % 10;
  //const data = await getCategoryBlogs(category, limit, blogslug);
  //console.log(data);
  return (
    <>
      <section className="px-4 py-8 mb-20">
        {customRelatedHeading(o)}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related?.map((blog, index) => (
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

function customRelatedHeading(o) {
  if (o === 0 || !o)
    return (
      <div className="bg-light-blue-100 p-6 text-center font-comic-sans">
        <p className="text-lg text-gray-800">
          <span className="text-orange-500 font-bold">
            You&apos;ve got to check these out...
          </span>{" "}
          Seriously, these are like the{" "}
          <span className="text-orange-500 font-bold">article</span> and its
          best buddies (aka related posts) had a mini reunion!{" "}
          <span className="text-3xl">🎉</span>
        </p>
      </div>
    );
  if (o === 1)
    return (
      <div className="p-6 text-center font-['Press_Start_2P']">
        <p className="text-lg text-gray-600">
          <span className="text-pink-500 font-bold">Hold the confetti!</span>{" "}
          The <span className="text-pink-500 font-bold">latest blog</span> and
          its buddies are throwing a reunion party!{" "}
          <span className="text-4xl">🎈</span>
        </p>
      </div>
    );
  if (o === 2)
    return (
      <div className="bg-black border-2 border-neon-green-500 border-solid rounded-lg p-6 text-center shadow-lg">
        <p className="text-lg text-white">
          <span className="text-neon-green-500 font-bold">
            Step into the spotlight!
          </span>{" "}
          The <span className="text-neon-green-500 font-bold">latest post</span>{" "}
          and its crew are back together! <span className="text-4xl">🌟</span>
        </p>
      </div>
    );
  if (o === 3)
    return (
      <div className=" p-6 text-center">
        <p className="text-lg text-pastel-purple-800">
          <span className="text-pastel-yellow-500 font-bold">Surprise!</span>{" "}
          Your favorite{" "}
          <span className="text-pastel-yellow-500 font-bold">blog</span> and its
          friends are here for a get-together!{" "}
          <span className="text-3xl">🎉</span>
        </p>
      </div>
    );
  if (o === 4)
    return (
      <div className="p-6 text-center">
        <p className="text-lg text-orange-800">
          <span className="text-yellow-500 font-bold">Sun’s out!</span> The{" "}
          <span className="text-yellow-500 font-bold">latest blog</span> and its
          pals are shining bright! <span className="text-4xl">☀️</span>
        </p>
      </div>
    );
  if (o === 5)
    return (
      <div className="p-6 text-center font-['Courgette']">
        <p className="text-lg text-purple-800">
          <span className="text-teal-500 font-bold">Throwback time!</span> The{" "}
          <span className="text-teal-500 font-bold">featured post</span> and its
          squad are hanging out! <span className="text-3xl">🎬</span>
        </p>
      </div>
    );
  if (o === 6)
    return (
      <div className="p-6 text-center">
        <p className="text-lg text-pink-800">
          <span className="text-indigo-500 font-bold">Get excited!</span> The{" "}
          <span className="text-indigo-500 font-bold">newest blog</span> and its
          buddies are making waves! <span className="text-4xl">🚀</span>
        </p>
      </div>
    );
  if (o === 7)
    return (
      <div className=" p-6 text-center ">
        <p className="text-lg text-blue-800">
          <span className="text-green-500 font-bold">Guess what?</span> The{" "}
          <span className="text-green-500 font-bold">latest blog</span> and its
          crew are hanging out again! <span className="text-3xl">🎊</span>
        </p>
      </div>
    );
  if (o === 8)
    return (
      <div className="p-6 text-center">
        <p className="text-lg text-yellow-800">
          <span className="text-pink-500 font-bold">It’s a blast!</span> The{" "}
          <span className="text-pink-500 font-bold">featured article</span> and
          its pals are here for a fun time! <span className="text-4xl">🥳</span>
        </p>
      </div>
    );
  if (o === 9)
    return (
      <div className=" p-6 text-center">
        <p className="text-lg text-gold-800">
          <span className="text-gray-500 font-bold">Shiny and new!</span> The{" "}
          <span className="text-gray-500 font-bold">latest blog</span> and its
          stars are ready for you! <span className="text-4xl">✨</span>
        </p>
      </div>
    );
  if (o === 10)
    return (
      <div className=" p-6 text-center ">
        <p className="text-lg text-cyan-800">
          <span className="text-lime-500 font-bold">Hooray!</span> The{" "}
          <span className="text-lime-500 font-bold">new post</span> and its
          friends are having a party! <span className="text-3xl">🎈</span>
        </p>
      </div>
    );
}
