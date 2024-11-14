let i,j,k,x=5;

for(i=1;i<=x;i++){
    for(k=1;k<=x-i;k++){
        // document.write("&nbsp;&nbsp;");
        document.write("<span class='blue'>*</span>");
    }
        for(j=1;j<=i;j++){
        document.write("*")
    }
    document.write("<br>")
}