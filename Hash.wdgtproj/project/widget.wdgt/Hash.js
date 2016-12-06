function load()
{
    setupParts();
}

function remove()
{}

function hide()
{}

function show()
{}

function sync()
{}

function showBack(event)
{
    var front = document.getElementById( 'front' );
    var back  = document.getElementById( 'back' );
    
    if( window.widget )
    {
        widget.prepareForTransition( 'ToBack' );
    }
    
    front.style.display = 'none';
    back.style.display  = 'block';
    
    if( window.widget )
    {
        setTimeout( 'widget.performTransition();', 0 );
    }
}

function showFront(event)
{
    var front = document.getElementById( 'front' );
    var back  = document.getElementById( 'back' );
    
    if( window.widget )
    {
        widget.prepareForTransition( 'ToFront' );
    }
    
    front.style.display = 'block';
    back.style.display  = 'none';
    
    if( window.widget )
    {
        setTimeout( 'widget.performTransition();', 0 );
    }
}

if ( window.widget ) {
    
    widget.onremove = remove;
    widget.onhide   = hide;
    widget.onshow   = show;
    widget.onsync   = sync;
}

function hashInput( event )
{
    var textField  = document.getElementById( 'textInput' );
	var hashMethod = document.getElementById( 'hashMethod' ).object.getSelectedIndex();
    
    switch( hashMethod )
    {
        case 1:
            
            textField.value = SHA1( textField.value );
            break;
        
        case 2:
            
            textField.value = SHA256( textField.value );
            break;
        
        case 3:
            
            textField.value = crc32( textField.value );
            break;
        
        case 4:
            
            textField.value = Base64.encode( textField.value );
            break;
        
        case 5:
            
            textField.value = Base64.decode( textField.value );
            break;
        
        case 6:
            
            textField.value = Url.encode( textField.value );
            break;
        
        case 7:
            
            textField.value = Url.decode( textField.value );
            break;
        
        default:
            
            textField.value = MD5( textField.value );
            break;
    }
    
    textField.focus();
    textField.select();
}


function clearInput( event )
{
    var textField   = document.getElementById( 'textInput' );
    textField.value = '';
}


function websiteEosgarden( event )
{
    widget.openURL( 'http://www.eosgarden.com/' );
}


function websiteWebtoolkit( event )
{
    widget.openURL( 'http://www.webtoolkit.info/' );
}


function textInputKeyDown( event )
{
    if( event.keyCode == 13 )
    {
        hashInput();
    }
}
