import Api from './Api'

export default {
	users() { return Api.get('/user'); },
    addUser(params) { return Api.post('/user', params); },
    updateUser(params) { return Api.put('/user', params); },
    deleteUser(params) { return Api.delete('/user', { data: params }); }
};