import "./ApplicationDetails.css";
import Stage from "../components/Stage/Stage";
import { applications, STAGES } from "../testdata/applications";
const ApplicationDetails = ({ application }) => {
  const { companyName, position, applicationId, status } = application;
  return (
    <div>
      <section className="db-header">
        <button className="db-header-button db-header-add-button">
          Back to Dashboard
        </button>
        <h1>Application Details</h1>
        <button className="db-header-button db-header-logout-button">
          Log Out
        </button>
      </section>
      <section className="ad-content-container">
        <section className="ad-titles">
          <h1>{companyName}</h1>
          <h2>{position}</h2>
          <h3>ID: {applicationId}</h3>
        </section>
        <section className="ad-status-bar">
          {STAGES.map((stage, index) => {
            return (
              <Stage
                key={index}
                name={stage.stage}
                timeUpdated={stage.timeUpdated}
              />
            );
          })}
        </section>
        <section className="ad-notes">
          <div>NOTES HERE</div>
        </section>
      </section>
    </div>
  );
};
export default ApplicationDetails;
