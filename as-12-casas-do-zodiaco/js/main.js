function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const desc = document.querySelector('p')
    
    if(valor=="gemeos"){
        texto.innerHTML = "gemeos";
        desc.innerHTML = " Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena. O cavaleiro de gêmeos possuía um irmão gêmeo chamado Kanon, que propôs que eles matassem Athena e comandassem o mundo.";
        imagem.setAttribute("src","gemeos.png");
        imagem.setAttribute("width","300px");
        
    }

    else if(valor=="escorpiao"){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","escorpiao.png");
        imagem.setAttribute("width","300px");
        desc.innerHTML = "Milo de Escorpião";
    }
    
    else if(valor=="peixes"){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","peixes.png");
        imagem.setAttribute("width","300px");
        desc.innerHTML = "Afrodite de Peixes";
    }

    else if(valor=="aries"){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","aries.png");
        imagem.setAttribute("width","300px");
        desc.innerHTML = "Mu ";
    }

    else if(valor=="touro"){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","touro.png");
        imagem.setAttribute("width","300px");
        desc.innerHTML = "Aldebaran de Touro ";
    }

    else if(valor=="aquario"){
        texto.innerHTML = "Aquario";
        imagem.setAttribute("src","aquario.png");
        imagem.setAttribute("width","300px");
        desc.innerHTML = "Camus ";
    }

    else if(valor=="cancer"){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","cancer.png");
        imagem.setAttribute("width","300px");
        desc.innerHTML = "Máscara da Morte de Câncer        ";
    }

    else if(valor=="leao"){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","leao.png");
        imagem.setAttribute("width","300px");
        desc.innerHTML = "Aiolia";
    }

    else if(valor=="virgem"){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","virgem.png");
        imagem.setAttribute("width","300px");
        desc.innerHTML = "Shaka de Virgem ";
    }

    else if(valor=="libra"){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","libra.png");
        imagem.setAttribute("width","300px");
        desc.innerHTML = "Dohko de Libra  ";
    }

    else if(valor=="sagitario"){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","sargitario.png");
        imagem.setAttribute("width","300px");
        desc.innerHTML = "Aiolos de Sagitário";
    }

    else if(valor=="capricornio"){
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src","capricornio.png");
        imagem.setAttribute("width","300px");
        desc.innerHTML = "Shura ";
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}