const left_arr = document.querySelector("#left-arrow");
const right_arr = document.querySelector("#right-arrow");
const dots = document.querySelectorAll(".dot");

let current_index = 0;

const showslide = (current_index) => {
    document.querySelector(".display-content").style.transform = `translateX(-${current_index * 100}%)`;
    dots.forEach(dot => {
        dot.classList.remove('active');
    })
    dots[current_index].classList.add('active');
}

left_arr.onclick = () => {
    if (current_index == 0) {
        current_index = 2;
    }
    else{
        current_index-- ;
    }
    showslide(current_index);
}
right_arr.onclick = () => {
    if (current_index == 2) {
        current_index = 0;
    }
    else{
        current_index++ ;
    }
    showslide(current_index);
}

const image_box = document.querySelectorAll(".img");
image_box.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.innerHTML = `<div class="p-8 space-y-3">
                    <h1 class="text-xl underline text-white ">11/09/2024</h1>
                    <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae suscipit ea, nemo praesentium facere, sapiente quos, mollitia doloremque provident doloribus perferendis corrupti. Fugiat doloribus mollitia blanditiis tempore dolores modi exercitationem.</p>
                    <a href="/" class="text-blue-700 underline">read more</a>
                </div>`
    })
    box.addEventListener("mouseleave", () => {
        box.innerHTML = ``;
    })
})
