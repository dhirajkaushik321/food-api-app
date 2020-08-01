import React from 'react'

const Drink = ({name,imgSrc,id}) => {
    return (
        
            <div className="card m-2" style={{ width: "18rem" }}>
                <img className="card-img-top" src={imgSrc} alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        id: {id}
                    </p>
                </div>
            </div>

    )
}

export default Drink
