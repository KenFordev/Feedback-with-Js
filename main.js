const ratingEl = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";



ratingEl.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (e) => {
        removeActive();
        selectedRating = e.target.innerText || e.target.parentNode.innerText;
        e.target.parentNode.classList.add("active");
    });
});

btnEl.addEventListener("click", () => {
    if(selectedRating !== "") {
        containerEl.innerHTML = `
        <strong>Thank you!!</strong>
        <br />
        <br />
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `
    }else {
        alert("Please select some Feedback!!")
    }
})
console.log(selectedRating);
function removeActive() {
    ratingEl.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    })
}