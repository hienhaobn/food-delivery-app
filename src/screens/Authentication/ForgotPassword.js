import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AuthLayout } from "../";
import { FONTS, COLORS, SIZES, icons } from "../../constants";
import { FormInput, TextButton } from "../../components";
import { utils } from "../../utils";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  function isEnableSendEmail() {
    return email !== "" && emailError === "";
  }

  return (
    <AuthLayout
      title="Password Recovery"
      subtitle="Please enter your email to recover your password"
      titleContainerStyle={{
        marginTop: SIZES.padding * 2,
      }}
    >
      {/* Form Input */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >
        <FormInput
          label="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={(value) => {
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  email === "" || (email !== "" && emailError === "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  width: 20,
                  height: 20,
                  tintColor:
                    email === ""
                      ? COLORS.gray
                      : email !== "" && emailError !== ""
                      ? COLORS.red
                      : COLORS.green,
                }}
              />
            </View>
          }
        />
      </View>
      {/* button */}
      <TextButton
        label="Send Email"
        disabled={isEnableSendEmail() ? false : true}
        buttonContainerStyle={{
          height: 55,
          alignItems: "center",
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: isEnableSendEmail()
            ? COLORS.primary
            : COLORS.transparentPrimray,
        }}
        onPress={() => navigation.goBack()}
      />
    </AuthLayout>
  );
};

export default ForgotPassword;
