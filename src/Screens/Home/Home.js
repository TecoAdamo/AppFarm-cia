import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TextInputMask } from 'react-native-masked-text';

export default function Home() {
    const [dados, setDados] = useState({
        cpf: '',
    })
    return (
        <View style={styles.container}>
            <View style={styles.viewInput}>
                <TextInputMask style={styles.search}
                    type={'cpf'}
                    options={{
                        format: 'XXX.XXX.XXX-XX',
                    }}
                    placeholder='Buscar CPF do cliente: '
                    value={dados.cpf}
                    onChangeText={(formatted, extracted) => {
                        setDados({ ...dados, cpf: extracted });
                    }}
                />
                <TouchableOpacity>
                    <Ionicons name="search-outline" size={20} color="grey" />
                </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
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
        gap: 8
    },
    search: {
        flex: 1,
    },

});