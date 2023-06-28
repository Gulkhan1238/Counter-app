 let countEl = document.getElementById("count-el")
 let count = 0
function increment(){
  count = count+1
 countEl.innerText = count
}

function decrement(){
  if( count!=0){
    count = count -1
    countEl.textContent = count
  }
}

function reset(){
  
    count = 0
    countEl.innerText = count
  
}
let saveEL = document.getElementById("save-el")
function save(){
let strSave = count+" - "
saveEL.textContent+= strSave  
    
}