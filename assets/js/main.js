// toogler

const navSlide = () =>{
    const burger = document.querySelector(".burger")
    const navlists = document.querySelector("nav")
    // const burger = document ".querySelector(".burger")" buat ngambil code

    burger.addEventListener ("click", () =>{
        navlists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
        // ".classList" buat nambah class!
    })
}

navSlide();

// ilangin jejak pengisian
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName("form")) {
        form.reset()
    }
};

