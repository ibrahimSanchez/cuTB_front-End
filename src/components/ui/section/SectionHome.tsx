import React from 'react'
import Image from 'next/image'


interface Props {
    title: string;
    text: string;
    image: string;
    className?: string
}


export const SectionHome = ({ image, text, title, className = "" }: Props) => {
    return (<section
        className={`relative w-full h-screen flex items-center bg-cover bg-center bg-gradient ${className}`}>
        {/* <div className="absolute inset-0 bg-gradient1 bg-opacity-50"></div> */}
        <div className="z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
            {/* Texto */}
            <div className="lg:w-1/2 text-left text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
                <p className="text-lg md:text-xl leading-7">
                    {text}
                </p>
            </div>
            {/* Icono grande */}

            <div className="lg:w-1/2 flex justify-center">
                <div className=" flex items-center justify-center  ">
                    <Image
                        src={image}
                        alt="image"
                        width={400}
                        height={200}
                    />
                </div>
            </div>
            <div>
            </div>

        </div>

    </section>
    )
}
