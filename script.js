var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");



function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); // Adjust font size based on screen width
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // glow effect
    context.shadowColor = "rgba(255, 0, 0, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    if(frameNumber < 200){
        context.fillStyle = `rgba(255, 0, 0, ${opacity})`;
        context.fillText("Hương Trà ơi!", canvas.width/2, canvas.height/2);
        context.fillText("Anh có điều muốn nói với em", canvas.width/2, canvas.height/1.9);
        opacity = opacity + 0.01;
    }
    //fades out the text by decreasing the opacity
    if(frameNumber >= 200 && frameNumber < 400){
        context.fillStyle = `rgba(255, 0, 0, ${opacity})`;
        context.fillText("Hương Trà ơi!" , canvas.width/2, canvas.height/2);
        context.fillText("Anh có điều muốn nói với em", canvas.width/2, canvas.height/1.9);
        opacity = opacity - 0.01;
    }

    //needs this if statement to reset the opacity before next statement on canvas
    if(frameNumber == 400){
        opacity = 0;
    }
    if(frameNumber > 400 && frameNumber < 650){
         context.fillStyle = `rgba(255, 0, 0, ${opacity})`;

        if (window.innerWidth < 400) {           //shortens long sentence for mobile screens
            drawTextWithLineBreaks(["Hôm nay anh muốn được chính thức"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
            drawTextWithLineBreaks(["tỏ tình cảm của mình dành cho em"], canvas.width / 2, canvas.height / 1.9, fontSize, lineHeight);
        } else {
            context.fillText("Hôm nay anh muốn được chính thức", canvas.width/2, canvas.height/2);
            context.fillText("bày tỏ tình cảm của mình dành cho em", canvas.width/2, canvas.height/1.9);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 650 && frameNumber < 900){
         context.fillStyle = `rgba(255, 0, 0, ${opacity})`;
        
        if (window.innerWidth < 400) {
            drawTextWithLineBreaks(["Hôm nay anh muốn được chính thức"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
            drawTextWithLineBreaks(["tỏ tình cảm của mình dành cho em"], canvas.width / 2, canvas.height / 1.9, fontSize, lineHeight);
        } else {
           context.fillText("Hôm nay anh muốn được chính thức", canvas.width/2, canvas.height/2);
            context.fillText("bày tỏ tình cảm của mình dành cho em", canvas.width/2, canvas.height/1.9);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 900){
        opacity = 0;
    }
    if(frameNumber > 900 && frameNumber < 1150){
         context.fillStyle = `rgba(255, 0, 0, ${opacity})`;
        context.fillText("Tất nhiên là hông phải", canvas.width/2, canvas.height/2);
        context.fillText("chỉ có vài dòng chữ như thế này", canvas.width/2, canvas.height/1.9);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1150 && frameNumber < 1400){
         context.fillStyle = `rgba(255, 0, 0, ${opacity})`;
       context.fillText("Tất nhiên là hông phải", canvas.width/2, canvas.height/2);
        context.fillText("chỉ có vài dòng chữ như thế này", canvas.width/2, canvas.height/1.9);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1400){
        opacity = 0;
    }
    if(frameNumber > 1400 && frameNumber < 1650){
         context.fillStyle = `rgba(255, 0, 0, ${opacity})`;
        context.fillText("Vì nó hông thể nào thể hiện được hết", canvas.width/2, canvas.height/2);
        context.fillText("tình cảm anh dành cho em", canvas.width/2, canvas.height/1.9);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1650 && frameNumber < 1800){
        context.fillStyle = `rgba(255, 0, 0, ${opacity})`;
        context.fillText("Vì nó hông thể nào thể hiện được hết", canvas.width/2, canvas.height/2);
        context.fillText("tình cảm anh dành cho em", canvas.width/2, canvas.height/1.9);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1800){
        opacity = 0;
    }
    if(frameNumber > 1800 && frameNumber < 2050){
        context.fillStyle = `rgba(255, 0, 0, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Anh yêu em nhiều lắm, cưng em nữa"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Anh yêu em nhiều lắm, cưng em nữa", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2050 && frameNumber < 2250){
       context.fillStyle = `rgba(255, 0, 0, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Anh yêu em nhiều lắm, cưng em nữa"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("aAnh yêu em nhiều lắm, cưng em nữa", canvas.width/2, canvas.height/2);
        }
        
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2250){
        opacity = 0;
    }
    if(frameNumber > 2250 && frameNumber < 99999){
         context.fillStyle = `rgba(255, 0, 0, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Nguyễn Hương Trà, anh yêu em"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Nguyễn Hương Trà, anh yêu em", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 2500 && frameNumber < 99999){
        context.fillStyle = `rgba(255, 0, 0, ${opacity})`;


        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Em cho anh gọi cho em nhá"], canvas.width / 2, (canvas.height/2 + 35), fontSize, lineHeight);
        } else {
            context.fillText("Em cho anh gọi cho em nhá", canvas.width/2, (canvas.height/2 + 35));
        }

        secondOpacity = secondOpacity + 0.01;
    }

    if(frameNumber >= 2750 && frameNumber < 99999){
         context.fillStyle = `rgba(255, 0, 0, ${opacity})`;


        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Để anh có thể nói:"], canvas.width / 2, (canvas.height/2 + 70), fontSize, lineHeight);
        } else {
            context.fillText("Để anh có thể nói:", canvas.width/2, (canvas.height/2 + 70));
        }
        secondOpacity = secondOpacity + 0.01;
    }


    if(frameNumber >= 3000 && frameNumber < 99999){
        context.fillStyle = `rgba(255, 0, 0, ${opacity})`;
        context.fillText("Em làm người yêu anh nha <3", canvas.width/2, (canvas.height/2 + 105));
        thirdOpacity = thirdOpacity + 0.01;

        button.style.display = "block";
    }   

     // Reset the shadow effect after drawing the text
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
