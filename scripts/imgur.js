function upload(file) {
    
    var imageLink ="";

    /* Is the file an image? */
    if (!file || !file.type.match(/image.*/)) return;

    var fd = new FormData();
    fd.append("image", file); // Append the file
    fd.append("key", "309705456930db4");

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://api.imgur.com/2/upload.json");
    xhr.onload = function() {
        var link = JSON.parse(xhr.responseText).upload.links.imgur_page;

        document.querySelector("#link").href = link;
        document.querySelector("#link").innerHTML = link;
        var imageLink = ""+document.querySelector("#link").innerHTML.replace("http://imgur.com/", "http://i.imgur.com/")+".jpg";

        /* Image Preview */
        document.getElementById("result").style.display = "inline";
        document.getElementById("link-to-image").style.background = "url(" + imageLink + ") center center no-repeat";
    };

    /* Send the formdata */
    xhr.send(fd);
};