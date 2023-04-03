import React from 'react'
import Cards from '../../Components/Cards/Cards'

const Galeria = () => {
  return (
    <div><h1>Galeria</h1>

    <div className="UserSection">
          <Cards
          img="https://concepto.de/wp-content/uploads/2019/06/natacion-e1562943144215.jpg"
          />

        </div>

        <div className="UserSection">
          <Cards
          img="https://www.aquarakids.com/wp-content/uploads/2020/01/la-natacion-es-buena-1.jpg"
          />

        </div>

        <div className="UserSection">
          <Cards
          
          img="https://logosnurseryschool.es/nursery/wp-content/uploads/2021/07/aprendizaje-para-ninos.jpg"
          />

        </div>
    
    
    </div>
  )
}

export default Galeria