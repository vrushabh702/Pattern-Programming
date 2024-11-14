let i,j,k,m=1,x=10


for(i=0;i<=x;i++){
    for(let k=1;k<=x-i;k++){
        document.write('&nbsp;&nbsp;')
    }
    for(j=1;j<=m;j++){
        document.write("*")
    }
    document.write("<br/>")
    m=m+2;
}
