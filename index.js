 let cntSlider=document.getElementsByClassName("navbaarCantainer");
 let i=0;
// const =document.ElementsByClassName("list-icon-btn");
function myFunction(){

    if(i==0){
cntSlider[0].style.marginLeft="0px";
i++;
    }else{
        i=0
cntSlider[0].style.marginLeft="-50em";

    }
}