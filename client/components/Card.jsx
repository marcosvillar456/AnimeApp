import * as React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
function Card({ anime }) {
  return (
    <React.Fragment>
      <ImageBackground
        source={{ uri: anime.img }}
        style={Style.image}
        imageStyle={{ borderRadius: 25 }}
      >
        <View style={{ marginLeft: "auto" }}>
          <Text
            style={{
              bottom: 0,
              color: "white",
              fontSize: 15,
              backgroundColor: "white",
              borderRadius: 13,
              color: "black",
              margin: 20,
              padding: 5,
            }}
          >
            {anime.episodes
              ? anime.episodes === null || undefined
                ? "No disponibles"
                : `episodes:${anime.episodes}`
              : anime.volumes
              ? anime.volumes === null || undefined
                ? "No disponibles"
                : `volumenes:${anime.volumes}`
              : "no disponible"}
          </Text>
        </View>
        <View
          style={{
            zIndex: 10,
          }}
        >
          <Text
            style={{
              marginTop: "-8%",
              marginLeft: "2%",

              width: "fit-content",
              backgroundColor: "white",
              borderRadius: 13,
              color: "black",
              padding: 5,
            }}
          >
            Type:{anime.type}
          </Text>
        </View>
      </ImageBackground>{" "}
      <View>
        <Text style={{ fontSize: 15, fontWeight: 600 }}>{anime.title}</Text>
      </View>
    </React.Fragment>
  );
}

const Style = StyleSheet.create({
  image: {
    display: "flex",
    height: 250,
    width: 450,
    zIndex: 2,
    justifyContent: "space-between",
  },
  title: {
    margin: 10,
    padding: 5,
    fontSize: 15,
    fontWeight: 600,
    marginTop: "-8%",
    borderRadius: 13,
    color: "black",
    position: "absolute",
  },
});
export default Card;
