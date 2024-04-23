let menubtn = document.querySelector('#menubtn');
let sidebar = document.querySelector('.sidebar');
let shopbtn = document.querySelector('.bagbtn');

menubtn.onclick = function(){
    sidebar.classList.toggle('active');
};

shopbtn.onclick = function(){
    console.log('hi');
};
