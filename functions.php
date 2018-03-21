<?php
	
	function initialize_scripts() {
		wp_register_style('mappy_style', mappyStyle.css);
		wp_register_script('mappy', mappy.js, array(), null, true);
   }
   add_action('wp_enqueue_scripts','initialize_scripts');
	
	function initialize_mappy ($atts) {
		
		$a = shortcode_atts( array(
			'lat' => 'LAT HERE',
			'long' => 'LONG HERE',
			'zoom' => '13'
		), $atts );

		wp_enqueue_style('mappy_style');
		wp_enqueue_script('mappy');
		wp_localize_script('mappy', 'initialize_attribute_handler', $a);
		
		ob_start();
		?>
		<link rel="stylesheet" type="text/css" href="mappy_style.css">
		<script src="mappy.js" type="text/javascript"></script>
		<div id="mapid"></div>
		<div id="target"></div>
		<?php
		return ob_get_clean();

	}
	add_shortcode( 'initialize mappy', 'initialize_mappy' );
	
	function add_mappy_marker($atts, $content = null) {
		
		$a = shortcode_atts( array(
			'id' => 'McLovin',
			'title' => 'Super Bad',
			'image_address' => 'https://www.ebay.com/itm/McLovin-Superbad-Movie-Joke-ID-0A-/262482881654',
			'author' => 'Seth Rogan',
			'lat' => 'LAT HERE',
			'long' => 'LONG HERE'
		), $atts);

		$a['copy'] = $content;

		wp_enqueue_style('mappy_style');
		wp_enqueue_script('mappy');
		wp_localize_script('mappy', 'marker_attribute_handler', $a);
		
		ob_start();
		?>
		<script type="text/javascript">
		let marker_attribute_handler.id = new map_pin(marker_attribute_handler.title, marker_attribute_handler.author, 
			marker_attribute_handler.image_address, marker_attribute_handler.lat, marker_attribute_handler.long, 
			marker_attribute_handler.copy);
		</script>
		<?php
		return ob_get_clean();
	}
	add_shortcode('add mappy marker', 'add_mappy_marker' );

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