import RootLayout from "@/components/layouts/RootLayout";

export default function MyApp({ Component, pageProps }) {
  return (
    <RootLayout isClient={true}>
      <Component {...pageProps} />
    </RootLayout>
  );
}
