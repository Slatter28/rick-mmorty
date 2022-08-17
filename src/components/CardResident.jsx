import React from 'react'
import useApiCall from '../hooks/useApiCall'
import Loader from './Loader'

const CardResident = ({ url }) => {

    const resident = useApiCall(url)
   
    if(resident){
        return (
            <article className="resident-card">
                <div className="img">
                    <img src={resident?.image} alt={resident?.name} />
                    <div className="status">
                        <div className={`circle-${resident?.status}`}>
    
                        </div>
                        <p>{resident?.status}</p>
                    </div>
                </div>
                <div className="resident-card__rigth">
                    <h2>{resident?.name}</h2>
                    <div className="information">
                        <span>Specie: {resident?.species}</span>
                    </div>
                    <div className="information">
                        <span>Origin: {resident?.origin.name}</span>
                    </div>
                    <div className="information">
                        <span>Episodes where appear: {resident?.episode.length}</span>
                    </div>
                    <div className='planet'>
                        <img src="../../img/Planet.png" alt="sss" />
                    </div>
                    <div className='nave'>
                        <img src="../../img/nave.png" alt="sss" />
                    </div>
                    <div className='head'>
                        <img src="../../img/head.png" alt="sss" />
                    </div>
                </div>
            </article>
        )
    }else{
        return (
            <Loader/>
        )
    }
   
}

export default CardResident
