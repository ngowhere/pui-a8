console.log("------START-------");
// Temporary file until I figure out how to load a JSON file
trad = [   
    "{\"title\": \"Celadon\", \"src\": \"imgs/trad/celadon.jpg\", \"description\": \"A portrait\", \"medium\": \"acrylic\"}", 
    "{\"title\": \"The Magician\", \"src\": \"imgs/trad/magician.jpg\", \"description\": \"\", \"medium\": \"\"}",
    "{\"title\": \"CutUpStars\", \"src\": \"imgs/trad/1_Ngo_CutUpStars.jpg\", \"description\": \"\", \"medium\": \"\"}",
    "{\"title\": \"MemStreetGood\", \"src\": \"imgs/trad/MemStreetGood.jpg\", \"description\": \"\", \"medium\": \"\"}",
    "{\"title\": \"ViewOfBullCreek\", \"src\": \"imgs/trad/2_Ngo_ViewOfBullCreek.jpg\", \"description\": \"\", \"medium\": \"\"}",
    "{\"title\": \"haroldFinal\", \"src\": \"imgs/trad/haroldFinal.JPG\", \"description\": \"\", \"medium\": \"\"}",
    "{\"title\": \"syndrome\", \"src\": \"imgs/trad/imposter_syndrome.JPG\", \"description\": \"\", \"medium\": \"\"}",
    "{\"title\": \"musicboi2\", \"src\": \"imgs/trad/musicboi2.JPG\", \"description\": \"\", \"medium\": \"\"}"
]


// Load JSON data into array
traditional = []
for (let i = 0; i < trad.length; i++){
    traditional[i] = JSON.parse(trad[i]);
    // console.log(traditional[i].title);
}

modes = {
    "trad" : traditional
}

function setUp(){
    console.log("setting up");
    if (localStorage.getItem('allIndex') == null){
        localStorage.setItem('allIndex', 0);
        localStorage.setItem('tradIndex', 0);
        localStorage.setItem('digIndex', 0);
        // Change default mode to all 
        localStorage.setItem('mode', 'trad');
    }

}

function showGalleryImages(){
    setUp()
    console.log('SHOWING GALLERY IMAGES');
    const gallery = document.getElementById("gallery");
    console.log(gallery);

    for (let i = 0; i < traditional.length; i++){
        var link = document.createElement("a");
        // link.href = "slide.html"
        var img = document.createElement("img");
        img.src = traditional[i].src;
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


