
const Category = () => {
    return (
        <div>
            <div className="text-center mt-12">
                <h3 className="text-3xl text-black font-extrabold">Job Category List</h3>
                <p className="text-[#757575] pt-2 text-xs font-semibold">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 gap-x-6 my-8">
                <div className="bg-base-200 p-10 rounded-xl">
                    <img className="bg-base-300 p-4 rounded-md" src="/assets/icons/accounts.png" alt="" />
                    <h4 className="text-xl pt-3 font-extrabold">Account & Finance</h4>
                    <p className="text-[#757575]">300 Jobs Available</p>
                </div>
                <div className="bg-base-200 p-10 rounded-xl">
                    <img className="bg-base-300 p-4 rounded-md" src="/assets/icons/creative.png" alt="" />
                    <h4 className="text-xl pt-3 font-extrabold">Creative Design</h4>
                    <p className="text-[#757575]">100+ Jobs Available</p>
                </div>
                <div className="bg-base-200 p-10 rounded-xl">
                    <img className="bg-base-300 p-4 rounded-md" src="/assets/icons/marketing.png" alt="" />
                    <h4 className="text-xl pt-3 font-extrabold">Marketing & Sales</h4>
                    <p className="text-[#757575]">150 Jobs Available</p>
                </div>
                <div className="bg-base-200 p-10 rounded-xl">
                    <img className="bg-base-300 p-4 rounded-md" src="/assets/icons/chip.png" alt="" />
                    <h4 className="text-xl pt-3 font-extrabold">Engineering Job</h4>
                    <p className="text-[#757575]">224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default Category;