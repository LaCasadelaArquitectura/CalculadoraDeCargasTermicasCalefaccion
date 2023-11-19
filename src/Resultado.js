import React from "react";

export default function Resultado(props) {

    const container = {
        backgroundColor: 'rgb(173, 232, 244)',
        paddingTop: '0.1rem',
        textAlign: 'center',
        paddingRight: '1rem',
        paddingBottom: '0.1rem',
        borderRadius: '2rem',
        color: 'rgb(3, 4, 94)'
      }
      
      const button = {
        height: "3rem",
        width: "3.3rem",
        borderRadius: "0.3rem",
        border: "none",
        marginRight: "1rem",
        fontFamily: "Goudy Old Style",
        fontSize: "2rem",
        backgroundColor: "rgb(173, 232, 244)",
        color: "rgb(3, 4, 94)",
        fontWeight: "bold",
        cursor: "pointer",
      }
      
      const block = {
        display: 'inline-block',
      }
      
      let resultW = props.cargaTt + props.cargaTv
      let resultKw = resultW / 1000
      
      return (
        <div style={container}>
          <h1>Carga térmica total</h1>
          <h1 style={block}>Q<sub>t</sub>
            {props.unidades ?
              ` = ${(resultW).toFixed(0)}`
              :
              ` = ${(resultKw).toFixed(2)}`}
          </h1>
      
          <button
            style={{ ...button, display: 'inline-block' }}
            onClick={props.cambioDeUnidades}>
            {props.unidades ? "W" : "Kw"}
          </button>
        </div>
      )
}      