function CreatCard(title, duration, Cname, views, monthold, image) {
    let viewstr;
    if (views < 1000) {
        viewstr = views;
    }
    else if (views > 1000 && views < 1000000) {
        viewstr = Math.floor(views / 1000) + "K";

    }
    else {
        viewstr = Math.floor(views / 1000000) + "M";
    }
    var inhtml = `<div class="card">
        <div class="thumbnail">
            <img src=${image}
                alt="">
            <span class="duration">${duration}</span>
        </div>
        <div class="info">
            <h3 class="title">${title}</h3>
            <p class="para">${Cname} . ${viewstr} views . ${monthold} months ago</p>
        </div>
    </div>`



    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + inhtml;
}
CreatCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "31:20", "CodewithNeha", 567873, 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
