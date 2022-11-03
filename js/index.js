filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var image_object = new Object;
var column_object = new Object;
var image_elements = new Object;

image_object.image_array = [
	["path/to/image1.file", "clocks"],
	["path/to/image2.file", "murals"],
    ["path/to/image3.file", "clocks"],
    ["path/to/image4.file", "murals"],
    ["path/to/image5.file", "paintings"],
    ["path/to/image6.file", "murals"],
    ["path/to/image7.file", "portrait"],
    ["path/to/image8.file", "portrait"],
    ["path/to/image9.file", "portrait"],
    ["path/to/image10.file", "portrait"],
    ["path/to/image11.file", "clocks"],
	["path/to/image12.file", "murals"],
    ["path/to/image13.file", "clocks"],
    ["path/to/image14.file", "murals"],
    ["path/to/image15.file", "portrait"],
    ["path/to/image16.file", "portrait"],
    ["path/to/image17.file", "portrait"],
    ["path/to/image18.file", "portrait"],
    ["path/to/image19.file", "portrait"],
    ["path/to/image20.file", "portrait"],
    ["path/to/image21.file", "clocks"],
	["path/to/image22.file", "murals"],
    ["path/to/image23.file", "clocks"],
    ["path/to/image24.file", "murals"],
    ["path/to/image25.file", "portrait"],
    ["path/to/image26.file", "portrait"],
    ["path/to/image27.file", "portrait"],
    ["path/to/image28.file", "portrait"],
    ["path/to/image29.file", "portrait"],
    ["path/to/image30.file", "portrait"],
    ["path/to/image31.file", "clocks"],
	["path/to/image32.file", "murals"],
    ["path/to/image33.file", "clocks"],
    ["path/to/image34.file", "murals"],
    ["path/to/image35.file", "portrait"],
    ["path/to/image36.file", "portrait"],
    ["path/to/image37.file", "portrait"],
    ["path/to/image38.file", "portrait"],
    ["path/to/image39.file", "portrait"],
    ["path/to/image40.file", "portrait"],
    ["path/to/image41.file", "clocks"],
	["path/to/image42.file", "murals"],
    ["path/to/image43.file", "clocks"],
    ["path/to/image44.file", "murals"],
    ["path/to/image45.file", "portrait"],
    ["path/to/image46.file", "portrait"],
    ["path/to/image47.file", "portrait"],
    ["path/to/image48.file", "portrait"],
    ["path/to/image49.file", "portrait"],
    ["path/to/image50.file", "portrait"],
    ["path/to/image51.file", "portrait"],
    ["path/to/image52.file", "portrait"],
    
];

function sort() {
	for () {
		document.getElementById("col" + i).innerHTML = null;
	}
//ADD RESPECTIVE ID TO COLUMNS!!! for example, col0, col1, col2, col3, col4
	for (i = 0; i < 5; i++) {
		column_object["col" + i] = document.getElementById("col" + i);
	}
	
	var items = image_object.image_array.length;
	var counter = 0;
	
	for (i = 0; i < (items - (items % 5)) / 5; i++) {
		for (x = 0; x < 5; x++) {
			create_elm();
		}
	}
	
	for (i = 0; i < items % 5; i ++) {
		create_elm();
	}
}

function create_elm() {
	image_elements["img" + counter] = document.createElement("img");
	image_elements["img" + counter].src = image_object.image_array[counter][0];
	image_elements["img" + counter].classList.add(image_object.image_array[counter][1]);
	column_object["col" + x].appendChild(); //make sure to fix the divs around images!!! more styling will be required.
	counter++;
}

sort();