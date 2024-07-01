import React from "react";
import logo from "/home/jeffan-ganteng/Documents/docker/cloud/koi-club/my-app/src/asset/Product.svg";
import love from "/home/jeffan-ganteng/Documents/docker/cloud/koi-club/my-app/src/asset/Favorites Icon.svg";
import share from "/home/jeffan-ganteng/Documents/docker/cloud/koi-club/my-app/src/asset/Frame.svg";
import latar from "/home/jeffan-ganteng/Documents/docker/cloud/koi-club/my-app/src/asset/Image.svg";
import Wa from "/home/jeffan-ganteng/Documents/docker/cloud/koi-club/my-app/src/asset/wa.svg";
import { Link } from "react-router-dom";

export default function Detailikan() {
  return (
    <div className='flex flex-col justify-center items-center h-[90rem] w-auto '>
      <h1 className='my-10 flex justify-center font-poppins font-bold text-5xl'>
        DETAIL IKAN KOI
      </h1>
      <div className='h-[50rem] w-[70rem] my-8'>
        <div className='flex'>
          <div className='grid grid-cols-2 gap-4 h-[20rem] w-[55rem] '>
            <img src={logo} alt='Koi 1' className='' />
            <img src={logo} alt='Koi 2' className='' />
            <img src={logo} alt='Koi 3' className='' />
            <img src={logo} alt='Koi 4' className='' />
          </div>
          <div className='pl-[5rem] font-poppins text-3xl font-semibold'>
            <div className='flex items-center'>
              <h1>KOI GOROMO</h1>
              <div className='flex items-center ml-[6rem]'>
                <img src={love} alt='Love Icon' className='w-6 h-6' />
                <img src={share} alt='Share Icon' className='w-6 h-6 ml-2' />
              </div>
            </div>
            <div className='text-base font-normal mt-4'>
              <p className='mb-3 '>
                Koi Goromo adalah varietas koi dengan tubuh putih yang memiliki
                pola warna merah dan hitam yang unik, menciptakan tampilan yang
                elegan dan menarik.
              </p>
              <p className='pb-10'>
                by <strong>Jogja Koi Club</strong>
              </p>

              <div className='grid grid-cols-2 gap-y-2 mt-4 mb-5'>
                <strong>Harga :</strong>
                <span className='ml-[-10rem]'>Rp.500.000</span>
                <strong>Umur :</strong>
                <span className='ml-[-10rem]'>2 tahun (30 cm)</span>
                <strong>Ukuran :</strong>
                <span className='ml-[-10rem]'>30 cm</span>
                <strong>Warna :</strong>
                <span className='ml-[-10rem]'>Putih dan Hitam/Merah</span>
              </div>
              <button className='rounded-md bg-customMaroon text-white px-6 py-1.5 font-semibold hover:bg-customMaroon-dark hover:text-gray-200'>
                <Link to='/Ikan'>Back</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='relative w-screen h-screen'>
        <img
          src={latar}
          className='absolute inset-0 object-cover w-full h-full'
          alt='Background'
        />
        <div className='absolute inset-0 flex justify-center items-center'>
          <a href="#" className='bg-black h-[30rem] w-[70rem] flex flex-col items-center text-white cursor-pointer'>
            <img src={Wa} alt='' className='mt-28' />
            <strong className='font-semibold font-poppins text-3xl my-6'>
              WhatsApp
            </strong>
            <p className='h-20 w-[13rem] text-center text-1xl font-extralight'>
              Siap Melayani Anda Seperti Anak Sendiri
            </p>
            <strong className="text-2xl">082340895566</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
