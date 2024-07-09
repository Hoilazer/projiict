document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        let isValid = true;
        this.querySelectorAll("input, textarea").forEach(function(input) {
            if (!input.value) {
                isValid = false;
                input.classList.add("is-invalid
