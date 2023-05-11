import { StyleSheet, View, Text, Image } from "react-native";
const SingleUserPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle1}>User Informations</Text>
      <View style={styles.box}>
        <Image
          source={require("../assets/i1.png")}
          style={{ width: 80, height: 80, borderRadius: 50 }}
        />
        <Text style={styles.textStyle}>
          UserName:{" "}
          <Text style={{ fontSize: 21, color: "green" }}>Rakesh Ranjan </Text>
        </Text>
        <Text style={styles.textStyle}>
          UserInfo:
          <Text style={{ fontSize: 17 }}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightl
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#909090",
    marginTop: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "95%",
    minHeight: "35%",
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  textStyle1: {
    fontSize: 34,
    color: "green",
    paddingBottom: 12,
  },
  textStyle: {
    fontSize: 22,
    color: "#000",
    paddingVertical: 8,
  },
});

export default SingleUserPage;
