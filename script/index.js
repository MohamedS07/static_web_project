const filterButtons = document.querySelectorAll(".categories button");
const products = document.querySelectorAll(".products .row");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        products.forEach((product) => {
            if (
                filter === "all" ||
                product.getAttribute("data-category") === filter
            ) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});