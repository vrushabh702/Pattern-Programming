var i,j,k,l,m,x=10, star="*", space = "&nbsp;&nbsp;"
for(i=x;i>=1;i--){
    
    for(j=1;j<=i;j++){
        document.write(star)
    }
    for(k=1;k<=x-i;k++){
        // document.write("0");
        document.write(space)
    }

    for(k=2;k<=x-i;k++){
        // document.write("0")
        document.write(space)
    }
    if(i==x){
        m=i-1
    }else{
        m=i;
    }
    for(l=1;l<=m;l++){
        document.write(star)
    }
    document.write('<br/>')
}

for(let i=2;i<=x;i++){
    for(j=1;j<=i;j++){
        document.write(star);
    }
    for(k=1;k<=x-i;k++){
        document.write(space)
    }
    for(l=2;l<=x-i;l++){
        document.write(space)
    }
    if(i==x){
        m=i-1
    }else{
        m=i
    }
    for(l=1;l<=m;l++){
        document.write(star);
    }
    document.write('<br/>')
}