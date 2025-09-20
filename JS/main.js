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
// note: var is optional but best practice to use it
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
console.log(++10 + +"20"++ + +80++ - +10++); // 100
console.log(++10 + -"20" + +80++ - -10++ + +10); // 100
console.log(--80 + +"20" + --10 * +"20"++ - +"20" * 10 + --10 - +true);// 100



// #__Number__# //

// #__Number Methods__# //

// #__Math Object__# //

// #__Number Challenge__# //

// #__String Methods Part 1__# //

// #__String Methods Part 2__# //

// #__String Methods Part 3__# //

// #__String Challenge__# //

// #__Comparison Operators__# //

// #__Logical Operators__# //

// #__If Conditions__# //

// #__Nested If Conditions__# //

// #__Conditional Ternary Operator__# //

// #__Nullish Coalescing Operator & Logical Or__# //

// #__If Condition Challenge__# //

// #__Switch Statement__# //

// #__Switch And If Condition Challenge__# //

// #__Array Big Introduction__# //

// #__Using Length With Array__# //

// #__Add And Remove From Array__# //

// #__Searching Array__# //

// #__Sorting Array__# //

// #__Slicing Array__# //

// #__Joining Arrays__# //

// #__Array Challenge__# //

// #__Loop – For and The Concept Of Loop__# //

// #__Loop On Sequences__# //

// #__Nested Loops And Trainings__# //

// #__Loop Control – Break, Continue, Label__# //

// #__Loop For – Advanced Example__# //

// #__Practice – Add Products To Page__# //

// #__Loop – While__# //

// #__Loop – Do, While__# //

// #__Loop Challenge__# //

// #__Function Intro And Basic Usage__# //

// #__Function Advanced Example__# //

// #__Function Return Statement And Use Cases__# //

// #__Function Default Parameters__# //

// #__Function Rest Parameters__# //

// #__Practice – Ultimate Function__# //

// #__Random Arguments Function Challenge__# //

// #__Anonymous Function and Use Cases__# //

// #__Return Nested Function__# //

// #__Arrow Function Syntax__# //

// #__Scope – Global And Local__# //

// #__Scope – Block__# //

// #__Scope – Lexical (Static)__# //

// #__Arrow Function Challenge__# //

// #__Higher Order Functions – Map__# //

// #__Higher Order Functions – Map Practice__# //

// #__Higher Order Functions – Filter__# //

// #__Higher Order Functions – Filter Practice__# //

// #__Higher Order Functions – Reduce__# //

// #__Higher Order Functions – Reduce Practice__# //

// #__Higher Order Functions – ForEach And Practice__# //ce

// #__Higher Order Functions Challenge__# //

// #__Object – Introduction__# //

// #__Dot Notation vs Bracket Notation__# //

// #__Nested Object And Advanced Examples__# //

// #__Create Object With New Keyword__# //

// #__This Keyword__# //

// #__Create Object With Create Method__# //

// #__Create Object With Assign Method__# //

// #__What Is DOM ? And Select Elements__# //

// #__Get, Set Elements Content And Attributes__# //

// #__Check Attributes And Examples__# //

// #__Create And Append Elements__# //

// #__Product With Heading And Paragraph Practice__# //

// #__Deal With Children__# //

// #__DOM Events__# //

// #__Validate Form And Prevent Default__# //

// #__Event Simulation – Click, Focus, Blur__# //

// #__ClassList Object and Methods__# //

// #__CSS Styling And Stylesheets__# //

// #__Before, After, Prepend, Append, Remove__# //

// #__DOM Traversing__# //

// #__DOM Cloning__# //

// #__addEventListener__# //

// #__DOM Challenge__# //

// #__What Is BOM ?__# //

// #__Alert, Confirm, Prompt__# //

// #__setTimeout and clearTimeout__# //

// #__setInterval and clearInterval__# //

// #__Window Location Object__# //

// #__Window Open And Close__# //

// #__Window History Object__# //

// #__Scroll, ScrollTo, ScrollBy, Focus, Print, S__# //top

// #__Scroll To Top Using ScrollY Practice__# //

// #__Local Storage__# //

// #__Local Storage Color App Practice__# //

// #__Session Storage And Use Cases__# //

// #__BOM Challenge__# //

// #__Destructuring Arrays Part 1__# //

// #__Destructuring Arrays Part 2__# //

// #__Destructuring Arrays Part 3 Swap Variables__# //

// #__Destructuring Objects Part 1__# //

// #__Destructuring Objects Part 2__# //

// #__Destructuring Function Parameters__# //

// #__Destructuring Mixed Content__# //

// #__Destructuring Challenge__# //

// #__Set Data Type And Methods__# //

// #__Set vs WeakSet And Garbage Collector__# //

// #__Map Data Type vs Object__# //

// #__Map Methods__# //

// #__Map vs WeakMap__# //

// #__Array.from Method__# //

// #__Array.copyWithin Method__# //

// #__Array.some Method__# //

// #__Array.every Method__# //

// #__Spread Syntax And Use Cases__# //

// #__Map And Set Challenge__# //

// #__Intro And What Is Regular Expression?__# //

// #__Regular Expression – Modifiers__# //

// #__Regular Expression – Ranges Part 1__# //

// #__Regular Expression – Ranges Part 2__# //

// #__Regular Expression – Character Classes Part__# // 1

// #__Regular Expression – Character Classes Part__# // 2

// #__Regular Expression – Quantifiers Part 1__# //

// #__Regular Expression – Quantifiers Part 2__# //

// #__Regular Expression – Quantifiers Part 3__# //

// #__Regular Expression – Replace With Pattern__# //

// #__Regular Expression – Form Validation__# //

// #__Test Your Regular Expression And Discussion__# //s

// #__Regular Expression Challenge__# //

// #__OOP Introduction__# //

// #__Constructor Function Introduction__# //

// #__Constructor Function New Syntax__# //

// #__Deal With Properties And Methods__# //

// #__Update Properties & Built In Constructors__# //

// #__Class Static Properties And Methods__# //

// #__Class Inheritance__# //

// #__Class Encapsulation__# //

// #__Prototype Introduction__# //

// #__Add To Prototype Chain__# //

// #__Object Meta Data And Descriptor Part 1__# //

// #__Object Meta Data And Descriptor Part 2__# //

// #__Date And Time Introduction__# //

// #__Get Date And Time__# //

// #__Set Date And Time__# //

// #__Formatting Date And Time__# //

// #__Tracking Operations Time__# //

// #__Generator Function Introduction__# //

// #__Delegate Generator Function__# //

// #__Generate Infinite Numbers__# //

// #__Modules Import And Export__# //

// #__Named vs Default Export And Import All__# //

// #__What Is JSON__# //

// #__JSON Syntax And Compare With JS Object__# //

// #__What Is API__# //

// #__Parse And Stringify__# //

// #__Asynchronous vs Synchronous Programming__# //

// #__Call Stack And Web API__# //

// #__Event Loop And Callback Queue__# //

// #__What Is AJAX And Network Information__# //

// #__Request And Response From Real API__# //

// #__Loop On Data__# //

// #__Callback Hell Or Pyramid Of Doom__# //

// #__Promise Intro And Syntax__# //

// #__Promise – Then, Catch And Finally__# //

// #__Promise And XHR__# //

// #__Fetch API__# //

// #__Promise – All, All Settled, Race__# //

// #__Async And Training__# //

// #__Await And Training__# //

// #__Try, Catch, Finally With Fetch__# //

// #__The End And Advices__# //
