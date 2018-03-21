<?php
	function initialize_mappy ($atts) {
		
		$a = shortcode_atts( array(
			'lat' => 'LAT HERE',
			'long' => 'LONG HERE',
			'zoom' => '13'
		), $atts );
		
		ob_start();
		?>
		<link rel="stylesheet" type="text/css" href="mappyStyle.css">
		<script src="mappy.js" type="text/javascript"></script>
		<div id="mapid"></div>
		<div id="target"></div>
		<?php
		return ob_get_clean();

	}
	add_shortcode( 'initialize mappy', 'initialize_mappy' );
	
	function mappy_item_handler($atts, $content = null) {
		
		$a = shortcode_atts( array(
			'id' => 'McLovin',
			'title' => 'Super Bad',
			'image_address' => 'https://www.ebay.com/itm/McLovin-Superbad-Movie-Joke-ID-0A-/262482881654',
			'author' => 'Seth Rogan',
			'lat' => 'LAT HERE',
			'long' => 'LONG HERE'
		), $atts);

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