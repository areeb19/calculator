inp=document.getElementById('inputDisplay');

function addVal(val){
inp.value +=val;
}

function clears(){
    inp.value="";
}

function back(){
    inp.value=inp.value.slice(0,inp.value.length-1);
}

function equals(){
    inp.value=eval(inp.value);
}