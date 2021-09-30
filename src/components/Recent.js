import Property from './Property';
import about from '../pictures/about.jpg';
import Button from './Button';

const Recent = () => {
    const properties = [];
    for(let i = 0; i < 6; i++) {
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
        <section className="w-full flex flex-col justify-center items-center p-12 bg-white gap-10">
            <h1 className="font-bold text-3xl text-center text-black capitalize">
                Recent added <span className="text-blue-500">trending</span> propertys
            </h1>

            <div className="text-base font-normal text-center w-full md:w-1/2 text-gray-400">
            The better impression it would make. An agency, in board terms, is any relationship between two parties in which.
            </div>

            <div className="flex flex-row flex-wrap gap-3 justify-center">
                {
                    properties.map((property, index) => {
                        return <Property key={index} {...property} />
                    })
                }
            </div>

            <Button type="primary">
                Load More
            </Button>
        </section>
    );
}

export default Recent;