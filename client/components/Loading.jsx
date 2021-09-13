import * as React from "react";
import { View, Text } from "react-native";
import * as Progress from "react-native-progress";

export default function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Progress.Circle size={120} indeterminate={true} />
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 35 }}>Loading...</Text>
      </View>
    </View>
  );
}
