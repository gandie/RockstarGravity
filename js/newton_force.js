/*

    Newtonian gravity force calulcator
    Takes two point masses ( passed as strings ), splits into
    5-tuple describing the body (x,y,vx,vy,m), calc force
    and return forces in x- and y-direction ( as string )

    Requires:          "constants.js, calc_root.js"

    Function name:     "Newton"
    Function arguments:"apples and needles"

    Example call:      "Put Newton taking atomone, and atomtwo into the answer"
    --> anwser = Newton(atomone, atomtwo)

    Pseudo:

    def calc_forces(atom, inner_atom):
        x, y, vx, vy, mass = atom.split('-')
        x_i, y_i, vx_i, vy_i, mass_i = inner_atom.split('-')
        x_diff = x - x_i
        y_diff = y - y_i
        r = sqrt(x_diff ** 2 + y_diff ** 2)
        force = (mass * mass_i) / r ** 2
        force_x = (x_diff / r) * force
        force_y = (y_diff / r) * force
        return '/'.join([force_x, force_y])

*/

// TODO: this is far from idiomatic rockstar, watch QA !
var newton_force = `Newton wants apples and needles
Shatter apples into subapples with Germany
Shatter needles into subneedles with Germany
Put subapples at Stephen Hawking into applex
Put subneedles at Stephen Hawking into needlex
Put subapples at Marie Curie into appley
Put subneedles at Marie Curie into needley
Put subapples at Albert Einstein into massapple
Put subneedles at Albert Einstein into massneedle
Cast massapple
Cast massneedle
Cast applex
Cast needlex
Cast appley
Cast needley
Put needlex without applex into diffx
Put needley without appley into diffy
Put diffx of diffx into diffxs
Put diffy of diffy into diffys
Put diffxs with diffys into hyp
Put Seti taking hyp into dist
Put dist times dist into dists
Put massapple times massneedle into massmult
Put massmult over dists into force
Put diffx over dist into anglex
Put diffy over dist into angley
Put anglex times force into forcex
Put angley times force into forcey
Let the result at Stephen Hawking be forcex
Let the result at Marie Curie be forcey
Unite the result into resultstr with "/"
Give resultstr back
`