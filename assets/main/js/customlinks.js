(function(win, $){
	win.ak = win.ak || {};
	var ak = win.ak;

	$(document).ready(function(){
		ak.privacy();
	});

	var getSideBarLinks = function(){
		var links = [];

		$('ul.links>li>a').each(function(){
			var $this = $(this);
			if($this.text().startsWith('###')){
				$this.text($this.text().replace('###', ''));
				links.push('<li class="dropdown">' + $this.parent().html() + '</li>');
				$this.parent().hide();
			}
		});

		return '<ul id="navigation">' + links.join("") + '</ul>';
	};

	ak.privacy = function(){
		var siteFooterHtml = getSideBarLinks();

		$('#sidebar .inner').append(siteFooterHtml);
	};
})(window, window.jQuery)
