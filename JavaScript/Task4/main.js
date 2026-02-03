//------------------- Problem 1 -----------------

// const name =document.getElementById("name");
// const age =document.getElementById("age");
// const grade =document.getElementById("grade");
// const add =document.getElementsByTagName("button")[0];
// const list = document.getElementsByTagName("ul")[0];

// const Stds = [];

// function Display()
// {
//     list.innerHTML="";

//     for(let i=0;i<Stds.length;i++)
//     {
//         const S =Stds[i];

//         const li = document.createElement("li");
//         li.textContent = "Name: "+ S.name + " Age: " + S.age + " Grade: " +S.grade;

//         const D_Btn =document.createElement("button");
//         D_Btn.textContent="Delete";

//         D_Btn.setAttribute("index",i);

//         D_Btn.onclick =function ()
//         {
//             const i=this.getAttribute("index");
//             Stds.splice(i,1);
//             Display();
//         }
//         li.appendChild(D_Btn);
//         list.appendChild(li);
//     }
// }

// add.onclick =function ()
// {
//     const n=name.value;
//     const a=age.value;
//     const g =grade.value;

//     const Student = {name :n,age:a,grade:g};
//     Stds.push(Student);

//     name.value="";
//     age.value="";
//     grade.value="";

//     Display();
// }


// ------------------------ Problem 2 -----------------------

// const TaskI = document.getElementsByTagName("input")[0];
// const Add = document.getElementsByTagName("button")[0];
// const list = document.getElementsByTagName("ul")[0];

// const Tasks =[];

// function Display()
// {
//     list.innerHTML="";

//     for(let i=0;i<Tasks.length;i++)
//     {
//         const li =document.createElement("li");
//         li.textContent= Tasks[i];
    
//         const D_Btn =document.createElement("button");
//         D_Btn.textContent="Delete";
//         D_Btn.onclick = function()
//         {
//             console.log("Work delete");
//             Tasks.splice(i,1);
//             Display();
//         }

//         li.appendChild(D_Btn);
//         list.appendChild(li);

//         li.onclick =function()
//         {
//             if (li.style.textDecoration === "line-through") {
//                     li.style.textDecoration = "none";
//                     li.style.color = "black";
//                 } else {
//                     li.style.textDecoration = "line-through";
//                     li.style.color = "gray";
//                 }
//         }

//     }
// }

// Add.onclick =function()
// {
//     const T =TaskI.value;

//     Tasks.push(T);
//     TaskI.value="";
//     Display();
// }


// ---------------------------- Problem 3 ------------------

// const img = document.getElementsByTagName("img")[0];
// const Pre_btn =document.getElementById("Pre");
// const Nex_btn =document.getElementById("Next");
// const Re_btn =document.getElementById("Reset");

// const imgs = [
//     "Imgs/22.jpeg",
//     "Imgs/2.jpeg",
//     "Imgs/mikasa.jpg",
//     "Imgs/33.jpg"
// ]

// let curr_index =0 ;

// function Show()
// {
//     img.src=imgs[curr_index];
// }

// Show();

// Pre_btn.onclick = function(){
//     curr_index --;
//     if(curr_index <0){
//         curr_index = imgs.length -1;
//     }
//     Show();
// }

// Nex_btn.onclick = function()
// {
//     curr_index ++;
//     if(curr_index>=imgs.length) curr_index=0;
//     Show();

// }

// Re_btn.onclick = function(){
//     curr_index =0;
//     Show();

// }

// ----------------- Problem 4 -----------------------
// const Search = document.getElementsByTagName("input")[0];
// const List = document.getElementsByTagName("ul")[0];
// const Message = document.getElementsByTagName("p")[0];

// const products = [
//     {name : "Laptop"},
//     {name : "Phone"},
//     {name : "TV"},
//     {name : "Keyboard"},
//     {name : "Doaa"},
// ];
// function Show(L)
// {
//     List.innerHTML="";

//     for(let i=0;i<L.length;i++)
//     {
//         const li = document.createElement("li");
//         li.textContent=L[i].name;
//         List.appendChild(li);
//     }
// }

// Show(products);

// Search.onkeyup = function ()
// {
//     const value = Search.value.toLowerCase();
//     const Filter = [];

//     for(let i=0;i<products.length;i++)
//     {
//         if(products[i].name.toLowerCase().includes(value))
//         {
//             Filter.push(products[i]);
//         }
//     }

//     if(Filter.length==0){
//         List.style.display = "none";
//         Message.style.display = "block";
//     }
//     else {
//         List.style.display = "block";
//         Message.style.display = "none";
//         Show(Filter);
//     }
// }

// و شكراا