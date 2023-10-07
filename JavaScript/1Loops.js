function myfun(){
    const items =["IceCream","Chocolate","Noodles"];

    //For displaying values
    for (i=0;i<items.length;i++){
        console.log(items)
    }
    //For displaying single values
    for (i=0;i<items.length;i++){
        console.log(items[i])
    }
    //For index
    for (let x in items){
        console.log(x);
    }
    //For values
    for (let x in items){
        console.log(items[x]);
    }
    //For Values
    for(let x of items){
        console.log(x);
    }
    //For everthing based on conditions basically for true or false
    var i=0;
    while(i<items.length){
        console.log(items[i]);
        i++;
    }
}