function linguagens(valor){
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

const el = document.querySelector("#ads")   // Seletor
const text = "< Estudante ADS >" // Texto inserido
const interval = 200    // Intervalo
const bar = document.querySelector("#bar")


function showText(el,text,interval,bar,pos){ //Função que puxa as constantes

  

    const char = text.split("").reverse();  // Coloca o texto de cima para baixo e inverte a ordem
    
    const typer = setInterval(() => {   //Criar um intervalor e mostrar o texto

        if(!char.length ){
            return clearInterval(typer);
        }
        

        const next = char.pop(); // Pega o ultimo elemento e atribui

        el.innerHTML += next; // Coloca o valor no p
        
       
    },interval)

    
   
}

showText(el,text,interval)



    

    


