const fs = require('fs');
const express = require('express');
const xlsx = require('xlsx');
const app = express();
const socket = require ('socket.io');
//const alert=require('alert');
const jsonToXLSX =require('./jsonToXLSX')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

// let file = fs.readFileSync('file.json', 'utf8')

// let attended = fs.readFileSync('users.json', 'utf8')
// let myobjects = JSON.parse(attended);

let teacher_id_8208;
let teacher_id_8209;
let teacher_id_8309;
let teacher_id_8310;

////
let attended_8208 = fs.readFileSync('att_8208.json', 'utf8')
let myobjects_8208 = JSON.parse(attended_8208);

let attended_8209 = fs.readFileSync('att_8209.json', 'utf8')
let myobjects_8209 = JSON.parse(attended_8209);

let attended_8309 = fs.readFileSync('att_8309.json', 'utf8')
let myobjects_8309 = JSON.parse(attended_8309);

let attended_8310 = fs.readFileSync('att_8310.json', 'utf8')
let myobjects_8310 = JSON.parse(attended_8310);

////



// const one = [{name:"hello",email:"jjjj"}];
// console.log(typeof one);
// console.log(typeof attended);
// console.log(typeof myobjects);
//const pass="hello";

// app.post('/sendData', (req, res) => {
//     console.log(req.body);
//     fs.writeFile('file.json', JSON.stringify(req.body), (err) => {
//         res.send('Good');
//     })
// })



// app.get('/getData', (req, res) => {
//     console.log('jhsbsdb')
//     fs.readFile('file.json', 'utf8', (err, file) => {
//         res.setHeader('Content-Type', 'application/json');
//         res.send(file);
//     })
// })

///////////////////////////////
app.post('/log_8208', (req, res) => {
  if (req.body.user =="hello" && req.body.pass == 1234)
  res.sendFile(__dirname+'/public/teacher_8208.html');
  else
  res.sendFile(__dirname+'/public/login_fail_8208.html');
})



app.get('/log_8209', (req, res) => {
    console.log('ready')
})

app.post('/log_8209', (req, res) => {
    if (req.body.user =="hello" && req.body.pass == 1234)
    res.sendFile(__dirname+'/public/teacher_8209.html');
    else
    res.sendFile(__dirname+'/public/login_fail_8209.html');
  })
  
  
  
  app.get('/log_8209', (req, res) => {
      console.log('ready')
  })


  app.post('/log_8309', (req, res) => {
    if (req.body.user =="hello" && req.body.pass == 1234)
    res.sendFile(__dirname+'/public/teacher_8309.html');
    else
    res.sendFile(__dirname+'/public/login_fail_8309.html');
  })
  
  
  
  app.get('/log_8309', (req, res) => {
      console.log('ready')
  })


  app.post('/log_8310', (req, res) => {
    if (req.body.user =="hello" && req.body.pass == 1234)
    res.sendFile(__dirname+'/public/teacher_8310.html');
    else
    res.sendFile(__dirname+'/public/login_fail_8310.html');
  })
  
  
  
  app.get('/log_8310', (req, res) => {
      console.log('ready')
  })




//////////////////////////////


/////

app.post('/sendData_8208', (req, res) => {
    console.log(req.body);
    fs.writeFile('data_8208.json', JSON.stringify(req.body), (err) => {
        res.send('Good');
    })
})



app.get('/getData_8208', (req, res) => {
    console.log('jhsbsdb')
    fs.readFile('data_8208.json', 'utf8', (err, file) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(file);
    })
})

app.post('/sendData_8208_teacher', (req, res) => {
    console.log(req.body);
    fs.writeFile('data_8208.json', JSON.stringify(req.body), (err) => {
        res.send('Good');
    })
    ///
    fs.writeFile('att_8208.json','[]',(err) => {
        console.log('Good');
    })
    ///
})


app.get('/getData_8208_teacher', (req, res) => {
    console.log('jhsbsdb')
    fs.readFile('data_8208.json', 'utf8', (err, file) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(file);
    })
})


app.post('/sendData_8209', (req, res) => {
    console.log(req.body);
    fs.writeFile('data_8209.json', JSON.stringify(req.body), (err) => {
        res.send('Good');
    })
})



app.get('/getData_8209', (req, res) => {
    console.log('jhsbsdb')
    fs.readFile('data_8209.json', 'utf8', (err, file) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(file);
    })
})

app.post('/sendData_8209_teacher', (req, res) => {
    console.log(req.body);
    fs.writeFile('data_8209.json', JSON.stringify(req.body), (err) => {
        res.send('Good');
    })
    fs.writeFile('att_8209.json','[]',(err) => {
        console.log('Good');
    })
})


app.get('/getData_8209_teacher', (req, res) => {
    console.log('jhsbsdb')
    fs.readFile('data_8209.json', 'utf8', (err, file) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(file);
    })
})


app.post('/sendData_8309', (req, res) => {
    console.log(req.body);
    fs.writeFile('data_8309.json', JSON.stringify(req.body), (err) => {
        res.send('Good');
    })
})



app.get('/getData_8309', (req, res) => {
    console.log('jhsbsdb')
    fs.readFile('data_8309.json', 'utf8', (err, file) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(file);
    })
})

app.post('/sendData_8309_teacher', (req, res) => {
    console.log(req.body);
    fs.writeFile('data_8309.json', JSON.stringify(req.body), (err) => {
        res.send('Good');
    })
    fs.writeFile('att_8309.json','[]',(err) => {
        console.log('Good');
    })
})


app.get('/getData_8309_teacher', (req, res) => {
    console.log('jhsbsdb')
    fs.readFile('data_8309.json', 'utf8', (err, file) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(file);
    })
   
})

app.post('/sendData_8310', (req, res) => {
    console.log(req.body);
    fs.writeFile('data_8310.json', JSON.stringify(req.body), (err) => {
        res.send('Good');
    })
})



app.get('/getData_8310', (req, res) => {
    console.log('jhsbsdb')
    fs.readFile('data_8310.json', 'utf8', (err, file) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(file);
    })
})

app.post('/sendData_8310_teacher', (req, res) => {
    console.log(req.body);
    fs.writeFile('data_8310.json', JSON.stringify(req.body), (err) => {
        res.send('Good');
    })
    fs.writeFile('att_8310.json','[]',(err) => {
        console.log('Good');
    })
})


app.get('/getData_8310_teacher', (req, res) => {
    console.log('jhsbsdb')
    fs.readFile('data_8310.json', 'utf8', (err, file) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(file);
    })
})







// app.get('/check', (req, res) => {
//     console.log("hello");
//     res.sendFile(__dirname + '/public/index.html');
//     //res.sendFile(res.query);  
//   })

// app.post('/check',(req,res)=>
// {

// let dataa = req.body;
// console.log(req.body.username);
// console.log(req.body.seatnum);
// console.log(dataa);
// myobjects.push(dataa);
// fs.writeFile('users.json',JSON.stringify(myobjects),err=>
// {
//     if(err) throw err;
// }) ;
// res.sendFile(__dirname+'/public/thankyou.html');
// })

// let dataa=jsonToXLSX(myobjects,'students.xlsx');
// fs.writeFile('students.xlsx',dataa,(err) => {
//     console.log('Good');
// })


// app.get('/down', (req, res) => {
//     console.log("hello");
//     res.download('students.xlsx','attendence.xlsx');
//   })




////////
  app.get('/check_8208', (req, res) => {
    console.log("hello");
    res.sendFile(__dirname + '/public/student_8208.html');
    //res.sendFile(res.query);  
  })

app.post('/check_8208',(req,res)=>
{

let data_8208 = req.body;
myobjects_8208.push(data_8208);
fs.writeFile('att_8208.json',JSON.stringify(myobjects_8208),err=>
{
    if(err) throw err;
}) ;
res.sendFile(__dirname+'/public/thankyou.html');
})  

  let data_8208=jsonToXLSX(myobjects_8208,'students_8208.xlsx');
  fs.writeFile('students_8208.xlsx',data_8208,(err) => {
      console.log('Good');
  })
  
  
  app.get('/down_8208', (req, res) => {
      console.log("hello");
      res.download('students_8208.xlsx','attendence_8208.xlsx');
    })

    ///////
    app.get('/check_8209', (req, res) => {
        console.log("hello");
        res.sendFile(__dirname + '/public/student_8209.html');
        //res.sendFile(res.query);  
      })
    
    app.post('/check_8209',(req,res)=>
    {
    
    let data_8209 = req.body;
    myobjects_8209.push(data_8209);
    fs.writeFile('att_8209.json',JSON.stringify(myobjects_8209),err=>
    {
        if(err) throw err;
    }) ;
    res.sendFile(__dirname+'/public/thankyou.html');
    })  
    
      let data_8209=jsonToXLSX(myobjects_8209,'students_8209.xlsx');
      fs.writeFile('students_8209.xlsx',data_8209,(err) => {
          console.log('Good');
      })
      
      
      app.get('/down_8209', (req, res) => {
          console.log("hello");
          res.download('students_8209.xlsx','attendence_8209.xlsx');
        })
    ///////
    app.get('/check_8309', (req, res) => {
        console.log("hello");
        res.sendFile(__dirname + '/public/student_8309.html');
        //res.sendFile(res.query);  
      })
    
    app.post('/check_8309',(req,res)=>
    {
    
    let data_8309 = req.body;
    myobjects_8309.push(data_8309);
    fs.writeFile('att_8309.json',JSON.stringify(myobjects_8309),err=>
    {
        if(err) throw err;
    }) ;
    res.sendFile(__dirname+'/public/thankyou.html');
    })  
    
      let data_8309=jsonToXLSX(myobjects_8309,'students_8309.xlsx');
      fs.writeFile('students_8309.xlsx',data_8309,(err) => {
          console.log('Good');
      })
      
      
      app.get('/down_8309', (req, res) => {
          console.log("hello");
          res.download('students_8309.xlsx','attendence_8309.xlsx');
        })
    //////

    app.get('/check_8310', (req, res) => {
        console.log("hello");
        res.sendFile(__dirname + '/public/student_8310.html');
        //res.sendFile(res.query);  
      })
    
    app.post('/check_8310',(req,res)=>
    {
    
    let data_8310 = req.body;
    myobjects_8310.push(data_8310);
    fs.writeFile('att_8310.json',JSON.stringify(myobjects_8310),err=>
    {
        if(err) throw err;
    }) ;
    res.sendFile(__dirname+'/public/thankyou.html');
    })  
    
      let data_8310=jsonToXLSX(myobjects_8310,'students_8310.xlsx');
      fs.writeFile('students_8310.xlsx',data_8310,(err) => {
          console.log('Good');
      })
      
      
      app.get('/down_8310', (req, res) => {
          console.log("hello");
          res.download('students_8310.xlsx','attendence_8310.xlsx');
        })
    //////


    var server = app.listen(process.env.PORT|| 80, () => {
        console.log('Server Listening!')
    })

app.use (express.static('public_html'));

var io = socket (server);

io.on('connection', (socket) => {


    socket.on('iamteacher_8208', (secret) => {
        teacher_id_8208 = socket.id
        console.log(teacher_id_8208);
        fs.readFile('data_8208.json', 'utf-8', (err, file) => {
            
                socket.emit('sendData_8208', file);
                console.log("8208");

            // socket.emit('sendData', file)
        })
    })

    socket.on('iamteacher_8209', (secret) => {
        teacher_id_8209 = socket.id
        console.log(teacher_id_8209);
        fs.readFile('data_8209.json', 'utf-8', (err, file) => {
            
                socket.emit('sendData_8209', file);
                console.log("8209");
            // socket.emit('sendData', file)
        })
    })

    socket.on('iamteacher_8309', (secret) => {
        teacher_id_8309 = socket.id
        console.log(teacher_id_8309);
        fs.readFile('data_8309.json', 'utf-8', (err, file) => {
            
                socket.emit('sendData_8309', file);
                console.log("8309");
            // socket.emit('sendData', file)
        })
    })

    socket.on('iamteacher_8310', (secret) => {
        teacher_id_8310 = socket.id
        console.log(teacher_id_8310);
        fs.readFile('data_8310.json', 'utf-8', (err, file) => {
            
                socket.emit('sendData_8310', file);
                console.log("8310");
            // socket.emit('sendData', file)
        })
    })


    

    // socket.on('iamteacher_8209', (secret) => {
    //     teacher_id = socket.id
    //     console.log(teacher_id);
    //     fs.readFile('data_8209.json', 'utf-8', (err, file) => {
            
    //             socket.emit('sendData', file);
    //         // socket.emit('sendData', file)
    //     })
    // })

    // socket.on('iamteacher_8309', (secret) => {
    //     teacher_id = socket.id
    //     console.log(teacher_id);
    //     fs.readFile('data_8309.json', 'utf-8', (err, file) => {
            
    //             socket.emit('sendData', file);
    //         // socket.emit('sendData', file)
    //     })
    // })




  




    socket.on('addseat_8208', (place) => {
        fs.readFile('data_8208.json', 'utf-8', (err, file) => {
            let data = JSON.parse(file);
            data[place]++;
            fs.writeFile('data_8208.json', JSON.stringify(data), (err) => {
                io.to(teacher_id_8208).emit('sendData_8208', JSON.stringify(data));
            })
            // socket.emit('sendData', file)
        })
        
    })

    socket.on('addseat_8209', (place) => {
        fs.readFile('data_8209.json', 'utf-8', (err, file) => {
            let data = JSON.parse(file);
            data[place]++;
            fs.writeFile('data_8209.json', JSON.stringify(data), (err) => {
                io.to(teacher_id_8209).emit('sendData_8209', JSON.stringify(data));
            })
            // socket.emit('sendData', file)
        })
        
    })

    socket.on('addseat_8309', (place) => {
        fs.readFile('data_8309.json', 'utf-8', (err, file) => {
            let data = JSON.parse(file);
            data[place]++;
            fs.writeFile('data_8309.json', JSON.stringify(data), (err) => {
                io.to(teacher_id_8309).emit('sendData_8309', JSON.stringify(data));
            })
            // socket.emit('sendData', file)
        })
        
    })

    socket.on('addseat_8310', (place) => {
        fs.readFile('data_8310.json', 'utf-8', (err, file) => {
            let data = JSON.parse(file);
            data[place]++;
            fs.writeFile('data_8310.json', JSON.stringify(data), (err) => {
                io.to(teacher_id_8310).emit('sendData_8310', JSON.stringify(data));
            })
            // socket.emit('sendData', file)
        })
        
    })


    


    // socket.on('addseat_8209', (place) => {
    //     fs.readFile('data_8209.json', 'utf-8', (err, file) => {
    //         let data = JSON.parse(file);
    //         data[place]++;
    //         fs.writeFile('data_8209.json', JSON.stringify(data), (err) => {
    //             io.to(teacher_id).emit('sendData', JSON.stringify(data));
    //         })
    //         // socket.emit('sendData', file)
    //     })
        
    // })

    // socket.on('addseat_8309', (place) => {
    //     fs.readFile('data_8309.json', 'utf-8', (err, file) => {
    //         let data = JSON.parse(file);
    //         data[place]++;
    //         fs.writeFile('data_8309.json', JSON.stringify(data), (err) => {
    //             io.to(teacher_id).emit('sendData', JSON.stringify(data));
    //         })
    //         // socket.emit('sendData', file)
    //     })
        
    // })
})




