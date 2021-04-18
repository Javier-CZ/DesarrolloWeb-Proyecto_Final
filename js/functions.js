function hoverOn($name) {
    $captionName = "caption-" + $name;

    $captionItem = document.getElementById($captionName);

    $captionItem.style.display ="block";
}

function hoverOff($name) {
    $captionName = "caption-" + $name;

    $captionItem = document.getElementById($captionName);

    $captionItem.style.display ="none";
}

function displayFlex($name) {
    $elementId = "block-" + $name;

    $element = document.getElementById($elementId);

   $element.style.display = "flex";
}

function displayNone($name) {
    $elementId = "block-" + $name;

    $element = document.getElementById($elementId);

   $element.style.display = "none";
}