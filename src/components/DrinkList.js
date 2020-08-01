import React from 'react'
import Drink from './Drink'

const DrinkList = ({drinks}) => {
    return (
        <div class="d-flex flex-wrap justify-content-center">
        {
            drinks.map(drink =>
            <Drink name={drink.strDrink} imgSrc={drink.strDrinkThumb} id={drink.idDrink} />
            )
        }
        </div>
    )
}

export default DrinkList
