import { Container } from "@mui/material";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Content from "./components/Content";
export default function App() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundImage: `url("/public/banner.jpg")`,
        backgroundSize: "cover",
        width: "100%",
        height: "35rem",
        position: "relative",
      }}
      style={{ zIndex: 1 }}
    >
      <Navbar /> {/* Set z-index here */}
      <Header /> {/* Set z-index here */} <Content />
    </Container>
  );
}
