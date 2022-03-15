
//let cards = Array.apply(null, {length: 15}).map(Number.call, Number)
let cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
function deal(numberOfUsers) {
  //console.log(cards)

  let numba = 0;
  let distributed =[]
  if (15%numberOfUsers==0){numba = 15}
  if (15%numberOfUsers>0) {numba = 15-(15%numberOfUsers)}

  
  for (let i=0; i<numba; i++){ // to put all dsitributed cards in an array
    let random = Math.floor(Math.random() * cards.length)
    //console.log(random)
    //console.log(cards[random])
    distributed.push(cards[random])
    cards = cards.filter(card => card!= cards[random]);
   
    }

    let finalResults = []
    let bocciKullWiehed = numba/numberOfUsers
    for (let i=0; i<numberOfUsers; i++){ // to put right ammount of cards/balls to each user
      let tempRes = []
      for (let z=0; z<bocciKullWiehed; z++){
        let random = Math.floor(Math.random() * distributed.length)
        tempRes.push(distributed[random])
        distributed = distributed.filter(card => card!== distributed[random])
      }
      finalResults.push(tempRes)
    }
    //console.log(cards)
    //console.log(distributed)
    cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    console.log(finalResults)
    return finalResults
}

module.exports = deal
