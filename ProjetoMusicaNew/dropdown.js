const infoDropdownButton = document.getElementById("infoDropdown");
    const infoDropdownContent = document.getElementById("infoDropdownContent");

    // Defina o dropdown como inativo (fechado) por padrão
    infoDropdownContent.style.display = "none";

    infoDropdownButton.addEventListener("click", function() {
        // Alterna a classe "active" no botão para estilização
        infoDropdownButton.classList.toggle("active");

        // Alterna a exibição do conteúdo do dropdown
        if (infoDropdownContent.style.display === "block") {
            infoDropdownContent.style.display = "none";
        } else {
            infoDropdownContent.style.display = "block";
        }
    });

    window.addEventListener("click", function(event) {
        if (event.target !== infoDropdownButton) {
            infoDropdownContent.style.display = "none";
            infoDropdownButton.classList.remove("active");
        }
    });