import { TextInput } from "react-native";
import { Text } from "react-native";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.YvRwmBqI}><View style={styles.QWzqXGnc}><View style={styles.tMaemcDC}><Text style={styles.HgtrBtiz}>Network Tester
     </Text><Text style={styles.uMbtUPsF}>Welcome</Text><View style={styles.MGGDlegA}><TextInput style={styles.xVhaeCrQ} numberOfLines={1} autoFocus={true} editable={true} placeholder="Email Address" selectionColor="#c4f3fd"></TextInput></View></View></View></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#121212"
  },
  YvRwmBqI: {
    height: 580,
    width: 358,
    backgroundColor: "#121212",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
    flex: 2,
    gap: 16
  },
  HgtrBtiz: {
    width: 345,
    height: 38,
    lineHeight: 30,
    fontSize: 30,
    borderRadius: 0,
    color: "#8593A6",
    textAlign: "center",
    fontWeight: "300"
  },
  tMaemcDC: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 24,
    flexDirection: "column"
  },
  QWzqXGnc: {
    flex: 1
  },
  uMbtUPsF: {
    width: 155,
    height: 50,
    lineHeight: 14,
    fontSize: 30,
    borderRadius: 0,
    fontWeight: "500",
    color: "#F2F7FC",
    textAlign: "center"
  },
  MGGDlegA: {
    height: 281,
    width: 255,
    backgroundColor: "#2C2C2C",
    borderRadius: 0,
    color: "#777777",
    flexDirection: "row",
    flex: 2,
    gap: 16
  },
  xVhaeCrQ: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    left: 52.5
  }
});
export default Untitled1;