import { useEffect, useState } from "react"
import './Quotes.css'

function Quotes(){

    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        async function fetchData(){
            try{
                const response = await fetch('https://dummyjson.com/quotes')
                const json = await response.json()

                setQuotes(json.quotes);
            }
            catch(error){
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return(
        <div className="body">
            {quotes.map(quote => (
                <div key={quote.id} className="quotes-container">
                    <h2>{quote.quote}</h2>
                    <h3>-{quote.author}</h3>
                </div>
            ))}
        </div>
    )
}
export default Quotes