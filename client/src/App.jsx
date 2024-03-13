import Dashboard from "./pages/Dashboard";
import ApplicationDetails from "./pages/ApplicationDetails";
import { applications } from "./testdata/applications";
function App() {
  return <ApplicationDetails application={applications[0]} />;
}

export default App;
