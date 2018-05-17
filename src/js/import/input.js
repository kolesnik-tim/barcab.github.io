
// input:focus + label
$('input').focus(function() {
  $(this).next().css({'font-size': '18px', 'transform': 'translateY(-50px)'});
});
$('input').blur(function() {
  if($(this).val() === '') {
    $(this).next().css({'font-size': '30px', 'transform': 'translateY(-10px)' });
  }
});


// textarea:focus + label
$('textarea').focus(function() {
  $(this).next().css({'font-size': '18px', 'transform': 'translateY(-40px)'});
});
$('textarea').blur(function() {
  if($(this).val() === '') {
    $(this).next().css({'font-size': '30px', 'transform': 'translateY(-10px)' });
  }
});


// input[typu='file']
var wrapper = $( '.form__line__file' ),
  inp = wrapper.find( 'input' ),
  lbl = wrapper.find( 'label' ),
  file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;
inp.change(function() {
  var file_name;
  if( file_api && inp[ 0 ].files[ 0 ] )
    file_name = inp[ 0 ].files[ 0 ].name;
  else
    file_name = inp.val().replace( 'C:\\fakepath\\', '' );

  if( ! file_name.length )
    return;

  if( lbl.is( ':visible' ) ) {
    lbl.text( file_name );
  }
}).change();

