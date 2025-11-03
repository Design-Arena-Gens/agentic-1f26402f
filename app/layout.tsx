import "./globals.css";

export const metadata = {
  title: "Toyota Logo Downloader",
  description: "Display and download the Toyota logo SVG",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
