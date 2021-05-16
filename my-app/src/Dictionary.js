import React, { useState } from 'react';
import "./Dictionary.css";

export default function Dictionary(event) {
let [keyword, setKeyword] = useState(null);


function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
    }

function handleKeyword(event) {
    setKeyword(event.target.value);
    }

return (
    <div className="dictionary">

    <form className="search-bar" onSubmit={search}>
    <input type="search"onChange={handleKeyword} />
    </form>

    </div>
    
    );}
