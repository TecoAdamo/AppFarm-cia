  import React, { useState } from 'react';
  import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
  import { TextInputMask } from 'react-native-masked-text';
  

  export default function Menu() {
    return (
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <Text style={styles.Title}>Cadastrar funcionário: </Text>
        </View>
        <View style={styles.viewInputs}>
          <View style={styles.inputName}>
            <TextInput
              placeholder='Nome completo: '
            />
          </View>
          <View style={styles.inputCpf}>
            <TextInputMask
              type={'cpf'}
              placeholder='CPF: '
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
            />
          </View>
          <View style={styles.inputAdmissao}>
            <TextInputMask
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY',
              }}
              placeholder='Data de admissão: '
            />
          </View>
          <TouchableOpacity style={styles.viewBtnRegister}>
            <Text style={styles.TextRegister}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
        {/* <Text style={styles.RegisterSuccess}>
          Funcionário cadastrado com sucesso!
        </Text> */}
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
      borderColor: 'black',
    },
    inputCpf: {
      borderWidth: 1,
      padding: 5,
      borderRadius: 10,
      marginBottom: 10,
      borderColor: 'black',
    },
    inputTelefone: {
      borderWidth: 1,
      padding: 5,
      borderRadius: 10,
      borderColor: 'black',
      marginBottom: 10,
    },
    inputAdmissao: {
      borderWidth: 1,
      padding: 5,
      borderRadius: 10,
      borderColor: 'black',
      marginBottom: 10,
    },
    viewBtnRegister: {
      borderWidth: 1,
      width: 200,
      height: 42,
      borderRadius: 30,
      backgroundColor: 'blue',
      alignItems: 'center',
      padding: 2,
      left: 68
    },
    TextRegister: {
      fontSize: 14,
      color: 'white',
      fontWeight: '900',
      top: 7
    },
    RegisterSuccess: {
      color: '#228B22',
      marginTop: 68,
      fontWeight: '900',
      fontSize: 16
    },
    erro: {
      color: 'red',
      marginTop: 8,
    },
  });