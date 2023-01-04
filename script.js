const image = document.querySelector('#myImage');
const text =document.querySelector('h2');
const btnOne=document.querySelector('.btnOne');
const btnTwo=document.querySelector('.btnTwo');
const btnThree=document.querySelector('.btnThree');
const btnFour=document.querySelector('.btnFour');
btnOne.addEventListener('click', spring);

function spring(){
    image.setAttribute("src", "https://images.unsplash.com/photo-1551339965-ef76039d4228?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNwcmluZyUyMG1vcm5pbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
    text.innerHTML='What would you like for brakfast?';
    btnOne.innerHTML='Cup of coffee and croissant';
    btnTwo.innerHTML='Cup of green tea and toast&jam';
    btnThree.innerHTML='Orange fresh and avocado toast';
    btnFour.innerHTML='Scrambled eggs and tea';
    btnOne.addEventListener('click', coffe);
    btnTwo.addEventListener('click', tea);
    btnThree.addEventListener('click', orange);
    btnFour.addEventListener('click', egg);
}
function coffe(){
    image.setAttribute("src", "https://images.unsplash.com/photo-1646311160599-d8715659dd88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNvZmZlJTIwY3JvaXNzYW50fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
    text.innerHTML="You are in Paris, let's go to:";
    btnOne.innerHTML='Walk trough city center';
    btnTwo.innerHTML='Enjoy Louvre';
    btnThree.innerHTML='Grand shopping';
    btnFour.innerHTML='Bois de Vincennes';
    btnOne.addEventListener('click', walk);
    btnTwo.addEventListener('click', louvre);
    btnThree.addEventListener('click', shopping);
    btnFour.addEventListener('click', vincennes);
}