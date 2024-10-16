document.addEventListener("DOMContentLoaded", function() {
    // Confirmation alert function
    function confirmRedirect(link, platformName) {
        if (confirm(`You are about to be redirected to ${platformName}. Do you want to continue?`)) {
            window.location.href = link;
        }
    }

    // Event listeners for consultation and professional sections
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platformName = link.textContent.trim();
            confirmRedirect(link.href, platformName);
        });
    });
});
