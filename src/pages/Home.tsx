import { useNavigate } from "react-router-dom";
import "../App.css";
import Button from "../components/button";

const  Home = () => {

const navigate = useNavigate();
const goList = () => {
    navigate('/list')
}

  return (
    <div className="home">
      <h1>
        Hello <span className="color">World</span>!
      </h1>
      <Button onClick={goList}/>
    </div>
  );
}

export default Home;
