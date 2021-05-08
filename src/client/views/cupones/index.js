import React, { useEffect, useState } from 'react';
import Table from '../../components/table';

const Cupones = () => {

    const [dataTicket, setDataTicket] = useState([])
    const [tempdata, settempData] = useState([])

    useEffect(() => {
        getCupones();

    }, [])

    /**
 * obtiene los cupones
 */
    const getCupones = () => {
        fetch('http://35.188.155.248/bk_getCupones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                if (response.error == false) {
                    setDataTicket(response.resultado)
                    settempData(response.resultado)
                }

            }

            );
    }

    /**
     * actualiza el grid con el estado selecciondo
     * @param {*} e 
     */
    const onchangeSelect = (e) => {
        let value = e.target.value;
        if (value == '0') {
            setDataTicket(tempdata)
        } else {
            const data = tempdata.filter(x => x.idstatus == value);
            setDataTicket(data);
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="input-field col s12">
                    <select onChange={onchangeSelect} defaultValue="">
                        <option value="" disabled selected>Elige una opcion</option>
                        <option value="0">Todos</option>
                        <option value="1">Activos</option>
                        <option value="2">Inactivos</option>
                    </select>
                    <label>Estado</label>
                </div>
                {dataTicket.length > 0 && <Table data={dataTicket} />}

            </div>
        </div>


    )
}

export default Cupones