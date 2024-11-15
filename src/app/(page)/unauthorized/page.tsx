import Image from "next/image";
import Link from "next/link";


export default function Home() {

  return (

    <div className="flex flex-col-reverse md:flex-row w-full justify-center items-center align-middle">

      <div className="text-center px-5 mx-5">
        <p className="font-semibold text-[--text_color] text-3xl mb-3">Lo siento, no tiene acceso a la página solicitada.</p>
        <p
          className="font-light"
        >
          <span className="text-[--text_color] text-xl">Puedes regresar al </span>
          <Link
            className="font-normal hover:underline transition-all text-blue-400"
            href='/'
          >
            inicio
          </Link>
        </p>
      </div>

      <div className="px-5 mx-5">
        <Image
          src="/system/Unauthorized.png"
          alt="imgErrors"
          className="p-5 sm:p-0"
          width={550}
          height={550}
        />
      </div>

    </div>


  );
}
