import Login from './pages/loginPage/components/Login';
import CompanyProfile from './pages/recruiter_page/CompanyProfile';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Recruiter from './pages/recruiter_page/Recruiter'
// import LeftSidebar from "./pages/recruiter_page/LeftSideBar";
import { Box } from '@mui/material';

function App() {
  return (
     <Box className="App">
      {/* <Login/> */}
      {/* <Recruiter/> */}
      <Router>
        <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/CompanyProfile' element={<CompanyProfile/>}></Route>
        <Route path='/RecruiterHome' element={<Recruiter/>}></Route>
          {/* <Route path='signup' element={<SignRecruiter/>}></Route> */}
        </Routes>
      </Router>
      {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <FloatingForm /> */}
    </Box> 
  );
}

export default App;
