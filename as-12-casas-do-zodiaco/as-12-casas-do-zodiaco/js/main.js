
function MudaDesenho(){
    const texto = document.querySelector("h1");
    const texto2 = document.querySelector("h2");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    
    if((valor=="Áries") || (valor=="Aries") || (valor=="aries") || (valor=="áries") ){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","aries.png");
        imagem.setAttribute("width","800px");
        texto2.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. Como desde cedo desconfiava do Grande Mestre, deu as costas ao Santuário.";
    }

    else if((valor=="Touro") || (valor=="touro")){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","touro.png");
        imagem.setAttribute("width","800px");
        texto2.innerHTML = "Aldebaran é o Cavaleiro de Ouro da Constelação de Touro durante os eventos do Século XX, servindo como o guardião da Casa de Touro no Santuário. Dotado de uma resistência fora do comum, também tem uma grande força física e uma agilidade impressionante para alguém de seu porte.";
    }

    else if((valor=="Gêmeos") || (valor=="Gemeos") || (valor=="gêmeos") || (valor=="gemeos")){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","gemeos.png");
        imagem.setAttribute("width","800px");
        texto2.innerHTML = "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena. O cavaleiro de gêmeos possuía um irmão gêmeo chamado Kanon, que propôs que eles matassem Athena e comandassem o mundo.";
    }

    else if((valor=="Câncer") || (valor=="Cancer") || (valor=="câncer") || (valor=="cancer")){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","cancer.png");
        imagem.setAttribute("width","800px");
        texto2.innerHTML = "Máscara da Morte de Câncer é o Cavaleiro de Ouro de Câncer e protetor da quarta Casa do Zodíaco do século XX. Adora lutas, matança e acredita que, para um objetivo maior, alguns sacrifícios são inevitáveis.";
    }

    else if((valor=="Leão") || (valor=="Leao") || (valor=="leão") || (valor=="leao")){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","leao.png");
        imagem.setAttribute("width","800px");
        texto2.innerHTML = "Aiolia de Leão é um cavaleiro de ouro do seculo XX que renasce em Asgard após sua morte no Muro da Lamentações. Ele é o protagonista de Soul of Gold.";
    }

    else if((valor=="Virgem") || (valor=="virgem")){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","virgem.png");
        imagem.setAttribute("width","500px");
        texto2.innerHTML = "Shaka de Virgem está entre os Cavaleiros de Ouro mais populares de Os Cavaleiros do Zodíaco. Conhecido como o Homem Mais Próximo de Deus, ele possui o maior cosmo dentre os 88 Cavaleiros de Atena e se mostrou fundamental para o triunfo dos heróis na Saga de Hades.";
    }
    
    else if((valor=="Libra") || (valor=="libra")){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","libra.png");
        imagem.setAttribute("width","800px");
        texto2.innerHTML = "Dohko de Libra fora um lendário e renomado Cavaleiro de Ouro do Santuário de Atena por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries.";
    }

    else if((valor=="Escorpião") || (valor=="Escorpiao") || (valor=="escorpião") || (valor=="escorpiao")){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","escorpiao.png");
        imagem.setAttribute("width","800px");
        texto2.innerHTML = "Miro de Escorpião é um dos personagens principais da série Os Cavaleiros do Zodíaco, criada por Masami Kurumada. É muito poderoso, já que foi capaz de devastar a Ilha de Andrômeda em poucos segundos (no mangá, quem devasta a Ilha de Andrômeda é Afrodite de Peixes).";
    }

    else if((valor=="Sagitário") || (valor=="Sagitario") || (valor=="sagitário") || (valor=="sagitario")){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","sagitario.png");
        imagem.setAttribute("width","800px");
        texto2.innerHTML = "Aiolos de Sagitário é o Cavaleiro de Ouro de Sagitário do século XX. Antes de morrer, há 13 anos, entregou Atena ainda bebê e sua Armadura de Ouro aos cuidados de Mitsumasa Kido, que estava viajando pela Grécia.";
    } 

    else if((valor=="Capricórnio") || (valor=="Capricornio") || (valor=="capricórnio") || (valor=="capricornio")){
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src","capricorniopng.png");
        imagem.setAttribute("width","800px");
        texto2.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos. Seu golpe principal é Excalibur, no qual concentra seu cosmo numa rajada cortante de energia, como uma espada. Este golpe tem uma intensidade concentrada fortíssima, e sai na velocidade da luz.";
    }

    else if((valor=="Aquário") || (valor=="Aquario") || (valor=="aquário") || (valor=="aquario")){
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src","aquario.png");
        imagem.setAttribute("width","800px");
        texto2.innerHTML = "Camus de Aquário é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. foi obrigado a lutar contra Hyoga no Santuário.";
    }

    else if((valor=="Peixes") || (valor=="peixes")){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","peixes.png");
        imagem.setAttribute("width","800px");
        texto2.innerHTML = "Afrodite de Peixes é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. Usa variações de golpes com rosas, como o Rosas Diabólicas Reais. Sua ideia é de que só um poder supremo pode manter a paz e ordem no mundo, mesmo que esse poder provenha do mal. Por isso, mesmo tendo consciência de que o Grande Mestre servia ao mal, acabou obedecendo suas ordens e matando Daidalos, mestre de Shun. Sua atitude pode não ser a mais exemplar para um Cavaleiro, mas seu propósito de manter a paz na Terra é igual ao de qualquer Cavaleiro";
    }

    else if(valor=="Ofiúco"){
        texto.innerHTML = "Ofiúco";
        imagem.setAttribute("src","ofiuco.png");
        imagem.setAttribute("width","800px");
        texto2.innerHTML = "Odisseu  foi um Cavaleiro de Prata da constelação de ophiuchus que devido seu papel como curandeiro era conhecido em todo Santuário de Atena. Devido sua nobreza, aprendizado e sabedoria na medicina, além de seus feitos e atos considerados, ele fora venerado em sua vida como um homem santo por seu trabalho salvando a vidas de seus companheiros e aclamado na morte como uma figura divina por seguir até o fim sua demanda. No entanto, durante a Guerra Santa de Atena contra Hades no Século XVIII, fora proclamado pelas serpentes emissárias que invadiram as Doze Casas que ele ressurgiria como reencarnação do mítico décimo terceiro Cavaleiro de Ouro, Asclépio de Ofiúco, a fim de obter a lealdade dos Cavaleiros de Ouro para dar inicio a vingança de seu ancestral";
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","x.webp");
        imagem.setAttribute("width","500px");
    }
}