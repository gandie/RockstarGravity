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
var newton_force = `Newton wants fame and fortune
Shatter fame into promises with Germany
Cut fortune into pieces with Germany
Put promises at Stephen Hawking into the career
Put pieces at Stephen Hawking into our hopes
Put promises at Marie Curie into the future
Put pieces at Marie Curie into the past
Put promises at Albert Einstein into the topic
Put pieces at Albert Einstein into my mind
Cast the topic
Burn my mind
Cast the career
Burn our hopes
Cast the future
Burn the past
Put our hopes without the career into our thoughts
Put the past without the future into the present
Put our thoughts of our thoughts into our world
Put the present of the present into our time
Put our world with our time into perspective
Put Seti taking perspective into dist
Put dist times dist into dists
Put the topic times my mind into massmult
Put massmult over dists into force
Put our thoughts over dist into anglex
Put the present over dist into angley
Put anglex times force into forcex
Put angley times force into forcey
Let the result at Stephen Hawking be forcex
Let the result at Marie Curie be forcey
Give the result back
`