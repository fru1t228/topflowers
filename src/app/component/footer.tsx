import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiInstagram } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Start Footer */}
      <footer className="py-8 bg-slate-800 dark:bg-gray-900">
        <div className="container">
          <div className="grid md:grid-cols-12 items-center">
            <div className="md:col-span-4">
              <div className="text-white">
                <h4 className="text-xl font-medium mb-4">TopFlowers</h4>
                <p className="text-gray-400 mb-2">
                  <i className="uil uil-phone me-2"></i> +7 (XXX) XXX-XX-XX
                </p>
                <p className="text-gray-400">
                  <i className="uil uil-whatsapp me-2"></i> WhatsApp: +7 (XXX) XXX-XX-XX
                </p>
              </div>
            </div>

            <div className="md:col-span-4 md:mt-0 mt-8">
              <div className="text-center">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Цветочный магазин. Все права защищены.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 md:mt-0 mt-8">
              <ul className="list-none foot-icon md:text-end text-center">
                <li className="inline ms-1">
                  <Link
                    href="https://instagram.com/your_instagram"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-pink-600 bg-slate-800 dark:bg-gray-900 hover:bg-pink-600 dark:hover:bg-pink-600 text-gray-400 hover:text-white"
                  >
                    <FiInstagram width="17px" />
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    href="https://t.me/your_telegram"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-pink-600 bg-slate-800 dark:bg-gray-900 hover:bg-pink-600 dark:hover:bg-pink-600 text-gray-400 hover:text-white"
                  >
                    <FaTelegram width="17px" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}

      {/* Back to top */}
      <Link
        href="home"
        id="back-to-top"
        className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-pink-600 text-white leading-9"
      >
        <i className="uil uil-arrow-up"></i>
      </Link>
      {/* Back to top */}
    </>
  );
}
