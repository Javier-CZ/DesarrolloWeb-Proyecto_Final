function captionOn($caption) {
    $captionClass = "caption-" + $caption;

    $captionItem = document.getElementById($captionClass);

    $captionItem.style.display ="block";
}

function captionOff($caption) {
    $captionClass = "caption-" + $caption;

    $captionItem = document.getElementById($captionClass);

    $captionItem.style.display ="none";
}