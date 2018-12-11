var tabBtnList = document.querySelectorAll('.tablink');

tabBtnList.forEach(btn => {
    btn.addEventListener('click', displayTab);
})

function displayTab() {
    var elList = document.querySelectorAll('.tabcontent');
    elList.forEach(el => {
        el.style.display = 'none';
    })

    var elId = this.dataset.tablink;    
    var el = document.getElementById(`${elId}`);
    el.style.display = '';
}