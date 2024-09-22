input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (LEDvonKnopfAAusist) {
        // LED an auf false setzen funktioniert nicht weil dann im Loop das nicht erkannt wird warum auch immer das so ist
        LEDvonKnopfAAusist = false
        LEDvonKnopfBAusist = true
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        // LED an auf false setzen funktioniert nicht weil dann im Loop das nicht erkannt wird warum auch immer das so ist
        LEDvonKnopfAAusist = true
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
    LEDvonKnopfBAusist = true
    LEDvonKnopfAAusist = true
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (input.isGesture(Gesture.LogoDown)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
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
    if (LEDvonKnopfBAusist) {
        LEDvonKnopfBAusist = false
        LEDvonKnopfAAusist = true
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        LEDvonKnopfBAusist = true
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.playMelody("E E F G G F E D ", 120)
        music.playMelody("C C D E E D D - ", 120)
    }
})
let LEDvonKnopfAAusist = false
let LEDvonKnopfBAusist = false
LEDvonKnopfBAusist = true
// LED an auf false setzen funktioniert nicht weil dann im Loop das nicht erkannt wird warum auch immer das so ist
LEDvonKnopfAAusist = true
while (true) {
    basic.setLedColor(0x0000ff)
    basic.pause(2000)
    basic.setLedColor(0xffff00)
    basic.pause(2000)
    basic.setLedColor(0xff0000)
    basic.pause(2000)
}
