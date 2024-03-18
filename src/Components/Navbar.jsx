const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 lg:p-6">
                <div className="flex-1">
                   
                    <a className="lg:text-4xl text-lg font-bold text-purple-600">FlavorFiesta</a>
                </div>
                <div className="lg:mr-56 lg:flex hidden">
                    <ul className="menu menu-horizontal px-1 text-purple-600 text-lg">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>

                <div className="flex-none gap-2">
                    <label className="input input-bordered flex items-center lg:gap-2 rounded-full text-purple-600 border-purple-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-6 lg:h-6 w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                        <input type="text"  placeholder="Search..." />
                    </label>
                    <div>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="lg:w-10 w-6 rounded-full bg-purple-400 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-10 w-6 lg:h-10 h-6 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;