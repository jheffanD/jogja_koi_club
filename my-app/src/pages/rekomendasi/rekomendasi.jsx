import React from 'react';
import logo from "/home/jeffan-ganteng/Documents/docker/cloud/koi-club/my-app/src/asset/Product.svg";

export default function Rekomendasi() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className=' mt-5 flex justify-center  font-poppins font-bold text-5xl'>REKOMENDASI KOI</h1>
      <div className='w-[100rem] h-[50rem] my-10 space-y-20 text-white'>
        <div className='flex justify-center items-center space-x-36'>
        <div className='bg-produk p-4 rounded-3xl w-[356.59px] h-[581.03px]'>
            <img src={logo} alt='' className='w-[325.17px] h-[352.14px]' />
            <div className='flex flex-col justify-center items-center  py-4 text-center font-poppins'>
              <h1 className='w-[205px] h-[24.09px] font-bold'>KOI GROMO</h1>
              <h3 className='font-extralight'>2 tahun (30 cm)</h3>
              <h3 className='font-extralight'>putih dan hitam/merah</h3>
              <h2 className='font-bold'>Rp.500.00</h2>
              <button className='mt-4 py-3 px-5 border  rounded-lg'>
                Lihat Detail
              </button>
            </div>
          </div>
          <div className='bg-produk p-4 rounded-3xl w-[356.59px] h-[581.03px]'>
            <img src={logo} alt='' className='w-[325.17px] h-[352.14px]' />
            <div className='flex flex-col justify-center items-center  py-4 text-center font-poppins'>
              <h1 className='w-[205px] h-[24.09px] font-bold'>KOI GROMO</h1>
              <h3 className='font-extralight'>2 tahun (30 cm)</h3>
              <h3 className='font-extralight'>putih dan hitam/merah</h3>
              <h2 className='font-bold'>Rp.500.00</h2>
              <button className='mt-4 py-3 px-5 border  rounded-lg'>
                Lihat Detail
              </button>
            </div>
          </div>
          <div className='bg-produk p-4 rounded-3xl w-[356.59px] h-[581.03px]'>
            <img src={logo} alt='' className='w-[325.17px] h-[352.14px]' />
            <div className='flex flex-col justify-center items-center  py-4 text-center font-poppins'>
              <h1 className='w-[205px] h-[24.09px] font-bold'>KOI GROMO</h1>
              <h3 className='font-extralight'>2 tahun (30 cm)</h3>
              <h3 className='font-extralight'>putih dan hitam/merah</h3>
              <h2 className='font-bold'>Rp.500.00</h2>
              <button className='mt-4 py-3 px-5 border  rounded-lg'>
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
