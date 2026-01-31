// Problem 1

// function fibonacci(n)
// {
//     if(n<=0) return [];
//     if(n==1) return[0];

//     const a =[0,1];
//     for(let i=2;i<n;i++) a.push(a[i-1]+a[i-2]);

//     return a;
// }

// console.log(fibonacci(4));

// Problem 2

// function ReverseArray(arr)
// {
//     let R =[];
//     for(let i= arr.length -1 ; i>=0;i--)
//         R.push(arr[i]);

//     return R;
// }

// let arr = [1,2,3,4];
// console.log(ReverseArray(arr));


// Problem 3

// function Temp(T)
// {
//     let n = T.length;
//     let ans = [];
//     let S =[];

//     for(let i=0;i<n;i++)
//     {
//         while (S.length && T[i]> T[S[S.length-1]])
//         {
//             let preI = S.pop();
//             ans[preI] = i-preI;
//         }
//         S.push(i);
//     }
//     return ans;
// }

// console.log(Temp([30,40,50,60]));


// Problem 4

// function TestChar(W)
// {
//     if(W==W.toLowerCase()) return true;
//     if(W==W.toUpperCase()) return true;

//     return false;
// }

// console.log(TestChar("hello"));
// console.log(TestChar("Hello"));
// console.log(TestChar("HELLO"));

// Problem 5
// function Compare(A,B)
// {
//     if(A.length > B.length) console.log(A.length);
//     else console.log(B.length);
// }
// Compare("Doaa","Ahmed");
// Compare("Doaa","Arfa");
// Compare("Doaa","Shams");