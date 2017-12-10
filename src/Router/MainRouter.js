//Router
import React, { Component } from "react";
import MainScreenNavigator from "../Screen/index.js";
import { DrawerNavigator } from "react-navigation";

const MainRouter = DrawerNavigator(
  {
    Page: { screen: MainScreenNavigator }
  },
);
export default MainRouter;
