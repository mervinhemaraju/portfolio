
document.addEventListener('DOMContentLoaded', function () {
    // Get the tabs for the experience section
    const tabs = document.querySelectorAll('#experienceTab li a');
    const tabContents = document.querySelectorAll('#experienceTabContent > div');

    // Adds animation to toggleButton experience
    $("#toggleButton").click(function(){
        $("#toggleDiv").slideToggle("slow");
    });

    // Adds animation and updates the mobile device menu
    $('#mobile-menu-button').click(function() {
        var menu = $('#mobile-menu');
        const iconOpen = $('#icon-open');
        const iconClose = $('#icon-close');
        iconOpen.toggleClass('hidden');
        iconClose.toggleClass('hidden');
        if (menu.is(':visible')) {
            menu.slideUp();
        } else {
            menu.slideDown();
        }
    });

    // Experience tabs updates
    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            document.querySelectorAll('#experienceTab a').forEach(a => a.setAttribute(
                'aria-selected', 'false'));
            this.setAttribute('aria-selected', 'true');
            document.querySelectorAll('#experienceTabContent > div').forEach(content =>
                content.setAttribute('aria-hidden', 'true'));
            document.querySelector(this.getAttribute('href')).setAttribute(
                'aria-hidden', 'false');

            // Remove active class from all tabs
            tabs.forEach(t => t.parentElement.classList.remove('active'));
            tabs.forEach(t => t.classList.remove('active'));

            // Add active class to the clicked tab
            this.parentElement.classList.add('active');
            this.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.add('hidden'));

            // Show the clicked tab content
            const target = document.querySelector(this.getAttribute('href'));
            target.classList.remove('hidden');
            target.classList.add('animate-slideUp');
        });
    });
});
