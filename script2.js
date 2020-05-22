$(function iniciar() {
    setInterval(() => {
        tempo()
    }, 1000);
})

function tempo() {
    var $msg = $('#msg')
    var $img = $('#imagem')
    var $body = $('body')
    var data = new Date()
    var hora = `${data.getHours()}`.padStart(2, '0')
    var min = `${data.getMinutes()}`.padStart(2, '0')
    var seg = `${data.getSeconds()}`.padStart(2, '0')
    $msg.html(`Agora são ${hora}:${min}:${seg}.`)
    
    if (hora < 12) {
        //BOM DIA!
        $img.attr('src', 'amanhecer-redonda.png')
        $body.css({ background: '#EEE8AA' })
    } else if (hora < 18) {
        //BOA TARDE!
        $img.attr('src', 'entardecer-redonda.png')
        $body.css({ background: '#FFA07A' })
    } else { 
        //BOA NOITE!
        $img.attr('src', 'anoitecer-redonda.png')
        $body.css({ background: '#515154' })
    }
}