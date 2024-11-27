"use client";

import { getProviders } from "@/api";
import { Provider } from "@/interfaces";
import { useEffect, useState } from "react";
import { ProviderCardUI } from "../ui/card/ProviderCardUI";

export const ProviderGrid = () => {
    const [providers, setProviders] = useState<Provider[]>([]);

    const loadProviders = async () => {
        try {
            const res = await getProviders();
            setProviders(res.data.providers);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadProviders();
    }, []);

    const courseProviders = providers.filter(({ type }) => type === "curse_provider");

    return (
        <div className="px-4 lg:px-8">
            {/* Sección de Proveedores de Cursos */}
            <section className="my-12">
                <h4 className="text-3xl font-bold text-center text-blue-950 mb-2">
                    Proveedores de cursos:
                </h4>
                <div className="w-full h-1 bg-blue-950 mb-5"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center">
                    {courseProviders.length > 0 ? (
                        courseProviders.map((provider) => (
                            <ProviderCardUI key={provider.uid} provider={provider} />
                        ))
                    ) : (
                        <p className="text-gray-600 text-center col-span-2">
                            No hay proveedores de cursos disponibles.
                        </p>
                    )}
                </div>
            </section>


        </div>
    );
};
