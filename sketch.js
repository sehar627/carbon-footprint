var form;

var userCount = 0;

function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
    database = firebase.database();
    form = new Form()
    form.display();
    user = new User();
}
