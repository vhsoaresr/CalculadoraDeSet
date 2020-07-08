$(document).ready(function () {
	$().ready(function () {
		$sidebar = $('.sidebar');
		$navbar = $('.navbar');
		$main_panel = $('.main-panel');
		$full_page = $('.full-page');
		$sidebar_responsive = $('body > .navbar-collapse');
		sidebar_mini_active = true;
		white_color = false;
		window_width = $(window).width();
		$('.switch-sidebar-mini input').on("switchChange.bootstrapSwitch", function () {
			if (sidebar_mini_active == true) {
				$('body').removeClass('sidebar-mini');
				sidebar_mini_active = false;
				blackDashboard.showSidebarMessage('Sidebar mini deactivated...');
			} else {
				$('body').addClass('sidebar-mini');
				sidebar_mini_active = true;
				blackDashboard.showSidebarMessage('Sidebar mini activated...');
			}

			// we simulate the window Resize so the charts will get updated in realtime.
			var simulateWindowResize = setInterval(function () {
				window.dispatchEvent(new Event('resize'));
			}, 180);

			// we stop the simulation of Window Resize after the animations are completed
			setTimeout(function () {
				clearInterval(simulateWindowResize);
			}, 1000);
		});
	});
});