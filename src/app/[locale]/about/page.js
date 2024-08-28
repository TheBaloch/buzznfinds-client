export function generateMetadata({ params }) {
  const localizedTitles = {
    de: `Über Uns - BuzzNFinds`,
    ar: `من نحن - BuzzNFinds`,
    en: `About Us - BuzzNFinds`,
    es: `Sobre Nosotros - BuzzNFinds`,
    fr: `À Propos de Nous - BuzzNFinds`,
    ja: `私たちに関しては - BuzzNFinds`,
  };

  const localizedDescriptions = {
    de: `Erfahren Sie mehr über BuzzNFinds und unsere Mission, Ihnen die neuesten Trends, Produktbewertungen und Experteneinsichten zu bieten.`,
    ar: `تعرف على المزيد حول BuzzNFinds ومهمتنا في تقديم أحدث الاتجاهات وتقييمات المنتجات والتحليلات من الخبراء.`,
    en: `Learn more about BuzzNFinds and our mission to bring you the latest trends, product reviews, and expert insights.`,
    es: `Descubre más sobre BuzzNFinds y nuestra misión de ofrecerte las últimas tendencias, reseñas de productos y conocimientos de expertos.`,
    fr: `En savoir plus sur BuzzNFinds et notre mission de vous apporter les dernières tendances, critiques de produits et analyses d'experts.`,
    ja: `BuzzNFindsについてもっと知り、最新のトレンド、製品レビュー、専門家の洞察を提供する私たちの使命を理解してください。`,
  };

  const localizedKeywords = {
    de: `BuzzNFinds, Über Uns, Trends, Produktbewertungen, Experteneinsichten`,
    ar: `BuzzNFinds, من نحن, الاتجاهات, تقييمات المنتجات, تحليلات الخبراء`,
    en: `BuzzNFinds, About Us, trends, product reviews, expert insights`,
    es: `BuzzNFinds, Sobre Nosotros, tendencias, reseñas de productos, conocimientos de expertos`,
    fr: `BuzzNFinds, À Propos de Nous, tendances, critiques de produits, analyses d'experts`,
    ja: `BuzzNFinds, 私たちに関しては, トレンド, 製品レビュー, 専門家の洞察`,
  };

  const title = localizedTitles[params?.locale] || localizedTitles.en;
  const description =
    localizedDescriptions[params?.locale] || localizedDescriptions.en;
  const keywords = localizedKeywords[params?.locale] || localizedKeywords.en;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Buzz N Finds Editorial Team" }],
    locale: params?.locale,
    openGraph: {
      title,
      description,
      url: `https://buzznfinds.com/${params?.locale}/about`,
      siteName: "Buzz N Finds",
      images: [
        {
          url: "https://buzznfinds.com/favicon.ico",
          width: 50,
          height: 50,
          alt: "Buzz N Finds logo",
        },
      ],
      type: "website",
      alternates: {
        languages: {
          en: `https://buzznfinds.com/en/about`,
          es: `https://buzznfinds.com/es/about`,
          fr: `https://buzznfinds.com/fr/about`,
          de: `https://buzznfinds.com/de/about`,
          ar: `https://buzznfinds.com/ar/about`,
          ja: `https://buzznfinds.com/ja/about`,
        },
      },
    },
    robots: "index, follow",
  };
}

export default function Page() {
  return (
    <div class="bg-white text-gray-800 py-16 px-8">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-bold text-center mb-8">About BuzzNFinds</h1>
        <p class="text-lg leading-relaxed text-center mb-12">
          Welcome to BuzzNFinds, your ultimate destination for discovering the
          latest trends, top-selling products, and expert insights. We’re
          dedicated to bringing you fresh content that keeps you ahead in the
          fast-paced world of fashion, technology, home essentials, and more.
          Whether you’re a trendsetter, tech enthusiast, or just looking for
          reliable advice, BuzzNFinds is here to guide you every step of the
          way.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
            <p class="leading-relaxed">
              At BuzzNFinds, our mission is simple: to provide our readers with
              the most current and relevant information across various domains.
              We believe in the power of knowledge and aim to empower our
              audience by offering well-researched articles, detailed product
              reviews, and expert opinions.
            </p>
          </div>
          <div>
            <h2 class="text-2xl font-semibold mb-4">What We Offer</h2>
            <p class="leading-relaxed">
              From the latest tech gadgets to sustainable fashion trends, we
              cover a wide range of topics to cater to diverse interests. Our
              team of experienced writers and industry experts work tirelessly
              to ensure that you get the best advice and insights. We strive to
              be your go-to source for all things trendy and practical.
            </p>
          </div>
        </div>
        <div class="text-center mt-12">
          <h2 class="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p class="leading-relaxed mb-8">
            BuzzNFinds is more than just a website; it’s a community of
            like-minded individuals who share a passion for staying informed and
            ahead of the curve. Join us on our journey and stay connected with
            the latest trends and insights.
          </p>
          <p>coming soon .....</p>
        </div>
      </div>
    </div>
  );
}
