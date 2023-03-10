let seats = document.getElementsByClassName("seat");
let container = document.querySelector('.container');
let btn= document.getElementById('btn')
let pass=document.getElementById("pass");

var socket = io();


let sub = document.getElementById('sub');
let seatnum=document.getElementById('seatnum');
let name;
//initializing variables
let total=0;
let indices=[0];
let result=[0];
btn.disabled=true;
function sumArray(array) 
{
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) 
  {
    sum +=array[i];
  }
  return sum;
}

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat")
  ) {
    e.target.classList.toggle("selected");
  }

  for(i=0;i<120;i++)
  {
    if(seats[i].classList.value=="seat selected")
    {indices[i]=1;
    name=seats[i].id;}
    else
    {
      indices[i]=0;
    }
  
  }

  total=sumArray(indices);

  if(total != 1)
  {
    btn.disabled=true;
  }
  else
  {
    btn.disabled=false;
  }

//click here
  btn.onclick=function()
  {
    btn.style.display="none";
    sub.style.display="inline";
     seatnum.value=name;

    socket.emit('addseat_8209', indices.indexOf(1));

    




    // fetch('/getData_8209', {method: 'GET'})
    // .then((response) => {
    //   return response.json()
    // })
    // .then((data) => {
    //   console.log(data)
    //   result = data;
    //   for (let i = 0; i < result.length; i += 1) 
    //   {
    //     result[i]+=indices[i];
    //   }

    //   return fetch('/sendData_8209', {method: 'POST', body: JSON.stringify(result), headers: {"Content-Type": "application/json"}})
      
    // })
    // .then((response) => {
    //   console.log(response);
    //   //window.location.href="https://www.google.com/";
    //   btn.style.display="none";
    //   sub.style.display="inline";
    //   seatnum.value=name;
    // })
    // .catch((err) => {
    //   console.log(err);
    // })

  }
});


