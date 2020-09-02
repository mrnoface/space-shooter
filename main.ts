controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spaceship, 0, -70)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 100)
    sprite.destroy()
})
let astroid: Sprite = null
let projectile: Sprite = null
let spaceship: Sprite = null
spaceship = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 3 4 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 3 4 . . . . . . . 
    . . . . . . 3 3 4 3 . . . . . . 
    . . . f . . 3 4 4 3 . . f . . . 
    . . . f . c c c 3 3 3 . f . . . 
    . . . f 3 3 2 2 2 4 3 3 f . . . 
    . . 3 f f f c c 3 3 f f 3 3 . . 
    . 3 3 3 2 2 2 2 2 2 2 4 4 3 3 . 
    3 3 3 2 2 2 2 2 2 2 2 4 4 4 3 3 
    3 3 2 2 2 2 2 2 2 2 2 2 4 4 3 3 
    `, SpriteKind.Player)
controller.moveSprite(spaceship, 150, 150)
spaceship.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(1000, function () {
    astroid = sprites.create(img`
        . . . . . . . . c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . c f c c a a a a c a c . . 
        . . c c f f f f a a a c a a c . 
        . . c c a f f c a a f f f a a c 
        . . c c a a a a b c f f f a a c 
        . c c c c a c c b a f c a a c c 
        c a f f c c c a b b 6 b b b c c 
        c a f f f f c c c 6 b b b a a c 
        c a a c f f c a 6 6 b b b a a c 
        c c b a a a a b 6 b b a b b a . 
        . c c b b b b b b b a c c b a . 
        . . c c c b c c c b a a b c . . 
        . . . . c b a c c b b b c . . . 
        . . . . c b b a a 6 b c . . . . 
        . . . . . . b 6 6 c c . . . . . 
        `, SpriteKind.Enemy)
    astroid.y = 0
    astroid.x = randint(0, scene.screenWidth())
    astroid.ay = 100
})
