'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const news = [
    {
        id: 1,
        title: 'Lanzamiento del nuevo curso de ISTQB',
        description: 'Descubre todo lo nuevo sobre las certificaciones más importantes en el mundo de las pruebas de software.',
        image: '/news/news1.png',
    },
    {
        id: 2,
        title: 'Novedades en la industria del testing',
        description: 'Un análisis profundo sobre las tendencias en automatización de pruebas en 2024.',
        image: '/news/news2.png',
    },
    {
        id: 3,
        title: 'Conferencia Global de Testing 2024',
        description: 'No te pierdas este evento que reúne a los expertos más importantes en pruebas de software.',
        image: '/news/news3.png',
    },
];

export default function NewsCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <>
            <Slider {...settings}>
                {news.map((item) => (
                    <div key={item.id} className="relative">
                        <Image
                            width={200}
                            height={200}
                            src={item.image}
                            alt={item.title}
                            className="w-full rounded-lg shadow-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg text-white">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
}
