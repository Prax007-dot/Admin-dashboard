import { useTheme } from "@emotion/react";
import { Box, display, padding } from "@mui/system";
import React, { useState } from "react";

export const DataGrid = ({ data, itemsPerPage }) => {
  const theme = useTheme();
  console.log(data);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);


  const theadColor={
    backgroundColor: theme.palette.background.alt,
    color: theme.palette.secondary[300],
    borderBottom: "none",
  }
  const tcellColor={
    backgroundColor:  theme.palette.primary.light,
            color: theme.palette.secondary[100],
            border: "none",
  }

  return (
    <div>
      <style>
        {`
          td{
           padding: 4px;
          }
        `}
      </style>
      <Box sx={{margin:"20px", position: "relative" ,display: "inline-block",
    justifyContent: "space-between",}}>
      <div style={{ overflow: 'auto', maxHeight: '600px' }}>

      <table style={{borderCollapse: "collapse"}}>
        <thead style={theadColor}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Country</th>
            <th>Occupation</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody style={tcellColor}>
          {currentData.map((item, index) => (
            <tr key={index} style={{border: "none",margin:"0px"}} >
              <td style={{padding:"8px"}}>{item._id}</td>
            <td style={{padding:"8px"}}>{item.name}</td>
            <td >{item.email}</td>
            <td >{item.phoneNumber}</td>
            <td>{item.country}</td>
            <td>{item.occupation}</td>
            <td style={{padding:"8px", paddingRight:"10px"}}>{item.role}</td>
            </tr>
          ))}
        </tbody>
        
      </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(data.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
      </Box>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const theme = useTheme();
  const pages = [...Array(totalPages).keys()];

  const alignbuttons = {
    position: "absolute",
    right:0,

  }

  const buttonClass = {
    padding:'7px 8px',
    margin:'0.85rem'
    
  }

  const active = {
    backgroundColor: theme.palette.background.alt, // Change this to your desired color
    color: 'white', // Text color
    fontSize:'16px',
    padding:'4px 8px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin :"2px"
  };

  const notactive = {
    backgroundColor: 'white', // Change this to your desired color
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize:'16px',
    margin:"2px",
    padding:'5px 10px',
  };
  
  return (
    <div style={alignbuttons}>
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
        style={buttonClass}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={page===currentPage?active:notactive}
        >
          {page + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
        style={buttonClass}
      >
        Next
      </button>
      
    </div>
    </div>
  );
};

