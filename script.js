function add(imgSrc) {
    var parent = document.querySelector(".workarea")
    var img = document.createElement("img")
    img.setAttribute("src", imgSrc)
    img.setAttribute("id", "ob")
    img.setAttribute("class", "ob")
    img.setAttribute("style", "position:absolute; left:0px; top:50px; cursor:pointer; cursor:move; border:0")
    img.setAttribute("onmousedown", "startDrag(event, this)")
    parent.appendChild(img);
}

