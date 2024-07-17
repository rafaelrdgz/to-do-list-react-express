import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {Link, useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";

export default function Navbar() {
    const navigate = useNavigate();

  return (
    <div>
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static" color="transparent">
          <Container>
            <Toolbar>
              <Typography sx={{flexGrow: 1}} variant="h6" component="div">
                <Link style={{textDecoration: "none", color: "#eee"}} to="/">PERN Stack</Link>
              </Typography>
              <Button variant="contained" color="primary" onClick={() => navigate('/tasks/new')}>
                New Task
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
}
