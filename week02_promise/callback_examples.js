//Callback Examples
var callback = () => {
    console.log('callback called');
}

// setTimeout(callback, 2000);

var p = (name) => {
    console.log(name);
}

function printName(name, print){
    print(name);
}

printName("Sahil", p);

var name = "John Doe";
printName("Sahil", (name) => {
    console.log(name);
});

var countries = ['India', 'USA']
countries.map((country)=>{
    console.log(country);
}); 