import { useState } from 'react';

function StockData(){
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=yourkey';

    const [data, setData] = useState([])

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type':'application/json'
      }
        }).then(r => r.json()).then(data => setData(data))
    return(

        <div>
            
        </div>
    )
}

export default StockData;