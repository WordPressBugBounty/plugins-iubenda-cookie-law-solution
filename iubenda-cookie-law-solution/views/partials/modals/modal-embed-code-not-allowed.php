<?php
/**
 * Embed code not allowed - global - partial modal page.
 *
 * Shown when the save was refused because the current user cannot post
 * unfiltered HTML. The message is filled in from the server response, so the
 * text below is only the fallback when the response carries none.
 *
 * @package  Iubenda
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div id="modal-embed-code-not-allowed" class="modal" style="z-index: 999999 !important;">
	<div class="iub-modal__window iub-modal__window--md p-4 p-lg-5">
		<div class="modalSync">
			<img class="ml-4" src="<?php echo esc_url( IUBENDA_PLUGIN_URL ); ?>/assets/images/modals/modal_no_website_found.svg" alt="" />
			<h1 class="text-lg">
				<?php echo wp_kses_post( ( __( 'Ooops! <br> The embed code was not saved.', 'iubenda' ) ) ); ?>
			</h1>
			<p class="mb-4" id="modal-embed-code-not-allowed-message"><?php esc_html_e( 'You are not allowed to add or edit the embed code on this site. Please ask an administrator who can post unfiltered HTML to do it.', 'iubenda' ); ?></p>

			<button class="btn btn-gray-lighter btn-block btn-sm mb-3 iub-hide-modal" data-modal-name="#modal-embed-code-not-allowed" href="javascript:void(0)"><?php esc_html_e( 'Close', 'iubenda' ); ?></button>
		</div>
	</div>
</div>
