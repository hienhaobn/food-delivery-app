import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./src/navigation/CustomDrawer";

import { Provider } from "react-redux";

import useCachedResource from "./src/hooks/useFont";

import store from "./src/stores/store";

const Stack = createStackNavigator();

const App = () => {
  const isLoadingComplate = useCachedResource();

  if (!isLoadingComplate) {
    return null;
  } else {
    return (
      // TODO: su dung redux-toolkit
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Home"
          >
            <Stack.Screen name="Home" component={CustomDrawer} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
};

export default App;
