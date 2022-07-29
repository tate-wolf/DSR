// DECLARATIONS
let action = [];
let ammoP1 = 0;
let ammoP2 = 0;
let healthP1 = 1;
let healthP2 = 1;


// IF TREE
$("#submitButton").click(() => {


if (action[0] == "Dodge") {
    if (action[1] == "Dodge") {

        $("#dialogueSpace").text("Both Dodge!");
    }
    if (action[1] == "Shoot") {
        ammoP2--;

        $("#dialogueSpace").text("P2 Shoots and misses!");
    }
    if (action[1] == "Reload") {
        if (ammoP2 < 6) {
        ammoP2++;

        $("#dialogueSpace").text("P1 Dodges! P2 Reloads!");

    }}
    
    }

if (action[0] == "Shoot") {
    if (ammoP1 > 0) {       // does not use else case !! default just continues and ignores 
        ammoP1--;}
    if (action[1] == "Dodge") {

        $("#dialogueSpace").text("P1 Shoots and misses!");
    }
    if (action[1] == "Shoot") {
        if (ammoP2 > 0) {
            ammoP2--;

        $("#dialogueSpace").text("Both Shoot! Both Die!");
        }}
    if (action[1] == "Reload") {
        if (ammoP2 < 6) {
        ammoP2++;

        $("#dialogueSpace").text("P1 Shoots P2!");
    }}
    
    }

if (action[0] == "Reload") {
    if (ammoP1 < 6) {
    ammoP1++;}
    if (action[1] == "Dodge") {

        $("#dialogueSpace").text("P1 Reloads! P2 Dodges!");
    }
    if (action[1] == "Shoot") {
        if (ammoP2 > 0) {
        ammoP2--;

        $("#dialogueSpace").text("P2 Shoots P1!");
        }}
    if (action[1] == "Reload") {
        if (ammoP2 < 6) {
        ammoP2++;

        $("#dialogueSpace").text("Both Reload!");
    }}
    
    } 

    if (healthP1 == 0) {
        $("#winnerP1").show();
    }
    if (healthP2 == 0) {
        $("#winnerP2").show();
    }

    $("#statsP1").text("P1 Ammo: " + ammoP1, healthP1, action[0]);
    $("#statsP2").text("P2 Ammo: " + ammoP2, healthP2, action[1]);
    action[0] = " ";
    return action[1] = " ";     // I first tried using the == operator but to no avail, I think it compares
})