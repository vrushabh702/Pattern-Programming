var m, x=10
for(i=x;i>=1;i--){
    for(j=1;j<=i;j++){
        document.write("<span class='space'>*</span>")
    }
    document.write("*")
    for(let k=1;k<=x-i;k++){
        document.write("<span class='space'>*</span>")
    }
    for(let k=2;k<=x-i;k++){
        document.write("<span class='space'>*</span>")
    }
    if(i!=x){
        document.write("*")
    }

    document.write("<br/>")
}

m = (x * 2)+1
for(i=1;i<=m;i++){
    document.write("*")
}