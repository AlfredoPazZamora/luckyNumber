import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

interface Props {
    text: String;     //Texto para el placeholder
    changeText?: any; //Para mandar el valor de los inputs
    keyboard: string; //Para saber que tipo de teclado mostrar
}
const Input = (props: Props) => {
    const {text, changeText, keyboard} = props
    var valuePlaceHolder = 'Enter your ' + text;

    return (
        <TextInput 
            style={styles.Input}
            onChangeText={changeText}
            placeholder={valuePlaceHolder}
            placeholderTextColor='#9DB4C0'
            keyboardType={
                (keyboard === 'default') ? 'default' : 'number-pad'
            }
        />
    )
}

const styles = StyleSheet.create({
    Input: {
        width: '80%',
        fontSize: 16,
        color: '#3C91E6',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderColor: '#000',
        borderBottomWidth: 1,
        fontWeight: 'bold'
    },
})

export default Input;
