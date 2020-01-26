import axios from 'axios';

const URL = 'http://is-backend-hml.herokuapp.com';

export const getPlayers = async () => {
    try {
        const players = await axios.get(`${URL}/jogadores`);
        return players;
    } catch (error) {
        console.error('Fail on getPlayer', error);
    }
}

export const insertPlayer = async (player) => {
    try {
        const result = await axios.post(`${URL}/jogadores`, player);
        return result;
    } catch (error) {
        console.error('Fail on insertPlayer', error);
    }
}

export const updatePlayer = async (player) => {
    try {
        const result = await axios.put(`${URL}/jogadores`, player);
        return result;
    } catch (error) {
        console.error('Fail on updatePlayer', error);
    }
}

export const deletePlayer = (id) => {
    try {
        const result = axios.delete(`${URL}/jogadores/${id}`);
        return result;
    } catch (error) {
        console.error('Fail on deletePlayer', error);
    }
}