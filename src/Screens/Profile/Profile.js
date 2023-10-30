import React, { useState } from 'react';
import { StatusBar, Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Perfil() {
    const [modalVisible, setModalVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('rh@empresa.com');
    const [senha, setSenha] = useState('senha123');

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        // Reseta o estado para ocultar a senha ao fechar o modal
        setShowPassword(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.username}>Mateus</Text>
                <TouchableOpacity style={styles.logoutButton} onPress={() => handleLogout()}>
                    <Ionicons name="log-out" size={20} color="white" />
                    <Text style={styles.logoutText}>Sair</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <Ionicons name="ios-mail" size={20} color="black" />
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={styles.emailLink}> Email: rh@empresa.com</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.manageButton} onPress={() => handleManageEmployees()}>
                <Ionicons name="ios-people" size={20} color="white" />
                <Text style={styles.manageText}>Gerenciar cadastro dos funcionários</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Dados de Acesso</Text>
                        <Text>Email: {email}</Text>
                        <View style={styles.passwordRow}>
                            <Text>Senha: {showPassword ? senha : '********'}</Text>
                            <TouchableOpacity onPress={handleShowPassword}>
                                <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={handleCloseModal} // Chama a função para fechar o modal
                        >
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#3498db',
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    logoutText: {
        color: 'white',
        marginLeft: 10,
    },
    infoContainer: {
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 20,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    emailLink: {
        color: 'blue',
        textDecorationLine: 'none',
    },
    manageButton: {
        backgroundColor: '#2980b9',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
    },
    manageText: {
        color: 'white',
        marginLeft: 10,
        fontSize: 18,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    passwordRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: '#2980b9',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 18,
    },
});