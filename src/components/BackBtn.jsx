import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  let navigate = useNavigate();
  return (
    <button className="back-btn btn btn-light" onClick={()=> navigate('/')}>
    <svg className="back-btn__arrow-left" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" fill="#212529">
      <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
    </svg> 
    <span className="back-btn__text">Home</span>
    </button>
  )
};

export default BackBtn;