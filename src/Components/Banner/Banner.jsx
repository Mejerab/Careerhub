const Banner = () => {
    return (
        <div className="">
            <div className="ml-3 items-center flex justify-between">
                <div className="w-2/4">
                    <h2 className="text-6xl text-black font-bold leading-tight">One Step <br />Closer To Your <br /> <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text">Dream Job</span></h2>
                    <p className="text-[#757575] my-4 font-semibold text-sm">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.</p>
                    <button className="btn h-7 text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-7">Get Started</button>
                </div>
                <div className="w-2/4">
                    <img className="ml-auto w-[600px] mb-2" src="/assets/images/user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;