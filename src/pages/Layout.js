import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button/Button";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/"
        style={{ 
            textDecoration: 'none',
            color: "inherit"
        }}
        ><Button variant="contained" color="error"
        style={{
            margin: "1%",
            border: "solid",
            color: "black"
        }}
        >Dashboard</Button></Link>
        <Link to="/test"
            style={{ 
                textDecoration: 'none',
                color: "inherit"
            }}
        ><Button variant="contained" color="error"
        style={{
            margin: "1%",
            border: "solid",
            color: "black"
        }}
        >Test</Button></Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;