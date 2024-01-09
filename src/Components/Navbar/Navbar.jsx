import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ThemeProvider,
  alpha,
  createTheme,
  styled,
} from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const pages = [
  { label: "Home", path: "/" },
  { label: "Browse", path: "/browse" },
  { label: "Genre", path: "/genre" },
];
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#161616",
    },
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(4),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
    },
  },
}));

function Navbar() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "manrope",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                justifyContent: "flex-start",
              }}
            >
              LITE READ
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.label}
                  component={Link}
                  to={page.path}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "manrope",
                    letterSpacing: ".2rem",
                    marginRight: "16px",
                    "&:hover": { backgroundColor: "#161616" },
                  }}
                >
                  {page.label}
                </Button>
              ))}
              <Divider orientation="vertical" variant="middle" flexItem />
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
