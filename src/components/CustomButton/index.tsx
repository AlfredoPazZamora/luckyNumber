import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
    onClick: () => void; //para llamar una funcion 
}


const Button = (props: Props) => {
    const {onClick} = props;
    return (
        <TouchableOpacity 
            style={styles.Button}
            onPress={onClick}>
            <Text style={styles.ButtonText}> Let´s Go </Text>
        </TouchableOpacity>
    )
}

//Estilos
const styles = StyleSheet.create({
    Button: {
        width: '70%',
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: '#00A8E8',
        borderRadius: 50
    },
    ButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

//Exportaciones
export default Button;
