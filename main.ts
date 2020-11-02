namespace SpriteKind {
    export const Timer = SpriteKind.create()
    export const Sword = SpriteKind.create()
    export const HUD = SpriteKind.create()
}
// 0 - up
// 
// 1 - right
// 
// 2 - down
// 
// 3 - left
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    lastDirection = 0
    walk()
})
function spawnPocky () {
    Pocky = sprites.create(img`
        f f f f f f f f f 
        2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 
        2 4 4 2 4 2 2 4 2 
        2 4 4 2 4 2 2 4 2 
        2 f f 2 f 2 2 f 2 
        2 f 1 1 f 2 f f 2 
        2 2 1 f 1 1 f f 2 
        2 2 1 f f f 1 2 2 
        2 2 1 f f 1 1 2 2 
        2 2 1 1 1 f 2 2 2 
        2 2 1 f f f 2 2 2 
        2 2 1 f f f 2 2 2 
        2 2 1 f f f f 2 2 
        2 f f 2 f f f 2 2 
        f f 2 2 f 2 f f 2 
        `, SpriteKind.Food)
    for (let value of tiles.getTilesByType(myTiles.tile3)) {
        tiles.placeOnTile(Pocky, value)
    }
}
function initHUDtitle (hudSprite: Sprite) {
    hudSprite.z = 200
    hudSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    hudSprite.left = 0
}
function spawnHUD () {
    hungerBar = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.HUD)
    healthBar = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.HUD)
    hungerTitle = sprites.create(img`
        bbbbbbbbbbbbbbbbbbbbbbc
        b111ff1fff1ff11ffffffbc
        b1fff1f1f1f1f1f1fffffbc
        b1fff1f1f1f1f1f1fffffbc
        b111f1f1f1f1f1f1fffffbc
        b1fff1f1f1f1f1f1fffffbc
        b1ffff1fff1ff11ffffffbc
        bffffffffffffffffffffbc
        b1f1f11ff1ff1f111f1f1bc
        b1f1f1ff1f1f1ff1ff1f1bc
        b111f11f111f1ff1ff111bc
        b1f1f1ff1f1f1ff1ff1f1bc
        b1f1f11f1f1f11f1ff1f1bc
        bbbbbbbbbbbbbbbbbbbbbbc
        `, SpriteKind.HUD)
    hungerTitle.top = scene.screenHeight() - 16
    hungerBar.top = scene.screenHeight() - 16
    healthBar.top = scene.screenHeight() - 8
    meterWidth = scene.screenWidth() - 140
    initHUDSprite(hungerBar)
    initHUDSprite(healthBar)
    initHUDtitle(hungerTitle)
    hungerPercent = 100
    healthPercent = 100
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (lastDirection == 0) {
        animation.runImageAnimation(
        Trekking_Pole,
        [img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            b . . . . . . . . . . . . . . 
            . f . . . . . . . . . . . . . 
            . . f . . . . . . . . . . . . 
            . . f . . . . . . . . . . . . 
            . . . f . . . . . . . . . . . 
            . . . . e . . . . . . . . . . 
            . . . . e . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . b . . . . . . . 
            . . . . 1 1 . b . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . 1 1 . f . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . . e . . . . . . . 
            . . . . . . . e . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . 1 1 1 . . . 
            . . . . . . . . . . . 1 . . . 
            . . . . . . . . . . . . 1 . . 
            . . . . . . . . . . . . 1 . . 
            . . . . . . . . . . . . . . b 
            . . . . . . . . . . . . . f . 
            . . . . . . 1 1 1 1 . . f . . 
            . . . . . . . . . . . . f . . 
            . . . . . . . . . . . f . . . 
            . . . . . . . . . . f . . . . 
            . . . . . . . . . . e . . . . 
            . . . . . . . . . e . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
    } else if (lastDirection == 1) {
        animation.runImageAnimation(
        Trekking_Pole,
        [img`
            . . . . . . . . b . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . f . . . . . . . . 
            . . . . . f . . . . . . . . . 
            . . . . f . . . . . . . . . . 
            . . . e . . . . . . . . . . . 
            . . e . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 1 . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . 1 . . . 
            . . . . . . . . 1 . . . . . . 
            . . . . . . . . . f f f f b . 
            . . . . e e f f f . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . 1 . . . . . 
            . . . . . . . . 1 1 . . . . . 
            . . . . . . . 1 . . . . . . . 
            e . . . . . 1 1 . . . 1 . . . 
            . e f . . . 1 . . . 1 1 . . . 
            . . . f f . . . . . 1 . . . . 
            . . . . . f f . . . . . . . . 
            . . . . . . . f f . . . . . . 
            . . . . . . . . . f b . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
    } else if (lastDirection == 2) {
        animation.runImageAnimation(
        Trekking_Pole,
        [img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . e . . . . . . . . . . 
            . . . . e . . . . . . . . . . 
            . . . f . . . . . . . . . . . 
            . . . f . . . . . . . . . . . 
            . . f . . . . . . . . . . . . 
            . . f . . . . . . . . . . . . 
            . f . . . . . . . . . . . . . 
            . f . . . . . . . . . . . . . 
            b . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . e . . . . . . . 
            . . . . . . . e . . . . . . . 
            . . . . 1 1 . f . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . . . . . f . . . . . . . 
            . . . 1 1 1 . f . . . . . . . 
            . . . . . . . b . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . 
            . . . . . . . . . . f . . . . 
            . . . . . . . 1 . . f . . . . 
            . . . . . 1 1 . . . . f . . . 
            . . . . 1 . . . . . . . f . . 
            . . . . . . . . . . . . . f . 
            . . . . . . . . . . . . . . b 
            . . . . . . . . . . . . 1 . . 
            . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . 1 . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
    } else {
        animation.runImageAnimation(
        Trekking_Pole,
        [img`
            . . . . . . . . . . . . . . . 
            . . . b . . . . . . . . . . . 
            . . . . f f . . . . . . . . . 
            . . . . . . f f . . . . . . . 
            . . . . . . . . f f . . . . . 
            . . . . . . . . . . e . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . 1 . . . . . . . . . . . . . 
            . 1 . . . 1 . . . . . . . . . 
            . 1 . . . 1 . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            b f f f f . . . . . . . . . . 
            . . . . . f f e e . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            . . 1 . . . 1 . . . . . . . . 
            . . 1 . . . 1 1 . . . . . e . 
            . . . 1 . . . 1 . . . f e . . 
            . . . 1 . . . . . f f . . . . 
            . . . . 1 . . f f . . . . . . 
            . . . . . f f . . . . . . . . 
            . . . . b . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
    }
})
function walk () {
    if (lastDirection == 0) {
        animation.runImageAnimation(
        Kiddo,
        [img`
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 e 6 6 6 . . . 
            . . . 6 6 6 6 9 9 e 6 6 6 . . . 
            . . . 6 6 6 9 9 9 f 6 6 6 . . . 
            . . . . 6 6 9 9 9 f 6 6 . . . . 
            . . . . . 6 9 9 9 f 6 . . . . . 
            . . . . . 6 9 9 9 f 6 . . . . . 
            . . . . . 6 . 9 9 b 6 . . . . . 
            . . . . . d . 8 8 . d . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            `,img`
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 e 6 6 6 . . . 
            . . . 6 6 6 6 9 9 e 6 6 6 . . . 
            . . . 6 6 6 9 9 9 f 6 6 6 . . . 
            . . . . 6 6 9 9 9 f 6 6 . . . . 
            . . . . . 6 9 9 9 f 6 . . . . . 
            . . . . . 6 9 9 9 f 6 . . . . . 
            . . . . . 6 . 9 9 b 6 . . . . . 
            . . . . . d . 8 8 . d . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 3 . . . . . . . 
            . . . . . . . 3 . . . . . . . . 
            `,img`
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 e 6 6 6 . . . 
            . . . 6 6 6 6 9 9 e 6 6 6 . . . 
            . . . 6 6 6 9 9 9 f 6 6 6 . . . 
            . . . . 6 6 9 9 9 f 6 6 . . . . 
            . . . . . 6 9 9 9 f 6 . . . . . 
            . . . . . 6 9 9 9 f 6 . . . . . 
            . . . . . 6 . 9 9 b 6 . . . . . 
            . . . . . d . 8 8 . d . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            `,img`
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 e 6 6 6 . . . 
            . . . 6 6 6 6 9 9 e 6 6 6 . . . 
            . . . 6 6 6 9 9 9 f 6 6 6 . . . 
            . . . . 6 6 9 9 9 f 6 6 . . . . 
            . . . . . 6 9 9 9 f 6 . . . . . 
            . . . . . 6 9 9 9 f 6 . . . . . 
            . . . . . 6 . 9 9 b 6 . . . . . 
            . . . . . d . 8 8 . d . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 3 8 . . . . . . . 
            . . . . . . . . 3 . . . . . . . 
            `],
        200,
        true
        )
    } else if (lastDirection == 1) {
        animation.runImageAnimation(
        Kiddo,
        [img`
            . . 6 6 6 6 6 . 
            . 6 6 6 6 e e e 
            6 6 6 6 6 e f e 
            . 6 6 6 6 e 6 . 
            . 6 6 6 6 e d . 
            . e 6 6 e d d . 
            . e 9 6 e e . . 
            . f 9 9 6 . . . 
            9 f 9 6 6 . . . 
            9 f 9 6 6 . . . 
            9 f 9 6 6 6 d . 
            . f 9 . 6 . . . 
            . b . . 8 . . . 
            . . . . 8 8 . . 
            . . . 8 . 8 3 . 
            . . . 3 . 3 . . 
            `,img`
            . . 6 6 6 6 6 . 
            . 6 6 6 6 e e e 
            6 6 6 6 6 e f e 
            . 6 6 6 6 e 6 . 
            . 6 6 6 6 e d . 
            . e 6 6 e d d . 
            . e 9 6 e e . . 
            . f 9 9 6 . . . 
            9 f 9 6 6 . . . 
            9 f 9 6 6 . . . 
            9 f 9 6 6 6 d . 
            . f 9 . 6 . . . 
            . b . . 8 . . . 
            . . . . 8 . . . 
            . . . 8 . 8 . . 
            . . . 3 . 3 3 . 
            `,img`
            . . 6 6 6 6 6 . 
            . 6 6 6 6 e e e 
            6 6 6 6 6 e f e 
            . 6 6 6 6 e 6 . 
            . 6 6 6 6 e d . 
            . e 6 6 e d d . 
            . e 9 6 e e . . 
            . f 9 9 6 . . . 
            9 f 9 6 6 . . . 
            9 f 9 6 6 . . . 
            9 f 9 6 6 6 d . 
            . f 9 . 6 . . . 
            . b . . 8 . . . 
            . . . . 8 . . . 
            . . . . 8 . . . 
            . . . . 3 3 . . 
            `],
        200,
        true
        )
    } else if (lastDirection == 2) {
        animation.runImageAnimation(
        Kiddo,
        [img`
            . . . . 6 6 6 6 6 6 6 . . . . . 
            . . . 6 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 6 6 e d d d 6 6 6 . . . 
            . . . 6 6 e f d d f d e 6 . . . 
            . . . 6 e e 6 d d 6 d e 6 . . . 
            . . . 6 e d d d d d d e 6 . . . 
            . . . 6 e e d d d d e e 6 . . . 
            . . . 6 6 e e d d e e 6 6 . . . 
            . . . . 6 6 9 6 6 9 6 6 . . . . 
            . . . . . 6 9 6 6 9 6 . . . . . 
            . . . . . 6 9 6 6 9 6 . . . . . 
            . . . . . 6 . 6 6 . 6 . . . . . 
            . . . . . d . 8 8 . d . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            `,img`
            . . . . 6 6 6 6 6 6 6 . . . . . 
            . . . 6 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 6 6 e d d d 6 6 6 . . . 
            . . . 6 6 e f d d f d e 6 . . . 
            . . . 6 e e 6 d d 6 d e 6 . . . 
            . . . 6 e d d d d d d e 6 . . . 
            . . . 6 e e d d d d e e 6 . . . 
            . . . 6 6 e e d d e e 6 6 . . . 
            . . . . 6 6 9 6 6 9 6 6 . . . . 
            . . . . . 6 9 6 6 9 6 . . . . . 
            . . . . . 6 9 6 6 9 6 . . . . . 
            . . . . . 6 . 6 6 . 6 . . . . . 
            . . . . . d . 8 8 . d . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 3 . . . . . . . 
            . . . . . . . 3 . . . . . . . . 
            `,img`
            . . . . 6 6 6 6 6 6 6 . . . . . 
            . . . 6 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 6 6 e d d d 6 6 6 . . . 
            . . . 6 6 e f d d f d e 6 . . . 
            . . . 6 e e 6 d d 6 d e 6 . . . 
            . . . 6 e d d d d d d e 6 . . . 
            . . . 6 e e d d d d e e 6 . . . 
            . . . 6 6 e e d d e e 6 6 . . . 
            . . . . 6 6 9 6 6 9 6 6 . . . . 
            . . . . . 6 9 6 6 9 6 . . . . . 
            . . . . . 6 9 6 6 9 6 . . . . . 
            . . . . . 6 . 6 6 . 6 . . . . . 
            . . . . . d . 8 8 . d . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            `,img`
            . . . . 6 6 6 6 6 6 6 . . . . . 
            . . . 6 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 6 6 e d d d 6 6 6 . . . 
            . . . 6 6 e f d d f d e 6 . . . 
            . . . 6 e e 6 d d 6 d e 6 . . . 
            . . . 6 e d d d d d d e 6 . . . 
            . . . 6 e e d d d d e e 6 . . . 
            . . . 6 6 e e d d e e 6 6 . . . 
            . . . . 6 6 9 6 6 9 6 6 . . . . 
            . . . . . 6 9 6 6 9 6 . . . . . 
            . . . . . 6 9 6 6 9 6 . . . . . 
            . . . . . 6 . 6 6 . 6 . . . . . 
            . . . . . d . 8 8 . d . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 3 8 . . . . . . . 
            . . . . . . . . 3 . . . . . . . 
            `],
        200,
        true
        )
    } else {
        animation.runImageAnimation(
        Kiddo,
        [img`
            . 6 6 6 6 6 . . 
            e e e 6 6 6 6 . 
            e f e 6 6 6 6 . 
            . 6 e 6 6 6 6 . 
            . d e 6 6 6 . . 
            . d d e 6 6 . . 
            . . e e 6 9 . . 
            . . . 6 9 9 9 . 
            . . . 6 6 9 9 9 
            . . . 6 6 9 9 9 
            . d 6 6 6 9 9 9 
            . . . 6 . 9 9 . 
            . . . 8 . . . . 
            . . 8 8 . . . . 
            . 3 8 . 8 . . . 
            . . 3 . 3 . . . 
            `,img`
            . 6 6 6 6 6 . . 
            e e e 6 6 6 6 . 
            e f e 6 6 6 6 . 
            . 6 e 6 6 6 6 . 
            . d e 6 6 6 . . 
            . d d e 6 6 . . 
            . . e e 6 9 . . 
            . . . 6 9 9 9 . 
            . . . 6 6 9 9 9 
            . . . 6 6 9 9 9 
            . d 6 6 6 9 9 9 
            . . . 6 . 9 9 . 
            . . . 8 . . . . 
            . . . 8 . . . . 
            . . 8 . 8 . . . 
            . 3 3 . 3 . . . 
            `,img`
            . 6 6 6 6 6 . . 
            e e e 6 6 6 6 . 
            e f e 6 6 6 6 . 
            . 6 e 6 6 6 6 . 
            . d e 6 6 6 . . 
            . d d e 6 6 . . 
            . . e e 6 9 . . 
            . . . 6 9 9 9 . 
            . . . 6 6 9 9 9 
            . . . 6 6 9 9 9 
            . d 6 6 6 9 9 9 
            . . . 6 . 9 9 . 
            . . . 8 . . . . 
            . . . 8 . . . . 
            . . . 8 . . . . 
            . . 3 3 . . . . 
            `],
        200,
        true
        )
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    lastDirection = 3
    walk()
})
function createTimer (ms: number) {
    timer = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Timer)
    timer.setFlag(SpriteFlag.Ghost, true)
    timer.lifespan = ms
}
function drawHUDMeter (percent: number, hudSprite: Sprite, onColor: number, offColor: number) {
    hudSprite.image.fill(offColor)
    fillWidth = percent * meterWidth / 100
    hudSprite.image.fillRect(0, 0, fillWidth, hudSprite.height, onColor)
}
function spawnRandGrass () {
    for (let value of tiles.getTilesByType(myTiles.tile1)) {
        if (randint(1, 3) == 1) {
            tiles.setTileAt(value, myTiles.tile9)
        } else if (randint(1, 2) == 1) {
            tiles.setTileAt(value, myTiles.tile7)
        } else if (randint(1, 2) == 1) {
            tiles.setTileAt(value, myTiles.tile4)
        } else if (randint(1, 6) == 1) {
            tiles.setTileAt(value, myTiles.tile5)
        } else if (randint(1, 6) == 1) {
            tiles.setTileAt(value, myTiles.tile6)
        } else {
            tiles.setTileAt(value, myTiles.tile8)
        }
    }
}
function initHUDSprite (hudSprite: Sprite) {
    hudSprite.z = 200
    hudSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    hudSprite.setImage(image.create(meterWidth, 6))
    hudSprite.left = 24
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    lastDirection = 1
    walk()
})
function Level1 () {
    scene.setBackgroundColor(7)
    tiles.setTilemap(tiles.createTilemap(hex`200020000a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a030303030303030303030303030303030303030501010101010101010101010b0c0101070101010101010101010101010101010401010101010101010101010b0c0101010101010101010101010101010101010401010101010101010701010b0c0101010101010101010101010101010101010401010101010101010101010b0c0101010101010101010101010101010101010401010101010101010101010b0c0101010101010101010101010101010101010401010101010101010101010b0c0101010101010101010101010101010101010401010101010101010101010b0c0101010101010101010701010101010101010401010101010101010101010b0c0101010101010101010101010101010101010401010101010101010101010b0c0101070101010101010101010101010101010401010101010101010101010b0c0101010101010101010101010101010101010401010101010101010101010b0c0101010101010101010101010101010101010401010101010101010101010b0c0101010101010101010101010101010101070401010101010101010101010b0c0101010101010101010101010101010101010401010101010101010107010b0c0101010101010101070101010101010101010401010101010101010101010b0c0101010101010101010101010101010101010401010101010101010101010b0c0101010101010101010101010101010101010401010101010101010101010b0c0101010101010101010101010101010101010401010101010101010101010b0c0101010101010101010101010101010101010401010101010101010101010b0c0101010101010101010101010101010101010401010101010101010101010b0c0101010107010101010101010101010101010407010101010101010101010b0c0101010803030303030303030303030303030901010101010101010101010b0c0101010401010101010101010101010101010101010101010101010101010b0c0101010401010101010101010101010101010101010101010101010101010b0c0101010401010101010101010101010101010101010101010101010101010b0c0101010401010101010101010101010101010101010101010101010101010b0c0101010401010101010101010101010101010101010101010101010101070b0c0101010401010101010101010101010101010101010101010101010101010b0c010e010401010101010101010101010101010101010101010101010101010b0c0b0d0c0401010701010101010101010101010701010101010101010101020b0c010a0106030303030303030303030303030303030303030303030303030303`, img`
        22222222222222222222222222222222
        ...............................2
        2..2...........................2
        2...........................2..2
        2..............................2
        2..............................2
        2..............................2
        2..............................2
        2.........2....................2
        2..............................2
        2..2...........................2
        2..............................2
        2..............................2
        2.................2............2
        2............................2.2
        2........2.....................2
        2..............................2
        2..............................2
        2..............................2
        2..............................2
        2..............................2
        2....2..............2..........2
        2..............................2
        2..............................2
        2..............................2
        2..............................2
        2..............................2
        2.............................22
        2..............................2
        2.2............................2
        2222...2...........2...........2
        2.2.............................
        `, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24], TileScale.Sixteen))
    spawnRandGrass()
    spawnKiddo()
    spawnPocky()
    tiles.placeOnTile(Kiddo, tiles.getTileLocation(0, 1))
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    lastDirection = 2
    walk()
})
scene.onHitWall(SpriteKind.Sword, function (sprite, location) {
    if (controller.A.isPressed()) {
        for (let value of [CollisionDirection.Left, CollisionDirection.Right, CollisionDirection.Top, CollisionDirection.Bottom]) {
            if (tiles.tileIs(tiles.locationInDirection(tiles.locationOfSprite(Trekking_Pole), value), myTiles.tile17)) {
                tiles.setWallAt(location, false)
                Berries = sprites.create(img`
                    . . . . . . . . . f . . . . . . 
                    . . . . . f f . f 7 f . f . . . 
                    . . . f f 8 8 f f 7 f f 7 f . . 
                    . . . f 8 8 8 a f 7 f 7 f . . . 
                    . . f f 8 8 8 a f 7 7 f . . . . 
                    . f 8 8 f 8 a a f f f . . . . . 
                    f 8 8 8 8 f f f 8 8 f f . . . . 
                    f 8 8 8 a f 8 8 8 8 8 f . . . . 
                    f 8 8 8 a f f 8 8 8 a f . . . . 
                    . f a a f . . f a a f . . . . . 
                    . . f f . . . . f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Food)
                tiles.placeOnTile(Berries, location)
                tiles.setTileAt(location, myTiles.tile7)
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    hungerPercent += 10
    if (hungerPercent > 100) {
        hungerPercent = 100
    }
    otherSprite.destroy(effects.disintegrate, 500)
})
sprites.onDestroyed(SpriteKind.Timer, function (sprite) {
    animation.stopAnimation(animation.AnimationTypes.All, Kiddo)
    walk()
})
function spawnKiddo () {
    Kiddo = sprites.create(img`
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . . 6 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 6 6 e d d d 6 6 6 . . . 
        . . . 6 6 e f d d f d e 6 . . . 
        . . . 6 e e 6 d d 6 d e 6 . . . 
        . . . 6 e d d d d d d e 6 . . . 
        . . . 6 e e d d d d e e 6 . . . 
        . . . 6 6 e e d d e e 6 6 . . . 
        . . . . 6 6 9 6 6 9 6 6 . . . . 
        . . . . . 6 9 6 6 9 6 . . . . . 
        . . . . . 6 9 6 6 9 6 . . . . . 
        . . . . . 6 . 6 6 . 6 . . . . . 
        . . . . . d . 8 8 . d . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Kiddo, 50, 50)
    Trekking_Pole = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Sword)
    scene.cameraFollowSprite(Kiddo)
}
let moving = false
let Berries: Sprite = null
let fillWidth = 0
let timer: Sprite = null
let Kiddo: Sprite = null
let Trekking_Pole: Sprite = null
let healthPercent = 0
let hungerPercent = 0
let meterWidth = 0
let hungerTitle: Sprite = null
let healthBar: Sprite = null
let hungerBar: Sprite = null
let Pocky: Sprite = null
let lastDirection = 0
Level1()
spawnHUD()
game.onUpdate(function () {
    moving = controller.left.isPressed() || (controller.right.isPressed() || (controller.up.isPressed() || controller.down.isPressed()))
    if (!(moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, Kiddo)
    }
})
game.onUpdate(function () {
    if (lastDirection == 0) {
        Trekking_Pole.bottom = Kiddo.top
        Trekking_Pole.x = Kiddo.x
    } else if (lastDirection == 1) {
        Trekking_Pole.left = Kiddo.right
        Trekking_Pole.y = Kiddo.y
    } else if (lastDirection == 2) {
        Trekking_Pole.top = Kiddo.bottom
        Trekking_Pole.x = Kiddo.x
    } else {
        Trekking_Pole.right = Kiddo.left
        Trekking_Pole.y = Kiddo.y
    }
    if (hungerPercent == 50) {
        Kiddo.say("Can I have a snack?", 1000)
    } else if (hungerPercent == 30) {
        Kiddo.say("I literally didn't eat anything today", 2000)
    } else if (hungerPercent == 15) {
        Kiddo.say("I'M DYING...", 1000)
    } else if (hungerPercent == 0) {
        game.over(false, effects.melt)
    }
})
game.onUpdateInterval(500, function () {
    hungerPercent += -0.5
    healthPercent += -0.5
    drawHUDMeter(hungerPercent, hungerBar, 4, 14)
    drawHUDMeter(healthPercent, healthBar, 2, 3)
})
