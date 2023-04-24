import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.chtXJHPz}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  chtXJHPz: {
    height: 612,
    width: 387,
    backgroundColor: "#121212",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 0,
    left: 0
  }
});
export default Untitled2;