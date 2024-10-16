// Add event listeners for button clicks
document.addEventListener("DOMContentLoaded", function() {
    // Button elements
    const websiteButton = document.getElementById('websiteButton');
    const telegramButton = document.getElementById('telegramButton');
    const youtubeButton = document.getElementById('youtubeButton');
    const emailButton = document.getElementById('emailButton');
    const callButton = document.getElementById('callButton');
    const appStoreButton = document.getElementById('appStoreButton');
    const playStoreButton = document.getElementById('playStoreButton');
    
    // Social Media Links
    const instagramLink = document.getElementById('instagramLink');
    const tiktokLink = document.getElementById('tiktokLink');
    const youtubeLink = document.getElementById('youtubeLink');
    const facebookLink = document.getElementById('facebookLink');

    // Confirmation alert function
    function confirmRedirect(link, platformName) {
        if (confirm(`You are about to be redirected to ${platformName}. Do you want to continue?`)) {
            window.location.href = link;
        }
    }

    // Event listeners for the buttons
    websiteButton.addEventListener('click', function(e) {
        e.preventDefault();
        confirmRedirect('https://habaridoc.com', 'HabarDOC website');
    });

    telegramButton.addEventListener('click', function(e) {
        e.preventDefault();
        confirmRedirect('https://t.me/HabariDocdigitalhealth', 'Telegram');
    });

    youtubeButton.addEventListener('click', function(e) {
        e.preventDefault();
        confirmRedirect('https://www.youtube.com/@tenamazega4878', 'YouTube Health Education');
    });

    emailButton.addEventListener('click', function(e) {
        e.preventDefault();
        confirmRedirect('mailto:Info@HabariDOC.com', 'Email');
    });

    callButton.addEventListener('click', function(e) {
        e.preventDefault();
        confirmRedirect('tel:+251XXXXXXXX', 'the Emergency Hotline');
    });

    // App Store and Play Store Buttons
    appStoreButton.addEventListener('click', function(e) {
        e.preventDefault();
        confirmRedirect('https://www.apple.com/us/search/habaridoc?src=globalnav', 'the App Store');
    });

    playStoreButton.addEventListener('click', function(e) {
        e.preventDefault();
        confirmRedirect('https://play.google.com/store/search?q=habaridoc&c=apps&hl=en', 'the Play Store');
    });

    // Social media links confirmation
    instagramLink.addEventListener('click', function(e) {
        e.preventDefault();
        confirmRedirect('https://instagram.com', 'Instagram');
    });

    tiktokLink.addEventListener('click', function(e) {
        e.preventDefault();
        confirmRedirect('https://tiktok.com', 'TikTok');
    });

    youtubeLink.addEventListener('click', function(e) {
        e.preventDefault();
        confirmRedirect('https://youtube.com', 'YouTube');
    });

    facebookLink.addEventListener('click', function(e) {
        e.preventDefault();
        confirmRedirect('https://facebook.com', 'Facebook');
    });
});
