import React from 'react';
const Table = (props) => {

/**
 * Se construye tabla 
 */

    return( 
        <table className="responsive-table striped">
        <thead>
          <tr>
              <th>Id</th>
              <th>Código De Cupon</th>
              <th>Porcentaje de descuento</th>
              <th>Fecha Desde</th>
              <th>Fecha Hasta</th>
              <th>estado</th>
          </tr>
        </thead>
   
        <tbody>
            {
                props.data.map((value, key)=>{
                   
                   return <tr key={key}>
                      <td>{value.idcupon}</td>
                      <td>{value.codigocupon}</td>
                      <td>{value.porcentaje}</td>
                      <td>{value.fechadesde}</td>
                      <td>{value.fechahasta}</td>
                      <td>{value.nombrestatus}</td>
                    </tr>
                   
                 
                })

            }
         </tbody> 
         </table>
    )
    
}

export default Table



