export default function search() {
  return (
    <div className='flex flex-col items-center bg-customMaroon h-[510px] text-white'>
      <div className='flex justify-center text-white '>
        <h1 className='font-poppins font-extrabold text-[75px] my-20'>
          CARI REKOMENDASI IKAN KOI
        </h1>
      </div>
      <form className='flex flex-col items-center space-y-5 '>
        <div className='flex flex-wrap justify-center items-center space-x-5'>
          <div className='flex flex-col items-start'>
            <label className='text-white' htmlFor='harga'>
              Harga Maksimal (Rp.)
            </label>
            <input
              type='text'
              id='harga'
              className='p-2 rounded-md w-[457px] h-[52px] mt-3 bg-transparent border border-white'
            />
          </div>
          <div className='flex flex-col items-start'>
            <label className='text-white' htmlFor='ukuran'>
              Ukuran (cm)
            </label>
            <input
              type='text'
              id='ukuran'
              className='p-2 rounded-md w-[149px] h-[52px] mt-3 bg-transparent border border-white'
            />
          </div>
          <div className='flex flex-col items-start'>
            <label className='text-white' htmlFor='umur'>
              Umur
            </label>
            <input
              type='text'
              id='umur'
              className='p-2 rounded-md w-[149px] h-[52px] mt-3 bg-transparent border border-white'
            />
          </div>
          <div className='flex flex-col items-start'>
            <label className='text-white' htmlFor='warna'>
              Warna
            </label>
            <input
              type='text'
              id='warna'
              className='p-2 rounded-md w-[457px] h-[52px] mt-3 bg-transparent border border-white'
            />
          </div>
        </div>
        <button
          type='submit'
          className='px-6 py-2  bg-white text-black font-poppins font-bold rounded-md self-start'>
          Submit
        </button>
      </form>
    </div>
  );
}
