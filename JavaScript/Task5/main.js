//========================== Problem 1 

// const { use } = require("react");

// const nameInput = document.getElementById("name");
// const ageInput = document.getElementById("age");
// const gradeInput = document.getElementById("grade");

// const addBtn = document.getElementById("addBtn");
// const saveBtn = document.getElementById("saveBtn");
// const loadBtn = document.getElementById("loadBtn");

// const list = document.getElementById("list");
// const area = document.getElementById("Area");

// // Display

// let stds = [];
// function Display(){
//     list.innerHTML="";

//     stds.forEach(student =>{
//         const li = document.createElement("li");
//         li.textContent =`${student.name}  ${student.age}  ${student.grade}`;
//         list.appendChild(li);
//     })


// }

// // add
// addBtn.addEventListener("click",()=>{
//     const name =nameInput.value;
//     const age =ageInput.value;
//     const grade =gradeInput.value;

//     const student = {
//         name,
//         age,
//         grade
//     };

//     stds.push(student);
//     Display();

//     nameInput.value="";
//     ageInput.value="";
//     gradeInput.value="";
// })

// // save
// saveBtn.addEventListener("click" , ()=>{
//     const str =JSON.stringify(stds);
//     console.log(str);
//     area.value=str;
// });

// // Load 
// loadBtn.addEventListener("click",()=>{
//     const str = area.value;

//     if(str==""){alert("Empty"); return;}
//     const parseS = JSON.parse(str);
//     stds = parseS;

//     Display();
// })

//========================== Problem 2

// function getUser(callback)
// {
//     setTimeout(()=>{
//         const user = { id:1 , name:"Doaa"};
//         callback(user);
//     },1000);
// }

// function getOrder(id,callback){
//     setTimeout(()=>{
//         const orders = [
//             {id:1,item :"laptop"},
//             {id:2,item:"Laptop"},
//         ];
//         callback(orders);
//     },1000);
// }

// function getOrderDetails(id,callback) {
//     setTimeout(()=>{
//         const Details = {id,price:200};
//         callback(Details);
//     },1000);
    
// }


//     getUser(user => {
//         console.log("Get User Run");

//         getOrder(user.id,orders =>{
//             console.log("get order run");

//             getOrderDetails(orders[0].id,Details =>{
//                 console.log("Get Details run");
//             });
//         });
//     });

//======================= Problem 3 
// new Promise((reslove)=>
// {
//     setTimeout(()=>{
//         console.log("User");
//         reslove();
//     },1000);
// }).then(()=>{
//     return new Promise((reslove)=>{
//         setTimeout(() => {
//             console.log("Order");
//             reslove();
//         }, 1000);
//     })
// }).then(()=>{
//     setTimeout(()=>{
//         console.log("Details");
//     },1000)
// })

// ==================== Problem 5
// جيت داتا بترجع قبل ما سيت تايم اوت يخلص و مفيش اي ريتيرن من الفانكشن
    // Sol With Callback
        // function getDataC(callback){
        //     setTimeout(()=>{
        //         callback("Data Done Call Back");
        //     },1000);
        // }

        // getDataC((res)=>{
        //     console.log(res);
        // })


    // Sol With Promise

        // new Promise((resolve)=>{
        //     setTimeout(() => {
        //         resolve("Data Done Promise");
        //     }, 2000);
        // }).then(res =>{
        //     console.log(res);
        // })



// =================== Problem 6
// function login()
// {
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             const user = {id: 1 , name: "Doaa"};
//             resolve(user);
//         },1000);
//     });
// }

// function getProfile(userId){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             const Profile = {id: userId};
//             resolve(Profile);
//         },1000);
//     });
// }

// function getSetting(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             const setting = {them:"dark"};
//             resolve(setting);
//         },1000);
//     });
// }

// login().then(user =>{
//     return getProfile(user.id);
// }) .then(profile =>{
//     return getSetting(profile.id);
// }).then(setting =>{
//     console.log(setting);
// })


// ============================= Problem 7

// let JsonData = '[ ]';

// let data = JSON.parse(JsonData);

// let a ={
//     id : 1,
//     title : "Yarb"
// };

// data.push(a);

// let data2 = JSON.stringify(data);
// console.log(data2);

// ========================== Problem 8
// function delay(message,time)
// {
//     return new Promise (resolve => {
//         setTimeout(()=>{
//             console.log(message);
//             resolve();
//         },time);
//     })
// }

// delay("Hi",1000).then(()=>{console.log("I'm then");})


// ============================ Problem 9
function CheckNumber(num)
{
    return new Promise ((resolve,reject)=>{
        if(num>0) resolve("Positive");
        else if(num==0)  resolve("Zero");
        else reject("Negative");
    });
}

CheckNumber(3).then(res =>{
    console.log("Success: ",res);
}).catch(error =>{
    console.log("Error: ",error);
});