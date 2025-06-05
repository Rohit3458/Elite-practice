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
