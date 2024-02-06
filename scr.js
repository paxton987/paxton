function check(){
    let val= int1.value.toLowerCase()
if(val.includes('nigeria') || val.includes('bodija') || val.includes('explosion')){
    message1.innerHTML='Found'

}else{
    message1.innerHTML='Not found'
}
}
let change1= false
let val1
let operator = ''
let bigContainer
let smallContainer


function numberCharacter(number){
    bigContainer=document.getElementById("bigContainer")
    smallContainer=document.getElementById("smallContainer")
    // bigContainer.innerHTML+=number
    if (change1 ==false){
        bigContainer.innerHTML+= number

    }else{
        bigContainer.innerHTML=''
        bigContainer.innerHTML+=number
        change1=false
    }
}
function grett(sign){
    operator = sign
    bigContainer=document.getElementById("bigContainer")
    smallContainer=document.getElementById("smallContainer")
    // bigContainer.innerHTML=smallContainer.innerHTML + sign
    smallContainer.innerHTML =bigContainer.innerHTML + sign
    val1 = Number(bigContainer.innerHTML)
    change1=true

}
function _clear(){
    bigContainer=document.getElementById("bigContainer")
    smallContainer=document.getElementById("smallContainer")
    bigContainer.innerHTML=smallContainer.innerHTML=''
    
}
function equal_(){
    bigContainer=document.getElementById("bigContainer")
    smallContainer=document.getElementById("smallContainer")

    if(operator == '+'){
        smallContainer.innerHTML += bigContainer.innerHTML+'='
       bigContainer.innerHTML = val1 + Number(bigContainer.innerHTML)
    }else 
    if(operator=='-'){
        smallContainer.innerHTML+=bigContainer.innerHTML+'='

        bigContainer.innerHTML = val1 - Number(bigContainer.innerHTML)
    }else
    if(operator =='/'){
        smallContainer.innerHTML+=bigContainer.innerHTML+'='

        bigContainer.innerHTML=val1 /Number(bigContainer.innerHTML)
    }else
    if(operator =='x'){
        bigContainer.innerHTML =val1 *  Number(bigContainer.innerHTML)
    }

}
