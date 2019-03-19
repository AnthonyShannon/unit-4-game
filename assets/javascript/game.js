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
            link.ap = link.ap + 8;
            $("#sheikDefHealth").html("Health: " + sheik.hp);
        if (sheik.hp <= 0) {
            $("#sheikDefend").hide(); 
            sheik.ap = 0;
        } else {
            link.hp = link.hp - sheik.ap;
            $("#linkHealth").html("Health: " + link.hp);
        }
        if (link.hp <= 0) {
            $("#linkHealth").html("LOSER!");
            $("#clear-btn").show();
        }
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
            link.ap = link.ap + 8;
            $("#bublinDefHealth").html("Health: " + kingBublin.hp);
            if (kingBublin.hp <= 0) {
                $("#bublinDefend").hide();
                kingBublin.ap = 0; 
            } else {
                link.hp = link.hp - kingBublin.ap;
                $("#linkHealth").html("Health: " + link.hp);
            }
            if (link.hp <= 0) {
                $("#linkHealth").html("LOSER!");
                $("#clear-btn").show();
            }
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
            link.ap = link.ap + 8;
            $("#mikauDefHealth").html("Health: " + mikau.hp);
            if (mikau.hp <= 0) {
                $("#mikauDefend").hide(); 
                mikau.ap = 0
            } else {
                link.hp = link.hp - mikau.ap;
                $("#linkHealth").html("Health: " + link.hp);
            }
            if (link.hp <= 0) {
                $("#linkHealth").html("LOSER!");
                $("#clear-btn").show();
            }
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
            sheik.ap = sheik.ap + 10;
            $("#linkDefHealth").html("Health: " + link.hp);
            if (link.hp <= 0) {
                $("#linkDefend").hide();
                linkk.ap = 0;
            } else {
                sheik.hp = sheik.hp - link.ap;
                $("#sheikHealth").html("Health: " + sheik.hp);
            }
            if (sheik.hp <= 0) {
                $("#sheikHealth").html("LOSER!");
                $("#clear-btn").show();
            }
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
            sheik.ap = sheik.ap + 10;
            $("#bublinDefHealth").html("Health: " + kingBublin.hp);
            if (kingBublin.hp <= 0) {
                $("#bublinDefend").hide();
                bublin.ap = 0;
            } else {
                sheik.hp = sheik.hp - kingBublin.ap;
                $("#sheikHealth").html("Health: " + sheik.hp);
            }
            if (sheik.hp <= 0) {
                $("#sheikHealth").html("LOSER!");
                $("#clear-btn").show();
            }
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
            sheik.ap = sheik.ap + 10;
            $("#mikauDefHealth").html("Health: " + mikau.hp);
            if (mikau.hp <= 0) {
                $("#mikauDefend").hide();
                mikau.ap = 0;
            } else {
                sheik.hp = sheik.hp - mikau.ap;
                $("#sheikHealth").html("Health: " + sheik.hp);
            }
            if (sheik.hp <= 0) {
                $("#sheikHealth").html("LOSER!");
                $("#clear-btn").show();
            }
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
            mikau.ap = mikau.ap + 7;
            $("#sheikDefHealth").html("Health: " + sheik.hp);
            if (sheik.hp <= 0) {
                $("#sheikDefend").hide(); 
                sheik.ap = 0;
            } else {
                mikau.hp = mikau.hp - sheik.ap;
                $("#mikauHealth").html("Health: " + mikau.hp);
            };
            if (mikau.hp <= 0) {
                $("#mikauHealth").html("LOSER!");
                $("#clear-btn").show();
            }
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
            mikau.ap = mikau.ap + 7;
            $("#linkDefHealth").html("Health: " + link.hp);
            if (link.hp <= 0) {
                $("#linkDefend").hide(); 
                link.ap = 0;
            } else {
                mikau.hp = mikau.hp - link.ap;
                $("#mikauHealth").html("Health: " + mikau.hp);
            };
            if (mikau.hp <= 0) {
                $("#mikauHealth").html("LOSER!");
                $("#clear-btn").show();
            }
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
            mikau.ap = mikau.ap + 7;
            $("#bublinDefHealth").html("Health: " + kingBublin.hp);
            if (kingBublin.hp <= 0) {
                $("#bublinDefend").hide(); 
                kingBublin.ap = 0;
            } else {
                mikau.hp = mikau.hp - kingBublin.ap;
                $("#mikauHealth").html("Health: " + mikau.hp);
            };
            if (mikau.hp <= 0) {
                $("#mikauHealth").html("LOSER!");
                $("#clear-btn").show();
            }
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
            kingBublin.ap = kingBublin.ap + 10;
            $("#sheikDefHealth").html("Health: " + sheik.hp);
            if (sheik.hp <= 0) {
                $("#sheikDefend").hide(); 
                sheik.ap = 0;
            } else {
                kingBublin.hp = kingBublin.hp - sheik.ap;
                $("#bublinHealth").html("Health: " + kingBublin.hp);
            };
            if (kingBublin.hp <= 0) {
                $("#bublinHealth").html("LOSER!");
                $("#clear-btn").show();
            }
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
            kingBublin.ap = kingBublin.ap + 10;
            $("#linkDefHealth").html("Health: " + link.hp);
            if (link.hp <= 0) {
                $("#linkDefend").hide(); 
                link.ap = 0;
            } else {
                kingBublin.hp = kingBublin.hp - link.ap;
                $("#bublinHealth").html("Health: " + kingBublin.hp);
            };
            if (kingBublin.hp <= 0) {
                $("#bublinHealth").html("LOSER!");
                $("#clear-btn").show();
            }
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
            kingBublin.ap = kingBublin.ap + 10;
            $("#mikauDefHealth").html("Health: " + mikau.hp);
            if (mikau.hp <= 0) {
                $("#mikauDefend").hide(); 
                mikau.ap = 0;
            } else {
                kingBublin.hp = kingBublin.hp - mikau.ap;
                $("#bublinHealth").html("Health: " + kingBublin.hp);
            };
            if (kingBublin.hp <= 0) {
                $("#bublinHealth").html("LOSER!");
                $("#clear-btn").show();
            }
        });
    });
});



// assign an attack button feature to subract players attack power form their hp
// when opponent! attacks, subtract their ap from your hp
// if opponent! hp <= 0, hide and select another opponent!
// if your hp <= 0, show text "you lose", reset button appears
// if no opponents left, show text "you win", reset button appears
// assign a reset function to reset button

