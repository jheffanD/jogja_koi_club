import Landing from "/home/jeffan-ganteng/Documents/docker/cloud/koi-club/my-app/src/asset/Landingg.svg";

export default function Header() {
  return (
    <div className='relative flex justify-center items-center px-5 py-10'>
      <img
        src={Landing}
        alt='Ikan Koi'
        className='w-full h-auto max-w-[93rem] max-h-[80rem] '
      />
      <div className='absolute inset-[23rem] flex justify-between items-center font-poppins '>
        <div className='text-white text-[75px] font-bold text-left max-w-full leading-tight '>
          <h1 className='animate-fadeInUp '>KEPUTUSAN YANG</h1>
          <h1 className='text-red-600 underline animate-fadeInUp'>TERAKTIK</h1>
          <h1 className='animate-fadeInUp'>MENGHASILKAN</h1>
          <h1 className='animate-fadeInUp'>
            KOI YANG <span className='text-red-600 underline'>ESTETIK</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
