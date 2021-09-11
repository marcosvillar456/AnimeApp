import * as React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getMangasAiring } from "../store/actions";
import { Card } from "../components";
export default function Animes() {
  const dispatch = useDispatch();
  const Airing = useSelector((state) => state.Mangas_Airing);
  if (!Airing[1]) {
    dispatch(getMangasAiring());
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
              margin: 10,
            }}
          >
            <Card anime={item} />
          </View>
        )}
      />
    </ScrollView>
  );
}
