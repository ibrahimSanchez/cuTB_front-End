import Image from "next/image";

interface Props {
    src: string;
    name: string;
    role: string;
}

export const ExecutiveMember = ({ src, name, role }: Props) => (
    <div className="relative group w-52 h-52 animateMove shadow-xl rounded-lg">
        {/* Imagen */}
        <Image 
            width={200} 
            height={200} 
            alt={name} 
            src={src} 
            className="rounded-lg w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50" 
        />

        {/* Información superpuesta */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg px-4">
            <p className="text-lg font-bold text-white">{name}</p>
            <p className="text-sm text-gray-300">{role}</p>
        </div>
    </div>
);
