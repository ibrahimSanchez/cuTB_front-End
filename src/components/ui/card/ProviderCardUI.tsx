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
        type
    } = provider;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        // loadCurseByProvider()
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <div className="p-5 flex flex-col justify-between items-center max-w-sm bg-page_background2 rounded-lg shadow m-6 py-4 animateMove">

                <div className="flex justify-center mb-5">
                    <Image
                        className="rounded-t-lg"
                        src={`/system/${type === 'curse_provider' ? 'Course.png' : 'exams.png'}`}
                        alt='img'
                        width={100}
                        height={100}
                    />
                </div>

                {/* <div className="p-5"> */}
                <h5 className="mb-4 text-xl font-semibold tracking-tight text-secondary">
                    {name}
                </h5>
                <p className="mb-5 font-normal text-primary">
                    {country}
                </p>

                <p className="mb-5 font-normal text-primary">
                    {email}
                </p>

                <Link href={website} className="inline-flex font-medium items-center text-card underline">
                    Visitar sitio web
                </Link>

                <button className='mt-4 border shadow-xl px-4 py-2 rounded-lg hover:border-primary text-primary' onClick={handleClickOpen}>
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






