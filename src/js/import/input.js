
// input:focus + label
$('input').focus(function() {
  $(this).closest('.form-parent').find('label').css(
    {
      'transform': 'translate(-10px, -50px)',
      'font-size': '20px'
    }
  );
});
$('input').blur(function() {
  if($(this).val() === '') {
    $(this).closest('.form-parent').find('label').css(
      {
        'transform': 'translate(0, -10px)',
        'font-size': '30px'
      }
    );
  }
});


// textarea:focus + label
$('textarea').focus(function() {
  $(this).closest('.form-parent').find('label').css(
    {
      'transform': 'translate(-10px, -50px)',
      'font-size': '20px'
    }
  );
});
$('textarea').blur(function() {
  if($(this).val() === '') {
    $(this).closest('.form-parent').find('label').css(
      {
        'transform': 'translate(0, -10px)',
        'font-size': '30px'
      }
    );
  }
});

$('#checkbox').on('change', function() {
  let label = $(this).closest('.form__checkbox').find('label');

  if ($(this).is(':checked')) {
    console.log('checekd');
    label.addClass('active');
  } else{
    label.removeClass('active');
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

