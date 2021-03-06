namespace SpriteKind {
    export const boss = SpriteKind.create()
    export const Beam = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        .......55.......
        .......55.......
        .......55.......
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        `, spaceship, 0, -170)
    music.pewPew.play()
})
function LaserBeam () {
    Laser = sprites.create(img`
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ......
        ..11..
        .1551.
        115151
        151115
        151555
        115111
        111115
        115111
        155511
        445511
        445511
        455511
        155111
        111151
        111551
        115554
        115554
        511555
        551551
        555111
        455111
        455511
        555111
        555151
        555144
        111554
        111555
        111555
        111544
        111541
        141111
        155511
        555511
        445111
        455511
        455551
        555511
        155511
        151155
        111554
        111544
        111554
        111554
        111154
        115115
        155515
        445511
        545551
        545551
        555511
        555511
        155511
        115155
        111144
        115544
        115545
        115551
        115551
        115511
        111511
        455111
        445511
        455511
        455115
        551154
        111544
        115551
        115551
        111551
        111511
        111111
        155111
        455511
        455511
        445115
        555155
        151154
        111554
        115544
        115555
        115555
        511111
        545111
        445111
        551111
        115551
        115515
        115515
        115114
        151154
        511155
        511155
        451115
        451511
        441151
        551551
        115554
        115544
        115544
        115511
        145511
        445511
        .1111.
        .1....
        `, SpriteKind.Beam)
    Laser.z = -1
    Laser.follow(big_boss, 700)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Beam, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    if (boss_life == 0) {
        Laser.destroy(effects.fire, 100)
        info.changeScoreBy(10)
    }
    boss_life += -1
    sprite.destroy(effects.halo, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.ashes, 100)
    sprite.destroy()
})
let astro: Sprite = null
let boss_life = 0
let big_boss: Sprite = null
let Laser: Sprite = null
let projectile: Sprite = null
let spaceship: Sprite = null
info.setLife(3)
info.setScore(0)
let astro_list = [img`
    . . . . . . c c c . . . . . . . 
    . . . . . a a a c c c . . . . . 
    . . . c a c f a a a a c . . . . 
    . . c a c f f f a f f a c . . . 
    . c c a c c f a a c f f a c . . 
    . a b a a c 6 a a c c f a c c c 
    . a b b b 6 a b b a a c a f f c 
    . . a b b a f f b b a a c f f c 
    c . a a a c c f c b a a c f a c 
    c c a a a c c a a a b b a c a c 
    a c a b b a a 6 a b b 6 b b c . 
    b a c b b b 6 b c . c c a c . . 
    b a c c a b b a c . . . . . . . 
    b b a c a b a a . . . . . . . . 
    a b 6 b b a c . . . . . . . . . 
    . a a b c . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . c c c c . . 
    . c c c c c . c c c c c f c c . 
    c c a c c c c c 8 f f c f f c c 
    c a f a a c c a f f c a a f f c 
    c a 8 f a a c a c c c a a a a c 
    c b c f a a a a a c c c c c c c 
    c b b a a c f 8 a c c c 8 c c c 
    . c b b a b c f a a a 8 8 c c . 
    . . . . a a b b b a a 8 a c . . 
    . . . . c b c a a c c b . . . . 
    . . . . b b c c a b b a . . . . 
    . . . . b b a b a 6 a . . . . . 
    . . . . c b b b 6 6 c . . . . . 
    . . . . . c a 6 6 b c . . . . . 
    . . . . . . . c c c . . . . . . 
    `, img`
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
    `]
let astro_speed = 0
let astro_pos = 0
scene.setBackgroundImage(img`
    222222222222222222222222444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff422542424222222222222222222222222222222222222222222
    222222222222222222222222444444444444444444fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff444444422542424222222222222222222222222222222222222222222
    222222222222222222222222444444444444444444ffffffffffff111fffffffffffffffffffffffffffffffffffffffff44444222222252542424222222222222222222222222222222222222222222
    222222222222222222222222444444444444444444fffffffffffff1ffffffffffffffffffffffffffffffffffffffffff44222255555552542424222222222222222222222222222222222222222222
    222222222222222222222222444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444422255252542424222222222222222222222222222222222222222222
    222222222222222222222222444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44425522542424222222222222222222222222222222222222222222
    222222222222222222222222444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42552542424222222222222222222222222222222222222222222
    222222222222222222222222444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42552542424222222222222222222222222222222222222222222
    222222222222222222222222444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4445542542424222222222222222222222222222222222222222222
    222222222222222222222222444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4442255552542424222222222222222222222222222222222222222222
    222222222222222222222222444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff4442225525242542424222222222222222222222222222222222222222222
    22222222222222222222222244444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4225554555555254242422222222222222222222222222222222222222222
    22222222222222222222222244444444444444444ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff4222222552525254242422222222222222222222222222222222222222222
    22222222222222222222222244444444444444444fffffffffffffffffffffffffffffffffffffff111fffffffffffffff44444444255555254242422222222222222222222222222222222222222222
    2222222222222222222222224444444444444444fffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff425545454242242222222222222222222222222222222222222222
    2222222222222222222222224444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff425545525424242222222222222222222222222222222222222222
    2222222222222222222222224444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4254554525424242222222222222222222222222222222222222222
    222222222222222222222222444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff442555554545422424222222222222222222222222222222222222222
    222222222222222222222222444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4224452525552542424222222222222222222222222222222222222222
    22222222222222222222222244444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42555555255552542424222222222222222222222222222222222222222
    22222222222222222222222444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff424555552225524544242422222222222222222222222222222222222222
    2222222222222222222222244444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4255545224442555254242422222222222222222222222222222222222222
    2222222222222222222222244444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4222222244fff4255454424242222222222222222222222222222222222222
    222222222222222222222244444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444ffff42455525424224222222222222222222222222222222222222
    22222222222222222222224444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42552245442424222222222222222222222222222222222222
    22222222222222222222224444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff425224454542242422222222222222222222222222222222222
    2222222222222222222224444444444444fffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42244ff44254242242222222222222222222222222222222222
    222222222222222222222444444444444fffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444fff422452424242222222222222222222222222222222222
    22222222222222222222444444444444fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4254245422424222222222222222222222222222222222
    2222222222222222222244444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4225542542242422222222222222222222222222222222
    222222222222222222244444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42554454544242242222222222222222222222222222222
    22222222222222222244444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff425555555454424224222222222222222222222222222222
    2222222222222222224444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff425552225545442422422222222222222222222222222222
    222222222222222224444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4254224442544542242242222222222222222222222222222
    22222222222222224444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4222444fff4244454424424222222222222222222222222222
    222222222222222444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444ffffff4255445442242442222222222222222222222222
    22222222222222444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444fffffffff4222544544224224222222222222222222222222
    222222222222244444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4225554454422442442222222222222222222222
    22222222222244444441fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42554555445244224224222222222222222222222
    22222222222444444f111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff425555222554554422442442222222222222222222
    22222222224444fffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffff4252552444255445244224424442222222222222222
    222222222444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff4255544fff425254554442244424442222222222222
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff425522ffff425555445244422244224442222222222
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff425224fffff422255554552444222444424444444444
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff422244ffffff424424555545522444222244444444444
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4244ffffffff44ff42552555425522444422222222222
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ffffffffff4fff42455525555445522244444444444
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42552242552555455552222222222
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff425244f4252552525245555555555
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42524fff4254524255525555452555
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4224ffff425524f425552225555552
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4224ffff42524ff424524442552255
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff424fffff4224ffff4224fff4224422
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44fffffff424fffff424fff424ff44
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff424fffff424fff44fffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44fffffff44fff44fffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44fffffff44ffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffff4ffffffffff
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
    .........ff.........
    ........fcdf........
    ........fcdf........
    .......fcbbdf.......
    ...f..fcbbbbdf..f...
    ..fcffcbbbbbbdffdf..
    ..fcfcbbbffbbbdfdf..
    ..ffcbbbf11fbbbdff..
    ..fcbbbf1111fbbbdf..
    .fcbbbbbffffbbbbbdf.
    fcbbbbbbbbbbbbbbbbdf
    .ffffffcbbbbdffffff.
    .......fcbbdf.......
    .......fcbbdf.......
    ........fcdf........
    .........ff.........
    `, SpriteKind.Player)
spaceship.y = scene.screenHeight() - 0
controller.moveSprite(spaceship, 150, 150)
spaceship.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdate(function () {
    if (big_boss.top > 0) {
        big_boss.top = 0
        big_boss.vy = 0
        big_boss.vx = 10
        LaserBeam()
    }
    if (big_boss.right >= scene.screenWidth()) {
        big_boss.vx = -20
    } else if (big_boss.left <= 0) {
        big_boss.vx = 20
    }
    if (boss_life == 0) {
        big_boss.destroy(effects.rings, 500)
    }
    if (boss_life == 0) {
        Laser.destroy(effects.fire, 100)
    }
})
game.onUpdateInterval(1000, function () {
    let astro_type = 0
    astro_pos = randint(0, scene.screenWidth())
    astro_speed = randint(10, 50)
    astro = sprites.create(img`
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
    astro.x = astro_pos
    astro.y = -10
    if (astro_type == 0) {
        astro_speed = 10
    } else if (astro_type == 1) {
        astro_speed = 100
    } else if (astro_type == 2) {
        astro_speed = 200
    }
    astro.setImage(astro_list[randint(0, 2)])
    astro.ay = astro_speed
})
game.onUpdateInterval(100, function () {
    if (info.score() >= 50) {
        game.over(true, effects.confetti)
    }
})
game.onUpdateInterval(20000, function () {
    big_boss = sprites.create(img`
        .ff888ccccccccccccccccccccccccccccccccccccccccccccccccccccaaaff.
        ...fff88cccc5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5cccccaafff...
        ...fcbff888ccccccccccccccccccccccccccccccccccccccccccaaaffbdf...
        ....fcbbfff888cccc5c5c5c5c5c5c5c5c5c5c5c5c5c5cccccaaafffbbdf....
        .....fcbf..fff888ccccccccccccccccccccccccccccccaaafff..fbdf.....
        ......fcbf....fff88ccccc5c5c5c5c5c5c5c5ccccccaafff....fbdf......
        .......fcbf......ff888ccccccccccccccccccccaaaff......fbdf.......
        ........fcbf.......fff888cccc555555ccccaaafff.......fbdf........
        .........fcbf......fcbfff88ccc5555cccaafffbdf......fbdf.........
        .........fcbf......fcbbf1ff88cccccaaaff1fbdf.......fbdf.........
        ..........fcbf.....fcbbf154fff88aafff451fbdf......fbdf..........
        ...........fcbf.....fcbf154422ffff224451fbdf.....fbdf...........
        ............fcbf....fcbf1544222222224451fbdf....fbdf............
        .............fcbf...fcbf1554422222244551fdf....fbdf.............
        ..............fcbf...fcbf15544222244551fbdf...fbdf..............
        ...............fcbf..fcbf15554444445551fbdf..fbdf...............
        ................fcbf.fcbbf115555555511fbbdf.fbdf................
        .................fcf..ffcbff11111111ffbdff..fdf.................
        ..................fcf...ffcbffffffffbdff...fdf..................
        ...................fcf....ffcbbbbbbdff....fdf...................
        ....................fcf.....ffcbbdff.....fdf....................
        .....................fcf......fcdf......fbf.....................
        .....................fcbf.....fcdf.....fbdf.....................
        ......................fcbf....fcdf....fbdf......................
        .......................fcbf...fcdf...fbdf.......................
        ........................fcf...fcdf...fdf........................
        .........................fcf.fbffbf.fdf.........................
        ..........................fcfbf..fbfdf..........................
        ...........................fcf....fbf...........................
        ............................f......f............................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `, SpriteKind.boss)
    boss_life = 5
    big_boss.y = -32
    big_boss.vy = 20
})
