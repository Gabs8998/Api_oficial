import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20
    },
    stGet: {
      flex: 1,
    },
    stPost: {
      flex: 1,
    },
    caixaGet: {
      height: 30,
      borderRadius: 8,
      padding: 5,
      backgroundColor: 'grey',
      width: '90%',
      marginBottom: 10
    },
    caixaPost: {
      height: 30,
      borderRadius: 8,
      padding: 5,
      width: '90%',
      marginBottom: 10,
      borderWidth: 1
    },
    caixaID: {
      width: '20%',
      height: 30,
      borderWidth: 1,
      borderRadius: 8,
      paddingLeft:5
    },
    btn: {
      width: '20%',
      height: 30,
      backgroundColor: '#ff6347',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1
    },
    img: {
      width: "40%",
      height: "100%",
      backgroundColor: "red"
    }
  })

  export default styles