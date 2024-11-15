import Image from "next/image";
import Link from "next/link";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";




export const Footer = () => {
    return (
        <div className="w-full text-xs px-6 lg:px-14 py-10 flex justify-between bg-[--navbar]">

            <div className="flex justify-between w-[70%]">

                <div className="w-[25%]">
                    <h4 className="text-sm text-[#007bff]">Sobre nosotros</h4>
                    {/* line separator */}
                    <div className="w-full h-[2px] bg-[#007bff] mb-4" />

                    <div className="flex flex-col">
                        <Link
                            className="text-gray-500 text-sm hover:underline my-1"
                            href='/about'
                        >
                            Misión
                        </Link>


                        <Link
                            className="text-gray-500 text-sm hover:underline my-1"
                            href='/about'
                        >
                            Visión
                        </Link>


                        <Link
                            className="text-gray-500 text-sm hover:underline my-1"
                            href='/about'
                        >
                            Objetivos
                        </Link>


                        <Link
                            className="text-gray-500 text-sm hover:underline my-1"
                            href='/about'
                        >
                            Estructura
                        </Link>
                    </div>

                </div>

                <div className="w-[25%]">
                    <h4 className="text-sm text-[#007bff]">Entrenamiento y exámenes</h4>
                    {/* line separator */}
                    <div className="w-full h-[2px] bg-[#007bff] mb-4" />

                    <div className="flex flex-col">
                        <Link
                            className="text-gray-500 text-sm hover:underline my-1"
                            href='/trainMe/providers'
                        >
                            Encuentre un proveedor de capacitación
                        </Link>


                        <Link
                            className="text-gray-500 text-sm hover:underline my-1"
                            href='/trainMe/providers'
                        >
                            Encuentre un proveedor de exámenes
                        </Link>


                        {/* <Link
                            className="text-gray-500 text-sm hover:underline my-1"
                            href='#'
                        >
                            Conviértase en un proveedor de formación
                        </Link> */}

                    </div>

                </div>

                <div className="w-[25%]">
                    <h4 className="text-sm text-[#007bff]">Información</h4>
                    {/* line separator */}
                    <div className="w-full h-[2px] bg-[#007bff] mb-4" />

                    <div className="flex flex-col">
                        <Link
                            className="text-gray-500 text-sm hover:underline my-1"
                            href='/certifyMe'
                        >
                            Certificarme
                        </Link>


                        <Link
                            className="text-gray-500 text-sm hover:underline my-1"
                            href='#'
                        >
                            Noticias
                        </Link>


                        <Link
                            className="text-gray-500 text-sm hover:underline my-1"
                            href='#'
                        >
                            RCS
                        </Link>


                        <Link
                            className="text-gray-500 text-sm hover:underline my-1"
                            href='#'
                        >
                            Glosario
                        </Link>

                        <Link
                            className="text-gray-500 text-sm hover:underline my-1"
                            href='#'
                        >
                            Ayuda
                        </Link>
                    </div>

                </div>

            </div>


            <div className="w-[25%]">

                <Image
                    className="rounded-3xl shadow-sm mb-4"
                    src='/images/logo.jpg'
                    alt='img'
                    width={100}
                    height={100}
                />

                <p className="text-gray-500">
                    Oficina permanente en la Unión de Informáticos de Cuba <br />
                    Dirección: Calle 164. No. 203 e/ 3ra y 1ra. Playa. La Habana <br />
                    Email: cutb@uic.cu
                </p>

                <div className="sm:flex my-4 ">
                    <p className="text-sm text-gray-500">Síganos</p>

                    <div className="ml-2 sm:flex">

                        <Link href="#">

                            <IoLogoFacebook size={25} className="text-gray-500 mr-2" />
                        </Link>

                        <Link href="#">

                            <IoLogoTwitter size={25} className="text-gray-500 mr-2" />
                        </Link>

                        <Link href="#">

                            <IoLogoLinkedin size={25} className="text-gray-500 mr-2" />
                        </Link>

                        <Link href="#">

                            <IoLogoYoutube size={25} className="text-gray-500 mr-2" />
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    )
}
