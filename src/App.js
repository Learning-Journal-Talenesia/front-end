import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import DashboardLayout from "./layout/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SidebarProvider } from "./context/Sidebar.context";
import JournalPage from "./pages/Journal.page";
import AdminPage from "./pages/Admin.page";
import Sidebar from "./components/Sidebar";
import ClassPage from "./pages/Class.page";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <DashboardLayout>
        <Router>
          <Switch>
            <Route path="/class/:class_id/theme/:theme_id/number/:number">
              <SidebarProvider>
                <Sidebar />
                <JournalPage />
              </SidebarProvider>
            </Route>
            <Route path="/class/:class_id/theme/:theme_id">
              <ClassPage />
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
