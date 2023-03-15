let parent = document.getElementById("parent")

parent.addEventListener('click', (e)=>{
  console.log("event happened on", e.target);
  console.log("event registerd on", e.currentTarget);
});
document.addEventListener('click', (e)=> {
  let target = e.target;
  if( target.classList.contains(".btn") )  {
     // handle btn click
  } 
});