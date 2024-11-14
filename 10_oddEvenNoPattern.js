    let value = 1;
    let count = 0;

    for(i=1;i<=5;i++){ // i=1;  ,i=2 , i=3
        
        // if(i%2==0){
        //     // for even row
        //     value = count + i;  
        // }else{
        //     // for odd row
        //     value = count + 1;
        // }

        value = (i%2==0) ? (count + i) : (count + 1); // i=1, count=1, value=2, value = 3  
        //value = 2 , count = 1, value=2
        // i = 3 , count 3, value = 4
        
        for(j=1;j<=i;j++){ // j=2  // j=1,j=2
            // if(i%2==0){
            //     document.write(value-- + ' ') // value 2
            // }else{
            //     document.write(value++ + ' ') // value = 2
            // }

                document.write(value + ' '); // value = 2
                (i%2 == 0) ? (value--) : (value++);
            count++
        }
        document.write('<br></br>')
    }


// i=1 
// 1 is not module 2 so false
// count =0 ,value =1
// count + 1 now count = 1
// j=1 i=1 then loop for one
// if 1 module 2 so false 
// else part value ++ as it is postfix
// 1 print then increment
// it will be value = value(1) + 1 = 2


// now again 
// i=2
// 2 is module of 2 true
// count = 1 , value = 1
// count + i = 3
// value = 3

// 1

//j=1 i=2
// now 2 module 2 true
// postfix decrement value 
// value = 3 
//  value = value(3) - 1= 2
// count = 2
// now j=2 and i=2
// and 2 module 2 true for i 
// value = value(2) -1 = 1
// 2 
// count = 3
// j=3 false
// break line

 
// 3, 2 

/* 
    now i = 3 
    count = 3
    not module of 2 false 
    value = (count(3) + 1)
    value = 4

    for loop for j = i loop goes for 3 time as i = 3
    now i(3) is not module 2 false
    value ++ postfix 
    value 4 
    count ++ 
    count 4 
    condition false for module 2
    value = (count(4) + 1)
    value 5 postfix
    count ++ 
    count 5
    condition false for module 2
    value = (count(5) + 1)
    value = 6 
    count 6
    j = 4 <= i=3 

    goes to  1
    4, 5, 6
 
*/




let values = 1
let counts = 0

for(let i=0;i<=5;i++){
    values = (i%2==0) ? (counts + i) : (counts + 1)
    for(i=1;j<=i;j++){
        document.write(values + '');
        (i%2 == 0) ? (values--) : (values++);
        counts ++
    }
    document.write('<br></br>')
}