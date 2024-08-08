module.exports = {
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://cdn.buzznfinds.com/" : "",
  images: {
    remotePatterns: [
      {
        hostname: "images.buzznfinds.com",
      },
    ],
  },
};
