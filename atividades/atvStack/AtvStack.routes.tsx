import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./MainScreen";
import DetailsScreen from "./DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
const AtividadeStack: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="main"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal", // Set the initial gesture direction
          animationTypeForReplace: "pop",
          animationEnabled: true,
        }}
      >
        <Stack.Screen name="main" component={MainScreen} />
        <Stack.Screen name="details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AtividadeStack;
