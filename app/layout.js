import "./globals.css";

export const metadata = {
  title: "Greenstitch",
  description: "Greenstitch Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
