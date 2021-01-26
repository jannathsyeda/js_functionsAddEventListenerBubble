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





 //call back function
    console.log("----call back function-------");
   

    function callBack(name,age,task){

    console.log(name);
    console.log(age);
    task();

    }

    function goHome()
    {
        console.log("go to ur home");
    }

    function sleep()
    {
        console.log("sleep now");

    }

    var Name="misu";
    var Age=11;
    callBack(Name,Age, goHome);
    callBack('mita',10, sleep);

