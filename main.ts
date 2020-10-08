input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        sprite.turn(Direction.Right, 45)
        sprite.move(1)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 1)
