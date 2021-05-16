import dictionary from './dictionary.png';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="contaier">
      <header className="App-header">
        <img src={dictionary} className="App-logo" alt="logo" />
      </header>

<main>
<Dictionary />  
</main>

<footer className="footer">
Coded by <strong>Lina Pek </strong> and opensourced on <a href="#">GitHub</a>
</footer>
 
    </div>
    </div>


);}


