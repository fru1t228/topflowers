import React from "react";
import Image from "next/image";
import Link from "next/link";

import { TbChartCircles,TbFlower } from "react-icons/tb";
import { FiArrowRight, FiCpu } from "react-icons/fi";
import { AiOutlineFire } from "react-icons/ai";
import { LuShoppingBasket,LuFlipVertical2 } from "react-icons/lu";
import { IconType } from "react-icons";
import { TbTruckDelivery } from "react-icons/tb";
import { LuFlower2 } from "react-icons/lu";
import { BsGift, BsBoxSeam } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

interface FeatureData {
    title: string;
    Icon: IconType;
    subtext: string;
}

export default function Services() {
  const features = [
    {
      title: "Доставка за 2 часа",
      Icon: TbTruckDelivery,
      subtext: "Быстрая доставка по городу в течение 2 часов",
    },
    {
      title: "Свежие цветы",
      Icon: LuFlower2,
      subtext: "Только свежие цветы каждый день от проверенных поставщиков",
    },
    {
      title: "Подарочная упаковка",
      Icon: BsGift,
      subtext: "Красивая подарочная упаковка для каждого букета бесплатно",
    },
    {
      title: "Персональный подбор",
      Icon: IoChatbubbleEllipsesOutline,
      subtext: "Поможем подобрать идеальный букет для любого случая",
    },
    {
      title: "Оптовая продажа цветов",
      Icon: BsBoxSeam,
      subtext: "Поставляем свежие цветы оптом по выгодным условиям для бизнеса и мероприятий",
    },
  ];

  return (
    <>
      <section id="features" className="relative md:py-24 py-16">
        <div className="container md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-pink-600 text-base font-medium uppercase mb-2">
              Наши преимущества
            </h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
              Почему выбирают нас
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Мы заботимся о каждом клиенте и создаем букеты с душой
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
            {features.map((item: FeatureData, key: number) => { 
              const Icon = item.Icon;
              return(
                <div
                  key={key}
                  className="features p-6 hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800 transition duration-500 rounded-3xl mt-8"
                >
                  <div className="size-20 bg-pink-600/5 text-pink-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm">
                    <Icon width="30px" height="30px"/>
                  </div>

                  <div className="content mt-7">
                    <h4 className="text-lg dark:text-white font-medium">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 mt-3">{item.subtext}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
