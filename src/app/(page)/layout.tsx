import { Footer, TopMenuUI } from "@/components";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>

      <TopMenuUI />

      <div className="min-h-screen sm:p py-6 mt-10 xl:mt-14">
        {children}
      </div>

      <Footer />

    </main>
  );
}
