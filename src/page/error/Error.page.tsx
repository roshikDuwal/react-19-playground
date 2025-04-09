import { useNavigate, useRouteError } from "react-router-dom"


const ErrorBoundary = () => {
    const error:any=useRouteError();
    const navigate=useNavigate();

    const handleGoBack=()=>{
        console.log(navigate);
        
        navigate(-1)
    }

    if(error && error.status===404) {

     return (
        <>
         <h1>404 error page</h1>
         <p>{error.statusText}</p>
         <button onClick={handleGoBack}>Go Back</button>
        </>
     )
    }

}

export default ErrorBoundary
