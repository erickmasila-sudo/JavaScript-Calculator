let history=[]
const readline= require("readline");
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
function repeat(){
    r1.question("\n Would you like to see your current history, close the calculator or use the calculator\n Current history: Press h \n Close: Press c \n Use: Press u\n>>", 
        (choice) =>{
            if(choice=="h"){console.log(history); repeat()}
            else if(choice=="c"){console.log("Closing calculator..."); r1.close()}
            else if(choice=="u"){calculate()}
            else{console.error("Write the correct format"); repeat()}
    })
    
}
function calculate(){
    r1.question("Enter the First Number? ", (a) =>{
        r1.question("Enter second number? ", (b) =>{
   let addition=Number(a)+Number(b);
   let subtraction=Number(a)-Number(b);
   let multiplication=Number(a)*Number(b);
   let division=Number(a)/Number(b);
history.push(`${a}, ${b} addition: ${addition} subtraction: ${subtraction} multiplication: ${multiplication} division: ${division}`)
console.log(`${a}, ${b} \n addition: ${addition} subtraction: ${subtraction} multiplication: ${multiplication} division: ${division} `);
    repeat();
        });
    })};

repeat();




