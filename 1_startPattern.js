for(let i=1;i<=5;i=i+1){ 
    for(let j=1;j<=i;j++){
        document.write("*")
    }
    document.write('<br>')
}


// i=1 j=1      *
// now j increment
// 1<=2 false then break
// i=2 j=1     then it will print 1 start *
// j increment to 2 
// i=2  j=2     **
// j increment to 3
// line will break
// i=3 j=1 again loop increasese like above
// i=3 j=1 to j=3   ***
// i=4 j=1 to j=4   ****
// i=5 j=1 to j=4   *****


// i=1 j=1      *
// i=2 j=2      **
// i=3 j=3      ***
// i=4 j=4      ****
// i=5 j=5      *****