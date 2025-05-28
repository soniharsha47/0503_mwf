# What is Js ?
-> Scripting lang
-> Used for client side scripting, used for server side script, DS/DA
-> Used for creating dynamic web pages
-> Used for creating mobile apps, desktop apps, etc.

# Types of JS :
1) DOM      -> Document Object Model
2) BOM      -> Browser Object Model

-------------------------------------------------------------------------------------------
# BOM (Browser Object Model)
-> Provides access to the browser's functionality

# How to print using bom :
-> console.log(argument);

# Variables :
-> To Store Data
-> container

# How to define variable :
    1) var 
        var VariableName = value;
        old | Global (Hoisting) | Temp

    2) let
        let VariableName = value;
        new(ES6-2016) | Local | Temp
    
    3) const
        const VariableName = value;
        new | Local | Perm
d
# Data Types :
        1) Number      -> all digits int, float, doublt etc
        2) String      -> all characters worrds, character, syntax
        3) Boolean     -> true, false
        4) Null        -> null
        5) Undefined   -> undefined
        6) Object      -> You can store multiple + multi type of data
                    6.1)  Array / List -> []
                    6.2)  Object  -> {key:value,key1:value1}

# typeof(argumnet) -> it return the type of your argument
### [{},{},{}]

# Operator :
        1) Arithmatic       -> + - * etc
        2) Assignment       -> =, +=, -=, *=, /=, %=, etc
        3) Comparison       -> ==, !=, ===, !==, >, <, >= etc
        4) Logical          -> &&, || (string)
        5) Bitwise          -> & |(Binary)
        6) String           -> +
        7) typeof           -> typeof()

# Conditions 

    if(conditions){ block code} else if(conditions) { true code} ... else{default value}

# Loops

    # While 
    # for

# To stop or ignore data
    # continue  -> ignore
    # break     -> stop

# Function :
    1) Normal Function      => function FunName(){}
    2) Arrow Function       => l/v/c FunName = () => {}
    3) call back/ handler   => ()=>{} / function(){}

# Function of String:
 string.function('arguments')
    String length
    String slice()
    String substring()
    String substr()
    String replace()
    String replaceAll()
    String toUpperCase()
    String toLowerCase()
    String concat()
    String trim()
    String trimStart()
    String trimEnd()
    String padStart()
    String padEnd()
    String charAt()
    String charCodeAt()
    String split()

# Function of array : 
    concat()	Joins arrays and returns an array with the joined arrays
    constructor	Returns the function that created the Array object's prototype
    copyWithin()	Copies array elements within the array, to and from specified positions
    entries()	Returns a key/value pair Array Iteration Object
    every()	Checks if every element in an array pass a test
    fill()	Fill the elements in an array with a static value
    filter()	Creates a new array with every element in an array that pass a test
    find()	Returns the value of the first element in an array that pass a test
    findIndex()	Returns the index of the first element in an array that pass a test
    forEach()	Calls a function for each array element
    from()	Creates an array from an object
    includes()	Check if an array contains the specified element
    indexOf()	Search the array for an element and returns its position
    isArray()	Checks whether an object is an array
    join()	Joins all elements of an array into a string
    keys()	Returns a Array Iteration Object, containing the keys of the original array
    lastIndexOf()	Search the array for an element, starting at the end, and returns its position
    length	Sets or returns the number of elements in an array
    map()	Creates a new array with the reasult of calling a function for each array element
    pop()	Removes the last element of an array, and returns that element
    prototype	Allows you to add properties and methods to an Array object
    push()	Adds new elements to the end of an array, and returns the new length
    reduce()	Reduce the values of an array to a single value (going left-to-right)
    reduceRight()	Reduce the values of an array to a single value (going right-to-left)
    reverse()	Reverses the order of the elements in an array
    shift()	Removes the first element of an array, and returns that element
    slice()	Selects a part of an array, and returns the new array
    some()	Checks if any of the elements in an array pass a test
    sort()	Sorts the elements of an array
    splice()	Adds/Removes elements from an array
    toString()	Converts an array to a string, and returns the result
    unshift()	Adds new elements to the beginning of an array, and returns the new length
    valueOf()	Returns the primitive value of an array

# Date Methods : 
    new Date()
        new Date(date string)
        new Date(year,month)
        new Date(year,month,day)
        new Date(year,month,day,hours)
        new Date(year,month,day,hours,minutes)
        new Date(year,month,day,hours,minutes,seconds)
        new Date(year,month,day,hours,minutes,seconds,ms)
        new Date(milliseconds)

# Math :
        floor(x)	Returns x, rounded downwards to the nearest integer
        max(x, y, z, ..., n)	Returns the number with the highest value
        min(x, y, z, ..., n)	Returns the number with the lowest value
        pow(x, y)	Returns the value of x to the power of y
        random()	Returns a random number between 0 and 1
        round(x)	Rounds x to the nearest integer

    abs(x)	Returns the absolute value of x 
    acos(x)	Returns the arccosine of x, in radians
    acosh(x)	Returns the hyperbolic arccosine of x
    asin(x)	Returns the arcsine of x, in radians
    asinh(x)	Returns the hyperbolic arcsine of x
    atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
    atan2(y, x)	Returns the arctangent of the quotient of its arguments
    atanh(x)	Returns the hyperbolic arctangent of x
    cbrt(x)	Returns the cubic root of x
    ceil(x)	Returns x, rounded upwards to the nearest integer
    cos(x)	Returns the cosine of x (x is in radians)
    cosh(x)	Returns the hyperbolic cosine of x
    exp(x)	Returns the value of Ex
    log(x)	Returns the natural logarithm (base E) of x
    sign(x)	Returns if x is negative, null or positive (-1, 0, 1)
    sin(x)	Returns the sine of x (x is in radians)
    sinh(x)	Returns the hyperbolic sine of x
    sqrt(x)	Returns the square root of x
    tan(x)	Returns the tangent of an angle
    tanh(x)	Returns the hyperbolic tangent of a number
    trunc(x)	Returns the integer part of a number (x)

----------------------------------------------------------------------------------------------------

# DOM 
## How to pring in dom using js :
 -> document.write(argument);

## print on specific location :
 -> documnet.getelementbyid(idname)
        -> innertext
        -> innerhtml
        -> style

## click event -> onclick='....'

# Get data from form :
  -> document.forms['formname']['fieldID'].value

# RegEx
    -> match()
    -> search()

    -> Data check  in seriese
    -> (/[A-Z]/g)
    -> (/[a-z]/g)
    -> (/[0-9]/g)

# Onmouse :
-> onmouseup
-> onmousedown
-> onmouse

# "this"  -> when u want to call self element u can use this

# online & offline 

# history API
# go

# strict mode 
-> it create complusory

# map() -> react js/ js -> .jsx -> it use with array/lists only
-> array.map(handler)
-> handler callback -> () =>{}

# fetch 
-> fetch('url')

# Session storage
-> setItem()
-> getItem()
-> removeItem()

# Error handling
-> try          - error code
-> catch        - manipulated error

# Popup 
-> alert()
-> confirm()
-> prompt()  -> return value

# window 
-> open()
-> close()
-> innerWidth
-> innerHeight
-> outerWidth
-> outerHeight