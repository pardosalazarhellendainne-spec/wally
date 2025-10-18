let jugada = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("listo")
        basic.pause(500)
        jugada = randint(0, 2)
    }
    if (jugada == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (jugada == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        pins.servoWritePin(AnalogPin.P0, 90)
    }
    if (jugada == 2) {
        basic.showLeds(`
            # . . . .
            . # . # #
            . . # # #
            . # . # #
            # . . . .
            `)
        pins.servoWritePin(AnalogPin.P0, 180)
    }
})
