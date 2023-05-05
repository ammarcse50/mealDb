

const loadUser =()=>
{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}  


const displayUser = user =>
{
    console.log(user.results[0].name.first)
     
    const name = document.getElementById('name');

    name.innerHTML = user.results[0].name.first +" "+ user.results[0].name.last;

   
      
   const gender = document.getElementById('gender');

   gender.innerText = user.results[0].gender;

   console.log(user.results[0].gender)

}

loadUser();