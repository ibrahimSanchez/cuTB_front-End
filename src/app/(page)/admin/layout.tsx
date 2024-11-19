'use client';

import Link from "next/link";
import clsx from 'clsx';
import { IconButton, Tooltip } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { FaUsersCog } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { removeCookie } from "@/helper";




export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    
    const router = useRouter();

    const handleLogOut = () => {
        removeCookie('x-token');
        removeCookie('x-role');
        router.push('/');
    }

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

                    <div>
                        <Tooltip title="Cerrar sesión">
                            <IconButton className="bg-[--primary] hover:bg-[--secondary]">
                                <div
                                    onClick={() => handleLogOut()}
                                >
                                    <IoIosLogOut
                                        size={20}
                                        className='gradient-card2 w-8 h-8 p-2 rounded-full text-white'
                                    />
                                </div>
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
