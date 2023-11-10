import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import DashboardLayout from "./layout/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SidebarProvider } from "./context/Sidebar.context";
import JournalPage from "./pages/Journal.page";
import KelasPage from "./pages/Class.page";
import AdminPage from "./pages/Admin.page";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <SidebarProvider>
          <DashboardLayout>
            <Switch>
              <Route path="/kelas/:kelas_id/journal/:thema_id/number/:number_id">
                <JournalPage />
              </Route>
              <Route path="/kelas/:kelas_id/journal/:thema_id">
                <KelasPage />
              </Route>
              <Route path="/admin">
                <AdminPage />
              </Route>
            </Switch>
          </DashboardLayout>
        </SidebarProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
