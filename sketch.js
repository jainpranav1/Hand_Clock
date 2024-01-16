// sources of inspiration
// - A Brief History of Timekeeping: https://www.youtube.com/watch?v=oSSIBM1nEsE

let left_hand_pics = [];
let right_hand_pics = [];
let width = 150; // width of image
let height = width * 2; // height of image

function preload() {
  for (i = 0; i < 6; ++i) {
    left_hand_pics.push(loadImage(`assets/left_hand_${i}.jpg`));
  }

  for (i = 0; i < 13; ++i) {
    right_hand_pics.push(loadImage(`assets/right_hand_${i}.jpg`));
  }
}

// setup() is called once at page-load
function setup() {
  createCanvas(width * 6, height * 2); // make an HTML canvas element width x height pixels
}

let prev_min = null;

// draw() is called 60 times per second
function draw() {
  let hr = hour();
  let min = minute();
  let sec = second();

  // print minute
  if (prev_min != min) {
    console.log(min);
  }

  prev_min = min;

  background(0);

  // hours
  let left_hand_pic_hr = left_hand_pics[Math.floor(hr / 12)];
  left_hand_pic_hr.resize(width, height);
  image(left_hand_pic_hr, 0, 0);

  let right_hand_pic_hr = right_hand_pics[hr % 12];
  right_hand_pic_hr.resize(width, height);
  image(right_hand_pic_hr, width, 0);

  // minutes
  let left_hand_pic_min = left_hand_pics[Math.floor(min / 12)];
  left_hand_pic_min.resize(width, height);
  image(left_hand_pic_min, width * 2, height / 2);

  let right_hand_pic_min = right_hand_pics[min % 12];
  right_hand_pic_min.resize(width, height);
  image(right_hand_pic_min, width * 3, height / 2);

  // seconds
  let left_hand_pic_sec = left_hand_pics[Math.floor(sec / 12)];
  left_hand_pic_sec.resize(width, height);
  image(left_hand_pic_sec, width * 4, height);

  let right_hand_pic_sec = right_hand_pics[sec % 12];
  right_hand_pic_sec.resize(width, height);
  image(right_hand_pic_sec, width * 5, height);
}
