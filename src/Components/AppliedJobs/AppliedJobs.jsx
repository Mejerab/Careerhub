import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJobs } from "../../Utilities/appliedJobs";
import { RiUserStarFill } from "react-icons/ri";
import AppliedJob from "../AppliedJob/AppliedJob";
import { MdKeyboardArrowDown } from "react-icons/md";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const jobDatas = useLoaderData();
    useEffect(() => {
        const storedJobIds = getAppliedJobs();
        if (jobDatas.length > 0) {
            const jobs = [];
            for (const id of storedJobIds) {
                const job = jobDatas.find(job => job.id === id)
                if (job) {
                    jobs.push(job);
                }
            }
            setAppliedJobs(jobs);
        }
    }, [])
    const JobType = filter =>{
        if (filter === 'All') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'Remote') {
            const remoteJobs = appliedJobs.filter(appliedJob => appliedJob.remote_or_onside === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'Onsite') {
            const onsiteJobs = appliedJobs.filter(appliedJob => appliedJob.remote_or_onside === 'Onside');
            setDisplayJobs(onsiteJobs);
        }
    }
    return (
        <>
            <h2 className="text-2xl text-center text-black font-extrabold my-12">Jobs I applied for: {appliedJobs.length}</h2>
            <div className="text-right mr-5 my-12">
                <details class="dropdown">
                    <summary class="m-1 btn font-bold text-base">Filter By<MdKeyboardArrowDown className="-ml-2 mt-1 text-xl" /></summary>
                    <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-36">
                        <li onClick={() => JobType('All')} className="font-bold"><a>All</a></li>
                        <li onClick={() => JobType('Remote')} className="font-bold"><a>Remote</a></li>
                        <li onClick={() => JobType('Onsite')} className="font-bold"><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            {
                displayJobs.map(appliedJob => <AppliedJob appliedJob={appliedJob}></AppliedJob>)
            }
        </>
    );
};

export default AppliedJobs;