import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { screenTwoData } from "../utils/data";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
const ScreenTwo = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.textStyle}>People</Text>
          <Text style={styles.iconStyle}>+</Text>
        </View>
        {screenTwoData.map((items) => (
          <TouchableOpacity
            style={styles.middle_box}
            onPress={() => navigation.navigate(items.path)}
          >
            <View style={styles.innerBox}>
              <Image source={items.cardImg} style={styles.imgStyle} />
              <View>
                <Text style={{ color: "#000", fontSize: 19 }}>
                  {items.name}
                </Text>
                <Text>{items.dummyText}</Text>
              </View>
            </View>
            <Text style={styles.smallText}>{items.time}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    flexDirection: "column",
    alignItems: "center",
  },

  box: {
    width: "95%",
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textStyle: {
    fontSize: 24,
    color: "#fff",
  },
  iconStyle: {
    fontSize: 27,
    color: "green",
  },
  middle_box: {
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  innerBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgStyle: {
    width: 80,
    height: 80,
  },
  smallText: { fontSize: 14, color: "#000" },
});

export default ScreenTwo;
