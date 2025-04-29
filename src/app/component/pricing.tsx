import React from "react";

import Link from "next/link";
import Team from "./team";

import { MdOutlineCheckCircle } from "react-icons/md";

interface PeonyOrderData {
    id: number;
    title: string;
    minCount: number;
    description: string;
    features: string[];
}

export default function Pricing() {
  const peonyOrders: PeonyOrderData[] = [
    {
      id: 1,
      title: "Малый заказ",
      minCount: 100,
      description: "Для небольших мероприятий, магазинов и первых пробных закупок.",
      features: [
        "Минимальный заказ — 100 пионов",
        "Свежие цветы напрямую от поставщика",
        "Доставка по городу и области",
        "Гибкие условия оплаты",
      ],
    },
    {
      id: 2,
      title: "Средний заказ",
      minCount: 500,
      description: "Оптимально для свадебных агентств, салонов и флористов.",
      features: [
        "Минимальный заказ — 500 пионов",
        "Индивидуальные условия доставки",
        "Возможность резервирования партии",
        "Скидки для постоянных клиентов",
      ],
    },
    {
      id: 3,
      title: "Крупный заказ",
      minCount: 1000,
      description: "Для крупных мероприятий, сетей и оптовых покупателей.",
      features: [
        "Минимальный заказ — 1000 пионов",
        "Приоритетная доставка и поддержка",
        "Специальные цены и бонусы",
        "Персональный менеджер",
      ],
    },
  ];

  return (
    <>
      <section className="relative md:py-24 py-16 bg-pink-50/60" id="pricing">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-pink-600 text-base font-medium uppercase mb-2 tracking-widest">
              Оптовые поставки пионов
            </h6>
            <h3 className="mb-4 md:text-3xl text-2xl font-semibold dark:text-white">
              Лучшие условия для вашего бизнеса
            </h3>
            <p className="text-slate-500 max-w-xl mx-auto font-light">
              Свежие пионы напрямую от поставщика — для магазинов, флористов и мероприятий любого масштаба.
            </p>
          </div>

          <div className="flex flex-wrap justify-center">
            {peonyOrders.map((item, key) => (
              <div
                className="w-full md:w-1/2 lg:w-1/3 px-0 md:px-3 mt-8"
                key={key}
              >
                <div className="flex flex-col pt-8 pb-8 bg-white/80 hover:bg-white dark:bg-gray-800 dark:hover:bg-black rounded-3xl shadow-md shadow-pink-100 dark:shadow-slate-700 transition duration-500 border border-pink-100">
                  <div className="px-8 pb-8">
                    <h3 className="mb-4 text-xl md:text-2xl font-semibold text-pink-700 dark:text-white">
                      {item.title}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-pink-600">
                        от {item.minCount}
                      </span>
                      <span className="inline-block ms-2 text-base text-slate-500">пионов</span>
                    </div>
                    <p className="mb-6 text-slate-500 dark:text-slate-300 font-light">
                      {item.description}
                    </p>
                    <Link
                      href="#contact"
                      className="btn bg-pink-600 hover:bg-pink-700 border-pink-600 hover:border-pink-700 text-white rounded-full w-full text-lg py-3 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
                    >
                      Заказать опт
                    </Link>
                  </div>
                  <div className="border-b border-pink-100 dark:border-slate-700"></div>
                  <ul className="self-start px-8 pt-8">
                    {item.features.map((subitem, index) => (
                      <li
                        className="flex items-center my-2 text-slate-500"
                        key={index}
                      >
                        <MdOutlineCheckCircle width="18px" className="text-lg text-pink-500 me-1" />
                        <span>{subitem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Team />
    </>
  );
}
