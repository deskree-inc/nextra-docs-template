import "./globals.css";
import "nextra-theme-docs/style.css";

import { Layout, Navbar } from "nextra-theme-docs";

import { Head } from "nextra/components";
import { TetrixLogo } from "@/components/tetrix-logo";
import { getPageMap } from "nextra/page-map";
import themeConfig from "../../theme.config";

export const metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    template: "%s - My Docs",
  },
  description: "Documentation site built with Nextra",
  applicationName: "My Docs",
  generator: "Next.js",
  appleWebApp: {
    title: "My Docs",
  },
  other: {
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "msapplication-TileColor": "#2563eb",
  },
  twitter: {
    site: "https://your-domain.com",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbar = (
    <Navbar
      logo={
        <div className="flex items-center gap-2">
          <TetrixLogo />
        </div>
      }
      // Tetrix AI support
      chatLink="https://github.com/deskree-inc/tetrix-docs-platform/discussions"
    />
  );
  const pageMap = await getPageMap();
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <body className="antialiased">
        <Layout
          banner={undefined}
          navbar={navbar}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/deskree-inc/tetrix-docs-platform/tree/main/src/app"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
          <footer className="tetrix-footer">{themeConfig.footer.text}</footer>
        </Layout>
      </body>
    </html>
  );
}
