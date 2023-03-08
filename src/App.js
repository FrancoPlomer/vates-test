import { Footer } from "layouts/footer";
import { Navbar } from "layouts/navbar";
import { Static } from "layouts/static";
import { Aside } from "layouts/static/aside";
import { Dashboard } from "modules/dashboard/components";
import DashboardProvider from "modules/dashboard/store/provider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Static />
      <DashboardProvider>
        <div className="lay-sidebar">
          <Dashboard />
          <Aside />
        </div>
      </DashboardProvider>
      <Footer />
    </div>
  );
}

export default App;
