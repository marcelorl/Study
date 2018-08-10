# Long Functions

Functions which contain many lines.
It is always easy to add code instead of remove. That is why functions can get easily long.
The worst point with it, is that, it gets unnoticed until it smeels. With the thinking of adding 2 lines of code and a
condition is easier than creating a whole new function that could describe a lot better your problem.
  
If you feel you need to comment something in your code, it means you have to take that piece of code and separate it
into a new function. So that, your code gets easier to read.

Few steps you should take in order to reduce functions:

 - Extract Function
 - Reduce local Variables and parameters before extracting function
 - Introduce parameter object
 - Preserve whole object. ex:
 
```javascript
const low = daysTempRange.low
const high = daysTempRange.high

calc(low, high)
```

A better approach would be:


```javascript
calc(daysTempRange)
```

 - Decompose conditional, turning your conditionals into functions.
 - Decompose loops. ex:
 
 ```javascript
 var result
 for (var i = 0; i < tests.length; i++) {
  result = 'test-' + test[i]
  console.log(result)
 }
 ```

 A better approach would be:

 ```javascript
 var result
 foreach (tests, function(test) {
  console.log(myTest(test))
 })
 
 function myTest(test) {
  return 'test-' + test
 } 
 ```
 
 Take it into your mind, the longer a function is, the harder it is to understand it.
