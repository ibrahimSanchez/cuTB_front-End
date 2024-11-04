'use client';

import * as React from 'react';
import { Provider } from '@/interfaces';
import Link from 'next/link';
import Image from 'next/image';
import { ProviderDialog } from '../dialog/ProviderDialog';


type Props = {
    provider: Provider
}


export const ProviderCardUI = ({ provider }: Props) => {

    const {
        name,
        country,
        email,
        website,
    } = provider;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <div className="p-5 flex flex-col justify-between items-center max-w-sm bg-[--card] rounded-lg shadow m-6 py-4 cardAnimate">

                <div className="flex justify-center mb-5">
                    <Image
                        className="rounded-t-lg"
                        src={`/images/ISQUI.jpg`}
                        alt='img'
                        width={150}
                        height={100}
                    />
                </div>

                {/* <div className="p-5"> */}
                <h5 className="mb-4 text-xl font-semibold tracking-tight text-[--text_color]">
                    {name}
                </h5>
                <p className="mb-5 font-normal text-[--text_secondary_color]">
                    {country}
                </p>

                <p className="mb-5 font-normal text-[--text_secondary_color]">
                    {email}
                </p>

                <Link href={website} className="inline-flex font-medium items-center text-[--text_secondary_color] underline">
                    Visitar sitio web
                </Link>


                <button className='mt-4 border shadow-lg px-4 py-2 rounded-lg hover:border-[--primary]' onClick={handleClickOpen}>
                    Ver mas detalles
                </button>


            </div>

            <ProviderDialog
                handleClose={handleClose}
                open={open}
                provider={provider}
            />


        </>
    );
};






