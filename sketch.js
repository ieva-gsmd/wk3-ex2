
function setup() {
    createCanvas(401, 401)
    background(255);

}

function draw() {

    noFill()
    stroke(0);
    strokeWeight(2);

    for (let x = 0; x <= width; x += 80) {
        for (let y = 0; y <= height; y += 80) {
            for (let xy = 0, sz = 80; xy <= 40, sz >= 20; xy += 10, sz -= 20) {
                rect(x+xy, y+xy, sz, sz);
            }
        }
    }
  
    
}