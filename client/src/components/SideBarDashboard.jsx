import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BarChartIcon from "@mui/icons-material/BarChart";
import Avatar from "@mui/material/Avatar";
import ChartComponent from "./ChartComponent.jsx";
import Tabuser from "./Tabuser.jsx";
import axios from "axios";
import NotificationChef from "./NotificationChef.jsx";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Ingredients from "./Ingredients.jsx";
import SearchBar from "./SearchBar.jsx";
import Producteslestesuser from "./Producteslestesuser.jsx";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CategoryIcon from "@mui/icons-material/Category";

const SideBarDashboard = (props) => {
  const drawerWidth = 240;
  const color = "#7d69ac";
  const [items, setItems] = useState([]);
  const [view, setView] = useState("chartcomponent");
  const [data, setdata] = useState([]);
  const [dataa, setdataa] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/selectAllUsers").then((res) => {
      setdata(res.data);
    }).catch = (err) => {
      console.log(err);
    };
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3000/api/allIngredient").then((res) => {
      setdataa(res.data[0]);
      console.log(res.data[0]);
    }).catch = (err) => {
      console.log(err);
    };
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/api/getProduct").then((res) => {
      setItems(res.data);
    }).catch = (err) => {
      console.log(err);
    };
  }, []);
  const changeView = (option) => {
    setView(option);
  };
  const renderView = () => {
    if (view === "dashboard") {
      return <ChartComponent />;
    } else if (view === "user") {
      return <Tabuser data={data} />;
    } else if (view === "Ingredient") {
      return <Ingredients data={dataa} />;
    } else if (view === "messages") {
      return <NotificationChef />;
    } else if (view === "Product") {
      return <Producteslestesuser items={items} />;
    }
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            bgcolor: "background.default",
          }}
        >
          <Toolbar>
            <SearchBar />
            <Typography
              textAlign="center"
              sx={{ color: "#673ab7", ml: 90, mb: 0 }}
            >
              Zeddini Eya
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pinimg.com/564x/49/c7/ba/49c7ba553e87812fdfb9f0242410b5b9.jpg"
            />
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              bgcolor: color,
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <img
            className="logosidebar"
            src="https://www.milka.com/etc.clientlibs/mdlz-common/clientlibs/clientlib-milka-redesign/resources/static/images/milka-logo.png"
          />

          <div className="link">
            <BarChartIcon sx={{ fontSize: 40, color: "#d1c4e9" }} />

            <p className="p" onClick={() => changeView("dashboard")}>
              Dashboard
            </p>
          </div>
          <div className="linkusers">
            <PersonOutlineIcon sx={{ fontSize: 40, color: "#d1c4e9" }} />
            <p className="p" onClick={() => changeView("user")}>
              Users
            </p>
          </div>
          <div className="linkMessages">
            <MailOutlineIcon sx={{ fontSize: 40, color: "#d1c4e9" }} />
            <p className="p" onClick={() => changeView("messages")}>
              Messages
            </p>
          </div>

          <div className="linkProduct">
            <CategoryIcon sx={{ fontSize: 40, color: "#d1c4e9" }} />
            <p className="p" onClick={() => changeView("Product")}>
              Product
            </p>
          </div>
          <div className="linkIngredienttt">
            <CategoryIcon sx={{ fontSize: 40, color: "#d1c4e9" }} />
            <p className="p" onClick={() => changeView("Ingredient")}>
              Ingredient
            </p>
          </div>
        </Drawer>

        <div className="main">{renderView()}</div>
      </Box>
    </div>
  );
};

export default SideBarDashboard;
