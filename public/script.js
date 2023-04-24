const left_container=document.getElementsByClassName("left_container");

console.log("left_container : ",left_container);


const right_container=document.getElementsByClassName("right_container")[0];

var toggle= false ;

left_container.addEventListener("click",()=>{
    console.log("event call");
    if(window.innerWidth<1300)
    {
        if(toggle)
        {

            right_container.style.display="none";
            toggle=!toggle;

        }
        else{
            right_container.style.display="flex";
            toggle=!toggle;


        }
    }
})
