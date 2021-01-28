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

    //arguments (arguments is array like object,only work in any function,push pop and any other library function is not allow with arguments)
//if u want access all parameter which u send ,then use arguments 
    function add(n1,n2)
    {
        console.log(arguments);
        sum=n1+n2;
        return sum;
    }

    var result=add(5,5,5,5,5);
    console.log(result);

//sun+arguments

     function sumFunction(n){
        var sum=0;
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i];
            sum=sum+element;
        }
        return sum;
     }

     var numbers=sumFunction(1,3,2,4,5,4,3,2,1,3,2,4,5,4,3,2);
     console.log(numbers);
    