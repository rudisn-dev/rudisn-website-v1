export default function manifest() {
  return {
    name: "Rudisn Agency",
    short_name: "Rudisn",
    description:
      "Rudisn is a full-service agency dedicated to helping businesses grow and thrive in the digital age.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#5bbad5",
    icons: [
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    orientation: "portrait",
    scope: "/",
    related_applications: [],
    prefer_related_applications: false,
  };
}
