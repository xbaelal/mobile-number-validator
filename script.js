const input = document.getElementById("user-input")
const clear = document.getElementById("clear-btn")
const check = document.getElementById("check-btn")
const results = document.getElementById("results-div")

const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/
input.addEventListener("click", ()=> results.innerText = "")

check.addEventListener("click", ()=>{
  if(!input.value){
    results.innerText = "Please provide a phone number"
  } else if(regex.test(input.value)){
    results.innerText = `Valid US number: ${input.value}`
}else if(!regex.test(input.value)){
    
    results.innerText = `Invalid US number: ${input.value}`
  }
})

clear.addEventListener("click", ()=>  {
    input.value = ""
    results.innerText = ""
})
