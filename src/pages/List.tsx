import { useNavigate } from "react-router-dom";
import "../App.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const List = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="list">
      <div className="button-back">
        <button onClick={() => navigate("/")}>
          <ArrowBackIcon />
        </button>
      </div>
      <h1>React Projects</h1>
     
    </div>
     <div className="container-card">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </>
  );
};

export default List;
