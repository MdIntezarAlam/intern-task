import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";
import MapView, { Marker } from "react-native-maps";
import ScreenTwo from "./ScreenTwo";
import { screnOneData } from "../utils/data";

const ScreenOne = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {screnOneData.map((mapValue) => (
            <View style={styles.box}>
              <Marker
                key={mapValue.id}
                coordinate={{
                  latitude: mapValue.latitude,
                  longitude: mapValue.longitude,
                }}
              />
            </View>
          ))}
        </MapView>
      </View>
      <ScreenTwo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  box: {
    width: "100%",
    height: "40%",
    backgroundColor: "#000",
    marginTop: 22,
  },
});

export default ScreenOne;
