// #__Introduction And What Is JavaScript ?__# //
// #__How To Study The Course ?__# //
// #__Setting Up Environment And Tools__# //
// #__Work With Chrome Developer Tools__# //
// #__Where To Put The Code__# //
// !important note -> always put you <script> in the end of the html page (sequentially)

// #__Comments And Bad Practice__# //
// single line comment
/* multiple line comment */
// note: im not happy to Study this shit

// #__Output To Screen__# //
/*
    Output To Screen
    - window.alert()
    - document.write()
    - console.log()
    Syntax
*/
console.log("#-------------------------ex_1-------------------------#");
// window.alert("Hello World");
document.write(
    "<h2> Ex_1 </h2>\
    <h1>Hello World</h1>\
    <hr>"
);
console.log("Hello world");

// #__Console Methods And Styling And Web API__# //
/*
    • Console Methods
        - log
        - error
        - table
    • Web API
    • Styling Console
        - Directive %c
*/
console.log("#-------------------------ex_2-------------------------#");
console.log("log");
console.error("error");
console.table(["Mohammad", "Ahmed", "Sayed"]);
console.log(
    "%cHello World %cMohammad Ismail",
    "color: red; font-size: 40px; background-color: yellow",
    "color: blue; font-size: 40px; background-color: pink"
);

// #__What Is ECMAScript ?__# //
/*
    ES6 stand for ECMAScript 2015
*/
console.log("#-------------------------ex_3-------------------------#");
var my_name = "Mohammad";
console.log("Hello " + my_name);
console.log(`Hello ${my_name}`); // template literals

// #__Data Types And typeof Operator__# //
/*
    • Data Types Intro
        - String
        - Number
        - Array => Object
        - Object
        - Boolean
*/
console.log("#-------------------------ex_4-------------------------#");
console.log(
    "Data Type:" + typeof "Mohammad ismail" + "\nData: Mohammad ismail"
);
console.log("Data Type:" + typeof 10 + "\nData:" + 10);
console.log("Data Type:" + typeof 10.1 + "\nData:" + 10.1);
console.log("Data Type:" + typeof [1, 2, 3] + "\nData:" + [1, 2, 3]);
console.log(
    "Data Type:" +
    typeof { name: "mohammad", age: 22, country: "Amman" } +
    "\nData:" +
    { name: "mohammad", age: 22, country: "Amman" }
);
console.log("Data Type:" + typeof true + "\nData:" + true);
console.log("Data Type:" + typeof null + "\nData:" + null);
console.log("Data Type:" + typeof undefined + "\nData:" + undefined);
console.log("Data Type:" + typeof NaN + "\nData:" + NaN);
// #__Variables Introduction__# //
console.log("#-------------------------ex_5-------------------------#");
/*
    • Variables Intro
        - What Is Variable ?
        - Why We Use Variables ?
        - Declare A Variable And Use
        - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
        - Variable Without Var
        - Multiple Variables In The Same Line
        - Id And Global Variable
        - Loosely Typed vs Strongly Typed
*/
// note: var is Optionalionalional but best practice to use it
var user = "mohammad ismail"; // string
console.log("This is a Variable: " + user);
document.write(
    '<h2> Ex_5 </h2>\
    <div id="global_var">This is a Global Variable</div>\
    <hr>'
);
console.log("This is a Global Variable: " + global_var);
// global_var.innerHTML = "";
// #__Identifiers Name Conventions And Rules__# //
/*
    • Identifiers
        - Name Conventions And Rules
        - Reserved Words
*/
// note: i already know this im an AI engineer :)

// #__Var, Let, Const Compare__# //
/*
    • Var
        - Redeclare (Yes)
        - Access Before Declare (Undefined)
        - Variable Scope Drama [Added To Window] ()
        - Block Or Scope Function
    • Let
        - Redeclare (No => Error)
        - Access Before Declare (Error)
        - Variable Scope Drama ()
        - Block Or Scope Function
    • Const
        - Redeclare (No => Error)
        - Access Before Declare (Error)
        - Variable Scope Drama ()
        - Block Or Scope Function
*/
console.log("#-------------------------ex_6-------------------------#");
var a = 1;
let b = 2;
const c = 3;
console.log("Var: " + a);
console.log("Let: " + b);
console.log("Const: " + c);
// #__String Syntax And Characters Escape Sequenc__# //
console.log("#-------------------------ex_7-------------------------#");
/*
    • String Syntax + Character Escape Sequences
        - \ Escape + Line Continue
        - \n
        - \"
        - \t
*/
// note: strings can be defined by single quotes or double quotes
console.log('Mohammad "Ismail"');
console.log("Mohammad 'Ismail'");
console.log('Mohammad "Ismail"');
console.log("Mohammad \\ Ismail 'the best'");
console.log(
    "Mohammad \
    Ismail \
    the best"
);
console.log("Mohammad\nIsmail\nthe best");

// #__Concatenation__# //
console.log("#-------------------------ex_8-------------------------#");
/*
    • Concatenation
*/
let fname = "Mohammad";
let lname = "ismail";
console.log("Hello " + fname + " " + lname);

// #__Template Literals (Template Strings)__# //
/*
    • Template Literals (Template Strings)
*/
console.log("#-------------------------ex_9-------------------------#");

// First Example
let stat1 = "We Love";
let stat2 = "JavaScript";
let stat3 = "And";
let stat4 = "Programming";

console.log(stat1 + " " + stat2 + "\n" + stat3 + " " + stat4);
console.log(`"${stat1}" '${stat2}'
\\${stat3}\\ ${stat4}`);
// Second Example

let title = "Mohammad";
let desc = "this is my website";

let markup = `
    <h2> Ex_9 </h2>
    <div class="card">
        <div class="child">
            <h2>${title}</h2>
            <p>${desc}</p>
        </div>
    </div>
    <hr>
`;
document.write(markup);

// #__Variable And Concatenation Challenge__# //
console.log("#------------------------ex_10------------------------#");
console.log("Variable And Concatenation Challenge");
/*
===========================================
== Variables And Concatenation Challenge ==
===========================================

[1] Create 3 Variables [Title, Desctiption, Date]
-- All In One Statement
-- Variable Name Must Be Two Words
-- Title Content Is "Elzero"
-- Description Content Is "Elzero Web School"
-- Date Content Is "25/10"
[2] Create Variable Contains Div And This Div Contains
-- H3 For Title
-- P For Paragraph
-- Span For Time
[3] Add This Card To Page 4 Times
[4] Use Template Literals For Concatenate

Extra
- Use ES6 Repeat
*/
// #__Arithmetic Operators__# //
/*
    • Arithmetic Operators
        + Addition
        - Subtraction
        * Multiplication
        / Division
        ** Exponentiation (ES7)
        % Modulus (Division Remainder)
        ++ Increment [ Post / Pre ]
        -- Decrement [ Post / Pre ]
*/
console.log("#------------------------ex_11------------------------#");
console.log(10 + 20);
console.log(10 + "Mohammad");
console.log(10 - 20);
console.log(10 - "Mohammad"); // NaN
console.log(typeof NaN);
console.log(10 * 20);
console.log(10 * -20);
console.log(20 / 5);
console.log(20 / 3);
console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);
console.log(10 % 2);
console.log(11 % 2); // Remove 1

// #__Unary Plus And Negation Operators__# //
/*
    - + Unary Plus [Return Number If Its Not Number]
    - - Unary Negation [Return Number If Its Not Number + Negates It]
    • Tests
        - Normal Number
        - String Number
        - String Negative Number
        - String Text
        - Float
        - Hexadecimal Numeral System => 0xFF
        - null
        - false
        - true
*/
console.log("#------------------------ex_12------------------------#");
console.log("Unary Plus:");
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Mohammad");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);

console.log("Unary Negation:");
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Mohammad");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

// note: you can use Number() function instead of unary plus operator
console.log("Number Constructor:");
console.log(Number("100"));
console.log(Number("Mohammad"));

// #__Type Coercion__# //
console.log("#------------------------ex_13------------------------#");
/*
    • Type Coercion (Type Casting)
        - +
        - -
        - "" - 2
        - false - true
*/

console.log(+"10" + 20); // "1020"
console.log("10" - 20); // -10
console.log("" - 20); // -20
console.log(false - true); // -1
console.log(20 + true); // 21
console.log(20 + false); // 20
console.log("10" + 20 + true); // "10201"
console.log(+"10" + 20 + true); // 31

// #__Assignment Operators__# //
/*
    • Assignment Operators
*/
console.log("#------------------------ex_14------------------------#");

var a = 10;
a = a + 20;
a = a + 70;
a += 100; // a = a + 100
a -= 50; // a = a - 50
a /= 50; // a = a / 50
console.log(a);

// #__Operators Challenges__# //
/*
    • Challenge 1
*/
console.log("#------------------------ex_15------------------------#");
let A = 10;
let B = "20";
let C = 80;

console.log(++A + +B++ + +C++ - +A++); // 100
console.log(++A + -B + +C++ - -A++ + +A); // 100
console.log(--C + +B + --A * +B++ - +B * A + --A - +true); // 100

/*
    [++a] [+]
    [++a]
    - Value:
    - Explain:
    [+]
    - Explain:
*/
let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(e * -d); // 2000
// console.log(); // 173

// #__Number__# //
/*
    • Number
        - Double Precision
        - Syntactic Sugar "_"
        - e
        - **
        - With Decimal
        - Number + BigInt
        - Number Min Value
        - Number Max Value
*/
console.log("#------------------------ex_16------------------------#");
console.log(1000000);
console.log(1_000_000); // 1 million with Syntactic Sugar
console.log(1e6); // 1 * 10^6
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
// #__Number Methods__# //
console.log("#------------------------ex_17------------------------#");
console.log((100).toString()); // from number to string
console.log(parseInt("100.55555 Mohammad")); // from string to number
console.log(parseFloat("100.500 Mohammad"));
console.log(Number("100.55555")); // from string to number not like parseInt it give NaN if there is any text after the number
console.log(Number("100.55555 Mohammad")); // NaN
console.log(+"100 Mohammad")  // NaN
// console.log(100..toString());
console.log((100.55555).toFixed(2));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.5));
console.log(Number.isInteger(100));

console.log(Number.isNaN("Mohammad" / 20));



// #__Math Object__# //

console.log("#------------------------ex_18------------------------#");
/*
    • Math Object
        - round()
        - ceil()
        - floor()
        - min()
        - max()
        - pow()
        - random()
        - trunc() [Es6]
*/
console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log(Math.ceil(99.2));
console.log(Math.floor(99.9));

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));

console.log(Math.pow(2, 4));
console.log(Math.random());
console.log(Math.trunc(99.5));

// #__Number Challenge__# //
console.log("#------------------------ex_19------------------------#");
let A1 = 100;
let B1 = 2_00.5;
let C1 = 1e2;
let D1 = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.round(Math.min(A1, B1, C1, D1)));

// Use Variables a + d One Time To Get The Needed Output
console.log(A1 ** parseInt(D1)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(D1));
console.log(Math.trunc(D1));
console.log(Math.floor(D1));
console.log(Math.round(D1));

// Use Variables b + d To Get This Valus
console.log((parseInt(B1) / Math.ceil(D1)).toFixed(2)); // 66.67 => String
console.log(Math.round(parseInt(B1) / Math.ceil(D1))); // 67 => Number


// #__String Methods Part 1__# //
console.log("#------------------------ex_19------------------------#");
/*
    • String Methods
        - Access With Index
        - Access With charAt()
        - length
        - trim()
        - toUpperCase()
        - toLowerCase()
        - Chain Methods
*/
var theName = "  Ahmed  ";

console.log(theName);
console.log(theName[1]);
console.log(theName[5]);
console.log(theName.charAt(1));
console.log(theName.charAt(5));
console.log(theName.length);
console.log(theName.trim());
console.log(theName.toUpperCase());
console.log(theName.toLowerCase());
console.log(theName.trim().charAt(2).toUpperCase());


// #__String Methods Part 2__# //
console.log("#------------------------ex_20------------------------#");
/*
    • String Methods
        - indexOf(Value [Mandatoryatory], Start [Optionalional] 0)
        - lastIndexOf(Value [Mandatoryatory], Start [Optionalional] Length)
        - slice(Start [Mandatoryatory], End [Optionalional] Not Include End)
        - repeat(Times) [ES6]
        - split(Separator [Optionalional], Limit [Optionalional])
*/
var a = "Elzero Web School";

console.log(a.indexOf("Web"));
console.log(a.indexOf("Web", 8));
console.log(a.indexOf("o")); // 5
console.log(a.lastIndexOf("o")); // 15
console.log(a.slice(2, 6));
console.log(a.slice(-5, -3));
console.log(a.repeat(5));
console.log(a.split("", 6));

// #__String Methods Part 3__# //
console.log("#------------------------ex_21------------------------#");

/*
    • String Methods
        - substring(Start [Mandatory], End [Optional] Not Including End)
        --- Start > End Will Swap
        --- Start < 0 It Start From 0
        --- Use Length To Get Last Character
        - substr(Start [Mandatory], Characters To Extract)
        --- Start >= Length = ""
        --- Negative Start From End
        - includes(Value [Mandatory], Start [Optional] Default 0) [ES6]
        - startsWith(Value [Mandatory], Start [Optional] Default 0) [ES6]
        - endsWith(Value [Mandatory], Length [Optional] Default Full Length) [ES6]
*/
var a = "Elzero Web School";

console.log(a.length);
console.log(a.substring(2, 6));
console.log(a.substring(6, 2));
console.log(a.substring(-10, 6)); // 0 - 6
console.log(a.substring(a.length - 5, a.length - 3));
console.log(a.substr(0, 6));
console.log(a.substr(17));
console.log(a.substr(-3));
console.log(a.substr(-5, 2));
console.log(a.includes("Web"));
console.log(a.includes("Web", 8));
console.log(a.startsWith("E"));
console.log(a.startsWith("E", 2));
console.log(a.startsWith("zero", 2));
console.log(a.endsWith("l"));


// #__String Challenge__# //
console.log("#------------------------ex_22------------------------#");
/*
    • String Challenge
        All Solutions Must Be In One Chain
        You Can Use Concatenate
*/

var a = "Elzero Web School";
// Include This Method In Your Solution [slice, charAt]
console.log((a.charAt(2).toUpperCase()).concat(a.slice(3, 6))); // Zero
// 8 H
console.log('H'.repeat(8)); // HHHHHHHH
// Return Array
console.log(a.split(' ')[0]); // ["Elzero"]
// Use Only "substr" Method + Template Literals In Your Solution
console.log("".concat(a.substr(0, 6), a.substr(10))); // Elzero School
// Solution Must Be Dynamic Because String May Changes
// console.log(); // eLZERO WEB SCHOOl



// #__Comparison Operators__# //
console.log("#------------------------ex_23------------------------#");

/*
    • Comparison Operators
        - == Equal
        - != Not Equal
        - === Identical
        - !== Not Identical
        - > Larger Than
        - >= Larger Than Or Equal
        - < Smaller Than
        - <= Smaller Than Or Equal
*/
console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only
console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type
console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);
console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);
console.log(typeof "Osama" === typeof "Ahmed");

// #__Logical Operators__# //
console.log("#------------------------ex_24------------------------#");
/*
    • Logical Operators
        - ! Not
        - && And
        - || Or
*/
console.log(true);
console.log(!true);
console.log(!(10 == "10"));
console.log(10 == "10" && 10 > 8 && 10 > 50);
console.log(10 == "10" || 10 > 80 || 10 > 50);


// #__If Conditions__# //
console.log("#------------------------ex_25------------------------#");
/*
    • Control Flow
        - if
        - else if
        - else
    • If Condition Syntax
        if (Condition) {
            // Block Of Code
        }
*/
var price = 100;
var discount = true;
var discountAmount = 30;
var country = "KSA";

if (discount === true) {
    price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
    price -= 40;
} else if (country === "Syria") {
    price -= 50;
} else {
    price -= 10;
}
console.log(price);

// #__Nested If Conditions__# //
console.log("#------------------------ex_26------------------------#");
/*
    • Nested If
*/

var price = 100;
var discount = false;
var discountAmount = 30;
var country = "Egypt";
var student = true;

if (discount === true) {
    price -= discountAmount;
} else if (country === "Egypt") {
    if (student === true) {
        price -= discountAmount + 30;
    } else {
        price -= discountAmount + 10;
    }
} else {
    price -= 10;
}
console.log(price);


// #__Conditional Ternary Operator__# //
console.log("#------------------------ex_27------------------------#");
/*
    • Conditional (Ternary) Operator
*/

var theName = "Mona";
var theGender = "Female";
var theAge = 30;

if (theGender === "Male") {
    console.log("Mr");
} else {
    console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");
var result = theGender === "Male" ? "Mr" : "Mrs";
document.write(result);
console.log(theGender === "Male" ? "Mr" : "Mrs");
console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20
    ? console.log(20)
    : theAge > 20 && theAge < 60
        ? console.log("20 To 60")
        : theAge > 60
            ? console.log("Larger Than 60")
            : console.log("Unknown");




// #__Nullish Coalescing Operator & Logical Or__# //
console.log("#------------------------ex_28------------------------#");
/*
    • Logical Or ||
        -- Null + Undefined + Any Falsy Values
    • Nullish Coalescing Operator ??
        -- Null + Undefined
*/

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
var price = 0;
console.log(`The Price Is ${price || 200}`);
console.log(`The Price Is ${price ?? 200}`);

// #__If Condition Challenge__# //
console.log("#------------------------ex_29------------------------#");
/*
    • If Condition Challenge
*/

var a = 10;
if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}

a < 10 ? console.log(10) :
    a >= 10 && a <= 40 ? console.log("10 To 40") :
        a > 40 ? console.log("> 40") :
            console.log("Unknown");


// Write Previous Condition With Ternary If Syntax
let st = "Elzero Web School";
if ("????" === "34") { // False
    console.log("Good1");
}
// W Position May Change
if ("????" === "w") { // False
    console.log("Good");
}
if ("????" !== "string") { //true
    console.log("Good_string");
}
if ("????" === "number") { // False
    console.log("Good");
}
if ("????" === "ElzeroElzero") { // False
    console.log("Good");
}

// #__Switch Statement__# //
console.log("#------------------------ex_30------------------------#");
/*
    • Switch Statement
        switch(expression) {
            Case 1:
            // Code Block
            break;
        Case 2:
        // Code Block
            break;
        Default:
        // Code Block
        }
    - Default Ordering
    - Multiple Match
    - ===
*/

var day = "A";

switch (day) {
    default:
        console.log("Unknown Day");
        break;
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2:
    case 3:
        console.log("Monday");
        break;
}


// #__Switch And If Condition Challenge__# //
console.log("#------------------------ex_31------------------------#");
/*
    • Switch Challenge
*/

var job = "Manager";
var salary = 0;

if (job === "Manager") {
    salary = 8000;
} else if (job === "IT" || job === "Support") {
    salary = 6000;
} else if (job === "Developer" || job === "Designer") {
    salary = 7000;
} else {
    salary = 4000;
}

/*
    • If Challenge
*/

var holidays = 0;
var money = 0;

switch (holidays) {
    case 0:
        money = 5000;
        console.log(`My Money is ${money}`);
        break;
    case 1:
    case 2:
        money = 3000;
        console.log(`My Money is ${money}`);
        break;
    case 3:
        money = 2000;
        console.log(`My Money is ${money}`);
        break;
    case 4:
        money = 1000;
        console.log(`My Money is ${money}`);
        break;
    case 5:
        money = 0;
        console.log(`My Money is ${money}`);
        break;
    default:
        money = 0;
        console.log(`My Money is ${money}`);
}


// #__Array Big Introduction__# //
console.log("#------------------------ex_32------------------------#");
/*
    • Arrays
        - Create Arrays [Two Methods] new Array() + []
        - Access Arrays Elements
        - Nested Arrays
        - Change Arrays Elements
        - Check For Array Array.isArray(arr);
*/

var myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[1][2]}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(`${myFriends[3][1][2]}`);

console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);
myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);

console.log(Array.isArray(myFriends));

// #__Using Length With Array__# //
console.log("#------------------------ex_33------------------------#");
/*
    • Array Methods
        - Length
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

var myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
myFriends[myFriends.length] = "Ismail";
myFriends[myFriends.length - 1] = "ismail";
myFriends.length = 2; // Truncate The Array
console.log(myFriends);


// #__Add And Remove From Array__# //
console.log("#------------------------ex_34------------------------#");
/*
    • Arrays Methods [Adding And Removing]
        - unshift("", "") Add Element To The First
        - push("", "") Add Element To The End
        - shift() Remove First Element From Array
        - pop() Remove Last Element From Array
*/

var myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(myFriends);

myFriends.unshift("Osama", "Nabil");
console.log(myFriends);

myFriends.push("Samah", "Eman");
console.log(myFriends);

var first = myFriends.shift();
console.log(myFriends);
console.log(`First Name Is ${first}`);

var last = myFriends.pop();
console.log(myFriends);
console.log(`Last Name Is ${last}`);



// #__Searching Array__# //
console.log("#------------------------ex_35------------------------#");

/*
    • Arrays Methods [Search]
        - indexOf(Search Element [Mandatory], From Index [Optional])
        - lastIndexOf(Search Element [Mandatory], From Index [Optional])
        - includes(valueToFind [Mandatory], fromIndex [Optional]) [ES7]
*/

var myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];
console.log(myFriends);

console.log(myFriends.indexOf("Ahmed"));
console.log(myFriends.indexOf("Ahmed", 2));

console.log(myFriends.lastIndexOf("Ahmed"));
console.log(myFriends.lastIndexOf("Ahmed", -2));

console.log(myFriends.includes("Ahmed"));
console.log(myFriends.includes("Ahmed", 2));

if (myFriends.lastIndexOf("Osama") === -1) {
    console.log("Not Found");
}

console.log(myFriends.indexOf("Osama"));
console.log(myFriends.lastIndexOf("Osama"));

// #__Sorting Array__# //
console.log("#------------------------ex_36------------------------#");
/*
    • Arrays Methods [Sort]
        - sort(Function [Optional])
        - reverse()
*/

var myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends);
console.log(myFriends.sort().reverse());


// #__Slicing Array__# //
console.log("#------------------------ex_37------------------------#");

/*
    • Arrays Methods [Slicing]
        - slice(Start [Optional], End [Optional] Not Including End)
            --- slice() => All Array
            --- If Start Is Undefined => 0
            --- Negative Count From End
            --- If End Is Undefined || > Indexes => Slice To The End Array.length
            --- Return New Array
        - splice(Start [Mandatory], DeleteCount [Optional] [0 No Remove], The Items To Add [Optional])
            --- If Negative => Start From The End
*/

var myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);
console.log(myFriends.slice());
console.log(myFriends.slice(1));
console.log(myFriends.slice(1, 3));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1, -2));
console.log(myFriends.slice(-4, -2));
console.log(myFriends);

myFriends.splice(1, 2, "Sameer", "Samara");
console.log(myFriends);


// #__Joining Arrays__# //
console.log("#------------------------ex_38------------------------#");

/*
    • Arrays Methods [Joining]
        - concat(array, array) => Return A New Array
        - join(Separator) => Return A String
*/

var myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
var myNewFriends = ["Samar", "Sameh"];
var schoolFriends = ["Haytham", "Shady"];
var allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

console.log(allFriends);
console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());

// #__Array Challenge__# //
console.log("#------------------------ex_39------------------------#");
/*
    • Array Challenge
*/

var zero = 0;
var counter = 3;
var my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// Write Code Here
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice("????")); // ["Elham", "Mazero"]
console.log(); // "Elzero"
console.log(); // "rO"


// #__Loop – For and The Concept Of Loop__# //
console.log("#------------------------ex_40------------------------#");
/*
    • Loop
        - For
        for ([1] [2] [3]) {
            // Block Of Code
        }
*/
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log("*")
    }
}

// #__Loop On Sequences__# //
console.log("#------------------------ex_41------------------------#");

/*
    • Loop
        - Loop On Sequences
*/

var myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];
var onlyNames = [];
for (let i = 0; i < myFriends.length; i++) {
    if (typeof myFriends[i] === "string") {
        onlyNames.push(myFriends[i]);
    }
}
console.log(onlyNames);

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }

// #__Nested Loops And Trainings__# //
console.log("#------------------------ex_42------------------------#");
/*
    • Loop
        - Nested Loops
*/


var products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
var colors = ["Red", "Green", "Black"];
var models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
    console.log("#".repeat(15));
    console.log(`# ${products[i]}`);
    console.log("#".repeat(15));
    console.log("Colors: ");
    for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
    }
    console.log("Models: ");
    for (let k = 0; k < models.length; k++) {
        console.log(`- ${models[k]}`);
    }
}

// #__Loop Control – Break, Continue, Label__# //
console.log("#------------------------ex_43------------------------#");
/*
    • Loop Control
        - Break
        - Continue
        - Label
*/

var products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

var colors = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    nestedLoop: for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
        if (colors[j] === "Green") {
            break mainLoop;
        }
    }
}
// #__Loop For – Advanced Example__# //
console.log("#------------------------ex_44------------------------#");
/*
    • Loop For Advanced Example
*/

var products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
var i = 0;

for (; ;) {
    console.log(products[i]);
    i++;
    if (i === products.length) break;
}
// #__Practice – Add Products To Page__# //
console.log("#------------------------ex_45------------------------#");
/*
    • Products Practice
*/

var products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
var colors = ["Red", "Green", "Blue"];
var showCount = 3;

document.write(`<hr>`)
document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
    document.write(`<div>`);
    document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
    for (let j = 0; j < colors.length; j++) {
        document.write(`<p>${colors[j]}</p>`);
    }
    document.write(`<p>${colors.join(" | ")}</p>`);
    document.write(`</div>`);
}
document.write(`<hr>`)

// #__Loop – While__# //
console.log("#------------------------ex_46------------------------#");




// #__Loop – Do, While__# //
console.log("#------------------------ex_47------------------------#");
/*
    • Loop
        - While
        - Do / While
*/

var products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
var index = 0;

//> while example
while (index < products.length) {
    console.log(products[index]);
    index += 1;
}
//> do / while example
var i = 0;
do {
    console.log(i);
    i++;
} while (false);

console.log(i);

// #__Loop Challenge__# //
console.log("#------------------------ex_48------------------------#");

/*
    • Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

document.write(`<div>We Have X Admins</div>`);

mainLoop: for (let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") {
        break;
    }
    document.write(`<h3>The Admin For Team ${i + 1} Is ${myAdmins[i]}</h3>`);
    document.write(`<p>Team Members:</p>`);
    let counter = 1;
    nestedLoop: for (let j = 0; j < myEmployees.length; j++) {
        if (myEmployees[j][0] === myAdmins[i][0]) {
            document.write(`<span>${counter} - ${myEmployees[j]}</span><br>`);
            counter++;
        }
    }
    document.write(`<hr>`);
}

// #__Function Intro And Basic Usage__# //
console.log("#------------------------ex_49------------------------#");
/*
    • Function
        - What Is Function ?
        - User-Defined vs Built In
        - Syntax + Basic Usage
        - Example From Real Life
        - Parameter + Argument
        - Practical Example
*/


//! DRY = Don't Repeat Yourself
function sayHello(userName) {
    console.log(`Hi ${userName}`);
}

sayHello("Osama");
sayHello("Sayed");
sayHello("Ali");

// #__Function Advanced Example__# //
console.log("#------------------------ex_50------------------------#");
/*
    • Function Advanced Examples
*/

function sayHello(userName, age) {
    if (age < 20) {
        console.log(`App is Not Suitable For You`);
    } else {
        console.log(`Hello ${userName} Your Age is ${age}`);
    }
}

sayHello("Osama", 38);
sayHello("Sayed", 40);
sayHello("Ali", 18);

function generateYears(start, end, exclude) {
    for (let i = start; i <= end; i++) {
        if (i === exclude) {
            continue;
        }
        console.log(i);
    }
}

generateYears(1982, 2021, 2020);
// #__Function Return Statement And Use Cases__# //
console.log("#------------------------ex_51------------------------#");
/*
    • Function
        - Return
        - Automatic Semicolon Insertion [No Line Terminator Allowed]
        - Interrupting
*/

function generate(start, end) {
    for (let i = start; i <= end; i++) {
        if (i === 15) {
            return `Interrupting`;
        }
        console.log(i);
    }
}
generate(10, 20);
// #__Function Default Parameters__# //
console.log("#------------------------ex_52------------------------#");
/*
    • Function
        - Default Function Parameters
        - Function Parameters Default [Undefined]
        - Old Strategies [Condition + Logical Or]
        - ES6 Method
*/

function sayHello(username = "Unknown", age = "Unknown") {
    // if (age === undefined) {
    //   age = "Unknown";
    // }
    // age = age || "Unknown";
    return `Hello ${username} Your Age Is ${age}`;
}

console.log(sayHello());
// #__Function Rest Parameters__# //
console.log("#------------------------ex_53------------------------#");
/*
    • Function
        - Rest Parameters
        - Only One Allowed
        - Must Be Last Element
*/

function calc(...numbers) {
    // console.log(Array.isArray(numbers));
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i]; // result = result + numbers[i]
    }
    return `Final Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));


// #__Practice – Ultimate Function__# //
console.log("#------------------------ex_54------------------------#");
/*
    • Function Advanced Practice
        - Parameters
        - Default
        - Rest
        - Loop
        - Condition
*/

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
    document.write(`<div>`);
    document.write(`<h2>Welcome, ${us}</h2>`);
    document.write(`<p>Age: ${ag}</p>`);
    document.write(`<p>Hour Rate: $${rt}</p>`);
    if (show === "Yes") {
        if (sk.length > 0) {
            document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
        } else {
            document.write(`<p>Skills: No Skills</p>`);
        }
    } else {
        document.write(`<p>Skills Is Hidden</p>`);
    }
    document.write(`</div>`);
}
showInfo("Osama", 38, 20, "No", "Html", "CSS");

// #__Random Arguments Function Challenge__# //Red | Green | Blu
console.log("#------------------------ex_55------------------------#");
/*
    • Function - Random Argument Challenge
    ====================================
    Create Function showDetails
    Function Accept 3 Parameters [a, b, c]
    Data Types For Info Is
    - String => Name
    - Number => Age
    - Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend On Data Types
    - Use Ternary Conditional Operator
*/

function showDetails(...array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "string") {
            var name = array[i];
        }
        else if (typeof array[i] === "number") {
            var age = array[i];
        }
        else if (typeof array[i] === "boolean") {
            var status = array[i];
        }
    }
    console.log(`Hello ${name}, Your Age Is ${age}, You Are ${status ? "Available" : "Not Available"} For Hire`);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire

// #__Anonymous Function and Use Cases__# //
console.log("#------------------------ex_56------------------------#");

/*
    • Function
        - Anonymous Function
        - Calling Named Function vs Anonymous Function
        - Argument To Other Function
        - Task Without Name
        - SetTimeout
*/

let calculator = function (num1, num2) {
    return num1 + num2;
};

console.log(calculator(10, 20));


document.write(`<button id="show" style="padding: 10px 20px; font-size: 16px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">Show Message</button>`);
document.getElementById("show").onclick = function () {
    console.log("Hello Osama");
};

setTimeout(function elzero() {
    console.log("Good");
}, 2000);

// #__Return Nested Function__# //
console.log("#------------------------ex_57------------------------#");
/*
    • Function
        - Function Inside Function
        - Return Function
*/

//> Example 1
function sayMessage(fName, lName) {
    let message = `Hello`;
    //> Nested Function
    function concatMsg() {
        message = `${message} ${fName} ${lName}`;
    }
    concatMsg();
    return message;
}

console.log(sayMessage("Osama", "Mohamed"));

//> Example 2
function sayMessage(fName, lName) {
    let message = `Hello`;
    //> Nested Function
    function concatMsg() {
        return `${message} ${fName} ${lName}`;
    }
    return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));

//> Example 3
function sayMessage(fName, lName) {
    let message = `Hello`;
    //> Nested Function
    function concatMsg() {
        function getFullName() {
            return `${fName} ${lName}`;
        }
        return `${message} ${getFullName()}`;
    }
    return concatMsg();
}
console.log(sayMessage("Osama", "Mohamed"));

// #__Arrow Function Syntax__# //
console.log("#------------------------ex_58------------------------#");
/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

//> Example 1
var print = function () {
    return 10;
};

var print = () => 10;

var print = function (num) {
    return num;
};

//> Example 2
var print = num => num;

var print = function (num1, num2) {
    return num1 + num2;
};

var print = (num1, num2) => num1 + num2;

console.log(print(100, 50));
// #__Scope – Global And Local__# //
console.log("#------------------------ex_59------------------------#");
/*
    • Scope
        - Global And Local Scope
*/

var var1 = 1;
let var2 = 2;

function showText() {
    var var1 = 10;
    let var2 = 20;
    console.log(`Function - From Local ${var1}`);
    console.log(`Function - From Local ${var2}`);
}

console.log(`From Global ${var1}`);
console.log(`From Global ${var2}`);

showText();


// #__Scope – Block__# //
console.log("#------------------------ex_60------------------------#");
/*
    • Scope
        - Block Scope [If, Switch, For]
*/


//! var will affect globally if you use it inside a block
var x = 10;

if (10 === 10) {
    let x = 50;
    console.log(`From If Block ${x}`);
}

console.log(`From Global ${x}`);


// #__Scope – Lexical (Static)__# //
console.log("#------------------------ex_61------------------------#");

/*
    • Scope
        - Lexical Scope
    • Search
        - Execution Context
        - Lexical Environment
*/

function parent() {
    let a = 10;

    function child() {
        console.log(a);
        //console.log(`From Child ${b}`);

        function grand() {
            let b = 100;
            console.log(`From Grand ${a}`);
            console.log(`From Grand ${b}`);
        }
        grand();
    }
    child();
}
parent();

// #__Arrow Function Challenge__# //
console.log("#------------------------ex_62------------------------#");

/*
    • Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names = function (...array) {
    return `String [${array.join('], [')}] => Done !`;
};

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

var calc = (one, two, ...nums) => {
    return one + two;
};

console.log(calc(10, 20, ...myNumbers)); // 80


// #__Higher Order Functions – Map__ //
console.log("#------------------------ex_63------------------------#");
/*
    • Higher Order Functions
        ---> is a function that accepts functions as parameters and/or returns a function.
        - Map
            --- method creates a new array
            --- populated with the results of calling a provided function on every element
            --- in the calling array.
    • Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
        - Element => The current element being processed in the array.
        - Index => The index of the current element being processed in the array.
        - Array => The Current Array
    • Notes
        - Map Return A New Array
    • Examples
        - Anonymous Function
        - Named Function

*/

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
    newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// Same Idea With Map

// let addSelf = myNums.map(function (element, index, arr) {
//     // console.log(`Current Element => ${element}`);
//     // console.log(`Current Index => ${index}`);
//     // console.log(`Array => ${arr}`);
//     // console.log(`This => ${this}`);
//     return element + element;
// }, 10);

// let addSelf = myNums.map((a) => a + a);

// console.log(addSelf);

function addition(ele) {
    return ele + ele;
}

var add = myNums.map(addition);

console.log(add);
// #__Higher Order Functions – Map Practice__# //
console.log("#------------------------ex_64------------------------#");
/*
    • Map
        - Swap Cases
        - Inverted Numbers
        - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
var ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");

// Arrow Function Version

let sw = swappingCases
    .split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");

console.log(sw);

let inv = invertedNumbers.map(function (ele) {
    return -ele;
});

console.log(inv);

var ign = ignoreNumbers
    .split("")
    .map(function (ele) {
        return isNaN(parseInt(ele)) ? ele : "";
    })
    .join("");

console.log(ign);


// #__Higher Order Functions – Filter__# //
console.log("#------------------------ex_65------------------------#");
/*
    - Filter
        --- method creates a new array
        --- with all elements that pass the test implemented by the provided function.

    Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
        - Element => The current element being processed in the array.
        - Index => The index of the current element being processed in the array.
        - Array => The Current Array
*/

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterdFriends = friends.filter(function (el) {
    return el.startsWith("A") ? true : false;
});

console.log(filterdFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (el) {
    return el % 2 === 0;
});

console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);



// #__Higher Order Functions – Filter Practice__# //
console.log("#------------------------ex_66------------------------#");
/*
    • Filter
        - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
    .split(" ")
    .filter(function (ele) {
        return ele.length <= 4;
    })
    .join(" ");

console.log(smallWords);

// Ignore Numbers
var ignoreNumbers = "Elz123er4o";

var ign = ignoreNumbers
    .split("")
    .filter(function (ele) {
        return isNaN(parseInt(ele));
    })
    .join("");

console.log(ign);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixedContent = mix
    .split("")
    .filter(function (ele) {
        return !isNaN(parseInt(ele));
    })
    .map(function (ele) {
        return ele * ele;
    })
    .join("");

console.log(mixedContent);

// #__Higher Order Functions – Reduce__# //
console.log("#------------------------ex_67------------------------#");
/*
    - Reduce
    --- method executes a reducer function on each element of the array,
    --- resulting in a single output value.

    Syntax
    reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
    - Accumulator => the accumulated value previously returned in the last invocation
    - Current Val => The current element being processed in the array
    - Index => The index of the current element being processed in the array.
    ---------- Starts from index 0 if an initialValue is provided.
    ---------- Otherwise, it starts from index 1.
    - Array => The Current Array
*/

let nums = [10, 20, 15, 30];

var add = nums.reduce(function (acc, current, index, arr) {
    console.log(`Acc => ${acc}`);
    console.log(`Current Element => ${current}`);
    console.log(`Current Element Index => ${index}`);
    console.log(`Array => ${arr}`);
    console.log(acc + current);
    console.log(`#############`);
    return acc + current;
}, 5);

console.log(add);

// #__Higher Order Functions – Reduce Practice__# //
console.log("#------------------------ex_68------------------------#");
/*
    • Reduce
        - Longest Word
        - Remove Characters + Use Reduce
*/

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

let check = theBiggest.reduce(function (acc, current) {
    console.log(`Acc => ${acc}`);
    console.log(`Current Element => ${current}`);
    console.log(acc.length > current.length ? acc : current);
    console.log(`#############`);
    return acc.length > current.length ? acc : current;
});

console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
    .filter(function (ele) {
        return ele !== "@";
    })
    .reduce(function (acc, current) {
        return `${acc}${current}`;
    });

console.log(finalString);


// #__Higher Order Functions – ForEach And Practice__# //ce
console.log("#------------------------ex_69------------------------#");

document.write(`
    <hr>
    <ul>
        <li class="active">One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
    <div class="content">
        <div>Div One</div>
        <div>Div Two</div>
        <div>Div Three</div>
    </div>`
)

/*
    • forEach
        --- method executes a provided function once for each array element.    
    • Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
        - Element => The current element being processed in the array.
        - Index => The index of the current element being processed in the array.
        - Array - The Current Array
    • Note
        - Doesnt Return Anything [Undefined]
        - Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
    ele.onclick = function () {
        // Remove Active Class From All Elements
        allLis.forEach(function (ele) {
            ele.classList.remove("active");
        });
        // Add Active Class To This Element
        this.classList.add("active");
        // Hide All Divs
        allDivs.forEach(function (ele) {
            ele.style.display = "none";
        });
    };
});
// #__Higher Order Functions Challenge__# //
console.log("#------------------------ex_70------------------------#");
/*
    • Higher Order Functions Challenges
        You Can Use
        - ,
        - _
        - Space
        - True => 1 => One Time Only In The Code
        You Cannot Use
        - Numbers
        - Letters
        - You Must Use [Filter + Map + Reduce + Your Knowledge]
        - Order Is Not Important
        - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split().map((ele) => console.log(ele));

console.log(solution); // Elzero Web School

// #__Object – Introduction__# //
console.log("#------------------------ex_71------------------------#");

/*
    • Object
        - Intro and What Is Object
        - Testing Window Object
        - Accessing Object
*/

var user = {
    // Properties
    theName: "Osama",
    theAge: 38,
    // Methods
    sayHello: function () {
        return `Hello`;
    },
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());
// #__Dot Notation vs Bracket Notation__# //
console.log("#------------------------ex_72------------------------#");
/*
    • Object
        - Dig Deeper
        - Dot Notation vs Bracket Notation
        - Dynamic Property Name
*/

var myVar = "country";

var user = {
    theName: "Osama",
    country: "Egypt",
};

console.log(user.theName);
console.log(user.country); // user.country
console.log(user.myVar); // user.country -> undefined
console.log(user[myVar]); // user.country

// #__Nested Object And Advanced Examples__# //
console.log("#------------------------ex_73------------------------#");
/*
  Object
  - Nested Object And Trainings
*/

var available = true;

var user = {
    name: "Osama",
    age: 38,
    skills: ["HTML", "CSS", "JS"],
    available: false,
    addresses: {
        ksa: "Riyadh",
        egypt: {
            one: "Cairo",
            two: "Giza",
        },
    },
    checkAv: function () {
        if (user.available === true) {
            return `Free For Work`;
        } else {
            return `Not Free`;
        }
    },
    checkAvArrow: () => {
        return user.available ? `Free For Work` : `Not Free`;
    }
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]); // Access With Index
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addresses"].egypt.one);
console.log(user["addresses"]["egypt"]);
console.log(user["addresses"]["egypt"]["one"]);

console.log(user.checkAv());
console.log(user.checkAvArrow());

// #__Create Object With New Keyword__# //
console.log("#------------------------ex_74------------------------#");
/*
    • Object
        - Create With New Keyword new Object();
*/

var user = new Object({
    age: 20,
});

console.log(user);

user.age = 38;
user["country"] = "Egypt";

user.sayHello = function () {
    return `Hello`;
};

console.log(user);
console.log(user.age);
console.log(user.country);
console.log(user.sayHello());

// #__This Keyword__# //
console.log("#------------------------ex_75------------------------#");
/*
    • Function this Keyword
        - this Introduction
        - this Inside Object Method
        --- When a function is called as a method of an object,
        --- its this is set to the object the method is called on.
        - Global Object
        - Test Variables With Window And This
        - Global Context
        - Function Context

    • Search
        - Strict Mode
*/

console.log(this);
console.log(this === window);

myVar = 100;

console.log(window.myVar);
console.log(this.myVar);

function sayHello() {
    console.log(this);
    return this;
}
sayHello();

console.log(sayHello() === window);

document.write(`<hr><button id="cl" style="padding: 10px 20px; font-size: 16px; background-color: #008CBA; color: white; border: none; border-radius: 5px; cursor: pointer;">Click Me</button>
`);
document.getElementById("cl").onclick = function () {
    console.log(this);
};

var user = {
    age: 38,
    ageInDays: function () {
        console.log(this);
        return this.age * 365;
    },
};

console.log(user.age);
console.log(user.ageInDays());

// #__Create Object With Create Method__# //
console.log("#------------------------ex_76------------------------#");
/*
    • Object
        - Create Object With Create Method
*/

var user = {
    age: 20,
    doubleAge: function () {
        return this.age * 2;
    },
};

console.log(user);
console.log(user.age);
console.log(user.doubleAge());

var obj = Object.create({});

obj.a = 100;

console.log(obj);

var copyObj = Object.create(user);

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

// #__Create Object With Assign Method__# //
console.log("#------------------------ex_77------------------------#");
/*
    • Object
        - Create Object With Assign Method  
*/

var obj1 = {
    prop1: 1,
    meth1: function () {
        return this.prop1;
    },
};

var obj2 = {
    prop2: 2,
    meth2: function () {
        return this.prop2;
    },
};

var targetObject = {
    prop1: 100,
    prop3: 3,
};

var finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject);

var newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);

// #__What Is DOM ? And Select Elements__# //
console.log("#------------------------ex_78------------------------#");
/*
    • DOM
        - What Is DOM
        - DOM Selectors
        --- Find Element By ID
        --- Find Element By Tag Name
        --- Find Element By Class Name
        --- Find Element By CSS Selectors
        --- Find Element By Collection
        ------ title
        ------ body
        ------ images
        ------ forms
        ------ links
*/

document.write(`
<hr>
<span class="my-span special">My Span 1</span>
<span class="my-span">My Span 2</span>
<p>Hello Paragraph 1</p>
<p>Hello Paragraph 2</p>
<div id="my-div">Hello Div</div>
<form action="">
    <input type="text" name="one" value="Hello" />
</form>
<form action="">
    <input type="text" name="two" value="Hello" />
</form>
<a href="https://google.com">Google</a><br>
<a href="https://facebook.com">Facebook</a>
`);



var myIdElement = document.getElementById("my-div");
var myTagElements = document.getElementsByTagName("p");
var myClassElement = document.getElementsByClassName("my-span");
var myQueryElement = document.querySelector(".my-span");
var myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements[1]);
console.log(myClassElement[1]);
console.log(myQueryElement);
console.log(myQueryAllElement[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);

// #__Get, Set Elements Content And Attributes__# //
console.log("#------------------------ex_79------------------------#");
/*
    • DOM [Get / Set Elements Content And Attributes]
        - innerHTML
        - textContent
        - Change Attributes Directly
        - Change Attributes With Methods
        --- getAttribute
        --- setAttribute

    • Search
        - innerText
*/

document.write(`
    <hr>
    <div class="js">JavaScript <span>Div</span></div><br>
    <img src="" alt="" /><br>
    <a class="link" href="#">Google</a>
`);

var myElement = document.querySelector(".js");

console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";

document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

var myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");

// #__Check Attributes And Examples__# //
console.log("#------------------------ex_80------------------------#");
/*
    • DOM [Check Attributes]
        - Element.attributes
        - Element.hasAttribute
        - Element.hasAttributes
        - Element.removeAttribute
*/


document.write(`
    <hr>
    <div>Div</div>
    <p class="para" title="Paragraph" data-src="Testing">Paragraph</p>
    <hr>
`);

var len = document.getElementsByTagName("p").length;

console.log(document.getElementsByTagName("p")[len - 1].attributes);

let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
    if (myP.getAttribute("data-src") === "") {
        myP.removeAttribute("data-src");
    } else {
        myP.setAttribute("data-src", "New Value");
    }
} else {
    console.log(`Not Found`);
}

if (myP.hasAttributes()) {
    console.log(`Has Attributes`);
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
    console.log(`Has Attributes`);
} else {
    console.log(`Div Has No Attributes`);
}
// #__Create And Append Elements__# //
console.log("#------------------------ex_81------------------------#");
/*
    • DOM [Create Elements]
        - createElement
        - createComment
        - createTextNode
        - createAttribute
        - appendChild
*/

var myElement = document.createElement("div");
var myAttr = document.createAttribute("data-custom");
var myText = document.createTextNode("Product One");
var myComment = document.createComment("This Is Div");

myElement.className = "product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test", "Testing");

// Append Comment To Element
myElement.appendChild(myComment);

// Append Text To Element
myElement.appendChild(myText);

// Append Element To Body
document.body.appendChild(myElement);

document.write(`<hr>`);

// #__Product With Heading And Paragraph Practice__# //
console.log("#------------------------ex_82------------------------#");
/*
    • DOM [Create Elements]
        - Practice Product With Heading And Paragraph
*/

var myMainElement = document.createElement("div");
var myHeading = document.createElement("h2");
var myParagraph = document.createElement("p");

var myHeadingText = document.createTextNode("Product Title");
var myParagraphText = document.createTextNode("Product Description");

// Add Heading Text
myHeading.appendChild(myHeadingText);

// Add Heading To Main Element
myMainElement.appendChild(myHeading);

// Add Paragraph Text
myParagraph.appendChild(myParagraphText);

// Add Paragraph To Main Element
myMainElement.appendChild(myParagraph);

myMainElement.className = "product";

document.body.appendChild(myMainElement);
document.write(`<hr>`);

// #__Deal With Children__# //
console.log("#------------------------ex_83------------------------#");
/*
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/


document.write(`
    <div>
        <!-- Osama -->
        Hello Div
        <p>
            Hello P
        </p>
        <span>
            Hello Span
        </span>
        <!-- Comment -->
        Hello
    </div><hr>
    `);

var myElement = document.querySelector("div");

console.log(myElement);
console.log(myElement.children);
console.log(myElement.children[0]);
console.log(myElement.childNodes);
console.log(myElement.childNodes[0]);

console.log(myElement.firstChild);
console.log(myElement.lastChild);

console.log(myElement.firstElementChild);
console.log(myElement.lastElementChild);

// #__DOM Events__# //
console.log("#------------------------ex_84------------------------#");
/*
    • DOM [Events]
    - Use Events On HTML
    - Use Events On JS
        --- onclick
        --- oncontextmenu
        --- onmouseenter
        --- onmouseleave

        --- onload
        --- onscroll
        --- onresize

        --- onfocus
        --- onblur
        --- onsubmit
*/


document.write(`
    <button id="btn" onclick="console.log('Clicked')" style="padding: 10px 20px; font-size: 16px; background-color: #f44336; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Button
    </button>
    <br><br>
    <form action="">
        <input type="text" />
        <input type="submit" value="Submit Data"  />
    </form>
`);

var myBtn = document.getElementById("btn");

myBtn.onmouseleave = function () {
    console.log("Clicked");
};

window.onresize = function () {
    console.log("Scroll");
};
// #__Validate Form And Prevent Default__# //
console.log("#------------------------ex_85------------------------#");

/*
    • DOM [Events]
        - Validate Form Practice
        - Prevent Default
*/


document.write(`
    <hr>
    <form id="myForm" action="">
        <input type="text" name="username" placeholder="Max 10 Chars Only" /><br><br>
        <input type="text" name="age" placeholder="Cant Be Empty" /><br><br>
        <input type="submit" value="Submit Data" />
    </form>
    <br><br>
    <a id="myLink" href="https://google.com">Google</a>
    `);


var userInput = document.querySelector("[name='username']");
var ageInput = document.querySelector("[name='age']");

document.getElementById("myForm").onsubmit = function (e) {
    var userValid = false;
    var ageValid = false;
    if (userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true;
    }
    if (ageInput.value !== "") {
        ageValid = true;
    }
    if (userValid === false || ageValid === false) {
        e.preventDefault();
    }
};

document.getElementById("myLink").onclick = function (event) {
    console.log(event);
    event.preventDefault();
};

// #__Event Simulation – Click, Focus, Blur__# //
console.log("#------------------------ex_86------------------------#");
/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/



document.write(`
    <hr>
    <form action="">
        <input class="one" type="text" placeholder="First Input" /><br><br>
        <input class="two" type="text" placeholder="Second Input" /><br><br>
        <input type="submit" value="Submit Data" />
        </form>
    <a id="myLink2" href="https://google.com">Google</a>
    
    `);
var one = document.querySelector(".one");
var two = document.querySelector(".two");

window.onload = function () {
    two.focus();
};

one.onblur = function () {
    document.getElementById("myLink2").click();
};
// #__ClassList Object and Methods__# //
console.log("#------------------------ex_87------------------------#");
/*
    • DOM [Class List]
    - classList
        --- length
        --- contains
        --- item(index)
        --- add
        --- remove
        --- toggle
*/

document.write(`
    <hr>
    <div id="my-div1" class="one two show test">
        Dive with many classes
    </div>
`);


var element = document.getElementById("my-div1");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));
console.log(element.classList.item("3"));

element.onclick = function () {
    element.classList.toggle("show");
};

// #__CSS Styling And Stylesheets__# //
console.log("#------------------------ex_88------------------------#");
/*
  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, Stylesheet]
  - setProperty(propertyName, value, priority)
*/


document.write(`
    <hr>
    <div id="my-div2" class="one two show test">
        Dive with many classes
    </div>
`);
var element = document.getElementById("my-div2");


element.style.color = "red";
element.style.fontWeight = "bold";

element.style.cssText = "font-weight: bold; color: green; opacity: 0.9";

element.style.removeProperty("color");
element.style.setProperty("font-size", "40px", "important");

document.styleSheets[0].rules[0].style.removeProperty("line-height");
document.styleSheets[0].rules[0].style.setProperty("background-color", "red", "important");

// #__Before, After, Prepend, Append, Remove__# //
console.log("#------------------------ex_89------------------------#");
/*
  DOM [Deal With Elements]
    - before [Element || String]
    - after [Element || String]
    - append [Element || String]
    - prepend [Element || String]
    - remove
*/


document.write(`
    <hr>
    <div id="my-div3">
        Div Has 
        <span>
            Span
        </span> 
    </div>
`);

var element = document.getElementById("my-div3");
var createdP = document.createElement("p");

// element.before("Hello Before");
// element.after("Hello After");

// element.before(createdP);
// element.after(createdP);

element.append(" Hello Append ");
element.prepend(" Hello Prepend ");



// element.remove();

// #__DOM Traversing__# //
console.log("#------------------------ex_90------------------------#");
/*
    • DOM [Traversing]
        - nextSibling
        - previousSibling
        - nextElementSibling
        - previousElementSibling
        - parentElement
*/

document.write(
`
<hr>
    <div id="my-div4">
        <span class="spanOne">
        One
            <!-- Comment -->
        </span>
        <span class="spanTwo">
        Two
            <!-- Comment -->
        </span>
        <span class="spanThree">
        Three
            <!-- Comment -->
        </span>
</div>
`
);

var span = document.querySelector(".spanTwo");

console.log(span.nextSibling);
console.log(span.nextElementSibling);
console.log(span.previousSibling);
console.log(span.previousElementSibling);
console.log(span.parentElement);


span.onclick = function () {
    span.parentElement.remove();
}
// #__DOM Cloning__# //
console.log("#------------------------ex_91------------------------#");
// #__addEventListener__# //
console.log("#------------------------ex_92------------------------#");
// #__DOM Challenge__# //
console.log("#------------------------ex_93------------------------#");
// #__What Is BOM ?__# //
console.log("#------------------------ex_94------------------------#");
// #__Alert, Confirm, Prompt__# //
console.log("#------------------------ex_95------------------------#");
// #__setTimeout and clearTimeout__# //
console.log("#------------------------ex_96------------------------#");
// #__setInterval and clearInterval__# //
console.log("#------------------------ex_97------------------------#");
// #__Window Location Object__# //
console.log("#------------------------ex_98------------------------#");
// #__Window Open And Close__# //
console.log("#------------------------ex_99------------------------#");
// #__Window History Object__# //
console.log("#------------------------ex_100------------------------#");
// #__Scroll, ScrollTo, ScrollBy, Focus, Print, S__# //top
console.log("#------------------------ex_101------------------------#");
// #__Scroll To Top Using ScrollY Practice__# //
console.log("#------------------------ex_102------------------------#");
// #__Local Storage__# //
console.log("#------------------------ex_103------------------------#");
// #__Local Storage Color App Practice__# //
console.log("#------------------------ex_104------------------------#");
// #__Session Storage And Use Cases__# //
console.log("#------------------------ex_105------------------------#");
// #__BOM Challenge__# //
console.log("#------------------------ex_106------------------------#");
// #__Destructuring Arrays Part 1__# //
console.log("#------------------------ex_107------------------------#");
// #__Destructuring Arrays Part 2__# //
console.log("#------------------------ex_108------------------------#");
// #__Destructuring Arrays Part 3 Swap Variables__# //
console.log("#------------------------ex_109------------------------#");
// #__Destructuring Objects Part 1__# //
console.log("#------------------------ex_110------------------------#");
// #__Destructuring Objects Part 2__# //
console.log("#------------------------ex_111------------------------#");
// #__Destructuring Function Parameters__# //
console.log("#------------------------ex_112------------------------#");
// #__Destructuring Mixed Content__# //
console.log("#------------------------ex_113------------------------#");
// #__Destructuring Challenge__# //
console.log("#------------------------ex_114------------------------#");
// #__Set Data Type And Methods__# //
console.log("#------------------------ex_115------------------------#");
// #__Set vs WeakSet And Garbage Collector__# //
console.log("#------------------------ex_116------------------------#");
// #__Map Data Type vs Object__# //
console.log("#------------------------ex_117------------------------#");
// #__Map Methods__# //
console.log("#------------------------ex_118------------------------#");
// #__Map vs WeakMap__# //
console.log("#------------------------ex_119------------------------#");
// #__Array.from Method__# //
console.log("#------------------------ex_120------------------------#");
// #__Array.copyWithin Method__# //
console.log("#------------------------ex_121------------------------#");
// #__Array.some Method__# //
console.log("#------------------------ex_122------------------------#");
// #__Array.every Method__# //
console.log("#------------------------ex_123------------------------#");
// #__Spread Syntax And Use Cases__# //
console.log("#------------------------ex_124------------------------#");
// #__Map And Set Challenge__# //
console.log("#------------------------ex_125------------------------#");
// #__Intro And What Is Regular Expression?__# //
console.log("#------------------------ex_126------------------------#");
// #__Regular Expression – Modifiers__# //
console.log("#------------------------ex_127------------------------#");
// #__Regular Expression – Ranges Part 1__# //
console.log("#------------------------ex_128------------------------#");
// #__Regular Expression – Ranges Part 2__# //
console.log("#------------------------ex_129------------------------#");
// #__Regular Expression – Character Classes Part__# // 1
console.log("#------------------------ex_130------------------------#");
// #__Regular Expression – Character Classes Part__# // 2
console.log("#------------------------ex_131------------------------#");
// #__Regular Expression – Quantifiers Part 1__# //
console.log("#------------------------ex_132------------------------#");
// #__Regular Expression – Quantifiers Part 2__# //
console.log("#------------------------ex_133------------------------#");
// #__Regular Expression – Quantifiers Part 3__# //
console.log("#------------------------ex_134------------------------#");
// #__Regular Expression – Replace With Pattern__# //
console.log("#------------------------ex_135------------------------#");
// #__Regular Expression – Form Validation__# //
console.log("#------------------------ex_136------------------------#");
// #__Test Your Regular Expression And Discussion__# //s
console.log("#------------------------ex_137------------------------#");
// #__Regular Expression Challenge__# //
console.log("#------------------------ex_138------------------------#");
// #__OOP Introduction__# //
console.log("#------------------------ex_139------------------------#");
// #__Constructor Function Introduction__# //
console.log("#------------------------ex_140------------------------#");
// #__Constructor Function New Syntax__# //
console.log("#------------------------ex_141------------------------#");
// #__Deal With Properties And Methods__# //
console.log("#------------------------ex_142------------------------#");
// #__Update Properties & Built In Constructors__# //
console.log("#------------------------ex_143------------------------#");
// #__Class Static Properties And Methods__# //
console.log("#------------------------ex_144------------------------#");
// #__Class Inheritance__# //
console.log("#------------------------ex_145------------------------#");
// #__Class Encapsulation__# //
console.log("#------------------------ex_146------------------------#");
// #__Prototype Introduction__# //
console.log("#------------------------ex_147------------------------#");
// #__Add To Prototype Chain__# //
console.log("#------------------------ex_148------------------------#");
// #__Object Meta Data And Descriptor Part 1__# //
console.log("#------------------------ex_149------------------------#");
// #__Object Meta Data And Descriptor Part 2__# //
console.log("#------------------------ex_150------------------------#");
// #__Date And Time Introduction__# //
console.log("#------------------------ex_151------------------------#");
// #__Get Date And Time__# //
console.log("#------------------------ex_152------------------------#");
// #__Set Date And Time__# //
console.log("#------------------------ex_153------------------------#");
// #__Formatting Date And Time__# //
console.log("#------------------------ex_154------------------------#");
// #__Tracking Operations Time__# //
console.log("#------------------------ex_155------------------------#");
// #__Generator Function Introduction__# //
console.log("#------------------------ex_156------------------------#");
// #__Delegate Generator Function__# //
console.log("#------------------------ex_157------------------------#");
// #__Generate Infinite Numbers__# //
console.log("#------------------------ex_158------------------------#");
// #__Modules Import And Export__# //
console.log("#------------------------ex_159------------------------#");
// #__Named vs Default Export And Import All__# //
console.log("#------------------------ex_160------------------------#");
// #__What Is JSON__# //
console.log("#------------------------ex_161------------------------#");
// #__JSON Syntax And Compare With JS Object__# //
console.log("#------------------------ex_162------------------------#");
// #__What Is API__# //
console.log("#------------------------ex_163------------------------#");
// #__Parse And Stringify__# //
console.log("#------------------------ex_164------------------------#");
// #__Asynchronous vs Synchronous Programming__# //
console.log("#------------------------ex_165------------------------#");
// #__Call Stack And Web API__# //
console.log("#------------------------ex_166------------------------#");
// #__Event Loop And Callback Queue__# //
console.log("#------------------------ex_167------------------------#");
// #__What Is AJAX And Network Information__# //
console.log("#------------------------ex_168------------------------#");
// #__Request And Response From Real API__# //
console.log("#------------------------ex_169------------------------#");
// #__Loop On Data__# //
console.log("#------------------------ex_170------------------------#");
// #__Callback Hell Or Pyramid Of Doom__# //
console.log("#------------------------ex_171------------------------#");
// #__Promise Intro And Syntax__# //
console.log("#------------------------ex_172------------------------#");
// #__Promise – Then, Catch And Finally__# //
console.log("#------------------------ex_173------------------------#");
// #__Promise And XHR__# //
console.log("#------------------------ex_174------------------------#");
// #__Fetch API__# //
console.log("#------------------------ex_175------------------------#");
// #__Promise – All, All Settled, Race__# //
console.log("#------------------------ex_176------------------------#");
// #__Async And Training__# //
console.log("#------------------------ex_177------------------------#");
// #__Await And Training__# //
console.log("#------------------------ex_178------------------------#");
// #__Try, Catch, Finally With Fetch__# //
console.log("#------------------------ex_179------------------------#");
// #__The End And Advices__# //
console.log("#------------------------ex_180------------------------#");
