const ratingcmp = document.querySelector(".rating-component")
const tnkcmp = document.querySelector(".tnk-component")
const ratings = document.querySelectorAll(".btn-rate")
const firstrating = document.getElementById("rating")
const submit = document.getElementById("btnsubmit")

submit.addEventListener("click", () => {
    ratingcmp.style.display = "none"
    tnkcmp.classList.remove("hidden")
})

ratings.forEach((rate) => {
    rate.addEventListener("click", () => {
        firstrating.innerHTML = rate.innerHTML
    })
})


