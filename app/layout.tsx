export const metadata = {
  title: "Digital Business CI",
  description: "Vente de produits digitaux",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
