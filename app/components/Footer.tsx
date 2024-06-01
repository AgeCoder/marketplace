import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-cente w-full items-center">
          <Link href='/' className="flex items-center justify-center w-full">
            <h1 className='text-3xl font-bold items-center justify-center'>Alight<span className='text-sky-500'>UI</span></h1>
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Explore our website for a comprehensive Temples Icon UI Kit, perfect for adding a touch of spirituality and elegance to your design projects.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/Products/template"> Template </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/Products/uikit"> Ui kit </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/Products/icon"> Icon </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/Privacy-Policy"> Privacy Policy </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/Terms-Conditions"> Terms Conditions </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
