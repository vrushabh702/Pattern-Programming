var i,j,k,l;

for(i=1;i<=5;i++){
    for(k=1;k<=5-i;k++){
        document.write("&nbsp;&nbsp;")
    }
    for(j=1;j<=i;j++){
        document.write("*")
    }
    for(l=2;l<=i;l++){
        document.write("*")
    }
    document.write("<br>")
}


// i=1 condition check true
// inside loop
// k=1 i=1 and 5-1 is 4 
// so 4 time space print
// i=1 j=1 condition 1<=1 true
// then print 1 start
// now j incremnet 1<=2 false then forloop
// i=1 l=1 2<=1 false break and exit

// now
// i=2 and 5-2=3 
// then 3 space 
// i=2 j start from 1 and increment till 2<=j
// i=2 j=2 print **
// i=2 l=2 2<=2 true print *
// now l inrement 3<=2 false break line


/*
    *
   ***

*/

var i,j,k,l,star="";

for(i=1;i<=5;i++){
    for(k=1;k<=5-i;k++){
        // document.write("&nbsp;&nbsp;")
        // star = star + "&nbsp;&nbsp;"
        star += "&nbsp;&nbsp;"
    }
    for(j=1;j<=i;j++){
        // document.write("*")
        star += '*'
    }
    for(l=2;l<=i;l++){
        // document.write("*")
        star += '*'
    }
    // document.write("<br>")
    star += '<br> '
}
// console.log(star)
document.getElementById("display").innerHTML = star
