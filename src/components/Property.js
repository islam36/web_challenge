import {
    BiShareAlt,
    BiHeart
} from 'react-icons/bi';

import {
    FaBed,
    FaBath,
    FaSquare
} from 'react-icons/fa';

const Property = ({
    img,
    title,
    price,
    address,
    bed,
    bath,
    area,
    available
    }) => {
    return (
        <div className="w-80 flex flex-col gap-2 p-6 border-2 border-gray-200 rounded-xl transition duration-200 ease-in hover:shadow-xl">
            <div className="w-full overflow-hidden relative rounded-xl">
                <div className="absolute top-2 left-2 rounded-full capitalize text-xs bg-white px-2 py-1  text-blue-500">
                    {available ? 'available now' : 'not available'}
                </div>
                <img src={img} alt={title} />
            </div>

            <div className="flex flex-row">
                <div className="text-blue-500 font-bold text-lg">${price}</div>
                <a href="#" className="w-6 h-6 rounded-full bg-gray-300 ml-auto flex">
                    <BiHeart className="text-black m-auto" size="14px" />
                </a>
                <a href="#" className="w-6 h-6 rounded-full bg-gray-300 ml-2 flex">
                    <BiShareAlt className="text-black m-auto" size="14px" />
                </a>
            </div>

            <h4 className="text-xl text-black font-bold capitalize">
                {title}
            </h4>

            <div className="text-base text-gray-400 font-normal">
                {address}
            </div>

            <div className="flex flex-row justify-evenly gap-3">
                <div className="flex gap-1 items-center">
                    <FaBed className="text-blue-500" size="20px" />
                    {bed} Bed
                </div>

                <div className="flex gap-1 items-center">
                    <FaBath className="text-blue-500" size="20px" />
                    {bath} bath
                </div>

                <div className="flex gap-1 items-center">
                    <FaSquare className="text-blue-500" size="20px" />
                    {area} Sqft
                </div>
            </div>
        </div>
    );
}

export default Property;