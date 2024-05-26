import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  app: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#1f1f1f",
    color: "#fff",
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
    width: "50%",
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    color:"#fff"
  },
  btnSpace: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
});
