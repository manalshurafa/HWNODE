//edit your code 
fetch('http://localhost:3000/user?name=Manal',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})
const data = { username: 'Manal' };
fetch('http://localhost:3000/user?name=Manal',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})