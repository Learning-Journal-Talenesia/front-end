import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import DashboardLayout from "./layout/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SidebarProvider } from "./context/Sidebar.context";
import JournalPage from "./pages/Journal.page";
import KelasPage from "./pages/Class.page";
import AdminPage from "./pages/Admin.page";
import AboutClassPage from "./pages/AboutClass.page";
import TemaClassPage from "./pages/TemaClass.page";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <SidebarProvider>
        <DashboardLayout>
          <Router>
            <Switch>
              <Route path="/kelas/:kelas_id/journal/:journal_id/number/:number_id">
                <JournalPage />
              </Route>
              <Route path="/kelas/:kelas_id/journal/:journal_id">
                <KelasPage />
              </Route>
              <Route path="/admin">
                <AdminPage />
              </Route>
              <Route path="/kelas/about/:kelas_id">
                <AboutClassPage />
              </Route>
              <Route path="/kelas/tema/:kelas_id">
                <TemaClassPage/>
              </Route>
            </Switch>
          </Router>
        </DashboardLayout>
      </SidebarProvider>
    </ChakraProvider>
  );
}

export default App;
