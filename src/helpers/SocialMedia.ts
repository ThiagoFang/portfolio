export type ISocialMedias = ISocialMedia[];

export interface ISocialMedia {
  name: string;
  icon: string;
  link: string;
}

export const SocialMedias: ISocialMedias = [
  {
    name: "twitter",
    icon: "ri-twitter-fill",
    link: "https://twitter.com/Thiago_Fang",
  },
  {
    name: "behance",
    icon: "ri-behance-fill",
    link: "https://www.behance.net/Thiago-s-lima",
  },
  {
    name: "github",
    icon: "ri-github-fill",
    link: "https://github.com/ThiagoFang",
  },
  {
    name: "instagram",
    icon: "ri-instagram-line",
    link: "https://www.instagram.com/thiago_fang/",
  },
  {
    name: "linkedin",
    icon: "ri-linkedin-fill",
    link: "https://www.linkedin.com/in/thiago-lima-46463715a/",
  },
];
