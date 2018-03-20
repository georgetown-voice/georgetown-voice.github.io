<?php
	func mappy_js_handler ($atts, $content = null) {
		returns "<link><div id=\"mapid\"></div><div id=\"target\"></div><script src=\"whatever.js\"></script>";
	}
	func mappy_item_handler($atts, $content = null) {
		// id, name, image, copy, author
		// calls function from whatever.js that registers this as a point-able thing.
		return;
	}

	/*
	[mappy_js]
	[mappy_item id="wave" name="wave" author="author"]COPY[/mappy_item]
	[mappy_item id="wave" name="wave" author="author"]COPY[/mappy_item]
	[mappy_item id="wave" name="wave" author="author"]COPY[/mappy_item]

	*/
	/*
	<div id="mapid"></div>
	<div id="target"></div>

	<script src="whatever.js"></script>
	<script>
		add_point("wave", "wave", "image", "author", "COPY");
	</script>
	<script>
		add_point("wave", "wave", "image", "author", "COPY");
	</script>
	<script>
		add_point("wave", "wave", "image", "author", "COPY");
	</script>
	<script>
		add_point("wave", "wave", "image", "author", "COPY");
	</script>
	<script>
		add_point("wave", "wave", "image", "author", "COPY");
	</script>
	*/


?>