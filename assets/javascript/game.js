// Define variables (hp, ap, and counter attack power)
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

// Set characters as objects
var link = {hp: 100, ap: 8, counterAttackPower: 10};
var sheik = {hp: 120, ap: 10, counterAttackPower: 8};
var mikau = {hp: 80, ap: 7, counterAttackPower: 10};
var kingBublin = {hp: 130, ap: 10, counterAttackPower: 11};
// In the objects (characters), assign values to the hp and ap vars
// For objects, assign "on click animation" to move that character to the battle area.
    $("#link").click(function() {
        $(this).hide();
        $("#linkAttack").show();
        $(".lead").html("Select an opponent");
        $("#sheik").click(function() {
            $(this).hide();
            $("#sheikDefend").show();
            $("#sheikAttack").hide();
            $(".lead").html("FIGHT!");
        });
        $("#bublin").click(function() {
            $(this).hide();
            $("#bublinDefend").show();
            $("#bublinAttack").hide();
            $(".lead").html("FIGHT!");
        });
        $("#mikau").click(function() {
            $(this).hide();
            $("#mikauDefend").show();
            $("#mikauAttack").hide();
            $(".lead").html("FIGHT!");
        });
        $("#attack-btn").show();
    });
    $("#sheik").click(function() {
        $(this).hide();
        $("#sheikAttack").show();
        $(".lead").html("Select an opponent");
        $("#link").click(function() {
            $(this).hide();
            $("#linkDefend").show();
            $("#linkAttack").hide();
            $(".lead").html("FIGHT!");
        });
        $("#bublin").click(function() {
            $(this).hide();
            $("#bublinDefend").show();
            $("#bublinAttack").hide();
            $(".lead").html("FIGHT!");
        });
        $("#mikau").click(function() {
            $(this).hide();
            $("#mikauDefend").show();
            $("#mikauAttack").hide();
            $(".lead").html("FIGHT!");
        });
        $("#attack-btn").show();
    });
    $("#mikau").click(function() {
        $(this).hide();
        $("#mikauAttack").show();
        $(".lead").html("Select an opponent");
        $("#sheik").click(function() {
            $(this).hide();
            $("#sheikDefend").show();
            $("#sheikAttack").hide();
            $(".lead").html("FIGHT!");
        });
        $("#link").click(function() {
            $(this).hide();
            $("#linkDefend").show();
            $("#linkAttack").hide();
            $(".lead").html("FIGHT!");
        });
        $("#bublin").click(function() {
            $(this).hide();
            $("#bublinDefend").show();
            $("#bublinAttack").hide();
            $(".lead").html("FIGHT!");
        });
        $("#attack-btn").show();
    });
    $("#bublin").click(function() {
        $(this).hide();
        $("#bublinAttack").show();
        $(".lead").html("Select an opponent");
        $("#sheik").click(function() {
            $(this).hide();
            $("#sheikDefend").show();
            $("#sheikAttack").hide();
            $(".lead").html("FIGHT!");
        });
        $("#link").click(function() {
            $(this).hide();
            $("#linkDefend").show();
            $("#linkAttack").hide();
            $(".lead").html("FIGHT!");
        });
        $("#mikau").click(function() {
            $(this).hide();
            $("#mikauDefend").show();
            $("#mikauAttack").hide();
            $(".lead").html("FIGHT!");
        });
        $("#attack-btn").show();
    });

// assign an attack button feature to subract players attack power form their hp
// when opponent attacks, subtract their ap from your hp
// if opponent hp <= 0, select another opponent
// if your hp <= 0, show text "you lose", reset button appears
// if no opponents left, show text "you win", reset button appears
// assign a reset function to reset button

