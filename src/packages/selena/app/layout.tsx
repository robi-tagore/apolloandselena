
import "./globals.css";
import "./fonts/fonts.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
