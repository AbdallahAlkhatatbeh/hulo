

// function grades(){
// var mark = prompt("Please enter your mark" );

// if (mark >= 90) {
//  alert("exellent, pass!") ;
//  } else if (mark >= 50) {
// alert( "good, pass!");
//  }
//   else {
//  alert("Sadly you faild,Better luck next time");

//  }


// }

//grades();

function cofeeAndTea (){
    var  order = prompt ("what do you want to order ? (coffee or tea)");
    while (order !== 'tea' && order !== 'coffee') {
        order = prompt ("what do you want to order ? (coffee or tea)");
    }
    var noOfOrders = prompt ("how many cups do you want ?") ;
    
    var item = "";
    
    for(var i=0 ; i< noOfOrders; i++)
    if (order==="tea")
     {
         item =item+ '<img src="Tea.jpeg">' ;
     }
     else if (order=== "coffee")
     {
        item =item+ '<img src="cofee.jpg">' ; 
     } else {
        item = '<strong> Sorry we dont sereve that here </strong>' ; 
    
     }
     return item ;
    }
    document.write('<h3>'+cofeeAndTea()+'</h3>');
    
    