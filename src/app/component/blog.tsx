import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface BlogData{
    id: number;
    title: string;
    description: string;
    image: string;
}

export default function Blog() {
  const blog = [
    {
      id: 1,
      title: "Новая коллекция пионов",
      description: "Встречайте свежий завоз пионов — самые нежные оттенки и крупные бутоны для ваших букетов и композиций.",
      image: "/images/bouquets/vesna.jpg",
    },
    {
      id: 2,
      title: "Советы по уходу за букетами",
      description: "Рассказываем, как продлить жизнь вашему букету: простые правила ухода и секреты флористов.",
      image: "/images/bouquets/nezhnost.jpg",
    },
    {
      id: 3,
      title: "Как выбрать идеальный букет",
      description: "Подбираем букет для любого случая: рекомендации по сочетанию цветов и оформлению.",
      image: "/images/bouquets/romantika.jpg",
    },
  ];

  return (
    <>
      <section className="relative md:py-24 py-16 bg-pink-50/60" id="blog">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-pink-600 text-base font-medium uppercase mb-2 tracking-widest">
              Новости нашего цветочного бутика
            </h6>
            <h3 className="mb-4 md:text-3xl text-2xl font-semibold dark:text-white">
              Будьте в курсе свежих новостей и советов
            </h3>
            <p className="text-slate-500 max-w-xl mx-auto font-light">
              Всё о цветах, уходе за букетами и новых поступлениях — делимся с вами полезной и вдохновляющей информацией.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
            {blog.map((item:BlogData, key:number) => (
              <div
                key={key}
                className="blog relative rounded-3xl shadow-md shadow-pink-100 dark:shadow-slate-800 overflow-hidden bg-white/80 border border-pink-100"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="content p-6">
                  <h4 className="text-lg md:text-xl font-semibold text-pink-700 mb-2 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 mt-3 font-light">
                    {item.description}
                  </p>

                  <div className="mt-5">
                  <Link href="#" className="!inline-flex items-center btn btn-link hover:text-pink-600 after:bg-pink-600 text-pink-600 font-medium transition duration-500 rounded-full">
                    <span>
                       Читать
                    </span>
                      <FiArrowRight  width="16px"/>
                  </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
