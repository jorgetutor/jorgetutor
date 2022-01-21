const username = `jorgetutor`
const RSSUrl = `https://medium.com/feed/@${username}`;
const RSSConverter = `https://api.rss2json.com/v1/api.json?rss_url=${RSSUrl}`;

const $textList = document.querySelector('#medium-posts');

const getMediumData = async () => {
    
    try {
    const response = await fetch(RSSConverter);
    const data = await response.json();
    console.log(data);
    return data
    } catch(error){
        console.log(error)
    }
};

const getLatestTextsList = async () => {
    const posts = await getMediumData();

    for (let post of posts.items){
        
        const title = post.title;
        const link = post.link;
        const thumbnail = post.thumbnail;
        const pubDate = new Date(post.pubDate);
        const pubDateString = pubDate.toLocaleString('en-us',{month:'short', year:'numeric'});
        const author = post.author;
        const content = post.content;
        const categories = post.categories.join(', ');

        const newItem = document.createElement('li');
        newItem.classList.add('list-group-item', 'p-0', 'pt-3', 'pb-3');
        newItem.innerHTML += `<div class="text-muted">${pubDateString}</div>`;
        newItem.innerHTML += `<div><a href="${link}" class="fw-bold text-black fs-4 text-decoration-none">${title}</a></div>`;
        newItem.innerHTML += `<div class="text-muted"><em> ${categories}</em></div>`; 
        //newItem.innerHTML += `${content}`; 

        $textList.appendChild(newItem);
    }
};

getLatestTextsList();