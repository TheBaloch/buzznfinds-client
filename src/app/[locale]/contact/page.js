export function generateMetadata({ params: { locale } }) {
  const translations = {
    en: {
      title: "Contact Us - BuzzNFinds",
      description:
        "Reach out to BuzzNFinds for inquiries, feedback, or support. We're here to assist with the latest trends, product reviews, and expert tips.",
      keywords:
        "Contact BuzzNFinds, customer support, inquiries, feedback, trend updates, product reviews, expert tips",
    },
    es: {
      title: "Contáctanos - BuzzNFinds",
      description:
        "Ponte en contacto con BuzzNFinds para consultas, comentarios o soporte. Estamos aquí para ayudarte con las últimas tendencias, reseñas de productos y consejos de expertos.",
      keywords:
        "Contáctanos, BuzzNFinds, soporte, consultas, comentarios, actualizaciones de tendencias, reseñas de productos, consejos de expertos",
    },
    fr: {
      title: "Contactez-Nous - BuzzNFinds",
      description:
        "Contactez BuzzNFinds pour des questions, des commentaires ou un soutien. Nous sommes là pour vous aider avec les dernières tendances, les critiques de produits et les conseils d'experts.",
      keywords:
        "Contactez-Nous, BuzzNFinds, support, questions, commentaires, tendances, critiques de produits, conseils d'experts",
    },
    de: {
      title: "Kontaktieren Sie Uns - BuzzNFinds",
      description:
        "Kontaktieren Sie BuzzNFinds für Anfragen, Feedback oder Support. Wir sind hier, um Ihnen bei den neuesten Trends, Produktbewertungen und Expertentipps zu helfen.",
      keywords:
        "Kontaktieren Sie Uns, BuzzNFinds, Unterstützung, Anfragen, Feedback, Trends, Produktbewertungen, Expertentipps",
    },
    ar: {
      title: "اتصل بنا - BuzzNFinds",
      description:
        "تواصل مع BuzzNFinds للاستفسارات أو التعليقات أو الدعم. نحن هنا لمساعدتك في أحدث الاتجاهات، ومراجعات المنتجات، ونصائح الخبراء.",
      keywords:
        "اتصل بنا، BuzzNFinds، دعم العملاء، استفسارات، تعليقات، أحدث الاتجاهات، مراجعات المنتجات، نصائح الخبراء",
    },
    ja: {
      title: "お問い合わせ - BuzzNFinds",
      description:
        "BuzzNFindsへのお問い合わせ、ご意見、ご支援についてはこちら。最新のトレンド、製品レビュー、エキスパートのヒントを提供します。",
      keywords:
        "お問い合わせ, BuzzNFinds, サポート, 問い合わせ, フィードバック, トレンド, 製品レビュー, 専門家のヒント",
    },
  };

  const translation = translations[locale] || translations.en;

  return {
    title: translation.title,
    description: translation.description,
    keywords: translation.keywords,
    openGraph: {
      title: translation.title,
      description: translation.description,
      url: `https://buzznfinds.com/${locale}/contact`,
      siteName: "BuzzNFinds",
      images: [
        {
          url: "https://buzznfinds.com/favicon.ico",
          width: 50,
          height: 50,
          alt: "BuzzNFinds logo",
        },
      ],
      locale: locale,
      type: "website",
    },
    alternates: {
      canonical: `https://buzznfinds.com/${locale}/contact`,
      languages: {
        en: "https://buzznfinds.com/en/contact",
        es: "https://buzznfinds.com/es/contact",
        fr: "https://buzznfinds.com/fr/contact",
        de: "https://buzznfinds.com/de/contact",
        ar: "https://buzznfinds.com/ar/contact",
        ja: "https://buzznfinds.com/ja/contact",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page({ params: { locale } }) {
  const translations = {
    en: {
      contactUs: "Contact Us",
      phone: "Phone",
      address: "Address",
      email: "Email",
      name: "Name",
      subject: "Subject",
      message: "Message",
      placeholderName: "Enter your name",
      placeholderEmail: "Enter your email",
      placeholderSubject: "Enter the subject",
      placeholderMessage: "Enter your message",
      submit: "Submit",
      formIntro:
        "Fill out the form below and we'll get back to you as soon as possible.",
    },
    es: {
      contactUs: "Contáctenos",
      phone: "Teléfono",
      address: "Dirección",
      email: "Correo Electrónico",
      name: "Nombre",
      subject: "Asunto",
      message: "Mensaje",
      placeholderName: "Ingrese su nombre",
      placeholderEmail: "Ingrese su correo electrónico",
      placeholderSubject: "Ingrese el asunto",
      placeholderMessage: "Ingrese su mensaje",
      submit: "Enviar",
      formIntro:
        "Complete el formulario a continuación y nos pondremos en contacto con usted lo antes posible.",
    },
    fr: {
      contactUs: "Nous Contacter",
      phone: "Téléphone",
      address: "Adresse",
      email: "Email",
      name: "Nom",
      subject: "Sujet",
      message: "Message",
      placeholderName: "Entrez votre nom",
      placeholderEmail: "Entrez votre email",
      placeholderSubject: "Entrez le sujet",
      placeholderMessage: "Entrez votre message",
      submit: "Envoyer",
      formIntro:
        "Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.",
    },
    de: {
      contactUs: "Kontaktieren Sie uns",
      phone: "Telefon",
      address: "Adresse",
      email: "E-Mail",
      name: "Name",
      subject: "Betreff",
      message: "Nachricht",
      placeholderName: "Geben Sie Ihren Namen ein",
      placeholderEmail: "Geben Sie Ihre E-Mail-Adresse ein",
      placeholderSubject: "Geben Sie den Betreff ein",
      placeholderMessage: "Geben Sie Ihre Nachricht ein",
      submit: "Absenden",
      formIntro:
        "Füllen Sie das folgende Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden.",
    },
    ja: {
      contactUs: "お問い合わせ",
      phone: "電話",
      address: "住所",
      email: "メール",
      name: "名前",
      subject: "件名",
      message: "メッセージ",
      placeholderName: "名前を入力してください",
      placeholderEmail: "メールアドレスを入力してください",
      placeholderSubject: "件名を入力してください",
      placeholderMessage: "メッセージを入力してください",
      submit: "送信",
      formIntro:
        "以下のフォームに記入していただければ、できるだけ早くお返事いたします。",
    },
    ar: {
      contactUs: "اتصل بنا",
      phone: "هاتف",
      address: "عنوان",
      email: "البريد الإلكتروني",
      name: "الاسم",
      subject: "الموضوع",
      message: "الرسالة",
      placeholderName: "أدخل اسمك",
      placeholderEmail: "أدخل بريدك الإلكتروني",
      placeholderSubject: "أدخل الموضوع",
      placeholderMessage: "أدخل رسالتك",
      submit: "إرسال",
      formIntro: "املأ النموذج أدناه وسنعود إليك في أقرب وقت ممكن.",
    },
  };

  const t = translations[locale] || translations.en;

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800">{t.contactUs}</h2>
          <p className="text-gray-600 mt-2">{t.formIntro}</p>
        </div>
        <form className="space-y-6 p-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              {t.name}
            </label>
            <input
              type="text"
              id="name"
              placeholder={t.placeholderName}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              placeholder={t.placeholderEmail}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              {t.subject}
            </label>
            <input
              type="text"
              id="subject"
              placeholder={t.placeholderSubject}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              {t.message}
            </label>
            <textarea
              id="message"
              placeholder={t.placeholderMessage}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 sm:text-sm h-36 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-black text-white px-4 py-2 shadow-sm hover:bg-gray-800 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
          >
            {t.submit}
          </button>
        </form>
      </div>
    </div>
  );
}
