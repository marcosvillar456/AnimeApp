import * as React from "react";
import { View, Text, Image } from "react-native";
const TabIcon = ({ icon, label }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 60,
        borderRadius: 30,
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
        }}
      />
      <Text>{label}</Text>
    </View>
  );
};
export default TabIcon;
