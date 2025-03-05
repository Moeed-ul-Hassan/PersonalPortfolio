
import blogs from './blogs.js';

document.addEventListener('DOMContentLoaded', () => {
    const blogsList = document.getElementById('blogs-list');
    const blogDetail = document.getElementById('blog-detail');
    const backButton = document.getElementById('back-to-blogs');
    
    // Check if we're on the blogs page
    if (!blogsList) return;
    
    // Function to display all blogs
    function renderBlogsList() {
        blogsList.innerHTML = '';
        
        blogs.forEach(blog => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
            blogCard.innerHTML = `
                <div class="blog-image">
                    <img src="${blog.imageUrl}" alt="${blog.title}">
                </div>
                <div class="blog-content">
                    <h3>${blog.title}</h3>
                    <div class="blog-meta">
                        <span><i class="far fa-calendar"></i> ${blog.date}</span>
                        <span><i class="far fa-user"></i> ${blog.author}</span>
                    </div>
                    <p>${blog.excerpt}</p>
                    <div class="blog-tags">
                        ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <button class="btn-small read-more" data-id="${blog.id}">Read More</button>
                </div>
            `;
            blogsList.appendChild(blogCard);
        });
        
        // Add event listeners to read more buttons
        document.querySelectorAll('.read-more').forEach(button => {
            button.addEventListener('click', (e) => {
                const blogId = parseInt(e.target.getAttribute('data-id'));
                showBlogDetail(blogId);
            });
        });
    }
    
    // Function to display a single blog
    function showBlogDetail(blogId) {
        const blog = blogs.find(b => b.id === blogId);
        if (!blog) return;
        
        blogDetail.innerHTML = `
            <div class="blog-header">
                <h2>${blog.title}</h2>
                <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> ${blog.date}</span>
                    <span><i class="far fa-user"></i> ${blog.author}</span>
                </div>
                <div class="blog-tags">
                    ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="blog-featured-image">
                <img src="${blog.imageUrl}" alt="${blog.title}">
            </div>
            <div class="blog-full-content">
                ${blog.content}
            </div>
        `;
        
        // Show detail view, hide list view
        blogsList.classList.add('hidden');
        blogDetail.classList.remove('hidden');
        backButton.classList.remove('hidden');
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
    
    // Back button event listener
    backButton.addEventListener('click', () => {
        blogsList.classList.remove('hidden');
        blogDetail.classList.add('hidden');
        backButton.classList.add('hidden');
    });
    
    // Initialize the blogs list
    renderBlogsList();
    
    // Handle direct links to blog posts (e.g., ?blog=1)
    const urlParams = new URLSearchParams(window.location.search);
    const blogParam = urlParams.get('blog');
    if (blogParam) {
        const blogId = parseInt(blogParam);
        showBlogDetail(blogId);
    }
});
