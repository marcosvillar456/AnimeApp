import * as React from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getAnimesAiring } from "../store/actions";
import { Card } from "../components";
export default function Animes(props) {
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
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: 25,
            }}
            onPress={() =>
              props.navigation.navigate("More", {
                id: item.id,
                source: item.source,
              })
            }
          >
            <Card anime={item} />
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}
