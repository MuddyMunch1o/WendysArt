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

var image_object = new Object;
var column_object = new Object;
var image_elements = new Object;
var counter = 0;

image_object.image_array = [
	["path/to/img_1.file", "clocks"],
	["path/to/image2.file", "murals"],
    ["path/to/image3.file", "clocks"],
    ["path/to/image4.file", "murals"],
    ["path/to/image5.file", "paintings"],
    ["path/to/image6.file", "murals"],
    ["path/to/image7.file", "murals"],
    ["path/to/image8.file", "cornhole"],
    ["path/to/image9.file", "cornhole"],
    ["path/to/image10.file", "cornhole"],
    ["path/to/image11.file", "paintings"],
	["path/to/image12.file", "portraits"],
    ["path/to/image13.file", "paintings"],
    ["path/to/image14.file", "clocks"],
    ["path/to/image15.file", "clocks"],
    ["path/to/image16.file", "portraits"],
    ["path/to/image17.file", "clocks"],
    ["path/to/image18.file", "paintings"],
    ["path/to/image19.file", "clocks"],
    ["path/to/image20.file", "paintings"],
    ["path/to/image21.file", "paintings"],
	["path/to/image22.file", "paintings"],
    ["path/to/image23.file", "cornhole"],
    ["path/to/image24.file", "cornhole"],
    ["path/to/image25.file", "cornhole"],
    ["path/to/image26.file", "cornhole"],
    ["path/to/image27.file", "cornhole"],
    ["path/to/image28.file", "cornhole"],
    ["path/to/image29.file", "paintings"],
    ["path/to/image30.file", "cornhole"],
    ["path/to/image31.file", "paintings"],
	["path/to/image32.file", "clocks"],
    ["path/to/image33.file", "portraits"],
    ["path/to/image34.file", "clocks"],
    ["path/to/image35.file", "cornhole"],
    ["path/to/image36.file", "cornhole"],
    ["path/to/image37.file", "portraits"],
    ["path/to/image38.file", "paintings"],
    ["path/to/image39.file", "cornhole"],
    ["path/to/image40.file", "paintings"],
    ["path/to/image41.file", "portraits"],
	["path/to/image42.file", "conrhole"],
    ["path/to/image43.file", "paintings"],
    ["path/to/image44.file", "paintings"],
    ["path/to/image45.file", "paintings"],
    ["path/to/image46.file", "cornhole"],
    ["path/to/image47.file", "portraits"],
    ["path/to/image48.file", "conrhole"],
    ["path/to/image49.file", "cornhole"],
    ["path/to/image50.file", "murals"],
    ["path/to/image51.file", "murals"],
    ["path/to/image52.file", "murals"],
    
];

function sort() {
	for (i = 0; i < 5; i++) {
		document.getElementById("col" + i).innerHTML = null;
	}
//ADD RESPECTIVE ID TO COLUMNS!!! for example, col0, col1, col2, col3, col4
	for (i = 0; i < 5; i++) {
		column_object["col" + i] = document.getElementById("col" + i);
	}
	
	var items = image_object.image_array.length;
	
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