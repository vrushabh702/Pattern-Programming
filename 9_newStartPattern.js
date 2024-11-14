// var n=9
// for(i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==1||j==1||i==n||j==n||i==j||j==n-i+1){
//             document.write("("+i+","+j+")");
//         }else{
//             document.write(`<span class='space'>(${i},${j})</span>`)
//         }
//         // document.write("*");
//     }
//     document.write("<br/>")

// }


var n=16
if(n%2==0){
    n=n-1;
}
for(i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
        if(i==1||j==1||i==n||j==n||i==j||j==n-i+1){
            document.write("*");
        }else{
            document.write(`<span class='space'>*</span>`)
        }
        // document.write("*");
    }
    document.write("<br/>")
}