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
Let our goal be atoms at our team
Shatter our goal into benchmarks with Germany
Let our timeline be benchmarks at Stephen Hawking
Let the milestones be benchmarks at Marie Curie
Let the requirements be benchmarks at Carl Sagan
Let dashboards be benchmarks at Edwin Hubble
Let our kpis be benchmarks at Albert Einstein
Cast our timeline
Cast the milestones
Cast the requirements
Cast dashboards
Cast our kpis
Put Stephen Hawking into curaccx
Put Stephen Hawking into curaccy
Put Stephen Hawking into innerloopindex
While innerloopindex is weaker than the accelerator
Let inneratom be atoms at innerloopindex
if our goal ain't inneratom
Put Newton taking our goal, and inneratom into the answer
Let resforcex be the answer at Stephen Hawking
Let resforcey be the answer at Marie Curie
Put resforcex over our kpis into resforcex
Put resforcey over our kpis into resforcey
Put curaccx with resforcex into curaccx
Put curaccy with resforcey into curaccy

Build innerloopindex up

Put the requirements with curaccx into the requirements
Put dashboards with curaccy into dashboards
Put our timeline with the requirements into our timeline
Put the milestones with dashboards into the milestones
Let newatom at Stephen Hawking be our timeline
Let newatom at Marie Curie be the milestones
Let newatom at Carl Sagan be the requirements
Let newatom at Edwin Hubble be dashboards
Let newatom at Albert Einstein be our kpis
Unite newatom into resultatom with Germany
Rock the ether with resultatom
Build our team up

Unite the ether into resultuniverse with USA
Give resultuniverse back
`