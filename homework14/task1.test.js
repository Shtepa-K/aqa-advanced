const fetchData = require('./task1');

test('Повернення помилки з помилковим url', async () => {    
    const response = await fetchData()
    expect(response).toBe('Помилка')
})