import "./ApplicationCard.css";

const ApplicationCard = ({ application }) => {
  const { companyName, position, status, applicationId } = application;
  return (
    <div className="ac-container">
      <h2 className="ac-companyName">{companyName}</h2>
      <h3 className="ac-position">{position}</h3>
      <div className="ac-id-status-container">
        <h4 className="ac-status">Status: {status}</h4>
        <h4 className="ac-id">ID: {applicationId}</h4>
      </div>
      <button className="ac-view-details-btn">View Details</button>
    </div>
  );
};
export default ApplicationCard;
