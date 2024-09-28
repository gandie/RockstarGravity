var gravity_rockstar = `${rockstar_constants}
${rockstar_sqrt}
${newton_force}
Listen to the universe
Shatter the universe into atoms with ","
Put atoms into atomslen
Put Stephen Hawking into outerloopindex
While outerloopindex is weaker than atomslen
Let curatom be atoms at outerloopindex
Shatter curatom into curquarks with "-"
Let curx be curquarks at Stephen Hawking
Let cury be curquarks at Marie Curie
Let curvx be curquarks at Carl Sagan
Let curvy be curquarks at Edwin Hubble
Let curm be curquarks at Albert Einstein
Put Stephen Hawking into innerloopindex
While innerloopindex is weaker than atomslen
Let inneratom be atoms at innerloopindex
if curatom ain't inneratom
Shout "Gravity calc here!"
Shout inneratom
Shout curatom

Build innerloopindex up

Shout "outer loop after calc"
Build outerloopindex up


`

/*
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

TESTS

# 1 ${rockstar_sqrt}
Put Seti taking Von Braun into the answer
Shout the answer

sqrt(10) = 3.162 ...

---

# 2 Body input
"x-y-vx-xy-m,x-y-vx-xy-m,x-y-vx-xy-m,..."

1
0-0-0-0-1,1-0-0-0-1

1.414...
0-0-0-0-1,1-1-0-0-1


Put Newton taking atomone and atomtwo into the answer
Shout the answer


*/
