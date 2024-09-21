input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (ledAus1) {
        ledAus1 = false
        ledAus2 = true
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        ledAus1 = true
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    ledAus2 = true
    ledAus1 = true
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (input.isGesture(Gesture.LogoDown)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (input.isGesture(Gesture.TiltRight)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (ledAus2) {
        ledAus2 = false
        ledAus1 = true
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        ledAus2 = true
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
let ledAus2 = false
let ledAus1 = false
// LED an auf false setzen funktioniert nicht weil dann im Loop das nicht erkannt wird warum auch immer das so ist
ledAus1 = true
ledAus2 = true
let sonderVariable = 0
while (true) {
    basic.setLedColor(0x0000ff)
    basic.pause(2000)
    basic.setLedColor(0xffff00)
    basic.pause(2000)
    basic.setLedColor(0xff0000)
    basic.pause(2000)
}
