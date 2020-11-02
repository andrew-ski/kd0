@namespace
class SpriteKind:
    Timer = SpriteKind.create()
    Sword = SpriteKind.create()
    HUD = SpriteKind.create()
# 0 - up
# 
# 1 - right
# 
# 2 - down
# 
# 3 - left

def on_up_pressed():
    global lastDirection
    lastDirection = 0
    walk()
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_a_pressed():
    if lastDirection == 0:
        animation.run_image_animation(sword,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            100,
            False)
    elif lastDirection == 1:
        animation.run_image_animation(sword,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            100,
            False)
    elif lastDirection == 2:
        animation.run_image_animation(sword,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            100,
            False)
    else:
        animation.run_image_animation(sword,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            100,
            False)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def walk():
    if lastDirection == 0:
        animation.run_image_animation(Kiddo,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
    elif lastDirection == 1:
        animation.run_image_animation(Kiddo,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
    elif lastDirection == 2:
        animation.run_image_animation(Kiddo,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
    else:
        animation.run_image_animation(Kiddo,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            200,
            True)

def on_left_pressed():
    global lastDirection
    lastDirection = 3
    walk()
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def createTimer(ms: number):
    global timer
    timer = sprites.create(img("""
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
        """),
        SpriteKind.Timer)
    timer.set_flag(SpriteFlag.GHOST, True)
    timer.lifespan = ms
def drawHUDMeter(percent: number, hudSprite: Sprite, onColor: number, offColor: number):
    global fillWidth
    hudSprite.image.fill(offColor)
    fillWidth = percent * meterWidth / 100
    hudSprite.image.fill_rect(0, 0, fillWidth, hudSprite.height, onColor)
def initHUDSprite(hudSprite: Sprite):
    hudSprite.z = 200
    hudSprite.set_flag(SpriteFlag.RELATIVE_TO_CAMERA, True)
    hudSprite.set_image(image.create(meterWidth, 4))
    hudSprite.left = 10

def on_right_pressed():
    global lastDirection
    lastDirection = 1
    walk()
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    global lastDirection
    lastDirection = 2
    walk()
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_on_overlap(sprite, otherSprite):
    global hungerPercent
    hungerPercent += 10
    if hungerPercent > 100:
        hungerPercent = 100
    otherSprite.destroy(effects.disintegrate, 500)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def on_on_destroyed(sprite):
    animation.stop_animation(animation.AnimationTypes.ALL, Kiddo)
    walk()
sprites.on_destroyed(SpriteKind.Timer, on_on_destroyed)

Berries: List[Image] = []
moving = False
fillWidth = 0
timer: Sprite = None
lastDirection = 0
hungerPercent = 0
meterWidth = 0
sword: Sprite = None
Kiddo: Sprite = None
scene.set_background_color(7)
tiles.set_tilemap(tilemap("""
    level
"""))
for value in tiles.get_tiles_by_type(myTiles.tile1):
    if randint(1, 3) == 1:
        tiles.set_tile_at(value, myTiles.tile9)
    elif randint(1, 2) == 1:
        tiles.set_tile_at(value, myTiles.tile7)
    elif randint(1, 2) == 1:
        tiles.set_tile_at(value, myTiles.tile4)
    elif randint(1, 6) == 1:
        tiles.set_tile_at(value, myTiles.tile5)
    elif randint(1, 6) == 1:
        tiles.set_tile_at(value, myTiles.tile6)
    else:
        tiles.set_tile_at(value, myTiles.tile8)
Kiddo = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(Kiddo, 50, 50)
sword = sprites.create(img("""
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
    """),
    SpriteKind.Sword)
scene.camera_follow_sprite(Kiddo)
warmthBar = sprites.create(img("""
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
    """),
    SpriteKind.HUD)
hungerBar = sprites.create(img("""
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
    """),
    SpriteKind.HUD)
hungerBar.top = scene.screen_height() - 12
meterWidth = scene.screen_width() - 20
initHUDSprite(hungerBar)
hungerPercent = 100

def on_on_update():
    global moving
    moving = controller.left.is_pressed() or (controller.right.is_pressed() or (controller.up.is_pressed() or controller.down.is_pressed()))
    if not (moving):
        animation.stop_animation(animation.AnimationTypes.ALL, Kiddo)
game.on_update(on_on_update)

def on_on_update2():
    if lastDirection == 0:
        sword.bottom = Kiddo.top
        sword.x = Kiddo.x
    elif lastDirection == 1:
        sword.left = Kiddo.right
        sword.y = Kiddo.y
    elif lastDirection == 2:
        sword.top = Kiddo.bottom
        sword.x = Kiddo.x
    else:
        sword.right = Kiddo.left
        sword.y = Kiddo.y
    if hungerPercent == 50:
        Kiddo.say("Can I have a snack?", 1000)
    elif hungerPercent == 30:
        Kiddo.say("I literally didn't eat anything today", 2000)
    elif hungerPercent == 15:
        Kiddo.say("I'M DYING...", 1000)
    elif hungerPercent == 0:
        game.over(False, effects.melt)
game.on_update(on_on_update2)

def on_update_interval():
    global Berries
    Fruit: Sprite = None
    if randint(1, 2) == 1:
        pass
    Berries = [img("""
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
    """),
        img("""
            . . . . . f . . . . . . . . . .
            . . . f f 7 f f . . . . . . . .
            . . f 7 7 7 7 7 f . . . . . . .
            f f 2 f f 7 f f 2 f f . . . . .
            f 2 3 2 2 f 2 4 2 4 f . . . . .
            f 3 2 3 2 3 2 1 4 2 f . . . . .
            f 2 3 2 3 2 4 1 2 4 f . . . . .
            . f 2 4 2 4 2 4 2 f . . . . . .
            . f 4 2 4 2 4 2 4 f . . . . . .
            . f 2 4 2 4 2 4 2 f . . . . . .
            . . f 2 4 2 4 2 f . . . . . . .
            . . f 4 2 4 2 4 f . . . . . . .
            . . f 2 4 2 4 2 f . . . . . . .
            . . . f 2 4 2 f . . . . . . . .
            . . . . f f f . . . . . . . . .
            . . . . . . . . . . . . . . . .
        """)]

    Fruit.lifespan = 10000
game.on_update_interval(2000, on_update_interval)

def on_update_interval2():
    global hungerPercent
    hungerPercent += -0.5
    drawHUDMeter(hungerPercent, hungerBar, 4, 14)
game.on_update_interval(500, on_update_interval2)
