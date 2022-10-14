let X = 0
let Y = 0
basic.forever(function () {
    X = 2
    Y = 2
    if (input.acceleration(Dimension.X) >= 100) {
        X = 3
    }
    if (input.acceleration(Dimension.X) >= 200) {
        X = 4
    }
    if (input.acceleration(Dimension.X) <= -100) {
        X = 1
    }
    if (input.acceleration(Dimension.X) <= -200) {
        X = 0
    }
    basic.clearScreen()
    led.plot(X, Y)
    basic.pause(100)
})
