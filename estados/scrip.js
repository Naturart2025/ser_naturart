const stories = [
    { image: 'estados/assets_img/1.png', text: 'Novedades' },
    { image: 'estados/assets_img/2.png', text: 'Novedades' },


];



let currentIndex = 0;
const alertContainer = document.getElementById('alertContainer');
const storyImage = document.getElementById('storyImage');
const storyText = document.getElementById('storyText');


function showStory(index) {
    const currentStory = stories[index];
    storyImage.src = currentStory.image;
    storyText.textContent = currentStory.text;
}

function nextStory() {
    currentIndex = (currentIndex + 1) % stories.length;
    showStory(currentIndex);
}

function prevStory() {
    currentIndex = (currentIndex - 1 + stories.length) % stories.length;
    showStory(currentIndex);
}

function closeAlert() {
    alertContainer.style.display = 'none';
    Swal.close();
}

showStory(currentIndex);

setInterval(nextStory, 5000);

Swal.fire({

    showConfirmButton: false,
    width: 260,
    backdrop: `#4b6b7460`,
});