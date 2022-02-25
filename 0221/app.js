const myName="Bishal";
const myDob=1996;
const currentYear=2022;

const aboutMe=`I am ${myName}. My DOB is ${myDob}. I am ${currentYear-myDob} years old`;

const justCheck="I am " + myName + "My age is " + ( currentYear-myDob);
console.log(aboutMe);

console.log(justCheck);

const year='nine';

console.log(Number(year));

console.log(typeof ('100')) ;

let n = 10 + '10';

let m = '10' + 10 + 10;

console.log(m);

console.log('90' === 90);

if(false)
{
    console.log('True is');
}
else {
    console.log('false is');
}

console.log(typeof (String+Number));


// const myName = "bishal";

// if (true){
//     const myName="paudel";
//     console.log(myName);
// }


console.log(myName);

const aB = true ? "Apple" : "Ball";

console.log(aB);


var apple = "wateris";

switch (apple){
    case 'wateris':
        console.log("Good");
        break;
    case 'no water':
        console.log("Not good");
        break;
    default:
        console.log("whatever");
        break; 
}

