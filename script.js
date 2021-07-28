const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 3;
let page = 1;

// Fetch posts from API
async function getPosts()
{
    // Fetch Posts from the API and assign limit and page filter using pre-identified variables
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
      );

      const data = await res.json();

      return data;
}

// Show Post in DOM
async function showPosts()
{
    const posts = await getPosts();
    // Loop Through Posts
    posts.forEach(post =>
        {
            const postEl = document.createElement('div');
            postEl.classList.add('post');
            postEl.innerHTML = `
            <div class="number">#${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
            </div>
            `;
         
        // Put it into the DOM
        postsContainer.appendChild(postEl);
        });
}

// Show Initial Posts
showPosts();


// Show Loader & Fetch More Posts
function showLoading()
{
    loading.classList.add('show');

    // Decrease the opacity of loading transition after we stop scrolling
    setTimeout(() =>
    {
        loading.classList.remove('show');

        // Set another Timeout to display more posts from more pages with a new HTTP Request
        setTimeout(() =>
        {
            page++;
            showPosts();
        }, 300)
    }, 1000 )
}

// filterPosts Function


// Adding the Functionality by input event
function filterPosts(e)
{
    const term = e.target.value.toUpperCase();
    // Get all the posts
    const posts = document.querySelectorAll('.post');
    // Loop through posts
    posts.forEach(post =>
        {
            //Adding filters
            const title = post.querySelector('.post-title').innerText.toUpperCase();
            const body = post.querySelector('.post-body').innerText.toUpperCase();

            // Match inputs to the Term using [indexOf]. If it doesn't match, it will return a Negative 1
            if (title.indexOf(term) > -1 || body.indexOf(term) > -1) 
            {
                // Display it into the FLEX
                post.style.display = 'flex';
            }
            else
            {
                post.style.display = 'none';
            }
        });
}

    // Adding event listener on the windows
    window.addEventListener('scroll', () =>
    {
        //console.log(document.documentElement.scrollHeight);  - Test the code
        // We want to pull variables from an object
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        // scrollTop and clientHieght refer to the length of every scroll.
        //While scrollHeight refers to the overall number of srollable items
        if (scrollTop + clientHeight >= scrollHeight - 5)
        {
            showLoading();
        }
    }
    );


    // Adding a Filter for posts
    filter.addEventListener('input', filterPosts);