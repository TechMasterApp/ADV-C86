canvas = new fabric.Canvas("cv")
playerX = 0
playerY = 0
bh = 20
bw = 20
po = ""
bo = ""

function pu() {
    fabric.Image.fromURL("player.png", (Img) => {
        po = Img
        po.scaleToWidth(150)
        po.scaleToHeight(150)
        po.set({
            top: playerY,
            left: playerX
        })
        canvas.add(po)
    })
}

function bu(gi) {
    fabric.Image.fromURL(gi, (Img) => {
        bo = Img
        bo.scaleToWidth(bw)
        bo.scaleToHeight(bh)
        bo.set({
            top: playerY,
            left: playerX
        })
        canvas.add(bo)
    })
}

window.addEventListener("keydown", kd)

function kd(e) {
    keyPressed = e.keyCode
    console.log(keyPressed)

    if (keyPressed=="66") {
        bu("bricks.jpg")
        console.log("B")
    }

    if (keyPressed=="71") {
        bu("glowstone.png")
        console.log("G")
    }

    if (e.shiftKey==true && keyPressed=="71") {
        bu("grass_block.png")
        console.log("Shift+G")
    }

    if (keyPressed=="78") {
        bu("netherrack.jpg")
        console.log("N")
    }

    if (keyPressed=="79") {
        bu("oak_log.jpg")
        console.log("O")
    }

    if (keyPressed=="80") {
        bu("plains_grass.png")
        console.log("P")
    }

    if (keyPressed=="65") {
        bu("acacialog.jpg")
        console.log("A")
    }

    if (keyPressed=="83") {
        bu("swamp_grass.png")
        console.log("S")
    }

    if (keyPressed=="89") {
        bu("yellow_bricks.png")
        console.log("Y")
    }

    if (keyPressed=="73") {
        bh=bh+10
        bw=bw+10
        document.getElementById("cw").innerHTML = bw
        document.getElementById("ch").innerHTML = bh
        console.log("I")
    }

    if (keyPressed=="68") {
        bh=bh-10
        bw=bw-10
        document.getElementById("cw").innerHTML = bw
        document.getElementById("ch").innerHTML = bh
        console.log("D")
    }
    
    if (keyPressed=="37") {
        left()
    }

    if (keyPressed=="38") {
        up()
    }

    if (keyPressed=="39") {
        right()
    }

    if (keyPressed=="40") {
        down()
    }

}

function left() {
    if (playerX > 0) {
        playerX = playerX - bw
        canvas.remove(po)
        pu()
    }
}

function up() {
    if (playerY > 0) {
        playerY = playerY - bh
        canvas.remove(po)
        pu()
    }
}

function right() {
    if (playerX < 800) {
        playerX = playerX + bw
        canvas.remove(po)
        pu()
    }
}

function down() {
    if (playerY < 600) {
        playerY = playerY + bh
        canvas.remove(po)
        pu()
    }
}

