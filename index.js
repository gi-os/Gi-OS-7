$(".appboxmusic").click(function() {
	$('div[class^="appboxwiki"]').css("z-index", "0");
	$('div[class^="appboxwiki"]').animate({ opacity: 0.8 });
	$('div[class^="appboxwiki"]').addClass("blur");
	$('div[class^="appboxwrite"]').css("z-index", "0");
	$('div[class^="appboxwrite"]').animate({ opacity: 0.8 });
	$('div[class^="appboxwrite"]').addClass("blur");
	$('div[class^="appboxnote"]').css("z-index", "0");
	$('div[class^="appboxnote"]').animate({ opacity: 0.8 });
	$('div[class^="appboxnote"]').addClass("blur");
	$(this).removeClass("blur");
	$(this).css("z-index", "10");
	$(this).animate({ opacity: 1 });
});

$(".appboxwiki").click(function() {
	$('div[class^="appboxmusic"]').css("z-index", "0");
	$('div[class^="appboxmusic"]').animate({ opacity: 0.8 });
	$('div[class^="appboxmusic"]').addClass("blur");
	$('div[class^="appboxwrite"]').css("z-index", "0");
	$('div[class^="appboxwrite"]').animate({ opacity: 0.8 });
	$('div[class^="appboxwrite"]').addClass("blur");
	$('div[class^="appboxnote"]').css("z-index", "0");
	$('div[class^="appboxnote"]').animate({ opacity: 0.8 });
	$('div[class^="appboxnote"]').addClass("blur");
	$(this).removeClass("blur");
	$(this).css("z-index", "10");
	$(this).animate({ opacity: 1 });
});

$(".appboxwrite").click(function() {
	$('div[class^="appboxmusic"]').css("z-index", "0");
	$('div[class^="appboxmusic"]').animate({ opacity: 0.8 });
	$('div[class^="appboxmusic"]').addClass("blur");
	$('div[class^="appboxwiki"]').css("z-index", "0");
	$('div[class^="appboxwiki"]').animate({ opacity: 0.8 });
	$('div[class^="appboxwiki"]').addClass("blur");
	$('div[class^="appboxnote"]').css("z-index", "0");
	$('div[class^="appboxnote"]').animate({ opacity: 0.8 });
	$('div[class^="appboxnote"]').addClass("blur");
	$(this).removeClass("blur");
	$(this).css("z-index", "10");
	$(this).animate({ opacity: 1 });
});
$(".appboxnote").click(function() {
	$('div[class^="appboxmusic"]').css("z-index", "0");
	$('div[class^="appboxmusic"]').animate({ opacity: 0.8 });
	$('div[class^="appboxmusic"]').addClass("blur");
	$('div[class^="appboxwiki"]').css("z-index", "0");
	$('div[class^="appboxwiki"]').animate({ opacity: 0.8 });
	$('div[class^="appboxwrite"]').addClass("blur");
	$('div[class^="appboxwrite"]').css("z-index", "0");
	$('div[class^="appboxwrite"]').animate({ opacity: 0.8 });
	$('div[class^="appboxwrite"]').addClass("blur");
	$(this).removeClass("blur");
	$(this).css("z-index", "10");
	$(this).animate({ opacity: 1 });
});
$(function() {
	$("#draggablemusic").draggable({
		start: function() {
			$(".frameOverlay").fadeIn("fast");
		},
		stop: function() {
			$(".frameOverlay").fadeOut("fast");
		}
	});
});
$(function() {
	$("#draggablenote").draggable({
		start: function() {
			$(".frameOverlay").fadeIn("fast");
		},
		stop: function() {
			$(".frameOverlay").fadeOut("fast");
		}
	});
});
(function() {
	$("#draggablenote").draggable({
		start: function() {
			$(".frameOverlay").fadeIn("fast");
		},
		stop: function() {
			$(".frameOverlay").fadeOut("fast");
		}
	});
});
(function() {
	$("#draggablewiki").draggable({
		start: function() {
			$(".frameOverlay").fadeIn("fast");
		},
		stop: function() {
			$(".frameOverlay").fadeOut("fast");
		}
	});
});

window.setTimeout(function() {
	$(".blurlaunch").addClass("open");
}, 700);
