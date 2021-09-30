import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaWhatsapp,
    FaPhoneAlt,
    FaRegEnvelope,
    FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full">
            <div className="w-full bg-gray-100 p-16 flex flex-col md:flex-row justify-evenly gap-8">
                <div className="flex flex-col gap-4">
                    <a href="#" className="font-bold text-lg text-blue-500">Buliding.RS</a>
                    <p className="font-normal text-base text-gray-400 w-60">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae labore voluptate.
                    </p>
                    <div className="flex flex-row gap-4">
                        <a href="#" ><FaFacebookF className="text-gray-600" size="16px" /></a>
                        <a href="#" ><FaInstagram className="text-gray-600" size="16px" /></a>
                        <a href="#" ><FaTwitter className="text-gray-600" size="16px" /></a>
                        <a href="#" ><FaLinkedinIn className="text-gray-600" size="16px" /></a>
                        <a href="#" ><FaWhatsapp className="text-gray-600" size="16px" /></a>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="font-bold text-base text-black">Quick Access</p>
                    <a href="#" className="text-base text-gray-400">Home</a>
                    <a href="#" className="text-base text-gray-400">About us</a>
                    <a href="#" className="text-base text-gray-400">Property</a>
                    <a href="#" className="text-base text-gray-400">Agent</a>
                    <a href="#" className="text-base text-gray-400">Testimonial</a>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="font-bold text-base text-black">Services</p>
                    <a href="#" className="text-base text-gray-400">Help center</a>
                    <a href="#" className="text-base text-gray-400">Rant</a>
                    <a href="#" className="text-base text-gray-400">Buy</a>
                    <a href="#" className="text-base text-gray-400">Sell</a>
                    <a href="#" className="text-base text-gray-400">Contact us</a>
                </div>

                <div className="flex flex-col gap-4 items-start">
                    <p className="font-bold text-base text-black">Contact us</p>

                    <div className="flex justify-center items-center gap-2">
                        <FaPhoneAlt className="text-gray-600" size="16px" />
                        <p className="text-base text-gray-400">+9221 5441 441</p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <FaRegEnvelope className="text-gray-600" size="16px" />
                        <p className="text-base text-gray-400">designershazid@gmail.com</p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <FaMapMarkerAlt className="text-gray-600" size="16px" />
                        <p className="text-base text-gray-400">3100 Ambarkhana, 2/A Pollobi road, Sylhet</p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-blue-500 p-4 text-white flex flex-row justify-center items-center">Copyright &copy; 2021 All rights reserved</div>
        </footer>
    );
}

export default Footer;