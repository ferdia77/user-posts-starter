const postListEl = document.querySelector('.post-list');
const id = localStorage.getItem("id")

async function onSearchChange(id) {
   const id = event.target.value;
   renderPosts(id)
}

async function renderPosts(Id) {
    
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=:id=${id}`)
    const postsData = await posts.json();
    console.log(postsData)

    postListEl.innerHTML = postsData.map(post => postHTML(post)).join('');
}

function postHTML(post) {
    return `
    <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>    
    `
}

renderPosts(id);