'use strict';

window.addEventListener("load", function () {
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');

    //ボタンがクリックされた時表示
    open.addEventListener('click', function () {
        // modal.classList.remove('hidden');
        // mask.classList.remove('hidden');
        modal.style.display = 'block';
        mask.style.display = 'block'; 
    });

    //ボタンがクリックされた時非表示
    close.addEventListener('click', function () {
        // modal.classList.add('hidden');
        // mask.classList.add('hidden');
        modal.style.display = 'none';
        mask.style.display = 'none';
    });

    mask.addEventListener('click', function () {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });

    //モーダルコンテンツ以外がクリックされた時
    window.addEventListener('click', outsideClose);
    function outsideClose(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        };
    };
});


    // window.onload = function () {
    //     alert("＜<modal.js >＞Loading completed");
    // };