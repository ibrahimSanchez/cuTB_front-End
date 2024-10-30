import React from 'react';
import Image from 'next/image';

interface TrainingCardProps {
    photoUrl: string;
    name: string;
    position: string;
    workplace: string;
    trainings: string[];
}

export const TrainingCard: React.FC<TrainingCardProps> = ({ photoUrl, name, position, workplace, trainings }) => {
    return (
        <div className="flex flex-col lg:flex-row  rounded-lg overflow-hidden m-4">
            {/* Foto */}
            <div className="flex justify-center lg:w-1/2 w-full">
                <Image
                    src={photoUrl}
                    alt={name}
                    width={300}
                    height={100}
                    className="rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
                />
            </div>

            <div className="py-6 lg:w-1/2 flex flex-col justify-between ml-6">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
                    <p className="text-sm text-gray-600 mt-1">{position}</p>
                    <p className="text-sm text-gray-600">{workplace}</p>
                </div>


                <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-800">Entrenamiento</h3>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                        {trainings.map((training, index) => (
                            <li key={index}>{training}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

