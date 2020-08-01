import React, { useState} from 'react'

const Filter = ({categories,alcohalic,applyFilter}) => {
    console.log(alcohalic)
    const [category,setCategory]=useState("")
    const [alc,setAlc]= useState("")
    return (
        <div className="border bg-info text-center">
            <label className="text-light lead" htmlFor="cars">Choose a category</label>
            <div >
            <select name="category" id="category" value={category} onChange={e=>setCategory(e.target.value)}>
               {categories.map(c=><option value={c.strCategory} key={c.strCategory} >{c.strCategory}</option>)}
            </select>
            </div>
            <label className="text-light lead" htmlFor="alc">Choose alcohalic categoriy</label>
            <div>
            <select name="alc" id="alc" value={alc} onChange={e=>setAlc(e.target.value)}>
               {alcohalic.map(a=><option value={a.strAlcoholic} key={a.strAlcoholic} >{a.strAlcoholic}</option>)}
            </select>
            </div>
            <button onClick={e=>applyFilter(category,alc)} className="btn btn-sm btn-success m-2">Apply filter</button> 
        </div>
    )
}

export default Filter
