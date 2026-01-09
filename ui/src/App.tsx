import { Toaster } from 'sonner';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Processes from './pages/Processes';
import Filesystem from './pages/Filesystem';
import RulesManager from './pages/RulesManager';
import LogsViewer from './pages/LogsViewer';
import Reports from './pages/Reports';
import Simulations from './pages/Simulations';
import Sandbox from './pages/Sandbox';
import Settings from './pages/Settings';
import Docs from './pages/Docs';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="processes" element={<Processes />} />
            <Route path="filesystem" element={<Filesystem />} />
            <Route path="rules" element={<RulesManager />} />
            <Route path="logs" element={<LogsViewer />} />
            <Route path="reports" element={<Reports />} />
            <Route path="simulations" element={<Simulations />} />
            <Route path="sandbox" element={<Sandbox />} />
            <Route path="settings" element={<Settings />} />
            <Route path="docs" element={<Docs />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
