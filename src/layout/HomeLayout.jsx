import { Outlet } from "react-router-dom"
import LeftBar from "../components/LeftBar/LeftBar"
import RightBar from '../components/RightBar/RightBar'


const HomeLayout = () => {
   return (
      <>
         <LeftBar />
         <Outlet />
         <RightBar />
      </>
   )
}

export default HomeLayout