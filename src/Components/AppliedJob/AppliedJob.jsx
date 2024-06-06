import { CiLocationOn } from "react-icons/ci";
const AppliedJob = ({ appliedJob }) => {
    const { logo, company_name, job_name, remote_or_onside, salary, location } = appliedJob;
    return (
        <div className="border p-7 my-6 flex justify-between items-center">
            <div className="flex">
            <div className="pl-5 my-auto mr-12">
                <img className="w-16" src={logo} alt="" />
            </div>
            <div className="pl-5">
                <h4 className="text-xl font-extrabold">{job_name}</h4>
                <h5 className="text-lg text-[#757575] font-bold">{company_name}</h5>
                <div className="my-3">
                    <button className='rounded-md hover:text-black transition font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text border border-[#9873FF] mr-4 py-2 px-5'>{remote_or_onside}</button>
                    <button className='hover:text-black transition font-extrabold  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text border border-[#9873FF] py-2 px-5 rounded-md'>Full Time</button>
                </div>
                <div className='flex text-[#757575] font-semibold flex-grow'>
                    <p className='flex -ml-1'><CiLocationOn className='text-2xl' />{location}</p>
                    <p className='ml-10'>{salary}</p>
                </div>
            </div>
            </div>
            <div className="pl-4">
                <button className="mt-5 btn h-7 text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-5">View Details</button>
            </div>
        </div>
    );
};

export default AppliedJob;