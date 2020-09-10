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
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    sprite.destroy(effects.fire, 100)
    music.playMelody("E - E - E - E - ", 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.ashes, 100)
    sprite.destroy()
})
let astroid: Sprite = null
let projectile: Sprite = null
let spaceship: Sprite = null
info.setLife(5)
info.setScore(0)
scene.setBackgroundImage(img`
    222222222222222222222222444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff224455555555555555555555555555dd111111111111111111
    222222222222222222222222444444444444444444fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff224455555555555555555555555555dd111111111111111111
    222222222222222222222222444444444444444444ffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff224455555555555555555555555555dd111111111111111111
    222222222222222222222222444444444444444444fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff224455555555555555555555555555dd111111111111111111
    222222222222222222222222444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff224455555555555555555555555555dd111111111111111111
    222222222222222222222222444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff224455555555555555555555555555dd111111111111111111
    222222222222222222222222444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff224455555555555555555555555555dd111111111111111111
    222222222222222222222222444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff224455555555555555555555555555ddd11111111111111111
    222222222222222222222222444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2244555555555555555555555555555dd11111111111111111
    222222222222222222222222444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2244555555555555555555555555555dd11111111111111111
    222222222222222222222222444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22445555555555555555555555555555dd1111111111111111
    22222222222222222222222244444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2244555555555555555555555555555ddd111111111111111
    22222222222222222222222244444444444444444ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff22445555555555555555555555555555dd111111111111111
    22222222222222222222222244444444444444444fffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffff224455555555555555555555555555555dd11111111111111
    2222222222222222222222224444444444444444fffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff2244555555555555555555555555555555dd1111111111111
    2222222222222222222222224444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2244555555555555555555555555555555ddd11111111111
    2222222222222222222222224444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22445555555555555555555555555555555ddd1111111111
    222222222222222222222222444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff224455555555555555555555555555555555dddd11111111
    222222222222222222222222444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2244555555555555555555555555555555555dddd111111
    22222222222222222222222244444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff224455555555555555555555555555555555555dddddddd
    22222222222222222222222444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22444555555555555555555555555555555555555555555
    2222222222222222222222244444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2244555555555555555555555555555555555555555555
    2222222222222222222222244444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2244455555555555555555555555555555555555555555
    222222222222222222222244444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff224455555555555555555555555555555555555555555
    22222222222222222222224444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff224445555555555555555555555555555555555555555
    22222222222222222222224444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22445555555555555555555555555555555555555555
    2222222222222222222224444444444444fffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22244555555555555555555555555555555555555555
    222222222222222222222444444444444fffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2244455555555555555555555555555555555555555
    22222222222222222222444444444444fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff224455555555555555555555555555555555555555
    2222222222222222222244444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222445555555555555555555555555555555555555
    222222222222222222244444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22444555555555555555555555555555555555555
    22222222222222222244444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2244455555555555555555555555555555555555
    2222222222222222224444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff224445555555555555555555555555555555555
    222222222222222224444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222445555555555555555555555555555555555
    22222222222222224444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22244455555555555555555555555555555555
    222222222222222444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2224445555555555555555555555555555555
    22222222222222444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222444555555555555555555555555555555
    222222222222244444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22244455555555555555555555555555555
    22222222222244444441ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2224444555555555555555555555555555
    22222222222444444f111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff22244455555555555555555555555555
    22222222224444fffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffff2224444555555555555555555555555
    222222222444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff222244445555555555555555555555
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2224444455555555555555555555
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222244444555555555555555555
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222444444555555555555555
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222444444455555555555
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222444444444444444
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222244444444444
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777777777777ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff
    77777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777777777777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777777777777777777788888877777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77777777778887777888888888877777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777777777788888888888888888877777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777788888888888888888888777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    88888888888888888888888888888877777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    888888888888888888888888888888887777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    8888888888888888888888888888888888877777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    88888888888888888888888888888888888888777788ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    8888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffff
    88888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffff
    888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffff
    8888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    88888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    88888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    8888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    8888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    88888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    88888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    8888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    8888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccff
    88888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffabaaff
    88888888888777788888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbafcac
    88888888877777777888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbbffac
    888888877777777777888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfabbaa
    888888777777777777788888888888888888888888888888888887777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbffbafc
    8888777777777777777888888888888888888888888888888777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcaacbba
    7777777777777777777888888888888888888888888888877777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccff
    7777777777777777777888888888888888888888888887777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcffff
    77777777777777777778888888888888888888888888777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcaaacfffffff
    77777777777777777778888888888888888888888887777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfabbcffffff
    77777777777777777778888888888888888888888877777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffbfaaffffff
    777777777777777777788888888888888888888888777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbabffaffffff
    777777777777777777888888888888888888888887777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfbbacffffff
    777777777777777777888888888888888888888887777777777777777777fffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbafccfffffff
    777777777777777778888888888888888888888877777777777777777777ffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffbbcffffffff
    777777777777777788888888888888888888888877777777777777777777fffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffff
    7777777777777777888888888888888888888888777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffcfffffffffffff
    7777777777777778888888888888888888888887777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbafcaffffffffff
    7777777777777788888888888888888888888877777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccabb6bbffffffffff
    7777777777777788888888888888888888888777777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccc6bbbafffffffff
    7777777777777888888888888888888888887777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffca66bbbafffffffff
    7777777777777888888888888888888888877777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaab6bbabffffffffff
    7777777777778888888888888888888887777777777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbaccffffffffff
    7777777777788888888888888888888777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccbaafffffffffff
    7777777777788888888888888888877777777777777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaccbbffffffffffff
    7777777777888888888888888888777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777777888888888888888887777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777778888888888888888877777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
spaceship = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 6 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 8 6 . . . . . . . 
    . . . . . . 8 8 9 8 . . . . . . 
    . . c d . . 8 6 9 8 . . c d . . 
    . . c b . c c c 8 8 8 . c d . . 
    . . c b 8 8 6 6 6 9 8 8 c b . . 
    . . c f f f c c e e f f 8 b . . 
    . c b 8 8 8 8 6 6 6 6 9 6 8 b . 
    c b 8 8 8 8 8 8 6 6 6 9 6 6 8 b 
    c b 8 8 8 8 8 8 6 6 6 6 d 6 8 b 
    `, SpriteKind.Player)
spaceship.y = scene.screenHeight() - 0
controller.moveSprite(spaceship, 150, 0)
spaceship.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(50, function () {
    if (info.score() == 10) {
        game.over(true, effects.confetti)
    }
})
game.onUpdateInterval(1000, function () {
    astroid = sprites.create(img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, SpriteKind.Enemy)
    astroid.y = 0
    astroid.x = randint(0, scene.screenWidth())
    astroid.ay = 60
})
