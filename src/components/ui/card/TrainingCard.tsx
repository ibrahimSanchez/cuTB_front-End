import React from "react";
import Image from "next/image";

interface TrainingCardProps {
    photoUrl: string;
    name: string;
    position: string;
    workplace: string;
    trainings: string[];
}

export const TrainingCard: React.FC<TrainingCardProps> = ({
    photoUrl,
    name,
    position,
    workplace,
    trainings,
}) => {
    return (
        <div className="relative group w-full lg:w-80 h-auto shadow-lg rounded-lg overflow-hidden">
            {/* Imagen del instructor */}
            <div className="relative w-full h-64">
                <Image
                    src={photoUrl}
                    alt={name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Capa de opacidad sobre la imagen */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
            </div>

            {/* Contenedor de información */}
            <div className="p-4 bg-white">
                <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                <p className="text-sm text-gray-600">{position}</p>
                {workplace && <p className="text-sm text-gray-600">{workplace}</p>}
            </div>

            {/* Información superpuesta al hacer hover */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center p-4">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-sm">{position}</p>
                {workplace && <p className="text-sm">{workplace}</p>}

                <div className="mt-4">
                    <h4 className="text-lg font-medium">Entrenamientos</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                        {trainings.map((training, index) => (
                            <li key={index}>{training}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
