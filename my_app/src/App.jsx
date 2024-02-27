import './App.css';
import  useLocalStorage  from './useLocalStorage.jsx';

function App() {
  const [inputValue, setInputValue] = useLocalStorage('Input', '');

  return (
    <>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
    </>
  );
}

export default App;
