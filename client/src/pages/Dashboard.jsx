import ApplicationCard from "../components/ApplicationCard/ApplicationCard";
import "./Dashboard.css";
import { applications } from "../testdata/applications";
const Dashboard = () => {
  return (
    <div>
      <section className="db-header">
        <button className="db-header-button db-header-add-button">
          Add Application
        </button>
        <h1>Daniel's Application Dashboard</h1>
        <button className="db-header-button db-header-logout-button">
          Log Out
        </button>
      </section>
      <section className="db-applications-layout">
        {applications && applications.length > 0 ? (
          applications.map((job) => {
            return (
              <ApplicationCard key={job.applicationId} application={job} />
            );
          })
        ) : (
          <h1>No Jobs Added...</h1>
        )}
      </section>
    </div>
  );
};
export default Dashboard;
