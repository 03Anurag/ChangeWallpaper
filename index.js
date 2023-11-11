const wallpaper = document.querySelectorAll('.wallpaper');
const left=document.querySelector('.left');
const right=document.querySelector('.right');
const body=document.body;


let active =1;


function nextbg(){
    active++;
    if(active>wallpaper.length){
        active=1
    }
    wallpaper.forEach((bg)=>{
        bg.classList.remove('active');        
    });
    const div =wallpaper[active-1];
    div.classList.add('active');


    body.style.backgroundImage=div.style.backgroundImage;
}


function prevbg(){
    active--;
    if(active<1){
        active=wallpaper.length;
    };
    wallpaper.forEach((bg)=>{
        bg.classList.remove('active');        
    });

    const div=wallpaper[active-1];
    div.classList.add('active');

    body.style.backgroundImage=div.style.backgroundImage;
    
}

right.addEventListener('click',nextbg);
left.addEventListener('click',prevbg);



function showbg(){
    const div=wallpaper[active-1];
    div.classList.add('active');
    body.style.backgroundImage=div.style.backgroundImage;
}


document.addEventListener('DOMContentLoaded',showbg)

