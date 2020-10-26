/*Name this external file gallery.js*/

// The only way I've been able to get this to work without hardcoding the original text from the 'index' div in the javascript is to declare a variable in the HTML (see below) - and that only works if it's declared after the div itself. I've lost count of the number of times I've watched the last few videos. Nothing else seems to work. I thought I could declare a global variable above the 2 functions in the .js file, but that didn't work either.

// <script>
//	  var originalText = document.getElementById("image").textContent;
// </script>

function upDate(previewPic) {
  /* In this function you should 
    1) change the url for the background image of the div with the id = "image" to the source file of the preview image	*/

  document.getElementById("image").style.backgroundColor = "#8e68ff";
  document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";

  /* 2) Change the text  of the div with the id = "image" to the alt text of the preview image */

  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
  /* In this function you should 
  1) Update the url for the background image of the div with the id = "image" 
  back to the orginal-image.  You can use the css code to see what that original URL was  */

  document.getElementById("image").style.background = "#8e68ff";

  /* 2) Change the text of the div with the id = "image" back to the original text.  
	    You can use the html code to see what that original text was */

  document.getElementById("image").innerHTML = originalText;
}
