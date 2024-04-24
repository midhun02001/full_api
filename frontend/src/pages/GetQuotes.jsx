import React, { useState, useEffect } from "react";
import api from "../api";
import "../styles/GetQuote.css";

function GetQuote() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        getQuotes();
    }, []);

    const getQuotes = () => {
        api.get("/api/quotes/")
            .then((res) => setQuotes(res.data))
            .catch((err) => alert(err));
    };

    return (
        <div className="main">
            <div className="sub">
                {quotes.map((quote, index) => (
                    <div className='subsub' key={index}> {/* Added key prop */}
                        <p className="quote">{quote.text}</p>
                        <p className="author">- {quote.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GetQuote;
