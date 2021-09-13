import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getMangasAiring } from "../store/actions";
import { Card, Loading } from "../components";

export default function Mangas(props) {
  const dispatch = useDispatch();
  const Airing = useSelector((state) => state.Mangas_Airing);
  const scrollY = React.useRef(new Animated.Value(0)).current;

  if (!Airing[1]) {
    dispatch(getMangasAiring());
  }
  return !Airing[0] ? (
    <Loading />
  ) : (
    <View>
      <Animated.FlatList
        keyExtractor={(item, index) => index.toString()}
        data={Airing}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              alignItems: "center",
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
    </View>
  );
}
