import React from "react";

export default function CalculadoraDeQ(props) { 
     
  const Div = {
    fontFamily: "Goudy Old Style", 
    fontSize: "1rem",
    paddingLeft: "2rem",
    backgroundColor: props.name3 === "T" ? 'rgb(0, 150, 199)' : 'rgba(72, 202, 228)',
    borderTopLeftRadius: '2rem', 
    borderTopRightRadius: '2rem',
    color: 'rgb(3, 4, 94)' 
    
  };

const sub = {
    fontFamily: "Arial",
    fontSize: "0.6rem",
    
  };

  const Qt = {
    display: "flex",  
    alignItems: "baseline",
    gap: "10px",
  }

  const Input = {
    fontFamily: "Goudy Old Style",
    width: "6rem",
    height: "2rem",
    fontSize: "2rem",
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: "0.3rem",
    border: "none",
  }

    return (
        <div style={Div} >
            <form style={Qt}>
                <h1>Q<sub style={sub}>{props.placeTwo}</sub></h1>
                <h1>=</h1>
                <input 
                  style={Input} 
                  type="number" 
                  name={props.name1} 
                  placeholder={props.name1} 
                  value={props.value}
                  onChange={props.handleChange} />

                <h1>x</h1>
                <input 
                style={Input} 
                type="number" 
                name={props.name2}
                placeholder={props.name2}
                onChange={props.handleChange}  />

                <h1>x</h1>
                <input 
                style={Input} 
                type="number" 
                name={props.name3} 
                placeholder={`Δ${props.name3}`}
                onChange={props.handleChange}  />
            </form>           
        </div>
    )}



    
  