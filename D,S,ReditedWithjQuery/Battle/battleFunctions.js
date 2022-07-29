// When submit button is pressed and the if tree finds the correct instance, run these functions inside instance.
// if (action[0] == "dodge")

$("#p1Shoot").click(() => {
    action[0] = "Shoot";
    return console.log(action);
})

$("#p1Dodge").click(() => {
    action[0] = "Dodge";
    return console.log(action);
})

$("#p1Reload").click(() => {
    action[0] = "Reload";
    return console.log(action);
})

$("#p2Dodge").click(() => {
    action[1] = "Dodge";
    return console.log(action);
})

$("#p2Shoot").click(() => {
    action[1] = "Shoot";
    return console.log(action);
})

$("#p2Reload").click(() => {
    action[1] = "Reload";
    return console.log(action);
})

