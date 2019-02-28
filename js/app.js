let arr = document.querySelectorAll('.options__container > *');
let containers = document.querySelectorAll('.menu__container1, .menu__container2, .menu__container3');
//console.log(containers);

function wipe_conts(list){
    for(let j = 0, len = list.length; j < len; j++){
        list[j].style.display = 'none';
        list[j].style.opacity = '0';
        arr[j].classList.remove("active");
    }
}

function addEventListenerList(list, event) {
    for (let i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, function(e){
            wipe_conts(containers);
            containers[i].style.display = 'flex';
            containers[i].style.opacity = '1';
            arr[i].classList.add("active");
        });
    }
}

addEventListenerList(arr, 'click');
addEventListenerList(arr, 'mouseover');


let checkb = document.querySelector('.header__nav__container__navi--button');

checkb.addEventListener('click', function(){
    let mlist = document.querySelector('.header__nav__container__navi > ul');
    //setTimeout(function(){
        // document.querySelector('.header > h1').classList.toggle('hide_n_show');
    //}, 500);
    if(mlist.className === 'roll_down'){
        setTimeout(function(){
            document.querySelector('.header > h1').classList.toggle('hide_n_show');
        }, 700);
        //document.querySelector('.header > h1').classList.toggle('slow');
        mlist.classList.toggle('roll_down');
    } else {
        setTimeout(function(){
            mlist.classList.toggle('roll_down');
        }, 700);
        //document.querySelector('.header > h1').classList.toggle('slow');
        document.querySelector('.header > h1').classList.toggle('hide_n_show');
    }
});


const drop = document.querySelector('.about > .about__drop');
function coffe_mug() {
    drop.style.marginTop = -drop.clientHeight/2 + 5 + "px";
    console.log(drop.clientHeight);
};

coffe_mug();
window.onresize = coffe_mug();

    

