import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import ProductDetails from "../../features/catalog/ ProductDetails";
import Catalog from "../../features/catalog/Catalog";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import Header from "./Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container sx={{ mt: 4 }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/catalog" component={Catalog} />
          <Route path="/catalog/:id" component={ProductDetails} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/server-error" component={ServerError} />
          <Route path="/not-found" component={NotFound} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
