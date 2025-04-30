'use client'
import React from "react";

export default function Team() {
  const stats = [
    {
      value: '5000+',
      label: 'доставленных букетов',
    },
    {
      value: '800+',
      label: 'постоянных клиентов',
    },
    {
      value: '300+',
      label: 'свадеб и мероприятий',
    },
    {
      value: '12',
      label: 'лет на рынке',
    },
  ];

  return (
    <section className="relative md:py-24 py-16 bg-pink-50/60" id="team">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="text-pink-600 text-base font-medium uppercase mb-2 tracking-widest">
            О нас
          </h6>
          <h3 className="mb-4 md:text-3xl text-2xl font-semibold dark:text-white">
            Факты о нашей команде
          </h3>
          <p className="text-slate-500 max-w-xl mx-auto font-light">
            Мы гордимся нашими достижениями и доверием клиентов.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-white/80 rounded-3xl shadow-md shadow-pink-100 p-8 transition duration-500 border border-pink-100"
            >
              <span className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">
                {item.value}
              </span>
              <span className="text-slate-600 text-lg md:text-xl text-center font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
