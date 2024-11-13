import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./CenterDetail.css"

export const CenterDetail = () => {

    const [idCenter, setIdCenter] = useState()
    const { id } = useParams()

    useEffect(() => {
        const fetchCenterId = async () => {
            const response = await fetch(`http://localhost:4000/api/centers/${id}`)
            const json = await response.json()
            setIdCenter(json.data)
        }
        fetchCenterId()
    }, [idCenter])

    return( 
        <>
            {idCenter ? 
                <div className="center">
                    <h3>{idCenter.name}</h3>
                    <p><span className="location"> </span>{idCenter.address}</p>
                    <p className="capacity">Míst: {idCenter.capacity}</p>
                    <ul className="opening-hours">
                        <p>Otevírací doba:</p>
                        <li>
                            <span>Pondělí:</span>
                            <span>{idCenter.open.mon === null ? "ZAVŘENO" : idCenter.open.mon}</span>
                        </li>
                        <li>
                            <span>Úterý:</span>
                            <span>{idCenter.open.tue === null ? "ZAVŘENO" : idCenter.open.tue}</span>
                        </li>
                        <li>
                            <span>Středa:</span>
                            <span>{idCenter.open.wed === null ? "ZAVŘENO" : idCenter.open.wed}</span>
                        </li>
                        <li>
                            <span>Čtvrtek:</span>
                            <span>{idCenter.open.thu === null ? "ZAVŘENO" : idCenter.open.thu}</span>
                        </li>
                        <li>
                            <span>Pátek:</span>
                            <span>{idCenter.open.fri === null ? "ZAVŘENO" : idCenter.open.fri}</span>
                        </li>
                        <li>
                            <span>Sobota:</span>
                            <span>{idCenter.open.sat === null ? "ZAVŘENO" : idCenter.open.sat}</span>
                        </li>
                        <li>
                            <span>Neděle:</span>
                            <span>{idCenter.open.sun === null ? "ZAVŘENO" : idCenter.open.sun}</span>
                        </li>
                    </ul>

                    <p>{idCenter.info}</p>
                </div> 
                : 
                <p>Načítám data...</p> 
            }
        </>
    )
}