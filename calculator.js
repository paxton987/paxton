let smallcontainer
let bigcontainer
let isClear = false
let opr, result = ''

function numberCharacter(numbers){
    
smallcontainer = document.getElementById("smallContainer")
bigcontainer = document.getElementById("bigContainer")

if (isClear == false){
    bigcontainer.innerHTML += numbers

}else{
        bigcontainer.innerHTML = ''
    bigcontainer.innerHTML += numbers
    isClear = false

}

}


function grett(sign){
    if(opr){

        equal_()
    }
    smallcontainer = document.getElementById("smallContainer")
bigcontainer = document.getElementById("bigContainer")
opr = sign
isClear = true
result_ = bigcontainer.innerHTML
smallcontainer.innerHTML =bigcontainer.innerHTML + sign
}

function _clear(){
    smallcontainer=document.getElementById("smallContainer")
    bigcontainer =document.getElementById("bigContainer")
    bigcontainer.innerHTML = smallcontainer.innerHTML=''
    opr = ''
    
}
function  equal_(){
    // console.log('gy');
    if (opr == '+'){
        
        smallcontainer.innerHTML=smallcontainer.innerHTML+bigcontainer.innerHTML+'='
        bigcontainer.innerHTML = Number(result_) + Number(bigcontainer.innerHTML)
    }else
    if(opr =='-'){
       
        smallcontainer.innerHTML=smallcontainer.innerHTML+bigcontainer.innerHTML+'='
        bigcontainer.innerHTML = Number(result_) - Number(bigcontainer.innerHTML)
    }else
    if(opr=='x'){
       
        smallcontainer.innerHTML=smallcontainer.innerHTML+bigcontainer.innerHTML+'='
        bigcontainer.innerHTML=Number(result_) * Number(bigcontainer.innerHTML)
    }else
    if(opr=='/'){
        smallcontainer.innerHTML=smallcontainer.innerHTML+bigcontainer.innerHTML+'='
        bigcontainer.innerHTML= Number(result_) / Number(bigcontainer.innerHTML)
    }



}
function delete1(){
 let deletecaraters =bigcontainer.innerHTML
 bigcontainer.innerHTML=deletecaraters.slice(0,-1)
}