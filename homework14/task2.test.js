const fetchData = require('./task2')

test('Поревірка', async () => {
    const response = await fetchData()
    //expect(response.status).toEqual(200)
    console.log(response.data)
})