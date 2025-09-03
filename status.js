import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';

export default function App() {
    const [login, setLogin] = useState('');
    const [acionamentos, setAcionamentos] = useState('');
    const [status, setStatus] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.pag}>LOGIN | STATUS | ACIONAMENTOS</Text>

            <Text style={styles.label}>Sensor/Atuador:</Text>
            
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#87CEEE',
        justifyContent: 'center',
        padding: 20,
        position: 'relative'
    },
    input: {
        width: 200,
        backgroundColor: 'rgb(158, 217, 219)',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000080',
        fontSize: 16,
        left: 160,
        bottom: 70,
        marginBottom: 16,
    },
    label: {
        fontFamily: 'sans-serif-smallcaps',
        fontSize: 18,
        marginBottom: 5,
        left: 145,
        bottom: 70,
        fontWeight: '500',
    },
    pag: {
        justifyContent: 'center',
        
    },
});