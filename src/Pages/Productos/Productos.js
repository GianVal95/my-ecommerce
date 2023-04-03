import React from 'react'
import Cards from '../../Components/Cards/Cards'

const Productos = () => {
  return (
    <div> <h1>Nuestros Productos</h1>
    
      <div className="UserSection">
          <Cards
          name="Tablas de Natación"
          description="Todas las edades"
          img="https://d3ugyf2ht6aenh.cloudfront.net/stores/898/402/products/fb039d1-51e3fc7c05dfbbc6f115684024421610-1024-10241-e2a86282292df033b116070038115167-640-0.webp"
          />

        </div>

        <div className="UserSection">
          <Cards
          name="Pull Boys"
          description="Todas las edades"
          img="https://deportesregol.com/wp-content/uploads/2020/11/4273_Pullboy_Wonder_.jpg"
          />

        </div>

        <div className="UserSection">
          <Cards
          name="Flotadores"
          description="Todas las edades"
          img="https://http2.mlstatic.com/D_NQ_NP_802078-MLA46266058196_062021-O.webp"
          />

        </div>




    </div>
  )
}

export default Productos