let a;
for(a=0;a<10;a++){
    if(a%2==0){
        console.log("even number");
    }
    else{
         console.log("odd number");
    }
}
function sqr(n){
    let s=n*n;
    console.log(s);

    }

    sqr(3);
// call back function
function red(c1,c2){    
        console.log("this is red");
     
     c1(c2)
    }
    function blue(c3){
        console.log("this is blue")
        c3()
    }
    function green(){
        console.log("this is green")

    }
    red(blue,green);
