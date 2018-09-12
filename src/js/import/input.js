
// input:focus + label
$('input').focus(function() {
  $(this).next().css({'transform': 'translate(-10px, -50px)  scale(0.85)'});
});
$('input').blur(function() {
  if($(this).val() === '') {
    $(this).next().css({'transform': 'translate(0, -10px) scale(1)'});
  }
});


// textarea:focus + label
$('textarea').focus(function() {
  $(this).next().css({'transform': 'translate(-20px, -50px)  scale(0.85)'});
});
$('textarea').blur(function() {
  if($(this).val() === '') {
    $(this).next().css({'transform': 'translate(0, -10px) scale(1)'});
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

