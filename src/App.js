
import './App.css';
import React from 'react';
import CalculadoraDeQ from './CalculadoraDeQ';
import Button from './Button';
import Resultado from './Resultado';


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
  setCargaTt(prevCargaTt => prevCargaTt = (Number(qData.A) * Number(qData.U) * Number(qData.T)))  s
}

function calcularQv() {
  setCargaTv(prevCargaTv => prevCargaTv = (1.24 * Number(qData.V) * Number(qData.E)))  
}

   console.log(unidades)

  return (
    <div className="App">
      <header>
        <h1 className="title">Calculadora de cargas térmicas</h1>
      </header>
     <main>
        <CalculadoraDeQ
          name1={"A"}
          name2={"U"}
          name3={"T"}
          handleChange={handleChange}
          />

        <Button
          texto={"Calcular"}
          calcularQ={calcularQt}
          resultado={cargaTt}
          subindice={"U"}
          unidades={unidades} />

        <CalculadoraDeQ
          placeOne={"1.24"}
          value={1.24}
          name1={"pesoEspecifico"}
          name2={"V"}
          name3={"E"}
          handleChange={handleChange}
          />

        <Button
          calcularQ={calcularQv}
          resultado={cargaTv}
          texto={"Calcular"}
          subindice={"V"}
          unidades={unidades}  />

        <Resultado
        cargaTt={cargaTt}
        cargaTv={cargaTv}
        unidades={unidades}
        cambioDeUnidades={cambioDeUnidades}
        />
    
     </main>
    </div>
  );
}

export default App;
