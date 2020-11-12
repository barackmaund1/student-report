import './App.css';
import Response from './report'
import Header from './Header';
import StudentResults from './StudentResults';
import Tables from './Tables';
import Chart from './Chart'

function App() {
 // Mock data API
  const data=Response
  console.log('data',data)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zeraki student report 🚀 🔥 </h1>
        <Header data={data} />
        <Tables data={data} />
        <StudentResults data={data} />
        <Chart data={data} />
      </header>
    </div>
  );
}

export default App;
