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
      <Router>
        <SidebarProvider>
          <DashboardLayout>
            <Switch>
              <Route path="/user/:user_id/journal/:thema_id/number/:number_id">
                <JournalPage />
              </Route>
              <Route path="/user/:user_id/journal/:thema_id">
                <KelasPage />
              </Route>
              <Route path="/admin">
                <AdminPage />
              </Route>
              <Route path="/user/about/:user_id/journal/:thema_id">
                <AboutClassPage />
              </Route>
              <Route path="/user/tema/:user_id/journal/:thema_id">
                <TemaClassPage />
              </Route>
            </Switch>
          </DashboardLayout>
        </SidebarProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
