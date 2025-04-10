const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://test123.org/123/get');
        console.log(response.data); // Виведе отримані дані
    } catch (error) {
        return 'Помилка'
    }
}

module.exports=fetchData;