'use client'
import React from "react";
import {useTranslations, useLocale} from 'next-intl';
import { FaCheckCircle } from "react-icons/fa";


function Payment(){
   const t = useTranslations('paymentSuccess');
   const locale = useLocale();

   return(
   <>
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center mt-[90px] p-4">
      <div className="w-full max-w-2xl">
        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-green-200 dark:bg-green-900/50" />
              <FaCheckCircle className="w-20 h-20 text-green-500 dark:text-green-400 relative animate-bounce" />
            </div>
          </div>

          {/* Thank You Message */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {t("title")}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              {t("mensaje")}
            </p>
          </div>

         
          {/* Action Buttons */}
          <div className="flex  pt-4 ">
           
            <button
              onClick={() => window.location.href = `/${locale}`}
              className="flex items-center justify-center gap-2 px-8 py-3 mx-auto bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-white transition-colors duration-200"
            >
              {/* <Home className="w-5 h-5" /> */}
              {t("regresar")}
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          {t('contact')} <a href={`/${locale}/contact`} className="text-blue-600 dark:text-blue-400 hover:underline">{t('url')}</a>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,95,0.04),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,95,255,0.04),transparent_60%)]" />
      </div>
    </div>
  

   </>)
}

export default Payment;