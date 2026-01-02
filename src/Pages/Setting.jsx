import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navbar from '../Component/Navbar/Navbar';
import HomeFooter from '../Component/Footer/HomeFooter';


const Setting = () => {

  const nav=useNavigate();

  return (
    <>
    <Navbar></Navbar>
    <div>
       <div className='p-3' onClick={() => nav("/home")}>
        <ArrowBackIcon sx={{ fontSize: 20, color: "gray" }} />
       </div>

      <div className='' >

      <h1 className='text-2xl font-bold m-10 ' >Nortification</h1>
      <h1  className='text-2xl font-bold m-10 '>Privacy & Security</h1>
      </div>
    </div>
    <HomeFooter></HomeFooter>
    </>
  )
}

export default Setting