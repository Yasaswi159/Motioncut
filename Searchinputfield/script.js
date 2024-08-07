// Optional: Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

function selectCategory(category) {
    var dropdownButton = document.getElementById('dropdownButton');
    dropdownButton.innerHTML = category + ' <i class="fas fa-chevron-down"></i>';
}