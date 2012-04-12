( function( $ ) {
	$(document).ready( function() {
		$('#debug-menu-target-DS_Debug_Bar_Transients pre').click( function() {
			$(this).toggleClass('open');
		})

		$('#debug-menu-target-DS_Debug_Bar_Transients .switch-value a').click( function( e ) {
			$(this).parents('td').next('td').toggleClass('un');
			e.preventDefault();
		})

		$('#debug-menu-target-DS_Debug_Bar_Transients a.delete').click( function( e ) {
			t = $(this);
			data = {
				'action' : 'ds_delete_transient',
				'transient-type' : t.data( 'transient-type' ),
				'transient-name' : t.data( 'transient-name' ),
				'_ajax_nonce' : $('#debug-menu-target-DS_Debug_Bar_Transients #_wpnonce').val()
			};
			$.post(
				ajaxurl,
				data,
				function( r ) {
					if ( r == '1' ) {
						console.debug(t.parents('tr'));
						t.parents('tr').css( 'backgroundColor', '#faa' ).fadeOut( 350, function() {
							$(this).remove();
						} );
					}
				}
			);
			e.preventDefault();
		} );
	} );
} )( jQuery );
