// Problem 1

// function Test(arr)
// {
//     return arr.map(str => str.toUpperCase());
// }
// console.log(Test(["Doaa","Ahmed"]));

// Problem 2
// function Pass(Std)
// {
//     return Std.map(S =>
//     {
//         return{
//             name : S.name,
//             score : S.score,
//             passed : S.score >=50
//         }
//     }
//     );
// }

// Std = [
//     {name : "Ahmmed" , score : 99},
//     {name : "Doaa" , score : 40},
//     {name : "Magdy" , score : 50},
// ]

// console.log(Pass(Std));

// Problem 3

// function Filter(arr)
// {
//     return arr.filter(str => str.length >4);
//     // return arr.map(str => str.length >4);
// }
// console.log(Filter(["Hi", "DoaaMagdy","Welcome"]));

// Problem 4

// function GetAvr (arr)
// {
//     if(arr.length ==0) return 0;
//     let sum=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         sum+=arr[i];
//     }
//     return sum/arr.length;
// }

// console.log(GetAvr([10,20,30]));

// Problem 5

// function GetAdult(P)
// {
// return P.filter(P=> P.age>=18) . map(P=> P.name);
// }

// let P = [
//     {name:"Ahmed" , age: 20},
//     {name:"Doaa" , age: 17},
//     {name:"Magdy" , age: 50},
// ]

// console.log(GetAdult(P));

// Problem 6

// function F(n)
// {
//     if(n==0 || n==1) return 1;
//     let res =1;
//     for(let i=2;i<=n;i++) res*=i;
//     return res;
// }
// console.log(F(5));
// console.log(F(0));

// Problem 7
// function Find(arr)
// {
//     return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
// }

// console.log(Find([1,1,1,2,4,5,4,5]));

// Problem 8
// function RE(str)
// {
//     let res="";
//     for(let i=0;i<str.length;i++)
//     {
//         let char = str[i];
//         if (
//             (char >= 'a' && char <= 'z') ||
//             (char >= 'A' && char <= 'Z') ||
//             (char >= '0' && char <= '9') ||
//             char === ' ' || char === '-' || char === '_'
//         ) {
//             res += char;
//         }
//     }
//     return res;
// }

// console.log(RE("Hi How are you!"));
// console.log(RE("Are-u_coming?"));


// Problem 9
// function replaceMe(str)
// {
//     return str.split(' ').join('#');
// }
// console.log(replaceMe("Hello World"));
// console.log(replaceMe("HelloWorld"));
// console.log(replaceMe("Doaa Magdy"));


// Problem 10
// function Test(arr)
// {
//     return arr.map(num=>
//     {
//         if(num %2==0) return num+1;
//         else return num-1;
//     }
//     );
// }

// console.log(Test([73,221,52,214]));