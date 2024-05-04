"use client";
import Image from "next/image";
import ProductImg1 from "../public/images/product-img1.jpg"
import ProductImg2 from "../public/images/product-img2.jpg"
import ProductImg3 from "../public/images/product-img3.jpg"
import ProductImg4 from "../public/images/product-img4.jpg"
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";

import BannerImg from '../public/images/banner.png';
import Logo from '../public/images/logo.png';
import CardImg1 from '../public/images/card1.png';
import CardImg2 from '../public/images/card2.png';
import CardImg3 from '../public/images/card3.png';
import CardImg4 from '../public/images/card4.png';
import AboutImg from '../public/images/about.png';
import GalleryImg1 from '../public/images/gallery1.png';
import GalleryImg2 from '../public/images/gallery2.png';
import GalleryImg3 from '../public/images/gallery3.png';
import { FaEthereum } from "react-icons/fa";
import { FaArrowRight, FaCircleCheck } from "react-icons/fa6";
import CommonButton from "@/components/CommonButton";
import Link from "next/link";


export default function Home() {


  const [images, setImages] = useState({
    img1: ProductImg1,
    img2: ProductImg3,
    img3: ProductImg3,
    img4: ProductImg4,
  });

  const [activeImg, setActiveImg] = useState(images.img1)

  return (
    <>
      {/* // start the banner section */}
      <section className="">
        <div>
          <Image src={BannerImg} className="w-full" alt="banner img" />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 gap-4 max-w-[1400px] m-auto mt-[-60px] mb-32 px-2 lg:px-0">
          <div className="p-4 rounded-md shadow-2xl mb-3 md:mb-0 shadow-black-600 bg-white group">
            <div className="flex gap-3">
              <div className="w-[30%] overflow-hidden rounded-lg">
                <Image className="w-full group-hover:scale-125 transition duration-300" src={CardImg1} alt="card img" />
              </div>
              <div className="w-[70%]">
                <h4 className="text-[20px] font-semibold mb-2">Home Delivery</h4>
                <h5 className="text-[18px] flex gap-2 items-center  "><FaEthereum className="text-green-500" />24-72 Hours</h5>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-md shadow-2xl mb-3 md:mb-0 shadow-black-600 bg-white group">
            <div className="flex gap-3">
              <div className="w-[30%] overflow-hidden rounded-lg">
                <Image className="w-full group-hover:scale-125 transition duration-300" src={CardImg2} alt="card img" />
              </div>
              <div className="w-[70%]">
                <h4 className="text-[20px] font-semibold mb-2">Home Delivery</h4>
                <h5 className="text-[18px] flex gap-2 items-center  "><FaEthereum className="text-green-500" />24-72 Hours</h5>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-md shadow-2xl mb-3 md:mb-0 shadow-black-600 bg-white group">
            <div className="flex gap-3">
              <div className="w-[30%] overflow-hidden rounded-lg">
                <Image className="w-full group-hover:scale-125 transition duration-300" src={CardImg3} alt="card img" />
              </div>
              <div className="w-[70%]">
                <h4 className="text-[20px] font-semibold mb-2">Home Delivery</h4>
                <h5 className="text-[18px] flex gap-2 items-center  "><FaEthereum className="text-green-500" />24-72 Hours</h5>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-md shadow-2xl mb-3 md:mb-0 shadow-black-600 bg-white group ">
            <div className="flex gap-3">
              <div className="w-[30%] overflow-hidden rounded-lg">
                <Image className="w-full group-hover:scale-125 transition duration-300" src={CardImg4} alt="card img" />
              </div>
              <div className="w-[70%]">
                <h4 className="text-[20px] font-semibold mb-2">Home Delivery</h4>
                <h5 className="text-[18px] flex gap-2 items-center  "><FaEthereum className="text-green-500" />24-72 Hours</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // end the banner section */}


      {/* start the about section */}
      <section className="lg:flex max-w-[1400px] px-2 lg:px-0 m-auto mb-32 items-center">
        <div className="lg:max-w-[65%] w-full">
          <h5 className="text-[18px] mb-1 font-semibold ">SHOPIX</h5>
          <h2 className="text-[32px] font-semibold mb-2 ">Why buy from us?</h2>
          <p className="text-[18px] text-gray-500 font-500 lg:max-w-[60%] w-full mb-6 ">This wallet can be a smart solution for you
            You can keep a standard size wallet at the same time in this wallet with multi slots
            All valuables including debit/credit cards, ID cards, cheques, cash, photo driving license etc
            Things and this wallet will make your elegance shine</p>

          <div className="lg:flex gap-8">
            <div>
              <p className="mb-2 flex items-center gap-2 text-[18px] text-gray-700"><FaCircleCheck />Delivery charges are completely free.</p>
              <p className="mb-2 flex items-center gap-2 text-[18px] text-gray-700"><FaCircleCheck />You will get 100% sim in the picture.</p>
              <p className="mb-2 flex items-center gap-2 text-[18px] text-gray-700"><FaCircleCheck />Home delivery at upazila headquarters.</p>
              <p className="mb-2 flex items-center gap-2 text-[18px] text-gray-700"><FaCircleCheck />The facility of payment the product.</p>
            </div>
            <div>
              <p className="mb-2 flex items-center gap-2 text-[18px] text-gray-700"><FaCircleCheck />The upon receipt of the product.</p>
              <p className="mb-2 flex items-center gap-2 text-[18px] text-gray-700"><FaCircleCheck />Home delivery at district/upazila headquarters.</p>
              <p className="mb-2 flex items-center gap-2 text-[18px] text-gray-700"><FaCircleCheck />You will get 100% sim what you see in the picture.</p>
              <p className="mb-2 flex items-center gap-2 text-[18px] text-gray-700"><FaCircleCheck />Delivery charges are completely free.</p>
            </div>
          </div>
          <div className="mt-5">
            <CommonButton text="Order Now" />
          </div>
        </div>
        <div className="lg:max-w-[35%] w-full mt-8 lg:mt-0">
          <Image className="w-full" src={AboutImg} alt="about img" />
        </div>
      </section>
      {/* end the about section */}


      {/* // start the product details component */}
      <div className="max-w-[1400px] px-2 lg:px-0 m-auto mt-12 mb-12">
        <div className="lg:flex gap-5">
          <div className="lg:w-1/2 w-full">
            <div className=" w-full mb-4 h-[450px]">
              <Image className="w-full h-full" src={activeImg} alt="product img" />
            </div>
            <div className="w-full flex gap-4">
              <div className="w-1/4">
                <Image className="w-full h-full cursor-pointer" src={ProductImg2} alt="product img" onClick={() => setActiveImg(ProductImg2)} />
              </div>
              <div className="w-1/4">
                <Image className="w-full h-full cursor-pointer" src={ProductImg1} alt="product img" onClick={() => setActiveImg(ProductImg1)} />
              </div>
              <div className="w-1/4">
                <Image className="w-full h-full cursor-pointer" src={ProductImg3} alt="product img" onClick={() => setActiveImg(ProductImg3)} />
              </div>
              <div className="w-1/4">
                <Image className="w-full h-full cursor-pointer" src={ProductImg4} alt="product img" onClick={() => setActiveImg(ProductImg4)} />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:mt-0 mt-5">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl">Availability: <span className="text-green-400">In Stock</span></h3>
                <h3 className="text-xl">Product Type: <span className="text-green-400">Unique</span></h3>
                <h3 className="text-xl">Brand: <span className="text-green-400">Play</span></h3>
                <h3 className="text-xl">Category: <span className="text-green-400">Men</span></h3>
                <h3 className="text-xl">Sub Category: <span className="text-green-400">Men T-Shit</span></h3>
              </div>
              <div>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                      <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                  </div>
                  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                      <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                  </div>
                  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                      <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                  </div>
                  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                      <span style={{ "--value": 39 }}></span>
                    </span>
                    sec
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-[38px] font-semibold text-black ">This is Product description </h2>
              <h4 className="text-2xl font-semibold">Price: $<span>222.00</span></h4>
              <div className=" mt-2">
                <h4 className="text-xl mb-2">Colors: Red Green Blue White </h4>
                <h4 className="text-xl mb-2">Sizes: sm md xl lg 2xl  </h4>
              </div>
              <div className="mt-5">
                <CommonButton text="Add To Cart" icon={<FaCartPlus />} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for
            lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for
            lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </div>
      {/* // end the product details component */}

      {/* start the product gallery section */}
      <section className="mb-32 max-w-[1400px] mt-20 m-auto px-2 lg:px-0">
        <div>
          <h2 className="text-2xl text-center mb-2 font-semibold">Explore Products Gallery</h2>
          <p className="lg:max-w-[50%] w-full m-auto mb-10 text-center">Collection widgets specialize in displaying many elements of the same type, such as a collection
            of pictures from a collection of articles.</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="p-4 border rounded-lg group">
            <div className="overflow-hidden rounded-lg">
              <Link href="#">
                <Image className="w-full group-hover:scale-125 transition duration-300 " src={GalleryImg1} alt="gallery img" />
              </Link>
            </div>
            <div className="flex justify-between mt-3 items-center">
              <h4 className="text-xl font-medium">Games: <span className="text-green-400 text-[18px]">345</span></h4>
              <Link href="#" className="text-[16px] text-gray-500 flex items-center gap-2 hover:text-green-500 transition-all duration-200"> View All <FaArrowRight /></Link>
            </div>
          </div>
          <div className="p-4 border rounded-lg group">
            <div className="overflow-hidden rounded-lg">
              <Link href="#">
                <Image className="w-full group-hover:scale-125 transition duration-300 " src={GalleryImg2} alt="gallery img" />
              </Link>
            </div>
            <div className="flex justify-between mt-3 items-center">
              <h4 className="text-xl font-medium">Games: <span className="text-green-400 text-[18px]">345</span></h4>
              <Link href="#" className="text-[16px] text-gray-500 flex items-center gap-2 hover:text-green-500 transition-all duration-200"> View All <FaArrowRight /></Link>
            </div>
          </div>
          <div className="p-4 border rounded-lg group">
            <div className="overflow-hidden rounded-lg">
              <Link href="#">
                <Image className="w-full group-hover:scale-125 transition duration-300 " src={GalleryImg3} alt="gallery img" />
              </Link>
            </div>
            <div className="flex justify-between mt-3 items-center">
              <h4 className="text-xl font-medium">Games: <span className="text-green-400 text-[18px]">345</span></h4>
              <Link href="#" className="text-[16px] text-gray-500 flex items-center gap-2 hover:text-green-500 transition-all duration-200"> View All <FaArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>
      {/* end the product gallery section */}

    </>
  );
}
