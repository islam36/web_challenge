import Button from './Button';

const NewsLetter = () => {

    return (
        <section className="w-full p-4 md:p-16 bg-white flex flex-row justify-center items-center">
            <div className="w-full md:w-10/12 rounded-xl bg-gray-800 flex flex-col justify-center items-center gap-10 p-12">
                <h1 className="text-white capitalize font-bold text-base text-center">do you have any questions?</h1>
                <p className="text-white font-normal text-base w-3/4 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quas repudiandae, laudantium nulla accusantium sint repellat cumque.</p>

                <form className="bg-white w-full md:w-3/4 flex flex-col md:flex-row gap-6 justify-between p-4 rounded-xl">
                    <input type="email" name="email" id="email" placeholder="Enter email address" className="bg-transparent outline-none border-none border-0 text-gray-400 text-lg" />
                    <Button type="primary" className="rounded-lg">
                        Submit here
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default NewsLetter;