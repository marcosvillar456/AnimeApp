import * as React from "react";
import { View, Text, FlatList, ScrollView, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getAnimesAiring } from "../store/actions";
import { Card } from "../components";
export default function Animes() {
  const dispatch = useDispatch();
  const Airing = useSelector((state) => state.Animes_Airing);
  if (!Airing[1]) {
    dispatch(getAnimesAiring());
  }
  return !Airing[0] ? (
    <View>
      <Text>Loading..</Text>
    </View>
  ) : (
    <ScrollView>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={Airing}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: 25,
            }}
          >
            <Card anime={item} />
          </View>
        )}
      />
    </ScrollView>
  );
}
