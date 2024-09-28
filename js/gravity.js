var gravity_rockstar = `Listen to the universe
Shatter the universe into atoms with ","
Stephen Hawking is semifinite
Carl Sagan is enthusiastic
Put Carl Sagan into the array
Von Braun was a rocketpunk
Put Von Braun into the rocket
Shout atoms at Stephen Hawking
Seti wants signals
Put signals between the array into the goldrecord
Put Stephen Hawking into the equation
Until the equation is the rocket
Put signals over the goldrecord into the fuel
Put the fuel with the goldrecord into the tank
Put the tank over the array into the goldrecord
Build the equation up

Give the goldrecord back

Put Seti taking Von Braun into the answer
Shout the answer
`

/*
def sqrt(num):
    divisor = num / 2
    for _ in range(10):
        new_divisor = num / divisor
        sum = new_divisor + divisor
        divisor = sum / 2
    return divisor

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