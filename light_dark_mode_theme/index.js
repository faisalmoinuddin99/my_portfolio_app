const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log(btn.checked);
    if (btn.checked == true) {
        document.body.setAttribute("data-theme", "dark");
    } else {
        document.body.setAttribute("data-theme", "");
    }
});
