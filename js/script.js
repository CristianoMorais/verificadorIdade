function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro] Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
            if (fsex[0].checked){
                    genero = 'Homem'
                    if(idade >=0 && idade < 10){
                        //criança
                        img.setAttribute('src', 'imagens/foto-bebe-m.jpg')
                    }else if (idade < 21){
                        //Adolescente
                        img.setAttribute('src', 'imagens/foto-adolescente-m.jpg')
                    }else if (idade < 50){
                        //jovem
                        img.setAttribute('src', 'imagens/foto-adulto-m.jpg')
                    }else{
                        //idoso
                        img.setAttribute('src', 'imagens/foto-idoso-m.jpg')
                    }
                }else if (fsex[1].checked){
                    genero = 'Mulher'
                    if(idade >=0 && idade < 10){
                        //criança
                        img.setAttribute('src', 'imagens/foto-bebe-f.jpg')
                    }else if (idade < 21){
                        //Adolescente
                        img.setAttribute('src', 'imagens/foto-adolescente-f.jpg')
                    }else if (idade < 50){
                        //jovem
                        img.setAttribute('src', 'imagens/foto-adulto-f.jpg')
                    }else{
                        //idoso
                        img.setAttribute('src', 'imagens/foto-idosa-f.jpg')
                    }
                }
                    res.style.textAlign = 'center'
                    res.innerHTML=`Detectamos ${genero} com ${idade} anos`
                    res.appendChild(img)
                    
                    
                }
    }
