import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button/Button";

const Layout = () => {
  return (
    <>
      <nav>
        <Button variant="contained" color="error"
        style={{
            margin: "1%",
            border: "solid",
            color: "black"
        }}
        >
            <Link to="/"
            style={{ 
                textDecoration: 'none',
                color: "inherit"
            }}
            >Dashboard</Link>
        </Button>
        <Button variant="contained" color="error"
        style={{
            margin: "1%",
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