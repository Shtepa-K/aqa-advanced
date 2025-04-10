const axios = require('axios');

async function fetchData() {
    const res = await axios.post('https://httpbin.org/post',
        {
            params:
                { testanswer: 123 },
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'test',
                'X-Custom-Header': 'test'
            }
   
        })
    
  return res.data
}
module.exports=fetchData



