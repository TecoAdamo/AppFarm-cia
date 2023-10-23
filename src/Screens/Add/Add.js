import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export default function Menu() {
  const [dados, setDados] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    dataAdmissao: '',
  });

  const [cadastroConcluido, setCadastroConcluido] = useState(false);

  const handleCadastro = async () => {
    if (dados.nome && dados.cpf && dados.telefone && dados.dataAdmissao) {
      try {
        const response = await fetch('https://apigenerator.dronahq.com/api/-0r516Zt/Registration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dados),
        });

        if (response.status === 201) {
          setCadastroConcluido(true);
          setDados({
            nome: '',
            cpf: '',
            telefone: '',
            dataAdmissao: '',
          });
        } else {
          alert('Erro ao cadastrar o funcionário.');
        }
      } catch (error) {
        console.error(error);
        alert('Erro ao conectar à API.');
      }
    } else {
      alert('Preencha todos os campos para concluir o cadastro.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.Title}>Cadastrar funcionário: </Text>
      </View>
      <View style={styles.viewInputs}>
        <View style={styles.inputName}>
          <TextInput
            placeholder='Nome completo: '
            value={dados.nome}
            onChangeText={(text) => setDados({ ...dados, nome: text })}
          />
        </View>
        <View style={styles.inputCpf}>
          <TextInputMask
            type={'cpf'}
            placeholder='CPF: '
            value={dados.cpf}
            onChangeText={(formatted, extracted) => {
              setDados({ ...dados, cpf: extracted });
            }}
          />
        </View>
        <View style={styles.inputTelefone}>
          <TextInputMask
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) ',
            }}
            placeholder='Telefone: '
            keyboardType='phone-pad'
            value={dados.telefone}
            onChangeText={(formatted, extracted) => {
              setDados({ ...dados, telefone: extracted });
            }}
          />
        </View>
        <View style={styles.inputAdmissao}>
          <TextInputMask
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            placeholder='Data de admissão: '
            value={dados.dataAdmissao}
            onChangeText={(formatted, extracted) => {
              setDados({ ...dados, dataAdmissao: extracted });
            }}
          />
        </View>
        <TouchableOpacity style={styles.viewBtnRegister} onPress={handleCadastro}>
          <Text style={styles.TextRegister}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
      {cadastroConcluido && <Text style={styles.TextRegister}>Funcionário cadastrado com sucesso!</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTitle: {
    marginBottom: 20,
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewInputs: {
    padding: 8,
    width: 360,
    height: 150,
    marginBottom: 100,
  },
  inputName: {
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
    borderRadius: 10,
  },
  inputCpf: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  inputTelefone: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  inputAdmissao: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  viewBtnRegister: {
    borderWidth: 1,
    width: 140,
    height: 40,
    borderRadius: 30,
    backgroundColor: 'blue',
    top: '15%',
  },
  TextRegister: {
    fontSize: 15,
    width: 250,
    color: 'white',
    fontWeight: '900',
    top: '20%',
    left: '18%',
  },
  erro: {
    color: 'red',
    marginTop: 8,
  },
});
