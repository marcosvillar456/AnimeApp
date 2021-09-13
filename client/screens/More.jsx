import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Loading } from "../components";
import { getMoreInfoManga, getMoreInfoAnime } from "../store/actions";

function More(props) {
  const dispatch = useDispatch();
  const id = props.route.params.id;
  const source = props.route.params.source;

  const Info = useSelector((state) => state.Search);

  React.useEffect(() => {
    source === "anime"
      ? dispatch(getMoreInfoAnime(source, id))
      : dispatch(getMoreInfoManga(source, id));
  }, []);

  return !Info.name ? (
    <Loading />
  ) : (
    <ScrollView>
      <View style={styles.containerAll}>
        <Image source={{ uri: Info.img }} style={{ height: 350, width: 350 }} />
        <Text style={styles.title}>{Info.name}</Text>
        <Text style={{ fontSize: 25, fontWeight: "500", marginTop: "10%" }}>
          Datos
        </Text>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.text}>Emitido</Text>
            <Text>
              {Info.emitido.day}-{Info.emitido.month}-{Info.emitido.year}
            </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.text}>rank</Text>
            <Text>{Info.rank}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Finalizado</Text>
            {Info.finalizado === null ? (
              <Text>Null</Text>
            ) : (
              <Text>{Info.finalizado}</Text>
            )}
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>duracion</Text>
            <Text>{Info.duracion}</Text>
          </View>
        </View>
        <View style={{ width: "80%", alignSelf: "center", marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "500",
              textAlign: "center",
              margin: 15,
            }}
          >
            Sinopsis
          </Text>
          <Text>{Info.sinopsis}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerAll: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  container: {
    flexWrap: "wrap",
    marginTop: 8,
    maxHeight: 200,
  },
  title: { fontSize: 35, fontWeight: "600", textAlign: "center" },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
  box: {
    alignContent: "center",
    width: 150,
    textAlign: "center",
    height: 80,
  },
});

export default More;
