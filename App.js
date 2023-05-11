import React from "react";
import ScreenOne from "./screen/ScreenOne";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingleUserPage from "./screen/SingleUserPage";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="one"
          component={ScreenOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="singleuserpage"
          component={SingleUserPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
