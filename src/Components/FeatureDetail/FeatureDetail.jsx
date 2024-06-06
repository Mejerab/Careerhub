import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { storedJobs } from "../../Utilities/appliedJobs";

const FeatureDetail = () => {
    const features = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = features.find(feature => feature.id == idInt);
    const { location, salary, job_name, phone, email, job_details,
        job_responsibility, experience, educational_requirements
    } = job;

    const handleAppliedJobs = () =>{
        storedJobs(idInt);
        toast('You have been applied successfully');
    }

    return (
        <>
        <h3 className="text-2xl my-12 text-center text-black font-extrabold">Job Details</h3>
            <div className="mx-10 grid gap-x-10 grid-cols-3 my-6">
                <div className="col-span-2">
                    <p className="text-[#757575] leading-loose text-sm font-medium"><h5 className="text-xl inline font-extrabold text-black">Job Description:</h5>{job_details}</p>
                    <p className="text-[#757575] leading-loose text-sm font-medium my-5"><h5 className="text-xl inline font-extrabold text-black">Job Responsibility:</h5>
                        Collaborating with cross-functional teams: UI/UX {job_responsibility}</p>
                    <p className="text-[#757575] text-sm leading-loosefont-medium"><h5 className="text-xl mb-1 font-extrabold text-black">Educational Requirements:</h5>{educational_requirements}</p>
                    <p className="mt-4 text-[#757575] text-sm leading-loosefont-medium"><h5 className="text-xl mb-1 font-extrabold text-black">Experience:</h5>{experience}</p>
                </div>
                <div className="col-span-1">
                    <div className="p-6 bg-[#7E90FE1A] rounded-xl">
                        <h4 className="text-black text-lg font-extrabold pb-4 border-b">Job Details</h4>
                        <span className="text-[#757575] mt-2 flex items-end"><h5 className="text-[#474747] font-extrabold text-lg mr-2 mt-2"><AiOutlineDollarCircle className="text-[#7E90FE] inline mr-2 -mt-1 text-xl" />Salary: </h5>{salary}</span>
                        <span className="text-[#757575] mt-2 flex items-end mb-4"><FaRegCalendarAlt className="text-[#7E90FE] inline mr-2 relative -top-1 text-xl" /><h5 className="text-[#474747] font-extrabold text-lg mr-2 mt-2">Job Title : </h5>{job_name}</span>
                        <h4 className="text-xl text-black font-extrabold pb-4 border-b">Contact Information</h4>
                        <span className="text-[#757575] flex items-end"><h5 className="text-[#474747] font-extrabold text-lg mr-2 mt-2"><BsTelephone className="text-[#7E90FE] inline mr-2 -mt-1 text-xl" />Phone: </h5>{phone}</span>
                        <span className="text-[#757575] flex items-end"><CiMail className="text-[#7E90FE] inline mr-2 relative -top-1 text-xl" /><h5 className="text-[#474747] font-extrabold text-lg mr-2 mt-2">Email:</h5>{email}</span>
                        <span className="text-[#757575] flex items-end"><CiLocationOn className="text-[#7E90FE] inline mr-2 relative -top-1 text-xl" /><h5 className="text-[#474747] font-extrabold text-lg mr-2 mt-2">Address:</h5>{location}</span>
                    </div>
                    <button className="mt-3 btn h-7 text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-5 w-full" onClick={handleAppliedJobs}>Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default FeatureDetail;