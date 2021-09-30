import pic from '../pictures/about.jpg';
import Button from './Button';

const About = () => {
    return (
        <section id="about" className="w-full bg-white flex flex-col md:flex-row p-12">
            {/* picture */}
            <div className="w-full mb-14 md:mb-0 md:w-1/2 relative mr-12">
                <div className="rounded-r-3xl overflow-hidden">
                    <img src={pic} alt="house"/>
                </div>

            </div>

            {/* content */}
            <div className="w-full md:w-1/2 flex flex-col">
                <div className="text-lg font-semibold text-blue-500 mb-4">About us</div>
                <h1 className="font-bold text-3xl capitalize text-black mb-4">we are providing the top <span className="text-blue-500">real state</span> property</h1>

                <p className="text-gray-400 text-base font-normal mb-6">It's very likely that most people visiting a real estate About Us page are qualified leads. So it helps to think of this page as your virtual business card. The better it answer the questions pepole have. <br/><br/>
                The better impression it would make. An agency, in board terms, is any relationship between two parties in which. 
                </p>

                <div className="flex gap-3">
                    <Button type="primary"
                    >
                        Learn More
                    </Button>
                    <Button type="secondary">
                        Contact Us
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default About;