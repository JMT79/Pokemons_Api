import "../styles/Button.css";

const Button = ({ icon, handleClick }) => {
  return (
    <div className="btn_box">
      <button className="btn" onClick={handleClick}>
        {icon}
      Anterior</button>
      <div className="btn_shadow"></div>
    </div>
  );
};

export { Button };
