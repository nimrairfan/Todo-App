
var input = document.querySelector('input');
var btn = document.querySelector('.addTask > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e)=>{
    (e.keyCode === 13 ? addList(e) : null);
})

function addList(e){
    var notCompleted = document.querySelector('.notCompleted');
    var Completed = document.querySelector('.Completed');
    var newLi = document.createElement('li');
    var checkBtn = document.createElement('button');
    var delBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if(input.value !==''){
        newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);  1           
    }

    checkBtn.addEventListener('click', function(){
        var parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none';
    });

    delBtn.addEventListener('click', function(){
        var parent = this.parentNode;
        parent.remove();
    });
}