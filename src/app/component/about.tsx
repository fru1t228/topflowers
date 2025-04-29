'use client'
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="relative md:py-24 py-16 bg-white dark:bg-slate-800" id="about">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <Image
                  src={"/images/bouquets/about-flowers.jpg"}
                  className="rounded-lg shadow-lg relative"
                  alt="Цветочная мастерская"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="lg:ms-7">
                <h6 className="text-pink-600 text-base font-medium uppercase mb-2">
                  О нас
                </h6>
                <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
                  Наша история
                </h3>

                <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
                  Мы — премиальная цветочная мастерская в Москве. Создаём букеты, которые говорят за вас. Работаем только с лучшими цветами. Доставка за 2 часа.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="size-12 bg-pink-600/5 text-pink-600 rounded-lg text-2xl flex items-center justify-center me-4">
                      🌸
                    </div>
                    <div>
                      <h5 className="text-lg font-medium dark:text-white">Свежие цветы</h5>
                      <p className="text-slate-400 text-sm">Ежедневные поставки</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="size-12 bg-pink-600/5 text-pink-600 rounded-lg text-2xl flex items-center justify-center me-4">
                      🎁
                    </div>
                    <div>
                      <h5 className="text-lg font-medium dark:text-white">Подарочная упаковка</h5>
                      <p className="text-slate-400 text-sm">Бесплатно для каждого букета</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
