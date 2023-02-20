function liguagens(valor){
    let imagem = document.getElementById("ling-img")
    let desc = document.getElementById("ling-descricao")
    if(valor == "html"){
       imagem.src ='imagens/html-5.png'
       imagem.alt ='html-5'
       desc.innerHTML = 'Conteudo HTML'
    }else if(valor == "css"){
        imagem.src ='imagens/css.png' 
        imagem.alt ='css-3'
        desc.innerHTML = 'Conteudo CSS'  
    }else if(valor == "js"){
        imagem.src ='imagens/js.png'
        imagem.alt ='java script'
        desc.innerHTML = 'Conteudo JavaScript'
    }else if(valor == "c"){
        imagem.src ='imagens/letra-c.png'
        imagem.alt ='Linguagem C'
        desc.innerHTML = 'Conteudo Linguagem C'
    }else if(valor == "sql"){
        imagem.src ='imagens/servidor-sql.png'
        imagem.alt ='Banco de Dados SQL'
        desc.innerHTML = 'Conteudo Banco de dados SQL'
    }else if(valor == "python"){
        imagem.src ='imagens/python.png'
        imagem.alt ='Python'
        desc.innerHTML ='Conteudo Python'
    }else if(valor == "java"){
        imagem.src ='imagens/java.png'
        imagem.alt = 'Java/Android'
        desc.innerHTML = 'Conteudo em Java'
    }else{
        imagem.src = 'imagens/seta-para-cima.png'
        imagem.alt = 'Seta para cima'
        desc.innerHTML = 'Por gentiliza, selecione uma opção acima para  <strong>descobrir mais </strong>conteúdo.'
    }
} 