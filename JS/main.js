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
// #__Random Arguments Function Challenge__# //Red | Green | Blu
console.log("#------------------------ex_55------------------------#");
// #__Anonymous Function and Use Cases__# //
console.log("#------------------------ex_56------------------------#");
// #__Return Nested Function__# //
console.log("#------------------------ex_57------------------------#");
// #__Arrow Function Syntax__# //
console.log("#------------------------ex_58------------------------#");
// #__Scope – Global And Local__# //
console.log("#------------------------ex_59------------------------#");
// #__Scope – Block__# //
console.log("#------------------------ex_60------------------------#");
// #__Scope – Lexical (Static)__# //
console.log("#------------------------ex_61------------------------#");
// #__Arrow Function Challenge__# //
console.log("#------------------------ex_62------------------------#");
// #__Higher Order Functions – Map__# //
console.log("#------------------------ex_63------------------------#");
// #__Higher Order Functions – Map Practice__# //
console.log("#------------------------ex_64------------------------#");
// #__Higher Order Functions – Filter__# //
console.log("#------------------------ex_65------------------------#");
// #__Higher Order Functions – Filter Practice__# //
console.log("#------------------------ex_66------------------------#");
// #__Higher Order Functions – Reduce__# //
console.log("#------------------------ex_67------------------------#");
// #__Higher Order Functions – Reduce Practice__# //
console.log("#------------------------ex_68------------------------#");
// #__Higher Order Functions – ForEach And Practice__# //ce
console.log("#------------------------ex_69------------------------#");
// #__Higher Order Functions Challenge__# //
console.log("#------------------------ex_70------------------------#");
// #__Object – Introduction__# //
console.log("#------------------------ex_71------------------------#");
// #__Dot Notation vs Bracket Notation__# //
console.log("#------------------------ex_72------------------------#");
// #__Nested Object And Advanced Examples__# //
console.log("#------------------------ex_73------------------------#");
// #__Create Object With New Keyword__# //
console.log("#------------------------ex_74------------------------#");
// #__This Keyword__# //
console.log("#------------------------ex_75------------------------#");
// #__Create Object With Create Method__# //
console.log("#------------------------ex_76------------------------#");
// #__Create Object With Assign Method__# //
console.log("#------------------------ex_77------------------------#");
// #__What Is DOM ? And Select Elements__# //
console.log("#------------------------ex_78------------------------#");
// #__Get, Set Elements Content And Attributes__# //
console.log("#------------------------ex_79------------------------#");
// #__Check Attributes And Examples__# //
console.log("#------------------------ex_80------------------------#");
// #__Create And Append Elements__# //
console.log("#------------------------ex_81------------------------#");
// #__Product With Heading And Paragraph Practice__# //
console.log("#------------------------ex_82------------------------#");
// #__Deal With Children__# //
console.log("#------------------------ex_83------------------------#");
// #__DOM Events__# //
console.log("#------------------------ex_84------------------------#");
// #__Validate Form And Prevent Default__# //
console.log("#------------------------ex_85------------------------#");
// #__Event Simulation – Click, Focus, Blur__# //
console.log("#------------------------ex_86------------------------#");
// #__ClassList Object and Methods__# //
console.log("#------------------------ex_87------------------------#");
// #__CSS Styling And Stylesheets__# //
console.log("#------------------------ex_88------------------------#");
// #__Before, After, Prepend, Append, Remove__# //
console.log("#------------------------ex_89------------------------#");
// #__DOM Traversing__# //
console.log("#------------------------ex_90------------------------#");
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
