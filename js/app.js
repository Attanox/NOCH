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



    

