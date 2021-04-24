
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import EditModal from '../components/EditModal';
import User from './../components/User';
import UserService from './../services/UserService';

export default function App() {
    const [list, setList] = useState([
        // {
        //     _id: "adasdasdsad",
        //     name: "emre",
        //     password: "123123"
        // },
        // {
        //     _id: "adasdasdsadasd",
        //     name: "emre2",
        //     password: "1231234"
        // }
    ]);
    const [modalData, setModalData] = useState({ modalIsOpen: false, user: null });

    const getUsers = async () => {
        await UserService.users()
            .then(({ users }) => { setList(users); });

        setModalData({ modalIsOpen: false, user: null });
    };
    // useEffect(() => { getUsers() }, []);

    const handleOnPressDelete = (_id) => {
        UserService.deleteUser({ _id })
            .then(() => { getUsers(); });
    };

    const handleOnPressEdit = (user) => {
        setModalData({ modalIsOpen: true, user });
    }

    const handleOnCancel = () => {
        setModalData({ modalIsOpen: false, user: null });
    }
    const handleOnSave = (user) => {
        UserService.updateUser(user)
            .then(() => {
                getUsers();
            });
    }

    return (
        <View style={styles.container}>
            <Text>Kullanici Listesi</Text>

            <FlatList
                contentContainerStyle={{ marginTop: 20 }}
                data={list}
                keyExtractor={(item) => item._id.toString()}
                renderItem={({ item }) => {
                    return (
                        <User
                            data={item}
                            onPressDelete={handleOnPressDelete}
                            onPressEdit={handleOnPressEdit}
                        />
                    )
                }}
            />

            <EditModal
                user={modalData.user}
                modalIsOpen={modalData.modalIsOpen}
                onCancel={handleOnCancel}
                onSave={handleOnSave}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80
    },
    listStyle: {
        marginTop: 20
    }
});
