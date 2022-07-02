import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./src/navigation/CustomDrawer";
import { Provider } from "react-redux";

// Components
import { SignIn, SignUp, OnBoarding, ForgotPassword, Otp } from "./src/screens";

// Hooks
import useCachedResource from "./src/hooks/useFont";

// Store redux
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
            // initialRouteName="Home"
            initialRouteName={"OnBoarding"}
          >
            <Stack.Screen name="Home" component={CustomDrawer} />
            <Stack.Screen name="OnBoarding" component={OnBoarding} />

            <Stack.Screen name="SignIn" component={SignIn} />

            <Stack.Screen name="SignUp" component={SignUp} />

            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

            <Stack.Screen name="Otp" component={Otp} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
};

export default App;
