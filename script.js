var list=[ ];

var pric=parseInt([ ]);

$("button").click(function(){

    var listItem=$(".item").val();

    var prices=$(parseInt(".price")).val();
    
    var num= list.length;
   
    var totalprice=0;
    
    pric.push(prices);
   
    list.push(listItem);  

    $("body").append("<div>" + listItem + "</div>");
    
    $(".num").text(1 + num);
    
    pric.forEach(function(tot){
       totalprice = totalprice + parseInt(pric);
   });
   
   $(".pr").text(totalprice);
   
});