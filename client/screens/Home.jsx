import * as React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";

export default function Home() {
  return (
    <React.Fragment>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Text style={{ fontSize: 35, fontWeight: "bold" }}>MangaApp</Text>

        <Text
          style={{
            textAlignVertical: "center",
            textAlign: "center",
            fontSize: 15,
            fontWeight: "700",
          }}
        >
          Aqui podras encontar animes que se estrenan dia a dia y los mangas mas
          famosos segun su rank.
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "700", margin: 20 }}>
          Proximamente:filtros,buscador y mucho mas
        </Text>
      </View>
    </React.Fragment>
  );
}
