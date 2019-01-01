class Ball:
    """A fun ball to use"""
    is_for_playing = True # normal prop declaration
    def __init__(self, radius=5, color='green', weight=0.75):
        # inits with a copy of itself, and some params
        #instance attrs
        self.radius = radius
        self.color = color
        self.weight = weight

    def throw_distance(self):
        """max throwing distance"""
        return 100 // self.weight * self.radius # completely made up formula


class Football:
    """Standard NFL Ball """
    def __init__(self, diameter = 22, color = 'brown', pressure = 13):
        self.diameter = diameter
        self.color = color
        self.pressure = pressure

    def inflate(self, psi):
        self.pressure = self.pressure + psi

    def deflate(self, psi):
        self.pressure = self.pressure - psi

# LITERAL TUTORIAL EXAMPLE, I LOVE EGGHEAD SO MUCH
class PatroitsBall(Football):
    def inflate(self, psi):
        self.pressure = self.pressure - psi
