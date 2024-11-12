'use client';

import Link from "next/link";
import clsx from 'clsx';
import { IconButton, Tooltip } from "@mui/material";
import { usePathname } from "next/navigation";
import { FaUsersCog } from "react-icons/fa";




export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {

    const pathname = usePathname();

    return (
        <>

            <div className='sm:flex justify-between'>
                <h1 className="title mb-2">Panel de administración</h1>

                <div className="sm:flex space-x-4 mb-2 text-center">

                    <div>
                        <Tooltip title="Panel de administración">
                            <IconButton className={clsx(
                                "bg-[--primary] hover:bg-[--secondary]",
                                {
                                    "bg-red-700": pathname === '/admin'
                                }
                            )}>
                                <Link href="/admin" >
                                    <FaUsersCog
                                        size={20}
                                        className='gradient-card2 w-8 h-8 p-2 rounded-full text-white'
                                    />
                                </Link>
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>


            {/* line separator */}
            <div className="w-full h-1 bg-blue-950 mb-4"></div>
            <div>
                {children}
            </div>
        </>
    );
}
