import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        width:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        gap:10,
    },
    buttonMais:{
        backgroundColor:"green",
        padding:10,
        borderRadius:16
        ,        paddingHorizontal:20

    },
    buttonMenos:{
        backgroundColor:"red",
        padding:10,
        borderRadius:16,
        paddingHorizontal:20
    },
    buttonContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%",
        gap:10
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:"#fff"
    }
, mainText:{
    fontSize:30,
    fontWeight:"bold",
    color:"#000"
}
})
export default styles