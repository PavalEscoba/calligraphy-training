import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  let navigate = useNavigate();
  return (
    <button className="back-btn btn btn-light" onClick={()=> navigate('/')}>&#8592; Home</button>
  )
};

export default BackBtn;