import React from 'react'
import ProfileHero from '../Component/Profile/ProfileHero'
import Navbar from '../Component/Navbar/Navbar'
import Sidebar from '../Component/Profile/Sidebar'
import SidebarContent from '../Component/Profile/SidebarContent'
import Footer from '../Component/Footer/Footer'
import HomeFooter from '../Component/Footer/HomeFooter'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { color } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const nav = useNavigate();

  return (
    <div>
        {/* <Navbar></Navbar> */}
     <div className='p-3 ' onClick={()=>nav("/home")} ><ArrowBackIcon  sx={{ fontSize: 20, color: "gray" }}
></ArrowBackIcon></div>   
    <ProfileHero></ProfileHero>
  
    <SidebarContent></SidebarContent>
    <HomeFooter></HomeFooter>
    </div>
  )
}

export default Profile