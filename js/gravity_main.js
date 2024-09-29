/*

    Gravity sim main loop, takes array of bodies, calculates gravity forces
    and updates velocity and position according to that.

    Requires:           "constants.js, calc_root.js, newton_force.js"

    Environment:        Reads body array from STDIN. String format:
                        "x<Germany>y<Germany>vx<Germany>vy<Germany>m<USA>..."

    Pseudo:

    for atom in atoms:
        x, y, vx, vy, mass = atom.split('-')
        x_force = 0
        y_force = 0
        for inner_atom in atoms:
            if atom == inner_atom:
                continue
            forces = calc_force(atom, inner_atom)
            x_force += calc_xforce(atom, inner_atom)
            y_force += calc_yforce(atom, inner_atom)
        acc_x = x_force / mass
        acc_y = y_force / mass

        vx = vx + acc_x
        vy = vy + acc_y

        x = x + vx
        y = y + vy
*/
var gravity_main = `Listen to the universe
Shatter the universe into atoms with USA
Put atoms into the accelerator
Rock the ether
Put Stephen Hawking into our team
While our team is weaker than the accelerator
Let curatom be atoms at our team
Shatter curatom into curquarks with Germany
Let curx be curquarks at Stephen Hawking
Let cury be curquarks at Marie Curie
Let curvx be curquarks at Carl Sagan
Let curvy be curquarks at Edwin Hubble
Let curm be curquarks at Albert Einstein
Cast curx
Cast cury
Cast curvx
Cast curvy
Cast curm
Put Stephen Hawking into curaccx
Put Stephen Hawking into curaccy
Put Stephen Hawking into innerloopindex
While innerloopindex is weaker than the accelerator
Let inneratom be atoms at innerloopindex
if curatom ain't inneratom
Put Newton taking curatom, and inneratom into the answer
Let resforcex be the answer at Stephen Hawking
Let resforcey be the answer at Marie Curie
Put resforcex over curm into resforcex
Put resforcey over curm into resforcey
Put curaccx with resforcex into curaccx
Put curaccy with resforcey into curaccy

Build innerloopindex up

Put curvx with curaccx into curvx
Put curvy with curaccy into curvy
Put curx with curvx into curx
Put cury with curvy into cury
Let newatom at Stephen Hawking be curx
Let newatom at Marie Curie be cury
Let newatom at Carl Sagan be curvx
Let newatom at Edwin Hubble be curvy
Let newatom at Albert Einstein be curm
Unite newatom into resultatom with Germany
Rock the ether with resultatom
Build our team up

Unite the ether into resultuniverse with USA
Give resultuniverse back
`