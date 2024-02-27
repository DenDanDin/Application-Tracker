const ApplicationCard = ({ application }) => {
  const { companyName, position, status, applicationId } = application;
  return (
    <div>
      <h1>{companyName}</h1>
      <h2>{position}</h2>
      <h4>{status}</h4>
      <h4>ID: {applicationId}</h4>
    </div>
  );
};
export default ApplicationCard;
