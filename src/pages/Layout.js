import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button/Button";
import { Typography } from "@mui/material/Typography/Typography";

const Layout = () => {
  return (
    <>
      <nav>
        <Button variant="contained" color="error"
        style={{
            margin: "2%",
            border: "solid",
            color: "black"
        }}
        >
            <Link to="/"
            style={{ 
                textDecoration: 'none',
                color: "inherit"
            }}
            >Report</Link>
        </Button>
        <Button variant="contained" color="error"
        style={{
            margin: "2%",
            border: "solid",
            color: "black"
        }}
        >
            <Link to="/test"
                style={{ 
                    textDecoration: 'none',
                    color: "inherit"
                }}
            >Test</Link>
        </Button>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;