    let f=0;
    let r=0;
    let k=0;
    let c=0;
function calculoc(){
    let c = document.querySelector("#c").value;
    f=((c*1.8)+32);
    r=((c*1.8)+491.67);
    k=((c*1)+273.15);
    document.querySelector("#f").value = (f);
    document.querySelector("#r").value = (r);
    document.querySelector("#k").value = (k);
}
function calculof(){
    let f = document.querySelector("#f").value;
    c=((f-32)/1.8);
    r=((f*1)+459.67);
    k=((f-32)*5/9+273.15);
    document.querySelector("#c").value = (c);
    document.querySelector("#r").value = (r);
    document.querySelector("#k").value = (k);
}
function calculor(){
    let r = document.querySelector("#r").value;
    c=((r-32-459.67)/1.8);
    f=(r-459.67);
    k=(r/1.8);
    document.querySelector("#c").value = (c);
    document.querySelector("#f").value = (f);
    document.querySelector("#k").value = (k);
}
function calculok(){
    let k = document.querySelector("#k").value;
    c=(k-273.15);
    f=((k-273.15)*1.8+32);
    r=(k*1.8);
    document.querySelector("#c").value = (c);
    document.querySelector("#f").value = (f);
    document.querySelector("#r").value = (r);
}
document.querySelector("#limpar").onclick = function(){
    location.reload();        
}
