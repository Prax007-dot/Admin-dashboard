import { useTheme } from "@emotion/react";
import { Box, display, padding } from "@mui/system";
import React, { useState } from "react";
// import {GridToolBarContainer} from "@mui/x-data-grid";
import { Search } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  Typography,
  IconButton,
  InputBase,
  Menu,
  
  MenuItem,
  Switch,
  
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const DataGrid = ({ datas, itemsPerPage, setSearch ,setSort}) => {
  //theme for table
  const theme = useTheme();

  //data of table , transactions and total
  const data = datas.transactions;
  const total = datas.total;

  //page handling
  //pagination
  //page current state management
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const theadColor = {
    backgroundColor: theme.palette.background.alt,
    color: theme.palette.secondary[300],
    borderBottom: "none",
  };
  const tcellColor = {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary[100],
    border: "none",
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [idState, setidState] = useState(true);
  const [useridState, setuseridState] = useState(true);
  const [caState, setcaState] = useState(true);
  const [nopState, setnopState] = useState(true);
  const [costState, setcostState] = useState(true);

  const [searchInput, setsearchInput] = useState("");
  // console.log(useridState);
  return (
    <>
      <Box sx={{ position: "relative", width: "750px", height: "300px" }}>
        <div
          className="Component1"
          style={{
            backgroundColor: "none",
            marginLeft: "20px",
            position: "absolute",
            display: "flex",
            top: "15px",
            gap: "10px",
          }}
        >
          <div onClick={handleClick} style={{ display: "flex", gap: "5px" }}>
            <FontAwesomeIcon icon={faTableColumns} />
            <Typography sx={{ paddingBottom: "10px" }}>Columns</Typography>
          </div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              ID{" "}
              <Switch
                defaultChecked
                onChange={() => {
                  setidState(!idState);
                }}
              />
            </MenuItem>
            <MenuItem>UserID</MenuItem>
            <MenuItem>CreatedAt</MenuItem>
            <MenuItem>No. Of Products</MenuItem>

            <MenuItem>Cost</MenuItem>
          </Menu>
          <div style={{ display: "flex", gap: "5px" }}>
            <FontAwesomeIcon icon={faTableColumns} />
            <Typography sx={{ paddingBottom: "10px" }}>Features</Typography>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <FontAwesomeIcon icon={faTableColumns} />
            <Typography sx={{ paddingBottom: "10px" }}>Export</Typography>
          </div>
        </div>
        <div
          className="Component2"
          style={{
            backgroundColor: theme.palette.background.alt,
            marginLeft: "20px",
            position: "absolute",
            right: "20px",
            borderRadius: "9px",
            gap: "3rem",
            padding: "0.1rem 1.5rem",
          }}
        >
          <div className="Search">
            <InputBase placeholder="Search..." onChange={(e)=>{setsearchInput(e.target.value)}} />

            <IconButton onClick={()=>{console.log(searchInput), setSearch(searchInput), setsearchInput(""), console.log(searchInput)}}>
              <Search />
            </IconButton>
          </div>
        </div>

        <div>
          <style>
            {`
          td{
           padding: 4px;
          }
        `}
          </style>
          <Box
            className="Component3"
            sx={{
              margin: "20px",
              position: "absolute",
              top: "30px",
              justifyContent: "space-between",
            }}
          >
            <div style={{ overflow: "auto", maxHeight: "600px" }}>
              <table style={{ borderCollapse: "collapse" }}>
                <thead style={theadColor}>
                  <tr>
                    {idState ? (
                      <>
                        <th>ID</th>
                      </>
                    ) : (
                      <></>
                    )}
                    {useridState ? (
                      <th>
                        User Id
                        <IconButton
                          onClick={() => {
                            console.log("sort"),
                            setSort({"field":"userId", "sort":"desc"})
                            
                          }}
                          sx={{ borderRadius: "30px", padding: "4px" }}
                        >
                          <FontAwesomeIcon
                            icon={faArrowDown}
                            size="2xs"
                            color={theme.palette.secondary[300]}
                          />
                        </IconButton>
                      </th>
                    ) : (
                      <></>
                    )}
                    {caState ? <th>CreatedAt</th> : <></>}
                    {nopState ? <th>No. of Products</th> : <></>}
                    {costState ? <th>Cost</th> : <></>}
                  </tr>
                </thead>
                <tbody style={tcellColor}>
                  {currentData.map((item, index) => (
                    <tr key={index} style={{ border: "none", margin: "0px" }}>
                      {idState ? (
                        <td style={{ padding: "8px" }}>{item._id}</td>
                      ) : (
                        <></>
                      )}
                      {useridState ? (
                        <td style={{ padding: "8px" }}>{item.userId}</td>
                      ) : (
                        <></>
                      )}
                      {caState ? <td>{item.createdAt}</td> : <></>}
                      {nopState ? <td>{item.products.length}</td> : <></>}
                      {costState ? (
                        <td style={{ padding: "8px", paddingRight: "10px" }}>
                          {item.cost}
                        </td>
                      ) : (
                        <></>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination
              className="Component4"
              currentPage={currentPage}
              totalPages={Math.ceil(data.length / itemsPerPage)}
              onPageChange={handlePageChange}
              theme={theme}
            />
          </Box>
        </div>
      </Box>
    </>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange, theme }) => {
  const pages = [...Array(totalPages).keys()];

  const alignbuttons = {
    position: "absolute",
    right: 0,
  };

  const buttonClass = {
    padding: "7px 8px",
    margin: "0.85rem",
  };

  const active = {
    backgroundColor: theme.palette.background.alt, // Change this to your desired color
    color: "white", // Text color
    fontSize: "16px",
    padding: "4px 8px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "2px",
  };

  const notactive = {
    backgroundColor: "white", // Change this to your desired color
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "2px",
    padding: "5px 10px",
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
            style={page === currentPage ? active : notactive}
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
