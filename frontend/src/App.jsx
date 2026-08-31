import Menubar from './components/Menubar/Menubar';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageItems from './pages/ManageItems/ManageItems';
import ManageUsers from './pages/ManageUsers/ManageUsers';  
import ManageCategory from './pages/ManageCategory/ManageCategory';
import Explore from './pages/Explore/Explore';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
      <div>
        <Menubar />
        <Toaster />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-items" element={<ManageItems />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/manage-category" element={<ManageCategory />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
  );
}

export default App;