import { useMediaQuery,Box } from "@mui/material";
import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { useGetUserQuery } from "../state/api.js";




const Layout =()=>{
    const isNonMobile = useMediaQuery("(min-widh:600px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const userId = useSelector((state) => state.global.userId);
    const {data} = useGetUserQuery(userId);
    console.log(data);


    return(
    <Box   display={isNonMobile ? "flex":"block"} width={"100"} height={"100%"}>

        <Sidebar drawerwidth={"250px"} isNonMobile={isNonMobile} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} user={data || {}}/>
        
        <Box>
            <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} user={data || {}}/>
            <Outlet /> 
        </Box> 

    </Box>);
}

export default Layout;