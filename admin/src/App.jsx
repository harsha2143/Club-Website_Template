
import { Route, Routes } from 'react-router-dom'
import Affiliates from './Affiliates/Affliates';
import AdminLayout from './Sidebar';
import DashboardPage from './Dashboard/Dashboard';
import EventsManagement from './Events/Event';
import HomepageManagement from './Homepage/Homepage';
import RegistrationManagement from './Registrations/Registrations';
import TeamManagement from './Team/Team';

const App = () => {
  return (
    <div>
        <AdminLayout/>
        <Routes>
            <Route path="admin/dashboard" element={<DashboardPage/>} />
            <Route path="admin/homepage" element={<HomepageManagement/>} />
            <Route path="admin/affiliates" element={<Affiliates />} />
            <Route path="admin/events" element={<EventsManagement/>} />
            <Route path="admin/registration" element={<RegistrationManagement/>} />
            <Route path="admin/team" element={<TeamManagement/>} />
        </Routes>
    </div>
  )
}


export default App;
