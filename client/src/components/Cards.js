import React from 'react'
import Card from './Card'

function Cards({cards}) {
    return(
        
        cards.map(card => {

            return <Card key={card} card={card}/>                      

        })    


    ) 
}

export default Cards