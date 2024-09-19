let song; // variable to store the mp3 file
let amplitude; // variable to store amplitude analyzer
let N = 20;
let x = 50;
let y = 50;

function preload() {
  // Load your mp3 file
  soundFormats('mp3', 'ogg');
  song = loadSound('audio.mp3');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);

  // Create a new Amplitude analyzer
  amplitude = new p5.Amplitude();
  // Play the loaded song (optional: loop)
  song.play();
}

function draw() {
  
  // Get the amplitude level from the audio file
  let level = amplitude.getLevel();
  
  // now you have assigned the amplitude value to a new variable
  
  // so you can use this to modulate the properties of your pattern
  let M = level*N;
  
  /* draw your pattern */
  
  //check your micLevel 
  console.log(song);
  
  ellipse(x, y, M, M);
  x += 20;
   if (x > width - 50){
     x = 50;
     y += 20;
   }
   if (y > height - 50){
     x = 50;
     y = 50;
   }
}
