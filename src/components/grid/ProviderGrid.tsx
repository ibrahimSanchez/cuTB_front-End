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

 
    const courseProviders = providers.filter(({ type }) => type === 'curse_provided');
    const examProviders = providers.filter(({ type }) => type === 'exam_provided');

    return (
        <>
            <section className="mb-8">
                <h4 className="subTitle">Proveedores de cursos:</h4>
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {courseProviders.length > 0 ? (
                        courseProviders.map(provider => (
                            <ProviderCardUI key={provider.uid} provider={provider} />
                        ))
                    ) : (
                        <p>No hay proveedores de cursos</p>
                    )}
                </div>
            </section>

            <section className="mb-8">
                <h4 className="subTitle">Proveedores de exámenes:</h4>
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {examProviders.length > 0 ? (
                        examProviders.map(provider => (
                            <ProviderCardUI key={provider.uid} provider={provider} />
                        ))
                    ) : (
                        <p>No hay proveedores de exámenes</p>
                    )}
                </div>
            </section>
        </>
    );
};
