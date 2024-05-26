import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    padding: 5,
  },
  menuText: {
    fontSize: 40,
    fontWeight: "900",
    padding: 20,
  },
  produtoContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
  },
  produtoTextContainer: {
    width: "70%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    gap: 10,
  },
  titleMain: {
    fontSize: 16,
  },
  img: {
    width: 100,
    height: 100,
  },
  imgDetails: {
    width: "100%",
    height: 300,
  },
  containerDetails: {
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    padding: 20,
  },
  titleDetails: {
    fontSize: 30,
    fontWeight: "900",
    alignSelf: "flex-start",
  },
  subTitleDetails: {
    fontSize: 25,
    fontWeight: "800",
    alignSelf: "flex-start",
  },
  ingredientes: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 5,
    paddingHorizontal: 30,
    width: "100%",
  },
  ingredienteText: {
    fontSize: 18,
  },
  bottomDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  btn: {
    backgroundColor: "#1f1f1f",
    paddingHorizontal: 25,
    borderRadius: 16,
  },
  textBtn: {
    color: "#fff",
    fontSize: 35,
  },
});
export default styles;
