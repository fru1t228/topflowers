import React from "react";

import { FiPhone,FiMail,FiMapPin  } from "react-icons/fi";

export default function Contact() {
    const bouquets = [
        { id: 1, name: "Букет «Нежность» — 3500₽" },
        { id: 2, name: "Букет «Любовь» — 4200₽" },
        { id: 3, name: "Букет «Тёплое настроение» — 3800₽" },
        { id: 4, name: "Букет «Романтика» — 3900₽" },
        { id: 5, name: "Букет «Весна» — 3600₽" },
        { id: 6, name: "Букет «Радость» — 4100₽" },
    ];

    return (
        <>
            {/* Start */}
            <section className="relative md:py-24 py-16 bg-white dark:bg-slate-800" id="order">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-pink-600 text-base font-medium uppercase mb-2">Заказ</h6>
                        <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">Оформить заказ</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Заполните форму, и мы свяжемся с вами для подтверждения заказа</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-6">
                        <div className="lg:col-span-8">
                            <div className="p-6 rounded-md shadow-sm bg-white dark:bg-slate-900">
                                <form>
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <input 
                                                name="name" 
                                                id="name" 
                                                type="text" 
                                                className="form-input w-full py-2 px-3 border border-gray-200 dark:border-gray-800 focus:ring-0 focus:border-pink-600/50 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none" 
                                                placeholder="Ваше имя" 
                                                required
                                            />
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <input 
                                                name="phone" 
                                                id="phone" 
                                                type="tel" 
                                                className="form-input w-full py-2 px-3 border border-gray-200 dark:border-gray-800 focus:ring-0 focus:border-pink-600/50 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none" 
                                                placeholder="Телефон" 
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <select 
                                                name="bouquet" 
                                                id="bouquet" 
                                                className="form-select w-full py-2 px-3 border border-gray-200 dark:border-gray-800 focus:ring-0 focus:border-pink-600/50 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none"
                                                required
                                            >
                                                <option value="">Выберите букет</option>
                                                {bouquets.map((bouquet) => (
                                                    <option key={bouquet.id} value={bouquet.id}>
                                                        {bouquet.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="btn bg-pink-600 hover:bg-pink-700 border-pink-600 hover:border-pink-700 text-white rounded-md h-11 w-full justify-center flex items-center"
                                    >
                                        Оформить заказ
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="lg:ms-8">
                                <div className="flex">
                                    <div className="icons text-center mx-auto">
                                        <FiPhone className="rounded text-2xl dark:text-white mb-0"/>
                                    </div>

                                    <div className="flex-1 ms-6">
                                        <h5 className="text-lg dark:text-white mb-2 font-medium">Телефон</h5>
                                        <a href="tel:+79991234567" className="text-slate-400">+7 (999) 123-45-67</a>
                                    </div>
                                </div>

                                <div className="flex mt-4">
                                    <div className="icons text-center mx-auto">
                                       <FiMail className="rounded text-2xl dark:text-white mb-0"/>
                                    </div>

                                    <div className="flex-1 ms-6">
                                        <h5 className="text-lg dark:text-white mb-2 font-medium">Email</h5>
                                        <a href="mailto:info@flowershop.ru" className="text-slate-400">info@flowershop.ru</a>
                                    </div>
                                </div>

                                <div className="flex mt-4">
                                    <div className="icons text-center mx-auto">
                                        <FiMapPin className="rounded text-2xl dark:text-white mb-0"/>
                                    </div>

                                    <div className="flex-1 ms-6">
                                        <h5 className="text-lg dark:text-white mb-2 font-medium">Адрес</h5>
                                        <p className="text-slate-400 mb-2">г. Москва, ул. Цветочная, д. 1</p>
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
