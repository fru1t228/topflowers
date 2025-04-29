'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BouquetData {
  image: string;
  title: string;
  price: number;
}

export default function Portfolio() {
  const bouquets = [
    {
      image: "/images/bouquets/nezhnost-new.jpg",
      title: "Букет «Нежность»",
      price: 3500,
    },
    {
      image: "/images/bouquets/lubov.jpg",
      title: "Букет «Любовь»",
      price: 4200,
    },
    {
      image: "/images/bouquets/teploe-nastroenie.jpg",
      title: "Букет «Тёплое настроение»",
      price: 3800,
    },
    {
      image: "/images/bouquets/romantika.jpg",
      title: "Букет «Романтика»",
      price: 3900,
    },
    {
      image: "/images/bouquets/vesna.jpg",
      title: "Букет «Весна»",
      price: 3600,
    },
    {
      image: "/images/bouquets/radost.jpg",
      title: "Букет «Радость»",
      price: 4100,
    },
  ];

  return (
    <>
      <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
        id="catalog"
      >
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-pink-600 text-base font-medium uppercase mb-2">
              Каталог
            </h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
              Наши букеты
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Выберите идеальный букет для любого случая
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8">
            {bouquets.map((item: BouquetData, index: number) => (
              <div
                className="group relative rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-md hover:shadow-xl transition-all duration-500"
                key={index}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
                    alt={item.title}
                    width={400}
                    height={300}
                  />
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-pink-600 text-xl font-semibold mb-4">
                    {item.price}₽
                  </p>
                  <Link
                    href="#"
                    className="btn bg-pink-600 hover:bg-pink-700 border-pink-600 hover:border-pink-700 text-white rounded-md w-full text-center"
                  >
                    Заказать
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
