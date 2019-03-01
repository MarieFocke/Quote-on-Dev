<?php
/**
 * The template for displaying all pages.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

            <?php while ( have_posts() ) : the_post(); ?>
            <header class="entry-header">
		        <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	        </header><!-- .entry-header -->
            <div class="authors">
                <h2>Quotes Authors</h2>
                <!-- https://codex.wordpress.org/Template_Tags/get_posts -->
                <ul>
                    <?php
                    global $post;
                    $args = array( 'posts_per_page' => -1, 'post_type' => 'post', 'post_status'=> 'publish' );

                    $myposts = get_posts( $args );
                    foreach ( $myposts as $post ) : setup_postdata( $post ); ?>
                        <li>
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </li>
                    <?php endforeach; wp_reset_postdata();?>
                </ul>
            </div>
            <div class="categories">
                <!-- https://developer.wordpress.org/reference/functions/wp_list_categories/ -->
                <h2>Categories</h2>
                <ul>
                    <?php
                        wp_list_categories( array( 'title_li' =>'', 'taxonomy'=> 'category', )
                    );?>
                </ul>
            </div>
            <div class="tags">
                <!-- https://codex.wordpress.org/Function_Reference/get_tags -->
                <h2>Tags</h2>
                <ul>
                <?php if ( function_exists( 'wp_tag_cloud' ) ) : ?>
                    <li>
                        <?php wp_tag_cloud( 'smallest=8&largest=22' ); ?>
                    </li>
                    <?php endif; ?>
                </ul>
            </div>

			<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
