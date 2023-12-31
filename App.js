import "react-native-gesture-handler";
import { ENV_VARIABLE_NAME } from "@env";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import RoutNavigator from "./src/navigations/RoutNavigator";
import HomeScreen from "./src/screens/HomeScreen";
import {
  OriginContextProvider,
  DestinationContextProvider,
} from "./src/contexts/contexts";

const App = () => {
  return (
    <DestinationContextProvider>
      <OriginContextProvider>
        <RoutNavigator />
      </OriginContextProvider>
    </DestinationContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
