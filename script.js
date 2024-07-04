// Simulated forum data (replace with actual data if using server)
let forumData = [
    { id: 1, query: "How do I start with Week 1 materials?", replies: [] },
    { id: 2, query: "What is the format for the final project report?", replies: [] },
    // Add more queries as necessary
];

// Function to display forum posts
function displayForumPosts() {
    const forumContainer = document.getElementById('forum');
    forumContainer.innerHTML = '';

    forumData.forEach(post => {
        let postHTML = `<div class="post">
                            <p>${post.query}</p>
                            <ul class="replies">
                                ${post.replies.map(reply => `<li>${reply}</li>`).join('')}
                            </ul>
                        </div>`;
        forumContainer.innerHTML += postHTML;
    });
}

// Event listener for form submission
document.getElementById('forum-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const queryText = document.getElementById('query').value.trim();
    
    if (queryText !== '') {
        forumData.push({ id: forumData.length + 1, query: queryText, replies: [] });
        displayForumPosts();
        document.getElementById('forum-form').reset();
    }
});

// Initial call to display forum posts
displayForumPosts();
