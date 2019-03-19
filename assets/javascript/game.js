$('#attack-btn').hide();
$('#clear-btn').hide();
$('#linkAttack').hide();
$('#linkDefend').hide();
$('#sheikAttack').hide();
$('#sheikDefend').hide();
$('#mikauAttack').hide();
$('#mikauDefend').hide();
$('#bublinAttack').hide();
$('#bublinDefend').hide();

// Define variables (hp, ap, and counter attack power)
// Set characters as objects
var link = { hp: 100, ap: 8, counterAttackPower: 10 };
var sheik = { hp: 120, ap: 10, counterAttackPower: 8 };
var mikau = { hp: 80, ap: 7, counterAttackPower: 10 };
var kingBublin = { hp: 130, ap: 10, counterAttackPower: 11 };
// In the objects (characters), assign values to the hp and ap vars
// For objects, assign "on click animation" to move that character to the battle area.
$("#link").click(function () {
    $(this).hide();
    $("#linkAttack").show();
    $("#linkHealth").html("Health: " + link.hp);
    $(".lead").html("Select an opponent!");
    $("#attack-btn").show();
    $("#sheik").click(function () {
        $(this).hide();
        $("#sheikDefend").show();
        $("#sheikAttack").hide();
        $("#sheikDefHealth").html("Health: " + sheik.hp);
        $(".lead").html("FIGHT!");
        $("#attack-btn").click(function() {
            sheik.hp = sheik.hp - link.ap;
            $("#sheikDefHealth").html("Health: " + sheik.hp);
        });
    });
    $("#bublin").click(function () {
        $(this).hide();
        $("#bublinDefend").show();
        $("#bublinAttack").hide();
        $("#bublinDefHealth").html("Health: " + kingBublin.hp);
        $(".lead").html("FIGHT!");
        $("#attack-btn").click(function() {
            kingBublin.hp = kingBublin.hp - link.ap;
            $("#bublinDefHealth").html("Health: " + kingBublin.hp);
        });
    });
    $("#mikau").click(function () {
        $(this).hide();
        $("#mikauDefend").show();
        $("#mikauAttack").hide();
        $("#mikauDefHealth").html("Health: " + mikau.hp);
        $(".lead").html("FIGHT!");
        $("#attack-btn").click(function() {
            mikau.hp = mikau.hp - link.ap;
            $("#mikauDefHealth").html("Health: " + mikau.hp);
        });
    });
});
$("#sheik").click(function () {
    $(this).hide();
    $("#sheikAttack").show();
    $("#sheikHealth").html("Health: " + sheik.hp);
    $(".lead").html("Select an opponent!");
    $("#attack-btn").show();
    $("#link").click(function () {
        $(this).hide();
        $("#linkDefend").show();
        $("#linkAttack").hide();
        $("#linkDefHealth").html("Health: " + link.hp);
        $(".lead").html("FIGHT!");
        $("#attack-btn").click(function() {
            link.hp = link.hp - sheik.ap;
            $("#linkDefHealth").html("Health: " + link.hp);
        });
    });
    $("#bublin").click(function () {
        $(this).hide();
        $("#bublinDefend").show();
        $("#bublinAttack").hide();
        $("#bublinDefHealth").html("Health: " + kingBublin.hp);
        $(".lead").html("FIGHT!");
        $("#attack-btn").click(function() {
            kingBublin.hp = kingBublin.hp - sheik.ap;
            $("#bublinDefHealth").html("Health: " + kingBublin.hp);
        });
    });
    $("#mikau").click(function () {
        $(this).hide();
        $("#mikauDefend").show();
        $("#mikauAttack").hide();
        $("#mikauDefHealth").html("Health: " + mikau.hp);
        $(".lead").html("FIGHT!");
        $("#attack-btn").click(function() {
            mikau.hp = mikau.hp - sheik.ap;
            $("#mikauDefHealth").html("Health: " + mikau.hp);
        });
    });
});
$("#mikau").click(function () {
    $(this).hide();
    $("#mikauAttack").show();
    $("#mikauHealth").html("Health: " + mikau.hp);
    $(".lead").html("Select an opponent!");
    $("#attack-btn").show();
    $("#sheik").click(function () {
        $(this).hide();
        $("#sheikDefend").show();
        $("#sheikAttack").hide();
        $("#sheikDefHealth").html("Health: " + sheik.hp);
        $(".lead").html("FIGHT!");
        $("#attack-btn").click(function() {
            sheik.hp = sheik.hp - mikau.ap;
            $("#sheikDefHealth").html("Health: " + sheik.hp);
        });
    });
    $("#link").click(function () {
        $(this).hide();
        $("#linkDefend").show();
        $("#linkAttack").hide();
        $("#linkDefHealth").html("Health: " + link.hp);
        $(".lead").html("FIGHT!");
        $("#attack-btn").click(function() {
            link.hp = link.hp - mikau.ap;
            $("#linkDefHealth").html("Health: " + link.hp);
        });
    });
    $("#bublin").click(function () {
        $(this).hide();
        $("#bublinDefend").show();
        $("#bublinAttack").hide();
        $("#bublinDefHealth").html("Health: " + kingBublin.hp);
        $(".lead").html("FIGHT!");
        $("#attack-btn").click(function() {
            kingBublin.hp = kingBublin.hp - mikau.ap;
            $("#bublinDefHealth").html("Health: " + kingBublin.hp);
        });
    });
});
$("#bublin").click(function () {
    $(this).hide();
    $("#bublinAttack").show();
    $("#bublinHealth").html("Health: " + kingBublin.hp);
    $(".lead").html("Select an opponent!");
    $("#attack-btn").show();
    $("#sheik").click(function () {
        $(this).hide();
        $("#sheikDefend").show();
        $("#sheikAttack").hide();
        $("#sheikDefHealth").html("Health: " + sheik.hp);
        $(".lead").html("FIGHT!");
        $("#attack-btn").click(function() {
            sheik.hp = sheik.hp - kingBublin.ap;
            $("#sheikDefHealth").html("Health: " + sheik.hp);
        });
    });
    $("#link").click(function () {
        $(this).hide();
        $("#linkDefend").show();
        $("#linkAttack").hide();
        $("#linkDefHealth").html("Health: " + link.hp);
        $(".lead").html("FIGHT!");
        $("#attack-btn").click(function() {
            link.hp = link.hp - kingBublin.ap;
            $("#linkDefHealth").html("Health: " + link.hp);
        });
    });
    $("#mikau").click(function () {
        $(this).hide();
        $("#mikauDefend").show();
        $("#mikauAttack").hide();
        $("#mikauDefHealth").html("Health: " + mikau.hp);
        $(".lead").html("FIGHT!");
        $("#attack-btn").click(function() {
            mikau.hp = mikau.hp - kingBublin.ap;
            $("#mikauDefHealth").html("Health: " + mikau.hp);
        });
    });
});

// assign an attack button feature to subract players attack power form their hp
// when opponent! attacks, subtract their ap from your hp
// if opponent! hp <= 0, select another opponent!
// if your hp <= 0, show text "you lose", reset button appears
// if no opponents left, show text "you win", reset button appears
// assign a reset function to reset button

