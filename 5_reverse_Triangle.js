var x = 2

for(let i=x;i>=1;i--){ 
    for(let k=1;k<=x-i;k++){
        document.write('&nbsp;&nbsp');
    }
    for(let j=1;j<=i;j++){
        document.write("*")
    }
    for(let l=1;l<=i-1;l++){
        document.write("*")
    }
    document.write("<br>")
}


//  second method

var x=13,
m= x*2;
m = m-1;


for(let i=x;i>=1;i--){
    for(let k=1;k<=x-i;k++){
        document.write("&nbsp","&nbsp");
    } 
    for(let l=1;l<=m;l++){
        document.write("*");
    }
    m=m-2;
    document.write("<br>")
}