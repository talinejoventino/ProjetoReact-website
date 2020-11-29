import series from '../Services/dados'
import '../Styles/Pages/series.css'
import Sidebar from '../Components/Sidebar'
import {useState, useEffect } from 'react'

const Series = () => {

    const [dados, setDados] = useState('')
    const [serie, setSeries] = useState([dados])

    useEffect(() => {
        setSeries(
            series.filter(serieName =>{
                return serieName.nome.includes(dados)}
            )
        )
    },[dados])

    

    return(
        <>
            <Sidebar/>
            <div className='container-input'>               

            <input type="text" placeholder='Insira um título' onChange={e => setDados(e.target.value)} />
            </div>
            
            
            
            <div id= "container">                
                {serie.map(serie=>{
                    return <div className="card" key={serie.id}>
                        <h3>Título: {serie.title}</h3>
                        <p> {serie.temporadas} / {serie.ano}</p>
                        <img src={serie.imagem} alt='filme'/>
                        <div className='sinopse'><p>{serie.sinopse}</p>
                        </div>
                    </div>
                })}             
            </div>
        </>
    )
}

export default Series;