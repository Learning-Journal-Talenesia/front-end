import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import DashboardLayout from "./layout/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SidebarProvider } from "./context/Sidebar.context";
import JournalPage from "./pages/Journal.page";
import KelasPage from "./pages/Class.page";
import AdminPage from "./pages/Admin.page";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <DashboardLayout>
        <Router>
          <Switch>
            <Route path="/kelas/:kelas_id/tema/:tema_id/nomor/:nomor">
              <SidebarProvider>
                <Sidebar />
                <JournalPage />
              </SidebarProvider>
            </Route>
            <Route path="/kelas/:kelas_id/tema/:tema_id">
              <KelasPage />
            </Route>
            <Route path="/admin">
              <AdminPage />
            </Route>
          </Switch>
        </Router>
      </DashboardLayout>
    </ChakraProvider>
  );
}

export default App;
