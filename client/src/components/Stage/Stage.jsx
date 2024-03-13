import "./Stage.css";

const Stage = ({ name, timeUpdated }) => {
  return (
    <div className="status-container">
      <span className="circle"></span>
      <h3>{name}</h3>
      <h4>{timeUpdated}</h4>
    </div>
  );
};
export default Stage;
