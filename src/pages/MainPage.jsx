import React from 'react'
import {useHistory} from 'react-router-dom'
import CityList from './../components/CityList' 

const cities = [
    {city:"Buenos Aires", country:"Argentina "},
    {city:"Bogotá", country:"Colombia"},
    {city:"Madrid", country:"España"},
    {city:"Ciudad de Mexico", country:"Mexico"},
]

const MainPage = () => {
    const history = useHistory()

    const onClickHandler = () => {
        history.push("/city")
    }
    return (
        <div>
            <h2>Lista de ciudades</h2>
            <CityList 
                cities={cities}
                onClickCity={onClickHandler}/>
        </div>
    )
}

export default MainPage
