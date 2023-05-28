import React from 'react';
import { ImageBackground, Image, Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Swal from 'sweetalert2'




const image = { uri: 'https://img.freepik.com/vector-gratis/fondo-futurista-tecnologia-degradada_23-2149115236.jpg?w=826&t=st=1685297372~exp=1685297972~hmac=6e769e3aa59ac0408c6d9b9f08d61dfd3441ac2b91e5e2ac96596e554397d793' };

//cons alert





export default function App() {
  function mensaje() {
    
    Alert.alert("Error!", "Usuario incorrecto")
    console.log("Error!", "Usuario incorrecto")
  }
const handleclic=()=>{
  Swal.fire("Hola");
}
  

  return (
    <View style={styles.container}>

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}> INGRESO</Text>


        <Text style={styles.txt2} >Usuario</Text>
        <TextInput style={styles.input1}

          placeholder='Ingrese el Usuario'
          keyboardType="email-address"
        />
        <Text style={styles.txt2} >Contraseña</Text>
        <TextInput secureTextEntry={true} style={styles.input1}

          placeholder='Ingrese su contraseña' />
        <Text style={styles.txt2} >Telefono</Text>
        <TextInput style={styles.input1}

          placeholder='Ingrese el número'
          keyboardType="numeric"
        />
      
        <TouchableOpacity style={styles.btn1} onPress={mensaje} >
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#5dfff8' }}> Aceptar</Text>


        </TouchableOpacity>
        <StatusBar style="auto" />

      </ImageBackground>

    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',


    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 36,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',


  },
  input1: {
    backgroundColor: 'white',
    opacity: 0.50,
    fontWeight: 'bold',
    width: '50%',
    height: '10%',
    fontSize: 15,
    textAlign: 'center',
    borderBottomColor: "white",
    borderBottomWidth: 1,
    borderRadius:25,
    alignItems: 'center',
    color: 'black',


  },
  txt2: {
    fontSize: 25,


    paddingHorizontal: 28,
    color: 'white',

    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',

    paddingBottom: 20,
    paddingTop: 20,
  },


  btn1: {
    backgroundColor: '#9b3289',

    width: "30%",
    height: "9%",
    borderRadius: 20,
    paddingTop:10,
    marginTop:10,
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    

  },




  img: {
    width: "8%",
    height: "5%"
  },
  img2: {
    width: "20%",
    height: "70%",
    left: 120,
    top: -30


  }
});

