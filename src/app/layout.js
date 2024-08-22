export const metadata = {
  title: "Buzz N Finds",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      url: "/favicon.ico",
    },
  },
};

export default function Layout() {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
