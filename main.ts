let set_hand_to = 0
input.onGesture(Gesture.Shake, function () {
    set_hand_to = randint(1, 3)
    if (set_hand_to == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (set_hand_to == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . # # . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    if (set_hand_to == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        basic.showLeds(`
            # # . . .
            # # . . .
            . . # # #
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
basic.forever(function () {
	
})
