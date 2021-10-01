const ClientCard = ({
    clientName,
    job,
    quote,
    picture
}) => {

    return (
        <div className="w-96 flex flex-col md:flex-row gap-8 p-8 shadow-lg rounded-xl bg-white">
            <div className="w-full md:w-1/3 h-1/2 md:h-auto rounded-xl overflow-hidden">
                <img src={picture} alt={clientName} className="" />
            </div>

            <div className="w-full md:w-2/3 flex flex-col">
                <blockquote className="font-normal text-sm text-gray-400">{quote}</blockquote>

                <div className="mt-5">
                    <div className="font-bold text-base text-black capitalize mt-auto">{clientName}</div>
                    <div className="font-normal text-base text-gray-400 capitalize">{job}</div>
                </div>
            </div>
        </div>
    );
}

const Testimotional = () => {
    const clients = [
        {
            clientName: 'Shazid imtiaz Maruf',
            job: 'UX/UI designer',
            quote: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure culpa nihil quod error esse voluptatum laboriosam. Quia deleniti repellat tenetur',
            picture: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80',
        },
        {
            clientName: 'Juliah Martha',
            job: 'product manager',
            quote: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure culpa nihil quod error esse voluptatum laboriosam. Quia deleniti repellat tenetur',
            picture: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80',
        },
    ]

    return (
        <section className="w-full p-16 bg-white flex flex-col items-center gap-10">
            <h1 className="font-bold text-3xl capitalize text-black text-center">
                what are <span className="text-blue-500">saying</span> our clients
            </h1>

            <p className="w-full md:w-1/2 font-normal text-base text-gray-400 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure culpa nihil quod error esse voluptatum laboriosam. Quia deleniti repellat tenetur.</p>

            <div className="w-full flex flex-row flex-wrap justify-center items-center gap-8">
                {
                    clients.map((client, index) => {
                        return <ClientCard key={index} {...client} />
                    })
                }
            </div>
        </section>
    );
}

export default Testimotional;