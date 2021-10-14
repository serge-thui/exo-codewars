const section=document.querySelector('#carousel');
const items=section.querySelectorAll('li');
const nbSlide=items.length;
console.log(nbSlide);
const suivant=document.querySelector('button.navright');
const precedent=document.querySelector('button.navleft');
let count=0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count<nbSlide-1){
        count++;
    }else{
        count=0;
    }

    items[count].classList.add('active');
}
suivant.addEventListener('click', slideSuivante);

function slidePrecedente(){
    items[count].classList.remove('active');

    if(count>0){
        count--;
    }else{
        count=nbSlide-1;
    }

    items[count].classList.add('active');
}
precedent.addEventListener('click', slidePrecedente);