import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FONTS, COLORS } from "../constants";

const TextButton = ({ label, lableStyle, buttonContainerStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.h3,
          ...lableStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
