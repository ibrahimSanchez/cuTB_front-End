'use client';

import React, { useEffect, useState } from "react";
import { News } from "@/interfaces";
import NewsCard from "@/components/ui/card/NewsCard";
import { getNews } from "@/api";
import NewsCarousel from "@/components/ui/carousel/NewsCarousel";
import NewsModal from "@/components/ui/modal/NewsModal";
import { SectionHome } from "@/components";
import Spinner from "@/components/ui/spinner/Spinner";

const NewsPage = () => {
  const [newsData, setNewsData] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getNews();
        setNewsData(res.data.news);
      } catch (error) {
        console.error("Error al obtener las noticias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const openModal = (newsId: string) => {
    setSelectedNewsId(newsId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNewsId(null);
    setIsModalOpen(false);
  };




  return (

    <>
      <SectionHome
        className="shadow-2xl"
        title="Noticias"
        text="Mantente actualizado con las últimas novedades sobre certificaciones, cursos y eventos 
        relacionados con el mundo del testing y la tecnología. Aquí compartimos información relevante 
        para todos los profesionales del sector."
        image="/system/news.png"
      />


      <div className="h-screen mt-16 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between p-4 lg:p-8">
        <div className="w-full lg:w-2/3">

          {
            loading ? (
              <Spinner />
            ) : (
              <div className="max-h-[600px] overflow-y-auto space-y-4">

                {
                  newsData.length === 0 ?
                    <p className="text-lg ">No hay noticias que mostrar...</p> :
                    newsData.map((news) => (
                      <NewsCard
                        key={news.uid}
                        news={news}
                        onReadMore={() => openModal(news.uid)}
                      />
                    ))}
              </div>
            )
          }
        </div>

        <div className="hidden lg:block w-1/3 p-4">
          <NewsCarousel />
        </div>

        <NewsModal
          newsId={selectedNewsId}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </>
  );
};

export default NewsPage;
