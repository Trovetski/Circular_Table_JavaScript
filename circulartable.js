function setup() {
    createCanvas(400, 400);
    //number of points
    slider = createSlider(10, 288, 100);
    slider.position(0,400);
    slider.style('width', '200px');
    
    //line to
    slider1 = createSlider(0, 20, 2);
    slider1.position(250,400);
    slider1.style('width', '200px');
  }
  
  function draw() {
    let n_points = slider.value();
    let n_to = slider1.value();
    
    //angle between two points
    let theta = 2*3.141529/n_points;
    
    stroke('orange');
    strokeWeight(4);
    
    clear();
    
    let i;
    for(i=0;i<n_points;i++){
      point(180*(1.02+Math.cos(i*theta)),180*(1.02+Math.sin(i*theta)));
    }
    
    stroke('purple');
    strokeWeight(1);
    
    let j;
    for(j=0;j<n_points;j++){
      line(180*(1.02+Math.cos(j*theta)),180*(1.02+Math.sin(j*theta)),
          180*(1.02+Math.cos(n_to*j*theta)),180*(1.02+Math.sin(n_to*j*theta)));
    }
  }