import { useEffect } from "react";
import { useState } from "react";
import Feature from "../Feature/Feature";

const Features = () => {

    const [features, setFeatures] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        fetch('jobDetails.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    return (
        <div>
            <div className="text-center mt-10">
                <h3 className="text-3xl text-black font-extrabold">Featured Jobs</h3>
                <p className="text-[#757575] pt-2 text-xs font-semibold">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="lg:grid grid-cols-2 gap-5 my-4">
                {
                    features.slice(0, dataLength).map(feature => <Feature key={features.id} feature={feature}></Feature>)
                }
            </div>
            <div className={dataLength === features.length ? 'hidden' : ''}>
                <div className="mb-7 flex justify-center">
                    <button
                        onClick={() => setDataLength(features.length)}
                        className="mt-5 btn h-7 text-white bg-gradient-to-r from-[#7E90FE]
                         to-[#9873FF] px-5">
                        See All Jobs</button>
                </div>
            </div>
        </div>
    );
};
export default Features;