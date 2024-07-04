import Logo from "../asset/logo.svg";
import Phone from "../asset/phone.svg";
import Email from "../asset/email.svg";
import Ig from "../asset/ig.svg";
import Twitter from "../asset/twiter.svg";
import Fb from "../asset/fb.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-center space-x-20">
        <div className="mb-16 md:mb-0 md:w-1/4">
          <img src={Logo} alt="Jogja Koi Club" className="mb-8 w-32" />
          <p className="text-lg">
            Contact us today to explore our services and take advantage of the
            great deals available from the leading solar and cable companies in
            the DC, Maryland, and Virginia area. Let us be your trusted partner
            in finding the best solutions for your energy and connectivity
            needs.
          </p>
        </div>
        <div className="mb-16 md:mb-0 md:w-1/4">
          <h3 className="font-bold text-xl mb-6">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="text-lg hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:underline">
                Ikan Koi
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:underline">
                Rekomendasi
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:underline">
                Support
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-16 md:mb-0 md:w-1/4">
          <h3 className="font-bold text-xl mb-6">Services</h3>
          <ul>
            <li>
              <a href="#" className="text-lg hover:underline">
                Solar Solution
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:underline">
                Cable Services
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:underline">
                Deals and Promotions
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:underline">
                Consultation and Support
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h3 className="font-bold text-xl mb-6">Contact</h3>
          <ul>
            <li className="text-lg mb-4 flex items-center">
              <img src={Phone} alt="Phone" className="mr-2 w-6 h-6" />
              0123456789
            </li>
            <li className="text-lg mb-4 flex items-center">
              <img src={Email} alt="Email" className="mr-2 w-6 h-6" />
              companyname@gmail.com
            </li>
            <li className="flex flex-nowrap space-x-5">
              <a href="#" className="">
                <img src={Fb} alt="" className="w-6 h-6" />
              </a>
              <a href="#" className="">
                <img src={Twitter} alt="" className="w-6 h-6" />
              </a>
              <a href="#" className="">
                <img src={Ig} alt="" className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-16 pt-8">
        <div className="container mx-auto px-8 text-center text-lg">
          © 2024 Jogja Koi Club - Developed By{" "}
          <span className="font-bold">Kelompok 1</span>
        </div>
      </div>
    </footer>
  );
}