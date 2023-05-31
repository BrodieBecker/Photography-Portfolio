    const images = document.querySelectorAll(".gallery-item img"); //Create list of all modal divs
    let imgSrc;

    // Ieterate through list assigning click listener to each
    images.forEach((img) => {
        img.addEventListener("click", (e) => {
            imgSrc = e.target.src;
            imgModal(imgSrc);
        });
    });
    //creating the modal
    let imgModal = (src) => {
        const modal = document.createElement("div");
        modal.setAttribute("class", "modal");
        //add the modal to the main section or the parent element
        document.querySelector(".main").append(modal);
        //adding image to modal
        const newImage = document.createElement("img");
        newImage.setAttribute("src", src);
        //creating the close button
        const closeBtn = document.createElement("i");
        closeBtn.setAttribute("class", "fa-solid fa-xmark");
        //close function
        closeBtn.onclick = () => {
            modal.remove();
        };
        modal.append(newImage, closeBtn);
    };