     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         return str.split("").reverse().join("");
    }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
        var sort = values.sort();
         return values[0]
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         var array = []
         for(i=0;i<values.length;i++){
            if(array.indexOf(values[i])===-1){
                array.push(values[i]);
            }
         }
         return array;
     }

    function numberOneToHundred(){
        for(i=0;i<=100;i++){
            console.log(i)
        }
    }
    numberOneToHundred();
     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
         for(i=0;i<fruitsToRemove.length;i++){
            fruits.splice(fruits.indexOf(fruitsToRemove[i]),1)
         }
         return fruits
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
        if(toPush.length>0){
            for(i=0;i<toPush.length;i++){
            array.push(toPush[i]);
         // FILL THIS IN
            }
        }else{
            array.push(toPush)
        }
        
        return array
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
         var array =[]
         if(sourceStr){
            return sourceStr.split(" ").join(", ");

         }else{
            return array;
         }
     }

     // Write a function that will take any number of arguments and return their sum
     function sum(value) {
         console.log(value)
         var array = value.split(','); 
         var sum = 0
         for(i=0;i<array.length;i++){
            sum= sum+parseInt(array[i])
         }
        return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
            if (/^\s+$/.test(sourceStr)){
                return true
            }
     }

     // write an example of a javascript closure

    function foo(x) {
        var tmp = 3;
        return function (y) {
                console.log(x + y + (++tmp));
            }
    }
    var bar = foo(2); 
    bar(10);
     
    // define a json object that represents a collection of people.
    // each person should have the following properties
    // - first name
    // - last name
    // - city
    // - state
    // - zip
    // - a collection of phone numbers (home, work, mobile)
    var person =[{"firstName":"person1FirstName",
                  "lastName":"person1LastName",
                  "city":"city1",
                  "state":"state1",
                  "zip":"zipCode1",
                  "number":{
                        "homeNumber":"111-111-1111",
                        "workNumber":"222-222-2222",
                        "mobile":"333-333-3333"
                    }
                },{"firstName":"person2FirstName",
                  "lastName":"person2LastName",
                  "city":"city2",
                  "state":"state2",
                  "zip":"zipCode2",
                  "number":{
                        "homeNumber":"444-111-1111",
                        "workNumber":"444-222-2222",
                        "mobile":"444-333-3333"
                    }
                },{"firstName":"person3FirstName",
                  "lastName":"person3LastName",
                  "city":"city3",
                  "state":"state3",
                  "zip":"zipCode3",
                  "number":{
                        "homeNumber":"555-111-1111",
                        "workNumber":"555-222-2222",
                        "mobile":"555-333-3333"
                    }
                }]
    
     


     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');
        var data =[{column:["JasonColumn", "AlexColumn" ,"MandyColumn" , "LucyColumn"],
               row:["JasonRow","AlexRow","MandyRow","LucyRow"]
        }]

        function addRow(value1,value2,value3){
             data[0].row.push(value1,value2,value3)
             return data[0].row

        }
        function addColumn(value1,value2,value3){
             data[0].column.push(value1,value2,value3)
             return data[0].column

        }
        function getData(){
            return JSON.parse(data)
        }



