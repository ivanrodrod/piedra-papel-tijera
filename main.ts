let juego = 0
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
basic.forever(function () {
	
})
