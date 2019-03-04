<?php /* Template Name: Submit Template */ 
get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>
            <form clas="container">
                <label class="author">Author of Quote</label>
                <br>
                <input id="author" type="text" name="autor">
                <br>
                <label class="quote">Quote</label>
                <br>
                <textarea id="quote-content" type="text"></textarea>
                <br>
                <label class="find">Where did you find this quote(e.g.bookname)</label>
                <br>
                <input id="source" type="text" name="find">
                <br>
                <label class="source">Provide the URL of the quote source. If available.</label>
                <br>
                <input id="url" type="text" name="source">
                <br>
                <button id="submit" type="submit" name="submit" class="submit">Submit Quote</button>
            </form>

			<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
