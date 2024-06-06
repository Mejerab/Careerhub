
const getAppliedJobs = () =>{
    const getAppliedJobs = localStorage.getItem('job-Applies');
    if (getAppliedJobs) {
        return JSON.parse(getAppliedJobs);
    }
    return [];
}
const storedJobs = id =>{
    const setAppliedJobs = getAppliedJobs();
    const exists = setAppliedJobs.find(jobId => jobId === id);
    if (!exists) {
        setAppliedJobs.push(id);
        localStorage.setItem('job-Applies', JSON.stringify(setAppliedJobs));
    }
}
export {storedJobs, getAppliedJobs} 