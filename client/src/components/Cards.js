import React from 'react'
import Card from './Card'

function Cards({cards}) {

    if (cards.length<1){
        return <div>You are currently not playing in a game.</div>
    }
    return(
        
        cards.map(card => {

            return <Card key={card} card={card}/>                      

        })    


    ) 
}

export default Cards