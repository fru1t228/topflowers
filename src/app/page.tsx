"use client"; // This is a client component 👈🏽

import { TypeAnimation } from 'react-type-animation';

import Services from "./component/services";
import About from "./component/about";
import Pricing from "./component/pricing";
import Blog from "./component/blog";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Portfolio from "./component/portfolio";
import Review from "./component/testimonial";
import Switcher from "./component/switcher";
import Navbar from "./component/navbar";
import Link from 'next/link';

function Home() {
  return (
    <>
      <Navbar navdark={false}/>
      <section className="py-36 lg:py-64 w-full table relative bg-pink-50" id="home">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50/80 to-white/80"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 mt-12">
            <h1 className="text-slate-800 lg:text-7xl text-5xl lg:leading-normal leading-normal font-medium mb-7 tracking-tight">
              TopFlowers
            </h1>
            <h2 className="text-4xl font-bold text-gray-800 leading-relaxed mb-0">
              Искусство в каждом лепестке
            </h2>

            <p className="text-2xl font-semibold text-gray-700 mt-6">
              Знаем толк в цветочном деле.
            </p>

            <div className="mt-2 space-y-2">
              <p className="text-lg text-gray-600">
                Оптом и в розницу по оптовым ценам.
              </p>
              <p className="text-lg text-gray-600">
                Премиальные букеты с доставкой за 2 часа.
              </p>
            </div>

            <div className="relative mt-10">
              <Link 
                href="#catalog" 
                className="btn bg-pink-600 hover:bg-pink-700 border-pink-600 hover:border-pink-700 text-white rounded-full text-lg px-8 py-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                Выбрать букет
              </Link>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Services />
      <Portfolio />
      <Review />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
      <Switcher />
    </>
  );
}

export default Home;
