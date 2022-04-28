console.log("------START-------");
// Call only to refresh galleries
// localStorage.clear();


// Load JSON data into array
var traditional = []
var all = []
var digital = []


traditional =  loadObjArray(trad)
var modes = {
    "trad" : traditional, 
    "all" : all, 
    "digital" : digital
}

function setUp(){
    console.log("setting up");
    if (localStorage.getItem('allIndex') == null){
        console.log("null");
        localStorage.setItem('allIndex', 0);
        localStorage.setItem('tradIndex', 0);
        localStorage.setItem('digIndex', 0);
        // Change default mode to all 
        localStorage.setItem('mode', 'trad');

    }

}

function loadObjArray(arr){
    let result = []
    for (let i = 0; i < arr.length; i++){
        result[i] = JSON.parse(arr[i]);
    }
    return result
}

function showGalleryImages(){
    setUp()
    console.log('SHOWING GALLERY IMAGES');
    const gallery = document.getElementById("gallery");
    removeAllChildNodes(gallery);

    current = getCurr();
    console.log(current);

    if (current.array == null){
        console.log("Nothing");
        var p = document.createElement("p");
        var text = document.createTextNode("Currently no projects of this type at this time!");
        p.appendChild(text);
        gallery.appendChild(p);
    }else{
        for (let i = 0; i < current.array.length; i++){
            var link = document.createElement("a");
            // link.href = "slide.html"
            var img = document.createElement("img");
            img.src = current.array[i].src;
            img.classList.add("img-fluid");
            img.classList.add("img-gallery");
            img.id = i
        
            link.appendChild(img);
            gallery.appendChild(link);

            // set image index in before going to slide mode when img clicked
            img.addEventListener('click', function (e) {
                index = e.target.id
                console.log(index);
                current = getCurr()
                localStorage.setItem(current.modeIndexName, index);
                location.href = "slide.html"
            });
        }

    }

        
}

//set slide information 
function showSlide(){
    setUp();
    let current = getCurr();
    setSlide(current.index, current.array);
}

// Returns current mode and index
function getCurr(){
    let m = localStorage.getItem('mode');
    let currArr = modes[m];
    console.log(modes)
    let index = localStorage.getItem(m + 'Index');

    return{
        'mode': m,
        'modeIndexName': m + 'Index',
        'array': currArr,
        'index': index
    };

}

// Change slide index
function changeIndex(change){
    // get current: gallery(array), modeName, index
    console.log('changing by: '+String(change));
    current = getCurr()

    // change and update index
    let index = parseInt(current.index)
    index = doWrapAround(index + change, current.array);
    localStorage.setItem(current.modeIndexName, index);
    console.log(index)

    // Change slide position
    showSlide();

}

// set information onto html page
function setSlide(index, arr){
    let img = arr[index]
    document.getElementById("slide-img").src = img.src
    document.getElementById("slide-description").innerText = img.description
    document.getElementById("slide-title").innerText = img.title
    document.getElementById("slide-pos").innerText = String(parseInt(index) + 1)+'/'+String(arr.length)
}

// Ensure that index is not out of bounds
function doWrapAround(index, arr){
    if(index < 0){
        return arr.length -1
    }else if(index >= arr.length){
        return 0
    }else{
        return index
    }
}

function setMode(modeName){
    localStorage.setItem('mode', modeName);
    console.log(localStorage.getItem('mode'));
    // Code to bold the name of the current mode
    if (modeName == "trad"){

    }else if (modeName == "dig"){

    }else{

    }
    showGalleryImages()
}

// Removes all children from a node
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
