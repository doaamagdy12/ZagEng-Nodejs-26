//========================== Problem 1 

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

// ================== Problem 2 

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
// function getUser()
// {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             const user = {id:1,name:"Dooaa"};
//             resolve(user);
//         },1000);
//     })
// }

// function getOrder(id){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             const orders = [
//                 {id:1,item:"phon"},
//                 {id:2,item:"Desktop"},
//             ];
//             resolve(orders);
//         },1000);
//     })
// }

// function getOrderDetails(id){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             const Details = {id,price:800};
//             resolve(Details);
//         },1000);
//     })
// }

// getUser().then(user => {
//     console.log("User");
//     return getOrder(user.id);
// }) .then (orders =>{
//     console.log("order");
//     return getOrderDetails(orders[0].id);
// }) .then (Details =>{
//     console.log("Details");
// })

// ==================== Problem 5
// جيت داتا بترجع قبل ما سيت تايم اوت يخلص و مفيش اي ريتيرن من الفانكشن
    // Sol With Callback
    //     function getDataC(callback){
    //         setTimeout(()=>{
    //             callback("Data Done Call Back");
    //         },1000);
    //     }

    //     getDataC((res)=>{
    //         console.log(res);
    //     })

    // // Sol With Promise
    //     function getDataP(){
    //         return new Promise((resolve)=>{
    //             setTimeout(()=>{
    //                 resolve ("Data Done Promise");
    //             },2000);
    //         });
    //     }

    //     getDataP().then(res =>{
    //         console.log(res);
    //     })

    // // Sol With wait
    //     function getDataW(){
    //         return new Promise((resolve)=>{
    //             setTimeout(()=>{
    //                 resolve("Data Done W");
    //             },3000);
    //         });
    //     }

    //     async function Show() {
    //         const res =await getDataW();
    //         console.log(res);
    //     }

    //     Show();

// ============= Problem 6
// function login() {
//     return new Promise(resolve => {
//         resolve({ id: 1, name: "User" });
//     });
// }

// function getProfile(userId) {
//     return new Promise(resolve => {
//         resolve({ id: 10, userId });
//     });
// }

// function getSettings(profileId) {
//     return new Promise(resolve => {
//         resolve({ theme: "dark", profileId });
//     });
// }

// login()
//     .then(user => {
//         return getProfile(user.id);
//     })
//     .then(profile => {
//         return getSettings(profile.id);
//     })
//     .then(settings => {
//         console.log(settings);
//     })
//     .catch(error => {
//         console.log(error);
//     });
