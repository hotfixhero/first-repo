document.addEventListener('DOMContentLoaded', function() {
    // Function to handle modal display for project details
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectDetails = this.dataset.details;
            modal.querySelector('.modal-content').innerText = projectDetails;
            modal.style.display = 'block';
        });
    });

    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});