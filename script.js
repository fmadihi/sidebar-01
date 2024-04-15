const sidebarBtn = document.querySelector(".toggle-btn");

sidebarBtn.addEventListener("click", () => {

    $('nav').toggleClass('add');
    $('h2,span,.user_details').toggleClass('hidden');
    $('.toggle-btn').toggleClass('rotateBtn');
});

