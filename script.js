// ADDING EVENT LISTENER TO SLIDER INPUT
let sliders = document.querySelectorAll('input[type="range"]');
sliders.forEach(function(slider) {
  slider.addEventListener("input", hslCreate);
})

let input = document.getElementById('value');

var range = document.getElementById('slider');
var field = document.getElementById('value');

//UPDATING THE SLIDER INPUT WITH RESPECT TO NUMBER INPUT
range.addEventListener('input', function (e) {
  field.value = e.target.value;
  hslCreate();
});

//UPDATING THE NUMBER INPUT WITH RESPECT TO SLIDER INPUT
field.addEventListener('input', function (e) {
  if(field.value === ""){
    range.value = "0"
  }
  else{
    range.value = e.target.value;
  }
  hslCreate();
});

// DARK MODE TOGGLE FUNCTION
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  hslCreate();
}


// HSL CREATE FUNCTION
function hslCreate(){
  
  input.value = document.getElementById('slider').value;
  let sliderVal = document.getElementById('slider').value;
  console.log(sliderVal);
  
  // FINDING ALL VALUES CALCULATION
  let accent = sliderVal % 360; //THE NUMBER WILL LOOP BETWEEN 0 TO 360
  if(accent < 60){
    accent += 300;
    console.log(accent)
  }else{
    accent -= 60
  }
  
  let tertiary = sliderVal % 360; //THIS NUMBER WILL ALSO LOOP B/W 0 TO 360
  if(tertiary < 300){
    tertiary += 60
  }else{
    tertiary -= 300
  }
  
  
  //WRITING HSL CODE IN CODE SPACE
  let light = document.querySelector('.light');
  light.innerHTML = ` :root {
         --primary-color: hsl(${sliderVal}, 50% , 90% );
         --secondary-color: hsl(${sliderVal},50% , 10% );
         --tertiary-color: hsl(${tertiary}, 80% , 20% );
         --accent-color: hsl(${accent}, 80% , 20% );
      } \n.dark {
         --primary-color: hsl(${sliderVal}, 50% , 10% );
         --secondary-color: hsl(${sliderVal}, 50% , 90% );
         --tertiary-color: hsl(${tertiary}, 80% , 80% );
         --accent-color: hsl(${accent}, 80% , 80% );
      }`;



  // SETTING PROPERTY OF CSS ROOT VARIABLE
  const root = document.querySelector(':root');
  if(document.body.classList == "dark-mode"){
    root.style.setProperty('--primary-color', `hsl(${sliderVal}, 50% , 10%)`);
    root.style.setProperty('--secondary-color', `hsl(${sliderVal}, 50% , 90% )`);
    root.style.setProperty('--tertiary-color', `hsl(${tertiary}, 80% , 80% )`);
    root.style.setProperty('--accent-color', `hsl(${accent}, 80% , 80% )`);
    root.style.setProperty('--white', `hsl(${sliderVal}, 50%, 15%)`)
  }else{
    root.style.setProperty('--primary-color', `hsl(${sliderVal}, 50% , 90%)`);
    root.style.setProperty('--secondary-color', `hsl(${sliderVal}, 50% , 10% )`);
    root.style.setProperty('--tertiary-color', `hsl(${tertiary}, 80% , 20% )`);
    root.style.setProperty('--accent-color', `hsl(${accent}, 80% , 20% )`);
    root.style.setProperty('--white', `hsl(${sliderVal}, 50%, 95%)`)
  }
}



// FUNCTION FOR COPY TO CLIPBOARD BUTTON
let copyBtn = document.getElementById('copy');

copyBtn.addEventListener('click', () => {
  
  var lightCode = document.getElementById("code");
  navigator.clipboard.writeText(lightCode.innerHTML);
  
  copyBtn.innerHTML = "Copied";
  
  setTimeout(() => {
    copyBtn.innerHTML = "Copy";
  }, 1200);
})

hslCreate();