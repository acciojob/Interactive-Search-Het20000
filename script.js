document.getElementById('searchButton').addEventListener('click', function() {
    const searchDiv = document.getElementById('searchDiv');
    const searchInput = document.getElementById('searchInput');

    // Make the search div active
    searchDiv.classList.add('active');

    // Focus on the input field
    searchInput.focus();
});
