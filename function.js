function array_ify(num){
    if(num%2==0)
    {
        console.log("even number:",num);
    }else{
        console.log("odd number: ",num);
    }
}

function array_All(num){
    for(i=0;i<num.length;i++)
    {
        var element=num[i];
        array_ify(element);

    }
   
}

 var array=[22,44,3,44,7,6,88,33];
    console.log(array_All(array));