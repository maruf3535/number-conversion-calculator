import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <>
      <div className="container-fluid text-light my-2">
        <h2 className='mt-3 mb-5 text-center'>Number Conversion Calculator</h2>
        <Calculator />
      </div>
    </>
  );
}

export default App;
