import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import DrinkList from './DrinkList'
import Spinner from './Spinner'
import Filter from './Filter'
const Ingredients = () => {
    const [ingredient, setIngredient] = useState("")
    const [drinks, setDrinks] = useState(null)
    const [loading, setLoading] = useState(false)
    const [haveFilter,setHaveFilter] = useState(false)
    const [categories,setCategories] = useState(null)
    const [alcohalic,setAlcohalic] = useState(null)
    let url=`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${ingredient}`
    const onSubmit = async e => {
        setLoading(true)
        e.preventDefault()
        const config = {
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "767addc8ddmsh1f1ad79824aca2cp1fa8eejsn02f139b1e622"
            }
        }
        try {
            const res = await axios.get(url, config)
            setLoading(false)
            setDrinks(res.data.drinks)
        } catch (error) {
            console.log(error)
        }


    }
    const applyFilter=(c,a)=>{
        url=`${url}?c=${c}?a=${a}`
        console.log(url)
    }
    useEffect(()=>{         // eslint-disable-next-line 
        const getCategory = async () => {
            const config={
             "headers": {
                 "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                 "x-rapidapi-key": "767addc8ddmsh1f1ad79824aca2cp1fa8eejsn02f139b1e622"
             }
            }
            try {
                const resCat=await axios.get('https://the-cocktail-db.p.rapidapi.com/list.php?c=list',config)
                const resAlc=await axios.get('https://the-cocktail-db.p.rapidapi.com/list.php?a=list',config)
                setCategories(resCat.data.drinks)
                setAlcohalic(resAlc.data.drinks)
                setHaveFilter(true)
            } catch (error) {
                console.log(error)
            }
        }
        getCategory()
     },[])
    return (
        <Fragment>
            <form className="form-inline mt-4" onSubmit={e => onSubmit(e)}>
                <div className="form-group mx-sm-3 mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ingredient"
                        value={ingredient}
                        onChange={e => setIngredient(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-dark mb-2">
                    search
  </button>
            </form>
            {haveFilter && <Filter applyFilter={applyFilter} categories={categories} alcohalic={alcohalic}/>}
            {loading
                ? <Spinner />
                : drinks && <DrinkList drinks={drinks} />
            }
        </Fragment>
    )
}

export default Ingredients
