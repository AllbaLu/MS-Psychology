import { useNavigate } from "react-router-dom";





export const PackageSelection = () => {
  const navigate = useNavigate();

  const handleSelection = (selectedPackage) => {
    navigate(`/reserva?sessionPackage=${selectedPackage}`);
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center p-8 mt-5 justify-center">
        <h1 className="text-2xl font-bold mb-4">Schedule Sessions</h1>
        <div className="flex gap-4">
          <button
            onClick={() => handleSelection("1")}
            className="btn btn-outline-info px-4 py-2 rounded"
          >
            1 Session
          </button>
          <button
            onClick={() => handleSelection("3")}
            className="btn btn-outline-info px-4 py-2 rounded"
          >
            3 Sessions
          </button>
        </div>
      </div>
    </div>
  );
};
