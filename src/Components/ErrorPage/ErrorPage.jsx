import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const goBack = () =>{
        navigate('/');
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2>Oops!</h2>
            <button className="btn" onClick={goBack}>Go back</button>
        </div>
    );
};

export default ErrorPage;