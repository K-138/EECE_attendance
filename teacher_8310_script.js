let seats = document.getElementsByClassName("seat");
let container = document.querySelector('.container');
// let btn2=document.getElementById('btn2');
let btn3=document.getElementById('btn3');
let btn4=document.getElementById('btn4');

//initializing variables
let result=[];

let socket = io()

socket.emit('iamteacher_8310', 'kjdfbkd');

socket.on ('sendData_8310', (data) => {
  result = JSON.parse(data);
  for(i=0;i<result.length;i++)
  if(result[i]>1)
  {
    seats[i].className="seat cheating";
  }
  else if(result[i]==1)
  {
    seats[i].className="seat selected";
  }
  else if(result[i]==0)
  {
    seats[i].className="seat unselected";
  }
})

window.onload = () => {
  socket.emit('iamteacher_8310', 'kjdfbkd')
}


//start
btn3.onclick=function()
{
    console.log("helloworld");
    for(i=0;i<120;i++)
    {
      result[i]=0;
    }

    
    fetch('/sendData_8310_teacher', {method: 'POST', body: JSON.stringify(result), headers: {"Content-Type": "application/json"}})
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
    window.location.reload();
}

  // btn2.onclick=function()
  // {
  //   localStorage.clear();
  // };

//show
//  btn4.onclick=function()
//  {

//   fetch('/getData_8310_teacher', {method: 'GET'})
//   .then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data) 
//     result=data;
//   })
//   .catch((err) => {
//     console.log(err);
//   })


//   console.log(result);
//   for(i=0;i<result.length;i++)
//   if(result[i]>1)
//   {
//     seats[i].className="seat cheating";
//   }
//   else if(result[i]==1)
//   {
//     seats[i].className="seat selected";
//   }
//   else if(result[i]==0)
//   {
//     seats[i].className="seat unselected";
//   }
  
//  }



