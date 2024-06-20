import logo from "../asset/logo.svg"


export default function nav(){
    return(
        <header className="flex bg-black ">
            <img src={logo} alt="" className="w-32 h-32 ml-[5rem]"/>
            <nav className="flex-grow flex justify-end items-center">
                <ul className="text-white flex mr-[2rem] space-x-5">
                    <li className="py-5 px-5 font-semibold text-[1.1rem] font-poppins cursor-pointer hover:bg-gray-700 hover:text-white hover:rounded-xl"><a href="#">Home</a></li>
                    <li className="py-5 px-5 font-semibold text-[1.1rem] font-poppins cursor-pointer hover:bg-gray-700 hover:text-white hover:rounded-xl"><a href="#">About Us</a></li>
                    <li className="py-5 px-5 font-semibold text-[1.1rem] font-poppins cursor-pointer hover:bg-gray-700 hover:text-white hover:rounded-xl"><a href="#">Ikan Koi</a></li>
                    <li className="py-5 px-5 font-semibold text-[1.1rem] font-poppins cursor-pointer hover:bg-gray-700 hover:text-white hover:rounded-xl"><a href="#">Rekomendasi</a></li>
                    <li className="py-5 px-5 font-semibold text-[1.1rem] font-poppins cursor-pointer hover:bg-gray-700 hover:text-white hover:rounded-xl"><a href="#">Contact us</a></li>
                </ul>
            </nav>
        </header>
    );
}