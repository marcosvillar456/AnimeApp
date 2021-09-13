import * as React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
function Card({ anime }) {
  return (
    <View>
      <ImageBackground
        source={{ uri: `${anime.img}` }}
        style={Style.image}
        imageStyle={{ borderRadius: 25 }}
      >
        <View style={{ marginLeft: "auto" }}>
          {anime.episodes ? (
            anime.episodes === null || undefined ? (
              <Text style={Style.text}>No disponibles</Text>
            ) : (
              <Text style={Style.text}>episodes:{anime.episodes}</Text>
            )
          ) : anime.volumes ? (
            anime.volumes === null || undefined ? (
              <Text style={Style.text}>No disponibles</Text>
            ) : (
              <Text style={Style.text}>volumenes:{anime.volumes}</Text>
            )
          ) : (
            <Text style={Style.text}> no disponible </Text>
          )}
        </View>

        <View
          style={{
            alignContent: "flex-start",
            width: 70,
            margin: 7,
            zIndex: 10,
            padding: 5,
            backgroundColor: "white",
            borderRadius: 13,
          }}
        >
          <Text>Type:{anime.type}</Text>
        </View>
      </ImageBackground>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 350,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {anime.title}
        </Text>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  image: {
    display: "flex",
    height: 150,
    width: 300,
    zIndex: 2,
    justifyContent: "space-between",
    margin: 20,
  },
  text: {
    bottom: 0,
    color: "white",
    fontSize: 15,
    backgroundColor: "white",
    borderRadius: 13,
    color: "black",
    margin: 10,
    padding: 5,
  },
  // title: {
  //   margin: 10,
  //   padding: 5,
  //   fontSize: 15,
  //   fontWeight: "bold",
  //   marginTop: "-8%",
  //   borderRadius: 13,
  //   color: "black",
  //   position: "absolute",
  // },
});
export default Card;
