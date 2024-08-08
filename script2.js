const click=document.querySelector('.click');
const giftBox=document.querySelector('.gift-box')
const giftContainer=document.querySelector('.gift-conatiner')
const text=document.querySelector('.text');


click.addEventListener('click',()=>
{
    if(click.className==="click")
        {
            click.classList.add('active')
            giftBox.classList.add('active')
            giftContainer.classList.add('active')
            text.classList.add('active')
            
        }

        else{
            click.classList.remove('active')
            giftBox.classList.remove('active')
            giftContainer.classList.remove('active')
            // text.classList.remove('active')
        }
})
document.addEventListener('DOMContentLoaded', function () {
    var audio = new Audio('bday.mp3');
    document.querySelector('#click').addEventListener('change', function () {
        if (this.checked) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
    const giftBox = document.querySelector('.gift-box');
    if (document.getElementById("popup-1").classList.contains('active')) {
        giftBox.style.display = 'none';
    } else {
        giftBox.style.display = 'block';
    }
}
