var x=5; star = ""
for(let i=1;i<=x;i++){
    for(let j=1;j<=x-i;j++){
        document.write('&nbsp;&nbsp;');
    }
    for(let k=1;k<=i;k++){
        document.write('*');
    }
    for(let l=1;l<=i-1;l++){
        document.write("*");
    }
    document.write('<br/>')
}


for(let i=x-1;i>=1;i--){
    for(let j=1;j<=x-i;j++){
        document.write("&nbsp;&nbsp;")
    }
    for(let k=1;k<=i;k++){
        document.write("*")
    }
    for(let l=1;l<=i-1;l++){
        document.write("*")
    }
    document.write("<br/>")
}



var x=5; star = ""
for(let i=1;i<=x;i++){
    for(let j=1;j<=x-i;j++){
        star += '<span class="space">*</span>'
    }
    for(let k=1;k<=i;k++){
        star += '<span class="top-left">*</span>'
    }
    for(let l=1;l<=i-1;l++){
        star += '<span class="top-right">*</span>'
    }
    star += "<br/>"
}


for(let i=x-1;i>=1;i--){
    for(let j=1;j<=x-i;j++){
        star += '<span class="space">*</span>'
    }
    for(let k=1;k<=i;k++){
        star += '<span class="bottom-left">*</span>'

    }
    for(let l=1;l<=i-1;l++){
        star += '<span class="bottom-right">*</span>'

    }
    star += "<br/>"
}

document.getElementById("display").innerHTML = star