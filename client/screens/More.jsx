import React from "react";
import {
  Text,
  View,
  StyleSheet,
  BackHandler,
  Alert,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { getMoreInfo } from "../store/actions";

function More(props) {
  const dispatch = useDispatch();
  const id = props.route.params.id;
  const source = props.route.params.source;
  const Info = useSelector((state) => state.Search);

  function backAction() {
    Alert.alert("Hold on!", "Are you sure you want to go back?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "YES", onPress: () => props.navigation.navigate("Home") },
    ]);
    return true;
  }

  React.useEffect(() => {
    dispatch(getMoreInfo(source, id));

    BackHandler.addEventListener("hardwareBackPress", backAction());
  }, []);

  return !Info.name ? (
    <View>
      <Text>Loading..</Text>
    </View>
  ) : (
    <View>
      <Text>{Info.name}</Text>
      <Image
        source={{ uri: Info.img }}
        style={{ width: "100%", height: "100%" }}
      />

      <Text>{Info.sinopsis}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default More;
