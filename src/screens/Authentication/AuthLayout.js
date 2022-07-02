import React from "react";
import { View, Text, Image } from "react-native";
import { FONTS, SIZES, COLORS, images } from "../../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const AuthLayout = ({ title, subtitle, titleContainerStyle, children }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* App icon */}
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={images.logo_02}
            resizeMode="contain"
            style={{ height: 100, width: 100 }}
          />
        </View>

        {/* Title and subtitle */}

        <View
          style={{
            marginTop: SIZES.padding,
            ...titleContainerStyle,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              ...FONTS.h2,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: COLORS.lightGray1,
              marginTop: SIZES.base,
              ...FONTS.body3,
            }}
          >
            {subtitle}
          </Text>
        </View>

        {/* content / children */}
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AuthLayout;
