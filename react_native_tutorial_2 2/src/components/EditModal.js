
import React, { useState, useEffect } from 'react';
import { Modal, Text, TextInput, View, StyleSheet } from 'react-native';
import Button from './Button';


export default function EditModal({ modalIsOpen, user, onCancel, onSave }) {
    console.log(user);
    const [form, setForm] = useState(user);
    console.log(form);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalIsOpen}
        >
            <View style={styles.centeredView}>
                <View style={styles.formInput}>
                    <Text style={styles.inputText}>Name</Text>
                    <TextInput
                        style={styles.input}
                        value={form.name}
                        onChangeText={(text) => setForm({ ...form, user: text })}
                    />
                </View>
                <View style={styles.formInput}>
                    <Text style={styles.inputText}>Password</Text>
                    <TextInput
                        style={styles.input}
                        value={form.password}
                        onChangeText={(text) => setForm({ ...form, password: text })}
                    />
                </View>

                <View style={styles.buttonWrapper}>
                    <Button text="Vazgec" onPress={() => onCancel()} />
                    <Button text="Kaydet" onPress={() => onSave(form)} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        backgroundColor: "white",
        padding: 12
    },
    formInput: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row"
    },
    inputText: {
        flex: 1
    },
    input: {
        flex: 2,
        borderWidth: 1,
        padding: 12,
        margin: 4,
        borderRadius: 4
    },
    buttonWrapper: {
        flexDirection: 'row',
        padding: 12
    }
});