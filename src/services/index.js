import axios from 'axios';

const URL = 'https://minhaurl';

export const getPlayers = async () => {
    try {
        const players = await axios.get(`${URL}/...`);
        return players;
    } catch (error) {
        console.error('Fail on getPlayer', error);
    }
}

export const insertPlayer = async (player) => {
    try {
        const result = await axios.post(`${URL}/...`, player);
        return result;
    } catch (error) {
        console.error('Fail on insertPlayer', error);
    }
}

export const updatePlayer = async (player) => {
    try {
        const result = await axios.put(`${URL}/...`, player);
        return result;
    } catch (error) {
        console.error('Fail on updatePlayer', error);
    }
}

export const deletePlayer = (id) => {
    try {
        const result = axios.delete(`${URL}`, id);
        return result;
    } catch (error) {
        console.error('Fail on deletePlayer', error);
    }
}