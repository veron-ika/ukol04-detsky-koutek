import { useState, useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import "./CentersPage.css"


export const CentersPage = () => {
    const [center, setCenter] = useState()

    useEffect(() => {
        const fetchCenter = async () => {
            const response = await fetch(`http://localhost:4000/api/centers`)
            const data = await response.json()
            setCenter(data.data)
        }
        fetchCenter()
    }, [])

    return(
        <>
            <h2 className="title">Pobočky</h2>
            <div className="centers">
                {center ? 
                    center.map(center => <Link key={center.id} to={`/centers/${center.id}`}>{center.name}</Link>) 
                    : 
                    <p>Načítám data...</p> 
                }
                <Outlet/>
            </div>
        </>
    )
}