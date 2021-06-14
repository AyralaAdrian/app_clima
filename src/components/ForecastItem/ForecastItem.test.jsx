import React from 'react'
import { render} from '@testing-library/react'
import ForecastItem from './ForecastItem'

test("ForecastItem render", async() =>{
    const {findByText} = render (<ForecastItem weekDay={"Lunes"} hour={14} temperature={22} state={("sunny")}
     />)

    const day = await findByText(/Lunes/)
    const hs = await findByText(/14/)
    const temp = await findByText(/22/)
    const estado = await findByText(/sunny/)


    expect(day).toHaveTextContent(/Lunes/)
    expect(hs).toHaveTextContent(/14/)
    expect(temp).toHaveTextContent(/22/)
    expect(estado).toHaveTextContent(/sunny/)
  
}
)