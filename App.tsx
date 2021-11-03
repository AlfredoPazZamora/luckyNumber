//Importaciones
import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import Button from './src/components/CustomButton';
import Input from './src/components/CustomInput';

//Aplicación
const App = () => {
  //Variables 
  const [name, setName] = useState('');
  const [age, setAge] = useState(-1);
  const [numberToShow, setNumberToShow] = useState(0);

  //Funciones para obtener el luckyNumber
  const operation = (numberAge: number) => {
    let value = numberAge;
    let temp = 0;

    while (value > 0){
      temp += (Math.trunc(value) % 10);
      value /= 10;

      if(temp > 9){
          temp = operation(temp);
      }
    }

    return temp
  }

  const LuckyNumberFunction = () => {
    let ageTemp = age;

    if(name === '' || age === -1){
      ToastAndroid.show(
        "Please write something...", 
        ToastAndroid.SHORT
      );
      setAge(-1);
    }
    console.log(age)

    if(ageTemp < 10){
      ageTemp = (age * 7)
      if(ageTemp > 9){
        setNumberToShow(operation(ageTemp))
      }else{
        setNumberToShow(ageTemp)
      } 
    }
    else{
      setNumberToShow(operation(ageTemp))
    }

    Alert.alert('LuckyNumber', `${name} your lucky number is: ${numberToShow}`, [{text: 'Ok'}]);
  }

  //Programa
  return (
    <View style={styles.Container}>
      <Image source={require('./src/img/icon-logo.png')} style={styles.ImgLogo} />

      <Text style={styles.TextTitle}> Find Your Lucky Number </Text>

      <Input text='Name' changeText={setName} keyboard={'default'}/>
      <Input text='Age' changeText={setAge} keyboard={'number'}/>

      <Button onClick={LuckyNumberFunction}/>
    </View>
  )
}

//Estilos 
const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    display: 'flex',
    height: '100%',
    justifyContent: 'center'
  },
  ImgLogo: {
    width: '80%',
    height: 150,
    paddingVertical: 50
  },
  TextTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#03071e',
    paddingVertical: 30
  }
})

//Exportaciones
export default App;
