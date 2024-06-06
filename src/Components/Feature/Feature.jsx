import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Feature = ({ feature }) => {
    const { id, company_name, logo, job_name, location, salary, remote_or_onside } = feature;
    return (
        <div className="border rounded-lg p-8 flex flex-col">
            <img className="w-24 mb-4" src={logo} alt="" />
            <h4 className="text-[#474747] font-bold text-2xl">{job_name}</h4>
            <h5 className='my-1 text-[#757575] text-lg font-semibold'>{company_name}</h5>
            <div className='my-3'>
                <button className='rounded-md hover:text-black transition font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text border border-[#9873FF] mr-4 py-2 px-5'>{remote_or_onside}</button>
                <button className='hover:text-black transition font-extrabold  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text border border-[#9873FF] py-2 px-5 rounded-md'>Full Time</button>
            </div>
            <div className='flex text-[#757575] font-semibold flex-grow'>
                <p className='flex -ml-1'><CiLocationOn className='text-2xl' />{location}</p>
                <p className='ml-10'>{salary}</p>
            </div>
            <Link to={`/feature/${id}`}><button className="mt-5 btn h-7 text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button></Link>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.object
}
export default Feature;