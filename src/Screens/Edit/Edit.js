import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Edit() {
    const navigation = useNavigation();

    const handleCadastro = (item) => {
        navigation.navigate('Editar', {
            nome: item.nome,
            cpf: item.cpf,
        });
    };

    const dadosFicticios = [
        { id: '1', nome: 'João Silva', cpf: '123.456.789-01', dataAdmissao: '01/01/2020', ativo: true },
        { id: '2', nome: 'Maria Santos', cpf: '987.654.321-09', dataAdmissao: '15/03/2021', ativo: false },
        { id: '3', nome: 'Pedro Oliveira', cpf: '456.789.123-45', dataAdmissao: '20/06/2019', ativo: true },
        { id: '4', nome: 'Ana Pereira', cpf: '555.555.555-55', dataAdmissao: '05/11/2022', ativo: false },
        { id: '5', nome: 'Fernando Souza', cpf: '111.222.333-44', dataAdmissao: '10/02/2018', ativo: true },
        { id: '6', nome: 'Luciana Alves', cpf: '999.888.777-66', dataAdmissao: '30/12/2019', ativo: false },
        { id: '7', nome: 'Carlos Santos', cpf: '777.888.999-00', dataAdmissao: '08/09/2021', ativo: true },
        { id: '8', nome: 'Luisa Mendes', cpf: '123.987.654-32', dataAdmissao: '12/04/2022', ativo: false },
        { id: '9', nome: 'Mariana Costa', cpf: '345.678.901-23', dataAdmissao: '07/07/2017', ativo: true },
        { id: '10', nome: 'Marcos Lima', cpf: '222.333.444-55', dataAdmissao: '04/03/2018', ativo: false },
        { id: '11', nome: 'Sandra Vieira', cpf: '666.777.888-99', dataAdmissao: '21/01/2022', ativo: true },
        { id: '12', nome: 'Rafael Fernandes', cpf: '000.111.222-33', dataAdmissao: '19/05/2020', ativo: false },
        { id: '13', nome: 'Cristina Santos', cpf: '777.666.555-44', dataAdmissao: '11/11/2021', ativo: true },
        { id: '14', nome: 'Henrique Oliveira', cpf: '543.210.987-65', dataAdmissao: '28/06/2019', ativo: false },
        { id: '15', nome: 'Clara Pereira', cpf: '987.654.321-09', dataAdmissao: '15/03/2021', ativo: true },
        { id: '16', nome: 'Gustavo Souza', cpf: '777.888.999-00', dataAdmissao: '08/09/2021', ativo: false },
        { id: '17', nome: 'Roberta Alves', cpf: '123.987.654-32', dataAdmissao: '12/04/2022', ativo: true },
        { id: '18', nome: 'Simone Costa', cpf: '345.678.901-23', dataAdmissao: '07/07/2017', ativo: false },
        { id: '19', nome: 'Giovanni Lima', cpf: '222.333.444-55', dataAdmissao: '04/03/2018', ativo: true },
        { id: '20', nome: 'Bruna Vieira', cpf: '666.777.888-99', dataAdmissao: '21/01/2022', ativo: false },
    ];
    dadosFicticios.sort((a, b) => a.nome.localeCompare(b.nome));

    return (
        <View style={styles.container}>

            <View style={styles.inputName}>
                <TextInput
                    placeholder='Buscar cadastro: '
                />
            </View>


            <FlatList
                data={dadosFicticios}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <TouchableOpacity>

                        <View style={styles.itemHorizontal}>
                            <Text style={styles.nome}>Nome: {item.nome}</Text>
                            <Text style={styles.cpf}>CPF: {item.cpf}</Text>
                        </View>
                        </TouchableOpacity>
                        <View style={styles.itemVertical}>
                            <View style={styles.statusLabelContainer}>
                                <Text style={styles.statusLabel}>Status:</Text>
                                <Text style={item.ativo ? styles.statusAtivo : styles.statusInativo}>
                                    {item.ativo ? 'Ativo' : 'Inativo'}
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
            />
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 58,
        paddingRight: 24,
        paddingLeft: 24,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    viewInput: {
        width: '100%',
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        alignItems: 'center',
        gap: 8,
        
    },
    search: {
        flex: 1,
    },
    inputName:{
        width: '100%',
        flexDirection: 'row',
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
        paddingBottom: 4,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        alignItems: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 28,
        borderBottomWidth: 1,
        color: 'grey',

    },
    itemHorizontal: {
        padding: 16,
        marginLeft: -16,
    },
    itemVertical: {
        padding: 16,
        flex: 1,
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cpf: {
        fontSize: 16,
    },
    statusLabelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 2,
    },
    statusAtivo: {
        color: 'green',
        fontSize: 16,
        fontWeight: '700'
    },
    statusInativo: {
        color: 'red',
        fontSize: 16,
        fontWeight: '700'
    },
});