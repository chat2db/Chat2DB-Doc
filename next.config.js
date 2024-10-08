const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  i18n: {
    locales: ["zh-CN", "en-US", "ja-JP"],
    defaultLocale: "en-US",
  },
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/docs/start-guide/getting-started",
        statusCode: 301,
      },
    ];
  },
});
