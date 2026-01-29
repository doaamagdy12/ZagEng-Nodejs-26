
// let input = prompt("Enter What You Want :");

// Problem 1

// console.log(input.length);
// console.log(input[0]);
// console.log(input[input.length-1]);

// Problem 2

// console.log(input.trim().toLowerCase());

// Problem 3

// let nums= [];

// for(let i=0 ;i<5;i++)
// {
//     let inputnum= Number(prompt(`Enter Number ${i+1}:`));
//     nums.push(inputnum);
// }
// console.log("Array : " , nums);
// console.log("Length : " , nums.length);
// console.log("First : " , nums[0]);
// console.log("Last : " , nums[nums.length-1]);

// Problem 4

// for(let i =1 ; i<=20 ;i++)
// {
//     if(i==10) continue;
//     console.log(i);
// }


// Problem 5

// let Nums = [];

// for(let i=0;i<5;i++)
// {
//     let input =Number(prompt(`Enter number plz ${i+1} :` ));
//     Nums.push(input);
// }
// for(let i=0;i<Nums.length;i++)
// {
//     if(Nums[i]>6) console.log(Nums[i]);
// }

// Problem 6

// let num =Number(prompt("Enter Ya 3amm : "));
// if(num>0) console.log("Positive");
// else if(num<0) console.log("Negative");
// else console.log("Zero");

// Problem 7
// let input = prompt("Enter the value with commas");

// let values = input.split(",");

// for(let i =0;i<values.length;i++)
// {
//     console.log(Number(values[i]));
// }

// Problem 8
// let input = prompt("اتفضل اكتب ");
// if(input.includes("JavaScript")){
//     console.log("Found");
// }
//  else console.log("Not Found");

// Problem 9
// let names =[];
// for (let i = 0 ; i<3 ;i++)
// {
//     let name = prompt(`Enter name ${i+1}`);
//     names.push(name);
// }

// console.log("Names:");
// for(let i=0;i<3;i++)
// {
//     console.log(names[i]);
// }


// Problem 10
// let num = Math.floor(Math.random()*10)+1;
// console.log(num);

// Problem 11
// let ages =[]
// for(let i=0;i<5;i++)
// {
//     let age = Number(prompt(`Enter age ${i+1}`));
//     ages.push(age);
// }

// for(let i=0;i<5;i++)
// {
//     if(ages[i]>=18) console.log(ages[i]);
// }

// Problem 12
// let input =prompt("Enttteerr");
// console.log(input.length);

// Problem 13
// let nums = [];

// for(let i=0 ;i<4;i++)
// {
//     let num =Number(prompt(`Enter Num ${i+1}`));
//     nums.push(num);
// }
// for(let i =0;i<4;i++)
// {
//     if(Math.round(nums[i])>=8)
//         console.log("Pass");
//     else console.log("Fail");
// }

// Problem 14
// for(let i=1;i<=30;i++)
// {
//     if(i%2==0)
//         console.log(i);
// }

// Problem 15 
// let input = prompt("Enter a Num");
// if(Number(input) % 2 == 0) console.log("Even");
// else console.log("Odd");


// Problem 16
// let nums=[];

// for(let i=0;i<5;i++)
// {
//     let num = Number(prompt("Enteerr"));
//     nums.push(num);
// }
// console.log("Max", Math.max(...nums));
// console.log("Mini", Math.min(...nums));


// Problem 17 
// let input = prompt("Enteerr");

// let words = input.split(" ");
// for(let i=0 ;i < words.length;i++)
// {
//     console.log(words[i]);
// }

// Problem 18 
// for(let i=10;i>=1;i--) console.log(i);

// Problem 19
// let sum=0;
// for(let i=0;i<5;i++)
// {
//     let num = Number(prompt("Enteerr"));
//     sum+=num;
// }
// console.log(sum);


// Problem 20
// let str= prompt();
// if(str.startsWith("J"))
//     console.log("Yes");
// else console.log("NO");


// Problem 21
// console.log(Math.floor(Math.random()*6)+1);

// Problem 22
// let nums = [];
// for(let i=0;i<5;i++)
// {
//     let num = Number(prompt());
//     Math.pow(num,2);
// }
// for(let i=0;i<5;i++) console.log(nums[i]);

// Problem 23
// let input = prompt();

// for(let i=0;i<input.length;i++) console.log(str[i]);

// Problem 24
// let num = Number(prompt("Enter"));

// if(num % 3== 0 && num %5==0) console.log("YES"); else console.log("NO");

// Problem 25
// let input = prompt();
// let output = input.replaceAll(" ","");
// console.log(output);

// Problem 26
// let nums =  [];
// let cnt=0;
// for(let i=0;i<5;i++) nums.push(Number(prompt()));
// for(let i=0;i<5;i++) if(nums[i]>10) cnt++;
// console.log(cnt);

// Problem 27
// let num ;
// do {
//     num=Math.floor(Math.random()*10)+1;
//     console.log(num);
// } while(num!==7);

// Problem 28 
// let str = prompt();
// let outstr = str.replace("/JS/g",JavaScript);
// console.log(outstr);

// Problem 29
// let str =  prompt();
// console.log(str.indexOf("a"));

// Problem 30
// let values = [];
// for(let i=0;i<5;i++)
// {
//     let v =prompt();

//     let num =Number(v);
//     if(isNaN(num)) values.push(v);
// }
// for(let i =0;i<5;i++)
// {
//     console.log(values[i]);
// }