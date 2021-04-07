let rando = 0
// This picks a number between 2 and 2
input.onButtonPressed(Button.A, function () {
    rando = randint(2, 2)
    basic.showNumber(rando)
})
// This is or the 8 ball game
basic.forever(function () {
    if (rando == 2) {
        // When you get 2
        basic.showString("MAYBE")
    } else if (rando == 1) {
        // When you get the number 1
        basic.showString("YES")
    } else if (rando == 0) {
        // When you get 0
        basic.showString("NO")
    } else {
        basic.showString("0")
    }
})
