input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (!(ID)) {
        radio.sendValue(alias, input.temperature())
    }
})
input.onButtonPressed(Button.A, function () {
    if (ID) {
        basic.showString("ABCDEFGHIJKLMNOPQRSTUVYZ".substr(pos, 1))
        pos += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (ID) {
        basic.clearScreen()
        basic.showString("ID: " + alias)
        ID = false
    } else {
        ID = true
    }
})
input.onButtonPressed(Button.B, function () {
    if (ID) {
        alias = "" + alias + "ABCDEFGHIJKLMNOPQRSTUVYZ".substr(pos - 1, 1)
    } else {
    	
    }
})
radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
})
let alias = ""
let pos = 0
let ID = false
ID = true
pos = 0
basic.showString("?")
