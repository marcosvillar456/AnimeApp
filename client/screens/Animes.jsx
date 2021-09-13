import * as React from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getAnimesAiring } from "../store/actions";
import { Card, Loading } from "../components";

export default function Animes(props) {
  const dispatch = useDispatch();
  const Airing = useSelector((state) => state.Animes_Airing);
  const scrollY = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    dispatch(getAnimesAiring());
  }, []);

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
