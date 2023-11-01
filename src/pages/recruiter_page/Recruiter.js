import Recruiterright from "./Recruiter_Right";
// import './Recruiter.css'
import { useState } from "react";
import LeftSidebar from '../../global-components/LeftSideBar'
import CompanyProfile from "../recruiter_page/CompanyProfile"

function Recruiter() {
  const [Open,setOpen] = useState(false);
  const onButton = () =>{
    setOpen(true);
  }
  const onbut = () =>{
    setOpen(false);
  }
  
  return (
    
    <div>
    <LeftSidebar onButton={onButton} onbut={onbut}/>
    {Open ? <CompanyProfile/> :<Recruiterright/>}
    </div>
  );
}

export default Recruiter;
