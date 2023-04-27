module.exports = {
  async redirects() {
    return [
      {
        source: "/example",
        destination: "/",
        permanent: true,
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      type: "asset",
      resourceQuery: /url/, // *.svg?url
    });
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] },
      use: ["@svgr/webpack"],
    });
    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  trailingSlash: false,
  reactStrictMode: true,
  distDir: ".next",
};
