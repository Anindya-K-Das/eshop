let menubtn = document.querySelector('#menubtn');
let sidebar = document.querySelector('.sidebar');


menubtn.onclick = function(){
    sidebar.classList.toggle('active');
};

