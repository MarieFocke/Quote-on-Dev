<?php
/**
 * Template part for displaying posts.
 *
 * @package QOD_Starter_Theme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="entry-content">
		<?php the_excerpt(); ?>
	</div>
	<div class="entry-meta">
		<?php the_title( sprintf( '<h2 class="entry-title">&#8211;', esc_url( get_permalink() ) ), '</h2>' ); ?>
		<span class="source"> </span>
	</div><!-- .entry-content -->
</article><!-- #post-## -->
