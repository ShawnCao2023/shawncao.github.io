import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://shawncao2023.github.io",
    title: "Xiaoxu Cao",
    description:
      "Personal website of Xiaoxu Cao, a motion planning and control specialist in autonomous driving.",
    author: "Xiaoxu Cao",
    profile: "https://www.researchgate.net/profile/Xiaoxu-Cao",
    ogImage: "profile.png",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: false,
    showBackButton: true,
    editPost: { enabled: false },
    search: false,
  },
  socials: [
    {
      name: "github",
      url: "https://github.com/ShawnCao2023",
      linkTitle: "Xiaoxu Cao on GitHub",
    },
  ],
  shareLinks: [],
});
