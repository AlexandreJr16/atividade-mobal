import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    width:"100%"
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2f2f2f",
    borderRadius: 5,
    padding: 20,
    marginHorizontal: 5,
    flex: 1,
  },
  buttonText: {
    fontSize: 30,
    fontWeight:'bold',
    color: "#fff",
  },
  viewContainer:{
    width:"100%",
    display:"flex",
    alignItems:"flex-end",
    justifyContent:"flex-end",
    paddingHorizontal:20,
    paddingTop:20,
    paddingBottom:15
  },
  title:{
    fontSize:35,
    fontWeight:'bold',
    color:"#fff",
  }
});

export default styles;
