
import './App.css';
import React from 'react';
import CalculadoraDeQu from './CalcDeQu';
import Resultado from './Resultado';
import ResetBtn from './ResetBtn';
import CalculadoraDeQv from './CalcDeQv';

function App() {
 
  const [qData, setQData] = React.useState(
    {
      A: 0,
      U: 0,
      T: 0,
      V: 0,
      E: 0,
    }
  )

  const [cargaTt, setCargaTt] = React.useState(0)
  const [cargaTv, setCargaTv] = React.useState(0)

  const [unidades, setUnidades] = React.useState(true)

  function handleChange(event) {
    const {name, value} = event.target
    setQData(prevQData => {
      return {
          ...prevQData,
          [name]: value
      }
  })
}

  function cambioDeUnidades(unidades){
      setUnidades(unidadesPrev => !unidadesPrev)
  }

function calcularQt() {
  setCargaTt(prevCargaTt => prevCargaTt = (Number(qData.A) * Number(qData.U) * Number(qData.T)))
}

function calcularQv() {
  setCargaTv(prevCargaTv => prevCargaTv = (1.24 * Number(qData.V) * Number(qData.E)* 1.163))  
}

function reload() {
  window.location.reload()
}

  return (
    <div className="App">
      <header>
        <h1 className="title">Calculadora de cargas térmicas</h1>
      </header>
     <main>
        <CalculadoraDeQu
          handleChange={handleChange}
          texto={"Calcular"}
          calcularQ={calcularQt}
          resultado={cargaTt}
          unidades={unidades}
          />

        

        <CalculadoraDeQv
          handleChange={handleChange}
          calcularQ={calcularQv}
          resultado={cargaTv}
          texto={"Calcular"}
          subindice={"V"}
          unidades={unidades}
          />

       

        <Resultado
        cargaTt={cargaTt}
        cargaTv={cargaTv}
        unidades={unidades}
        cambioDeUnidades={cambioDeUnidades}
        />

        <ResetBtn reload={reload} />
    
     </main>
    </div>
  );
}

export default App;
