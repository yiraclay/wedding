import "./globals.css";

export const metadata = {
  title: "A Wedding to Remember",
  description: "Undangan pernikahan digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}