import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { COLORS, icons } from "../constants";

const IconButton = ({ containerStyle, icon, iconStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{
          width: 30,
          height: 20,
          tintColor: COLORS.white,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
