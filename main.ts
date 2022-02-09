input.onButtonPressed(Button.A, function () {
    // Al pulsar el Botón se suma un punto al jugador A
    puntos_A = puntos_A + 1
})
input.onGesture(Gesture.Shake, function () {
    juego = randint(1, 3)
    if (juego == 1) {
        // Muestra tijeras
        basic.showIcon(IconNames.Scissors)
    } else if (juego == 2) {
        // Muestra papel
        basic.showIcon(IconNames.Square)
    } else {
        // Muestra piedra
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("A: " + puntos_A)
    basic.pause(500)
    basic.showString("B: " + puntos_B)
    basic.pause(500)
    if (puntos_A > puntos_B) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
    } else if (puntos_A < puntos_B) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # # .
            # . . # .
            # # # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    music.playMelody("B B C5 A G A A G ", 120)
    soundExpression.happy.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    // Al pulsar el Botón se suma un punto al jugador A
    puntos_B = puntos_B + 1
})
let juego = 0
let puntos_B = 0
let puntos_A = 0
basic.showString("Agitalo")
puntos_A = 0
puntos_B = 0
