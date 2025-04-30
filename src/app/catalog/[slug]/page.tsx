'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Link as Link2, scrollSpy, scroller } from "react-scroll"
import { useParams, useRouter, usePathname } from 'next/navigation'
import { bouquetsData, type BouquetData } from '@/app/component/portfolio'

export default function BouquetPage() {
  const router = useRouter()
  const pathname = usePathname()
  const { slug } = useParams()
  const bouquet = bouquetsData.find((b: BouquetData) => b.slug === slug)

  const handleBuyClick = () => {
    router.push('/')
  }

  React.useEffect(() => {
    if (pathname === '/') {
      scroller.scrollTo('order', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -100
      })
    }
  }, [pathname])

  React.useEffect(() => {
    scrollSpy.update()
  }, [])

  if (!bouquet) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold text-gray-800">Букет не найден</h1>
        <Link href="/" className="text-pink-600 hover:text-pink-700 mt-4 inline-block">
          ← Вернуться к каталогу
        </Link>
      </div>
    )
  }

  return (
    <section className="relative md:py-24 py-16">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
          {/* Галерея изображений */}
          <div className="md:col-span-6">
            <div className="relative">
              <Image
                src={bouquet.image}
                alt={bouquet.title}
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {bouquet.galleryImages?.map((img: string, index: number) => (
                <div key={index} className="relative">
                  <Image
                    src={img}
                    alt={`${bouquet.title} - фото ${index + 1}`}
                    width={200}
                    height={200}
                    className="rounded-lg shadow-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Информация о букете */}
          <div className="md:col-span-6">
            <div className="lg:ms-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                {bouquet.title}
              </h1>
              
              <div className="text-2xl font-semibold text-pink-600 mb-6">
                {bouquet.price.toLocaleString()} ₽
              </div>

              <div className="prose max-w-none mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Описание
                </h3>
                <p className="text-gray-600">
                  {bouquet.description}
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  Состав букета
                </h3>
                <p className="text-gray-600">
                  {bouquet.composition}
                </p>
              </div>

              <button
                onClick={handleBuyClick}
                className="btn bg-pink-600 hover:bg-pink-700 border-pink-600 hover:border-pink-700 text-white rounded-full w-full md:w-auto text-lg px-8 py-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg inline-block text-center cursor-pointer"
              >
                Купить букет
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 