
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen mt-9 rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/LYrYPdC/Banner1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" text-center text-white min-w-max ">
                    <div className="lg:max-w-4xl max-w-sm">
                        <h1 className="mb-5 text-5xl font-bold"> where taste knows no bounds! <br /> Unleash your inner chef with <span className="text-purple-400">FlavorFiesta</span> </h1>
                        <p className="mb-5 text-gray-300">FlavorFiesta: Where culinary dreams take flight. Dive into a world of diverse recipes, expert tips, and a vibrant community of food enthusiasts. Explore, create, and savor every moment with us on your cooking journey.</p>
                        <div className="flex gap-6 justify-center items-center mt-24">
                            <button className="btn border-none bg-purple-400 hover:bg-purple-400  rounded-full lg:px-14 font-bold text-xl text-white">Explore Now</button>
                            <button className="btn border-purple-300 bg-transparent hover:bg-purple-400 rounded-full lg:px-14 font-bold text-xl text-white">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center lg:mt-24 mt-20">
                <h1 className="text-4xl text-purple-900 font-semibold">Our Recipes</h1>
                <p className="mb-5 mt-4 text-purple-500">FlavorFiesta: Savor flavor, ignite passion, explore culinary delights! <br />Where every bite is a culinary adventure</p>
            </div>
        </div>
    );
};

export default Banner;