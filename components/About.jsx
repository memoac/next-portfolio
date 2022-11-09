const About = () => {
    return (
        <div className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-4 sm:px-4 xl:px-0">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repellat animi aperiam eaque, fugit tempora accusantium, nobis commodi eligendi aliquid molestiae quasi labore harum corporis dignissimos consequuntur a porro exercitationem!
                        Quaerat quae adipisci, voluptatibus nisi, dolorem, quos cupiditate veniam dolore officia repudiandae at. Eaque sapiente omnis magni repellat accusantium, eius amet qui, iure obcaecati magnam laborum voluptas id nisi optio.</p>
                    <p className="py-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam provident, pariatur deleniti debitis tempore illo sunt nobis, laborum nihil consectetur sint saepe nemo! Laborum deleniti quisquam illo. Qui, optio odio.
                        Illo maxime deleniti obcaecati a autem doloribus, voluptate iure asperiores consequuntur reprehenderit maiores tempora ut vero consectetur repellat quae libero provident debitis quidem pariatur dignissimos inventore et optio. Perspiciatis, optio.</p>
                    <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects.</p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <img className="rounded-xl" src="/assets/about.jpg" alt="/" />
                </div>
            </div>
        </div>
    );
}

export default About;