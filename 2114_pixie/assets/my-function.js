//function 2
document.getElementById("btnChangeTheme").addEventListener('click',function(){
    //change background color
    if(document.body.style.backgroundColor == 'Black'){
        document.body.style.backgroundColor == 'white';
    }else{
        document.body.style.backgroundColor = 'Black';
    }
})