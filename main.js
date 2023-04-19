var display = document.getElementById("input");



function press(e){
    display.value += e;
    
}


function clearAll(){
    display.value = ""
    document.getElementById("ad").innerText = ""
}


function del(){
    display.value = display.value.slice(0, -1)
}


function equalto(){
    document.getElementById("ad").innerText = eval(display.value)
}


function percent(){
    display.value = display/100
}

function sqr(){
    display.value = Math.sqrt(display.value)
}

function raiseTpow(){
    display.value = Math.pow(display.input, display.input)
}


function normal(){
    document.getElementById("sci-btn").style.display = "none"
}


function scientific(){
    document.getElementById("sci-btn").style.display = "block"
}

