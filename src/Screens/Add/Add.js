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

  const [botaoTexto, setBotaoTexto] = useState("CADASTRAR");
  const [cadastroConcluido, setCadastroConcluido] = useState(false);

  const handleCadastro = async () => {
    const { nome, cpf, telefone, dataAdmissao } = dados;

    if (nome === '' || cpf === '' || telefone === '' || dataAdmissao === '') {
      alert('Preencha todos os campos para concluir o cadastro.');
    } else {
      const formattedCpf = dados.cpf ? dados.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') : '';
      const formattedTelefone = dados.telefone ? dados.telefone.replace(/(\d{2})(\d{4,})(\d{4})/, '($1) $2-$3') : '';
      const formattedDataAdmissao = dados.dataAdmissao ? dados.dataAdmissao.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3') : '';

      try {
        const response = await fetch('https://viacep.com.br/ws/01001000/json/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          if (cadastroConcluido) {
            setCadastroConcluido(false);
            setBotaoTexto("CADASTRAR");
          } else {
            setCadastroConcluido(true);
            setBotaoTexto("CADASTRAR NOVAMENTE");
            setDados({
              nome: '',
              cpf: '',
              telefone: '',
              dataAdmissao: '',
            });
          }
        } else {
          alert('Erro ao cadastrar o funcionário.');
        }
      } catch (error) {
        console.error(error);
        alert('Erro ao conectar à API.');
      }
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
          <Text style={styles.TextRegister}>{botaoTexto}</Text>
        </TouchableOpacity>
      </View>
      {cadastroConcluido && (
        <Text style={styles.RegisterSuccess}>
          Funcionário cadastrado com sucesso!
        </Text>
      )}
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
    alignItems: 'center', // Alinhe o texto verticalmente
    padding: 2, // Ajuste o espaçamento interno
    left: 68
  },
  TextRegister: {
    fontSize: 14, // Ajuste o tamanho da fonte conforme necessário
    color: 'white',
    fontWeight: '900',
    top: 7
  },
  
  RegisterSucess: {
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
