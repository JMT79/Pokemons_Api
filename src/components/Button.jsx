import "../styles/Button.css";

const Button = ({ icon, handleClick }) => {
  return (
    <div className="btn_box">
      <button className="btn" onClick={handleClick}>
        {icon}
     </button>
    
    </div>
  );
};

export { Button };
