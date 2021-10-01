import Button from './Button';
import Property from './Property';
import {
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight
} from 'react-icons/md';

const about = 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80';

const Trending = () => {

    const properties = [];
    for(let i = 0; i < 3; i++) {
        properties.push({
            title: "the better impression it would make. An agency",
            img: about,
            price: "256.000",
            address: "Amborkhana, 3100, Sylhet, Bangladesh",
            available: true,
            bed: 3,
            bath: 2,
            area: 1000,
        });
    }
        

    return (
        <section className="w-full flex flex-col items-center bg-white p-12 gap-12">
            <h1 className="font-bold text-3xl text-black capitalize">
                our most popular trending <span className="text-blue-500">propertys</span>
            </h1>

            <div className="w-full flex flex-col md:flex-row justify-between gap-8">
                <div className="font-normal text-gray-400 text-center md:text-left w-full md:w-1/2 ">
                    The better imrpession it would make. An agency, in board terms, is any relationship between two parties in which.
                </div>

                <div className="flex flex-row gap-3 justify-center">
                    <Button
                        type="disable"
                    >
                        <MdKeyboardArrowLeft className="text-white" size="32px" />
                    </Button>
                    <Button
                        type="primary"
                    >
                        <MdKeyboardArrowRight className="text-white" size="32px" />
                    </Button>
                </div>

            </div>

            <div className="w-full flex flex-row flex-wrap gap-3 justify-center">
                {
                    properties.map((property, index) => {
                        return <Property
                            key={index}
                            {...property}
                        />
                    })
                }
            </div>
        </section>
    );
}

export default Trending;