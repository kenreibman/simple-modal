// Get modal element

var modal = document.querySelector('#simpleModal');

// Get open modal buttom
var modalBtn = document.querySelector('#modalBtn');

// Get close button
var closeBtn = document.querySelector('.closeBtn');

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close Click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);

// openModal Function
function openModal() {
    modal.style.display = 'block';
}

// closeModal Function
 function closeModal() {
     modal.style.display = 'none';
}

// Function to close modal if clicked outside
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}