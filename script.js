

function ticketFee () {

    alert(`Please input your age to continue`)

    const input = document.querySelector(`.inputElement`)
    let age = input.value
       
    if(age > 0 && age <= 12) {
          ticketPrice = `Your ticket price is $${5}`;
      
    }
    else if(age > 12 && age <= 18 ) {
        ticketPrice = `Your ticket price is $${10}`;
       
    }
    else if(age > 18 && age <= 60 ) {
         ticketPrice = `Your ticket price is $${20}`;
       
    }
    else if( age > 60 ) {
       ticketPrice = `Your ticket price is $${15}`;
       
        
    }
    
    input.value =``
    document.querySelector(`.ticket`).innerHTML = ticketPrice
    


   
}





function clearButton (){
    
    
    document.querySelector(`.ticket`).innerHTML = ``
    
}