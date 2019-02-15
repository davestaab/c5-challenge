# Challenge: The Two Egg Problem

## Conditions

* You are given two eggs and a building that is some number of stories tall.
* There is some floor that if an egg is dropped on or above that floor, it will break.
* If an egg is dropped below that floor it will NOT break.
* An egg can be dropped any number of times from any floor below the breaking floor.

<br/>

## The Challenge

Find the lowest floor at which a dropped egg will break.

<br/>

## Program format

Your program should take 2 integers as a command line arguments.
The first integer will be the number of floors of the building.
The Second integer will represents the lowest floor at which the egg will break.
Your program should then output which floor was tried to stdout.
After each floor, your program should output ‘True’ if the egg broke or ‘False’ otherwise.
Finally your program should output ‘Floor n’ where n is the lowest floor where a drop will result in the egg
breaking.

<br/>

## Additional rules

* Do not simply try the floor that is passed in the command line. Passing the argument as a command line parameter is only done to simplify the process, you must come up with an appropriate algorithm.
* Do not Google your answer. I won’t know if you did this, but if you do your trophy will be a lie.
* For this challenge, there are suboptimal solutions that will still be acceptable answers. For the case of scoring, the solution that tries the fewest number of floors on average will be considered the correct solution in a category.

<br/>

## What you should submit

You should submit all files necessary to run your solution as a zip or tar file. 
In addition, you should submit a readme file that includes instructions on how to build and run your program.
If you are submitting in multiple categories, please submit a single zip or tar file with each version of your program, and its readme, in a separate directory.

<br/>

## Other Info

This challenge was announced on **Jan 31, 2019 noon**
Team submissions are due **Feb 14, 2019 noon**
Points will be announced after all programs have been judged.

<br/>

## Example output

![example output](/program-example-output.png)

<br/>

## FAQ

### **Why is it called the 2 egg problem?**
Because you can only drop 2 eggs.

### **Can a broken egg be dropped a second time?**
No.

### **Can I use libraries?**
You can use helper libraries, so long as they do not solve the problem.

### **How will the problem be graded?**
A random data set will be generated, all submissions will be tried against the data set and the average time will be used.

### **What if my program gets the wrong answer to just a few of the cases?**
That is an incorrect solution and will not be eligible for points.

### **What does fastest mean?**
A solution that finds the fewest steps on average will be favored over a program that quickly finds a solution with more drops. The primary goal is to find the fewest number of drops. Between solutions with equal number of drops, the fastest execution time will win.

 ### **What if there is a tie?**
A larger building will be used until the runtimes diverge. If the programs do not diverge, both teams will be awarded equal points.
