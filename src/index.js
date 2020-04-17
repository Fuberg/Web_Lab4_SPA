import _ from 'lodash';
import './style.css';

var link = document.getElementById('profile-tab');
link.addEventListener('click', function() {
    viewProfilePage();
})

function viewProfilePage() {
    var contentBlock = document.querySelector('.content')
    contentBlock.innerHTML = '<h5>Лабораторная работа 4</h5><p>ФИО : Мусаэлян Сергей Михайлович</p><p>Группа : М3307</p>'
}

viewProfilePage()