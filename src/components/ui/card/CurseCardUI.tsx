"use client";

import { Curse } from '@/interfaces';
// import Link from 'next/link';


interface Props {
    curse: Curse;
}



export const CurseCardUI = ({ curse }: Props) => {

    const { name, prise, email, endDate, startDate } = curse;

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                alert("Texto copiado al portapapeles!");
            })
            .catch((err) => {
                console.error("Error al copiar el texto: ", err);
            });
    };




    return (
        <div className="min-w-[350px] min-h-[400px] max-w-[350px] bg-[--card] border border-[--text_color] rounded-lg rounded-t-none shadow m-5 card flex flex-col justify-between">

            {/* <Link href={`/trainMe/curses/curse/${uid}`}> */}
            <div className="p-5 gradient-card rounded-br-full h-[150px] flex flex-col justify-between">
                <h5 className="text-xl tracking-tight text-white">
                    {name}
                </h5>
            </div>
            {/* </Link> */}

            <p className="mt-3 font-normal text-sm text-[#b13340] p-5">
                Precio: {prise}
            </p>

            <div className='flex justify-between'>

                <p className="mt-3 font-normal text-sm text-[--text_color] pb-5 px-5">
                    Fecha de inicio: <br />
                    <span className='text-[--primary]'>{startDate}</span>
                </p>

                <p className="mt-3 font-normal text-sm text-[--text_color] pb-5 px-5">
                    Fecha de fin: <br />
                    <span className='text-[--primary]'>{endDate}</span>
                </p>
            </div>


            <p className="mt-3 font-normal text-sm text-[--text_color] pb-5 px-5">
                Para solicitar puede contactarnos mediante vía correo por <span
                    className='text-blue-700 cursor-copy'
                    onClick={handleCopy}
                >
                    {email}
                </span>
            </p>

        </div>

    );
}
