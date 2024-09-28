/*

    Newtonian gravity force calulcator
    Takes two point masses ( passed as strings ), splits into
    5-tuple describing the body (x,y,vx,vy,m), calc force
    and return forces in x- and y-direction ( as string )

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
Shatter apples into subapples with "-"
Shatter needles into subneedles with "-"
Put subapples at Stephen Hawking into applex
Put subneedles at Stephen Hawking into needlex
Put subapples at Marie Curie into appley
Put subneedles at Marie Curie into needley
Put subapples at Albert Einstein into massapple
Put subneedles at Albert Einstein into massneedle
Put applex without needlex into diffx
Put appley without needley into diffy
Put diffx of diffx into diffxs
Put diffy of diffy into diffys
Put diffxs with diffys into hyp
Put Seti taking hyp into dist
Put dist times dist into dists
Give dist back
`