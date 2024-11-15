
export default function ShopLayout({ children, }: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex justify-center text-center mb-20">
            <div className="w-full sm:w-[550px] px-10">

                {children}
                
            </div>
        </main>
    ); 
}
