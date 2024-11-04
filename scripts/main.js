
document.addEventListener('DOMContentLoaded', function () {

  const tabs = document.querySelectorAll('#experienceTab li a');
  const tabContents = document.querySelectorAll('#experienceTabContent > div');


  document.getElementById('mobile-menu-button').addEventListener('click', function () {
      var menu = document.getElementById('mobile-menu');
      const iconOpen = document.getElementById('icon-open');
      const iconClose = document.getElementById('icon-close');
      menu.classList.toggle('hidden');
      iconOpen.classList.toggle('hidden');
      iconClose.classList.toggle('hidden');
  });

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

          // Add active class to the clicked tab
          this.parentElement.classList.add('active');

          // Hide all tab contents
          tabContents.forEach(content => content.classList.add('hidden'));

          // Show the clicked tab content
          const target = document.querySelector(this.getAttribute('href'));
          target.classList.remove('hidden');
          target.classList.add('animate-slideUp');
      });
  });
});
