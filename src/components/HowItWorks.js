import { FaSearch, FaStar, FaHeart } from 'react-icons/fa';
import { RiShieldCheckFill } from 'react-icons/ri';

const Card = ({
    Icon,
    title,
    text,
    color,
    link
}) => {
    return (
        <div className={`w-64 h-64 p-4 flex flex-col gap-3 rounded-lg bg-white shadow-lg`}>
            <div className="flex flex-row gap-4">
                <div className={`w-16 h-14 bg-${color} rounded-sm flex justify-center items-center`}>
                    <Icon className={`text-white`} size="28px" />
                </div>
                <p className="font-bold text-base text-left text-black capitalize">{title}</p>
            </div>

            <p className="font-normal text-base text-gray-400">{text}</p>

            <a href={link} className="mt-auto">Read more</a>
        </div>
    )
}

const HowItWorks = () => {
    const cardsContent = [
        {
            Icon: FaSearch,
            title: 'Search your demanding house',
            text: 'The better impression it would make. An agency, in board terms, is any relationship between two parties.',
            color: 'gray-900',
            link: '#'
        },
        {
            Icon: FaStar,
            title: 'our best home features',
            text: 'The better impression it would make. An agency, in board terms, is any relationship between two parties.',
            color: 'blue-400',
            link: '#'
        },
        {
            Icon: RiShieldCheckFill,
            title: 'book your dream house property',
            text: 'The better impression it would make. An agency, in board terms, is any relationship between two parties.',
            color: 'yellow-400',
            link: '#'
        },
        {
            Icon: FaHeart,
            title: 'enjoy your new place with family',
            text: 'The better impression it would make. An agency, in board terms, is any relationship between two parties.',
            color: 'purple-600',
            link: '#'
        },
    ]

    return (
        <section id="howItWorks" className="w-full bg-blue-50 flex flex-col items-center p-12 gap-12">
            <h1 className="font-bold text-3xl capitalize text-black">how it <span className="text-blue-400">works</span></h1>
            <p className="text-gray-400 text-base font-normal text-center w-full md:w-1/2">
                The better impression it would make. An agency, in board terms, is any relationship between two parties in which.
            </p>

            <div className="flex flex-row flex-wrap justify-center gap-6">
                {
                    cardsContent.map((content, index) => {
                        return <Card key={index} {...content} />
                    })
                }
            </div>

            <div className="flex flex-row gap-3">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            </div>
        </section>
    );
}

export default HowItWorks;