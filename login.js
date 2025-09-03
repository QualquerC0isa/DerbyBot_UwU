import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
//Aplicativo c/ login e senha

export default function App() {
    {/*===== Hook useState ===*/ }
    const [nome, setNome] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [descubra, setDescubra] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>User:</Text>
            <TextInput
                style={styles.input}
                value={nome}  //valor atual no campo NOME
                onChangeText={setNome}  //funcao chamada sempre que o NOME muda
                placeholder='Digite seu nome'  //texto exibido quando esta vazio
                autoCapitalize="words"  //deixa tudo maiusculo
                returnKeyType="next"  //tipo de botao no teclado ('done', 'search', 'next', etc) 
            />

            <Text style={styles.label}>Login: </Text>
            <TextInput 
                style={styles.input}
                value={login}  //valor atual no campo LOGIN
                onChangeText={setLogin}  //funcao chamada sempre que o LOGIN muda
                placeholder='Digite seu login'  //texto exibido quando esta vazio
                autoCapitalize="words"  //deixa tudo maiusculo
                returnKeyType="next"  //tipo de botao no teclado ('done', 'search', 'next', etc) 
            />

            <Text style={[styles.label]}>Password: </Text>
            <View style = {styles.senhaContainer}>
                <TextInput 
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                placeholder='Digite sua senha'
                secureTextEntry={!mostrarSenha}
                autoCapitalize='none'
                autoCorrect={false}
                returnKeyType='done'
                />
                <TouchableOpacity
                    onPress={() => setMostrarSenha(!mostrarSenha)}
                    style={styles.botaoMostrar}
                >
                    <Text style={{color: '#003BFF'}}>
                    {mostrarSenha ? 'Ocultar' : 'Mostrar'} {/*if de uma linha. se senha true vira ocultar*/}
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.resultado}>
               ⋆.˚✮˚.⋆ {nome ? nome : '...'}, seja bem vindo S2 ⋆.˚✮˚.⋆
            </Text>

           {/*titulo*/}
           <View>
                <Text style={styles.titulo}>
                    HATSUNE MIKU - FAN PAGE
                </Text>
           </View> 
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
    label: {
        fontFamily: 'sans-serif-smallcaps',
        fontSize: 18,
        marginBottom: 5,
        left: 145,
        bottom: 70,
        fontWeight: '500',
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
    senhaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    botaoMostrar: {
        fontFamily: 'sans-serif-smallcaps',
        marginLeft: 10,
        padding: 8,
        left: -50,
        bottom: 40, 
    },
    resultado: {
        marginTop: 30,
        fontSize: 18,
        fontWeight: '500',
        right: 10,
        bottom: 450,
    },
    titulo: {
        fontFamily: 'sans-serif-smallcaps',
        fontSize: 30,
        fontWeight: '900',
        position: 'absolute',
        left: 15,
        bottom: 505, 
    },
    cabecalho: {
        backgroundColor: 'rgb(158, 217, 219)',
        padding: 5,
        borderRadius: 5,
    },
    tituloM: { //titulo do cabeçalho
        fontWeight: '800',
        fontFamily: 'sans-serif-smallcaps',
        textAlign: 'center',
        fontSize: 17,
    },
});