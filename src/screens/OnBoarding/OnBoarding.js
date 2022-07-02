import React from "react";
import { View, Text, Image, ImageBackground, Animated } from "react-native";

// components
import { TextButton } from "../../components";

// Constant
import {
  constants,
  images,
  FONTS,
  SIZES,
  COLORS,
  icons,
} from "../../constants";

const OnBoarding = ({ navigation }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef();

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onViewChangeRef = React.useRef((info) => {
    setCurrentIndex(info.viewableItems[0].index);
    console.log("viewableItems.changed[0].index", info.viewableItems[0].index);
  });

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {constants.onboarding_screens.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.lightOrange,
              COLORS.primary,
              COLORS.lightOrange,
            ],
            extrapolate: "clamp",
          });
          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
              }}
            ></Animated.View>
          );
        })}
      </View>
    );
  };

  function renderHeaderLogo() {
    return (
      <View
        style={{
          position: "absolute",
          top: SIZES.height > 800 ? 50 : 25,
          left: 0,
          right: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.logo_02}
          resizeMode="contain"
          style={{
            width: SIZES.width * 5,
            height: 100,
          }}
        />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          height: 100, // ipx = 160
        }}
      >
        {/* Pagination / Dot */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Dots />
        </View>

        {/* Button */}
        {currentIndex < constants.onboarding_screens.length - 1 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              label="Skip"
              buttonContainerStyle={{
                backgroundColor: null,
              }}
              lableStyle={{
                color: COLORS.darkGray2,
              }}
              onPress={() => navigation.replace("SignIn")}
            />

            <TextButton
              label="Next"
              buttonContainerStyle={{
                height: 60,
                width: 200,
                borderRadius: SIZES.radius,
              }}
              onPress={() => {
                flatListRef?.current?.scrollToIndex({
                  index: currentIndex + 1,
                  animated: true,
                });
              }}
            />
          </View>
        )}

        {currentIndex === constants.onboarding_screens.length - 1 && (
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              label="Let's Get Started"
              buttonContainerStyle={{
                height: 60,
                borderRadius: SIZES.radius,
              }}
              onPress={() => navigation.replace("SignIn")}
            />
          </View>
        )}
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {renderHeaderLogo()}

      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        renderItem={(item, index) => {
          return (
            <View
              style={{
                width: SIZES.width,
              }}
            >
              {/* Header */}
              <View
                style={{
                  flex: 3,
                }}
              >
                <ImageBackground
                  source={item.item.backgroundImage}
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    height: index == 1 ? "86%" : "100%",
                    with: "100%",
                  }}
                >
                  <Image
                    source={item.item.bannerImage}
                    resizeMode="contain"
                    style={{
                      width: SIZES.width * 0.8,
                      height: SIZES.width * 0.8,
                      marginBottom: -SIZES.padding,
                    }}
                  />
                </ImageBackground>
              </View>

              {/* Detail */}
              <View
                style={{
                  flex: 1,
                  marginTop: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: SIZES.radius,
                }}
              >
                <Text
                  style={{
                    ...FONTS.h1,
                    fontSize: 25,
                  }}
                >
                  {item.item.title}
                </Text>
                <Text
                  style={{
                    marginTop: SIZES.radius,
                    textAlign: "center",
                    color: COLORS.darkGray,
                    paddingHorizontal: SIZES.padding,
                    ...FONTS.body3,
                  }}
                >
                  {item.item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />

      {renderFooter()}
    </View>
  );
};

export default OnBoarding;
