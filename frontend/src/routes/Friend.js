import axios from 'axios'

const URL = "http://127.0.0.1:5000/api"
class Friend {
    async addFriend(data) {
        return await axios.post(`${URL}/friends`, data);
        // return
    }
    async getFriends() {
        return await axios.get(`${URL}/friends`);
    }
    async deleteFriend(id) {
        return await axios.delete(`${URL}/friend/${id}`);
    }
    async updateFriend(data) {
        return await axios.patch(`${URL}/friend/${data.id}`, data)
    }
}

export default new Friend();