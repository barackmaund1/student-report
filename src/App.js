import './App.css';
import Response from './report'
import Header from './Header';
import Tables from './Tables';

function App() {
 // Mock data API
  const data=Response
  console.log('data',data)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zeraki student report 🚀 🔥 </h1>
        <Header data={data}/>
        <Tables data={data}/>
      </header>
      
    </div>
  );
}

export default App;
