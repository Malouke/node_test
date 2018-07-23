
var rect = require("./rectangle");


function solveRect(l,b){

   console.log("solving for rectangle  with l  ="+l+"and b "+b);

    if(l<=0 || b<=0){
        console.log("rectangle dimensions  permieter it s allways >0");
    }

    else{
        console.log("aera it's :"+  rect.area(l,b));
        console.log("aera it's :" + rect.permetires(l,b));
    }


}




solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-1,-5);

