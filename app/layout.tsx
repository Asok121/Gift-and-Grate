import "./globals.css";
import type { Metadata } from "next";

// Font imports
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

export const metadata: Metadata = {
  title: "Gift & Grate | Premium Gifting in Coimbatore",
  description: "Celebrate special moments with premium gifts, flowers, cakes, and hampers. Gift & Grate - Coimbatore's favorite gifting destination.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-lato bg-softcream text-deepplum">
        {children}
      </body>
    </html>
  );
}