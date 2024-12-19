import RootLayout from "@/components/layouts/RootLayout";
import Script from "next/script";

export default function Layout({ children }) {
  return (
    <RootLayout>
      <Script id="embedded-chatbot-config" strategy="afterInteractive">
        {`
          window.embeddedChatbotConfig = {
            chatbotId: "Z4yXsh8r619FGdU1hDYZ3",
            domain: "www.chatbase.co"
          };
        `}
      </Script>
      <Script
        src="https://www.chatbase.co/embed.min.js"
        strategy="afterInteractive"
        data-chatbot-id="Z4yXsh8r619FGdU1hDYZ3"
        data-domain="www.chatbase.co"
      />
      {children}
    </RootLayout>
  );
}
