import { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Touchable, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native';

export default function App() {
  {/*===== Hook useState ===*/}
  const [mensagem, setMensagem] = useState('');
  return (
    <SafeAreaView style={styles.areaSalva}>
      <View style={styles.container}>
        <Text style={styles.title}>Tipos de Botões</Text>

        {/*=========== Botão nativo =========== */}
        <Button
        title='Button nativo'
        onPress={() => setMensagem('Você clicou no botão nativo-chan >.<')}
        color='lightblue'
        disabled = {false}
        />

        {/*=========== Botão TouchableOpacity =========== */}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setMensagem('Você clicou no botão TouchableOpacity-kun >.<')}>
          <Text style={styles.btnText}>TouchableOpacity</Text>
        </TouchableOpacity>

        {/*=========== Botão TouchableHighlight =========== ele muda a cor quando tu clica =) (unica coisa que muda é a cor)*/}
        <TouchableHighlight
          style={styles.btn}
          underlayColor="pink"
          onPress={() => setMensagem('Você clicou no botão TouchableHighlight-chan >.<')}>
          <Text style={styles.btnText}>TouchableHighlight</Text>
        </TouchableHighlight>

        {/*=========== Botão Pressable =========== */}
        <Pressable
          onPress={() => setMensagem('Você clicou no botão Pressable-sama >.<')}
          style={({pressed}) => [
            styles.btn,
            {backgroundColor: pressed ? 'pink' : 'lighblue'},
          ]}>
          <Text style={styles.btnText}>TouchableOpacity</Text>
        </Pressable>

        {/*======== Mensagem ======= */}
        <View style={styles.mensagem}>
          <Text style={styles.mensagem}>{mensagem}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaSalva:{
    flex: 1,
    backgroundColor: 'lightgoldenrodyellow'
  },
  container: {
    flex: 1,
    backgroundColor: 'cd5c5c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    padding: 10,
    color: '#000',
  },
  mensagem: {
    fontSize: 18,
    padding: 20,
    color: '#green',
  },
  btn: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: '50%',
    alignItems: 'center',
  },
  btnText: {
    color: '#404040',
    fontSize: 16,
  },
});
