import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useDrawerProgress,
} from "@react-navigation/drawer";
import Animated from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { MainLayout } from "../screens";
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from "../constants";
import { tabActions } from "../features/tab/tabSlice";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.white,
        }}
      />
      <Text style={{ marginLeft: 15, color: COLORS.white, ...FONTS.h3 }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.tabReducer.selectedTab);

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}
      >
        {/* close */}
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              style={{
                height: 35,
                width: 35,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* profile */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            alignItems: "center",
          }}
          onPress={() => console.log("Prodile")}
        >
          <Image
            source={dummyData.myProfile?.profile_image}
            style={{
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
            }}
          />
          <View
            style={{
              marginLeft: SIZES.radius,
            }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {dummyData.myProfile?.name}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* drawer item */}
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding,
          }}
        >
          <CustomDrawerItem
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab === constants.screens.home}
            onPress={() => {
              dispatch(tabActions.setSelectedTab(constants.screens.home));
              navigation.navigate("MainLayout");
            }}
          />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab === constants.screens.notification}
            onPress={() => {
              dispatch(
                tabActions.setSelectedTab(constants.screens.notification)
              );
              navigation.navigate("MainLayout");
            }}
          />
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab === constants.screens.favourite}
            onPress={() => {
              dispatch(tabActions.setSelectedTab(constants.screens.favourite));
              navigation.navigate("MainLayout");
            }}
          />

          {/* Line divider */}
          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />

          <CustomDrawerItem label="Track Your Order" icon={icons.location} />
          <CustomDrawerItem label="Coupons" icon={icons.coupon} />
          <CustomDrawerItem label="Setting" icon={icons.setting} />
          <CustomDrawerItem label="Invite a Friend" icon={icons.profile} />
          <CustomDrawerItem label="Help Center" icon={icons.help} />

          <View
            style={{
              marginBottom: SIZES.padding,
            }}
          />

          <CustomDrawerItem label="Logout" icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <Drawer.Navigator
        screenOptions={{
          drawerType: "slide",
          overlayColor: "transparent",
          headerShown: false,
          drawerStyle: {
            flex: 1,
            width: "65%",
            paddingRight: 20,
            backgroundColor: "transparent",
          },
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
        }}
        initialRouteName="MainLayout"
        drawerContent={(props) => {
          return <CustomDrawerContent navigation={props.navigation} />;
        }}
      >
        <Drawer.Screen name="MainLayout">
          {(props) => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
