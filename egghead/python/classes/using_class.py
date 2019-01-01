#!/usr/bin/env python3

from classes import Ball, Football

ball_inst = Ball()

red_ball = Ball(10, 'red', 2)
blue_ball = Ball(12, 'blue', 5)
print(ball_inst.is_for_playing)

print(blue_ball.throw_distance())

eagles = Football()
pats = Football()
