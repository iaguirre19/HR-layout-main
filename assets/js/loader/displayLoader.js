const displayLoader = () => {
    const loader = document.querySelector(".loader-container");
    loader.classList.add("active");

    setTimeout(() => {
        window.location.href = "pdf-print.html";
    }, 3000);
}

export {displayLoader}