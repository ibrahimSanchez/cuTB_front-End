import { Footer, TopMenuUI } from "@/components";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>

      <TopMenuUI />

      <div className="min-h-screen px-5 sm:px-10 py-6 mt-16 xl:mt-24">
        {children}
      </div>

      <Footer />

    </main>
  );
}
