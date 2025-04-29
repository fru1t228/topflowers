/* eslint-disable react/no-unescaped-entities */
"use client"; // This is a client component 👈🏽
import React from "react";
import dynamic from "next/dynamic";
const TinySlider = dynamic(() => import("tiny-slider-react"),{ssr: false,});
import { LuFlower2 } from "react-icons/lu";

import "tiny-slider/dist/tiny-slider.css";

const settings = {
  controls: true,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  speed: 400,
  controlsText: [
    '<i class="mdi mdi-chevron-left "></i>',
    '<i class="mdi mdi-chevron-right"></i>',
  ],
  gutter: 0,
  responsive: {
    768: {
      items: 2,
    },
  },
};

export default function Review() {
  const review = [
    {
      id: "1",
      name: "Мария П.",
      description: "Спасибо за букет! Привезли через 1.5 часа, невероятная красота!",
    },
    {
      id: "2",
      name: "Игорь В.",
      description: "Отличный сервис, всегда свежие цветы, буду заказывать ещё.",
    },
    {
      id: "3",
      name: "Анна С.",
      description: "Самые красивые букеты в городе! Упаковка на уровне.",
    },
    {
      id: "4",
      name: "Елена К.",
      description: "Быстрая доставка, цветы свежие, букет просто шикарный!",
    },
  ];

  return (
    <>
      <section
        className="relative md:py-24 py-16 bg-white dark:bg-slate-800"
        id="testimonials"
      >
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-pink-600 text-base font-medium uppercase mb-2">
              Отзывы
            </h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
              Что говорят наши клиенты
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Мы ценим каждого клиента и рады, что наши букеты приносят радость
            </p>
          </div>

          <div className="grid grid-cols-1 mt-8 relative">
            <div className="tiny-two-item">
              <TinySlider settings={settings}>
                {review.map((el, index) => (
                  <div className="tiny-slide" key={index}>
                    <div className="p-8 relative rounded-xl shadow-sm shadow-slate-200 dark:shadow-slate-700 bg-white dark:bg-slate-900 overflow-hidden m-2">
                      <div className="flex items-center mb-6">
                        <div className="size-12 bg-pink-600/5 text-pink-600 rounded-lg text-2xl flex items-center justify-center me-4">
                          <LuFlower2 />
                        </div>
                        <div>
                          <h5 className="text-lg font-medium dark:text-white">{el.name}</h5>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                        "{el.description}"
                      </p>
                    </div>
                  </div>
                ))}
              </TinySlider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
