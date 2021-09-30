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
        <div className="w-80 flex flex-col gap-2 p-4 border-2 border-gray-200 rounded-xl transition duration-200 ease-in hover:shadow-xl cursor-pointer">
            <div className="w-full overflow-hidden relative rounded-xl">
                <div className="absolute top-2 left-2 rounded-full capitalize text-xs bg-white px-2 py-1  text-blue-500">
                    {available ? 'available now' : 'not available'}
                </div>
                <img src={img} alt={title} />
            </div>

            <div className="flex flex-row">
                <div className="text-blue-500 font-bold text-lg">${price}</div>
                <div className="w-6 h-6 rounded-full bg-gray-300 ml-auto"></div>
                <div className="w-6 h-6 rounded-full bg-gray-300 ml-2"></div>
            </div>

            <h4 className="text-xl text-black font-bold capitalize">
                {title}
            </h4>

            <div className="text-base text-gray-400 font-normal">
                {address}
            </div>
        </div>
    );
}

export default Property;