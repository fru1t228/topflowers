'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface BouquetData {
  id: number;
  title: string;
  slug: string;
  price: number;
  image: string;
  description: string;
  composition: string;
  galleryImages: string[];
}

export const bouquetsData: BouquetData[] = [
  {
    id: 1,
    title: "Нежные пионы",
    slug: "nezhnie-pioni",
    price: 5900,
    image: "/images/bouquets/bouquet-1.jpg",
    description: "Роскошный букет из свежих пионов нежно-розового оттенка. Идеально подходит для особых случаев и романтических моментов.",
    composition: "15 пионов, зелень, декоративная упаковка",
    galleryImages: [
      "/images/bouquets/bouquet-1-1.jpg",
      "/images/bouquets/bouquet-1-2.jpg",
      "/images/bouquets/bouquet-1-3.jpg"
    ]
  },
  {
    id: 2,
    title: "Весенний микс",
    slug: "vesenniy-mix",
    price: 4900,
    image: "/images/bouquets/bouquet-2.jpg",
    description: "Яркий весенний букет из тюльпанов и нарциссов. Принесет в ваш дом атмосферу весны и радости.",
    composition: "20 тюльпанов, 10 нарциссов, декоративная зелень, стильная упаковка",
    galleryImages: [
      "/images/bouquets/bouquet-2-1.jpg",
      "/images/bouquets/bouquet-2-2.jpg",
      "/images/bouquets/bouquet-2-3.jpg"
    ]
  },
  {
    id: 3,
    title: "Классические розы",
    slug: "classic-roses",
    price: 6900,
    image: "/images/bouquets/bouquet-3.jpg",
    description: "Элегантный букет из красных роз премиум класса. Классика, которая никогда не выходит из моды.",
    composition: "25 красных роз, зелень, премиальная упаковка",
    galleryImages: [
      "/images/bouquets/bouquet-3-1.jpg",
      "/images/bouquets/bouquet-3-2.jpg",
      "/images/bouquets/bouquet-3-3.jpg"
    ]
  }
];

export default function Portfolio() {
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
            {bouquetsData.map((bouquet) => (
              <Link 
                href={`/catalog/${bouquet.slug}`} 
                key={bouquet.id}
                className="group relative block overflow-hidden rounded-lg transition-all duration-500 hover:shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={bouquet.image}
                    className="group-hover:scale-110 transition-all duration-500"
                    alt={bouquet.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="absolute inset-0 group-hover:bg-slate-900/70 transition-all duration-500"></div>
                  <div className="absolute bottom-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h5 className="text-lg font-medium text-white mb-1">
                      {bouquet.title}
                    </h5>
                    <p className="text-white/60">
                      {bouquet.price.toLocaleString()} ₽
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
