import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-100 h-[100vh] flex flex-col justify-center items-center bg-white">
      <h1 className="mb-8 text-3xl font-semibold">Page Not Found</h1>
      <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:opacity-90" onClick={() => navigate("/")}>Back To Home</button>
    </div>
  );
};

export default PageNotFound;
