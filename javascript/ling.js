function linguagens(valor){
    let imagem = document.getElementById("ling-img")
    let desc = document.getElementById("ling-descricao")
    
     
    if(valor == "html"){
       imagem.src ='imagens/html-5.png'
       imagem.alt ='html-5'
       
       desc.innerHTML = 'Dentro da linguagem <strong>HTML 5</strong> ja realizei alguns projetos academicos, como criar um site para um <strong>Zoologico</strong> e um site para uma <strong>academia</strong>; durante esses projetos aprendir como utilizar a linguagem não somente para a criação de <strong>websites</strong>, mas também tendo um significado semantico correto.'
    
      
    }else if(valor == "css"){
        imagem.src ='imagens/css.png' 
        imagem.alt ='css-3'
        desc.innerHTML = 'Dentro da linguagem <strong>CSS</strong> aprendir como estilizar sites, tendo elementos de: <strong> animação , gradientes , background ... </strong> Esses conhecimento foram desenvolvidos durante a faculdade  e visualizando videos-aulas.<br> Atualmente estou aperfeiçoando minhas habilidade para melhorar a resposividade dos meus <strong>sites</strong>.  '

    }else if(valor == "js"){
        imagem.src ='imagens/js.png'
        imagem.alt ='java script'
        
        desc.innerHTML = 'Minhas habilidades dentro do <strong>JavaScript</strong> estando sendo desenvolvidas em video aulas, alguns conceitos como <strong>Logica de programação </strong> contantimente tenho me aperfeiçoado, além de ter realizado projetos como:  <strong>Verificação de login, Validação de cadastro, Calculadora </strong>; dentro do habiente acâdemico. '
    }else if(valor == "c"){
        imagem.src ='imagens/letra-c.png'
        imagem.alt ='Linguagem C'
        desc.innerHTML = 'Atualmente estou tendo aulas de Praticas profissionais utilizando <strong>Linguagem C </strong>, dentro dessa diciplina estou aprendendo funcionalidades dessa linguagem e logica de programação, alguns programas desenvolvidos podem ser visualizados <a href="https://github.com/EversonHenr1/exec_Ling_C" target="_blank">aqui</a>'
    }else if(valor == "sql"){
        imagem.src ='imagens/servidor-sql.png'
        imagem.alt ='Banco de Dados SQL'
        desc.innerHTML = 'Durante dois meses estudei a funcionalidade e modelagem de <strong>banco de Dados em SQL</strong>; e com esse conhecimento desenvolvi um banco de dados para um site da academia e a modelagem de um banco de dados para o zoologico de guarulhos. '
    }else if(valor == "xml"){
        imagem.src ='imagens/xml.png'
        imagem.alt ='xml'
        desc.innerHTML ='Com <strong>Xml</strong> desenvolvi um layout inteiro de uma aplicação movel que pode ser visualizada <a href="https://github.com/EversonHenr1/Multiplica target="_blank"">aqui</a>.<br> utilizando <strong>Android Studio </strong> aprendir conceitos de layout, drawable, Fragments.'
    }else if(valor == "java"){
        imagem.src ='imagens/java.png'
        imagem.alt = 'Java/Android'
        desc.innerHTML = 'Utilizando <strong>Java (android)</strong> estou densenvolvendo um applicativo de fincanças, como um projeto academico.<br>ainda estou aprendendo como funciona todas as funcionalidades dessa linguagem utilizando <strong>Android Studio</strong>;<br> alem de estar descobrindo novos metodos como : <strong>Gerenciamento de Projetos, Metodologia Ageis e <abbr title="Programação orientada a objeto" style="color:#1ed760;text-decoration: underline;">POO</abrr></strong>.'
    }else{
        imagem.src = 'imagens/seta-para-baixo.png'
        imagem.alt = 'Seta para cima'
        desc.innerHTML = 'Por gentiliza, selecione uma opção abaixo para  <strong>consumir mais </strong>conteúdo.'
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


function parecer(menu){
    const formacao = document.querySelector("#formacao");
    const experiencia = document.querySelector("#experiencia");
    const profissional = document.querySelector("#profissional");
    const  btn = document.querySelector("#btn_show")


    
    
    if(formacao.style.display == "none"){
        formacao.style.display="block"
        profissional.style.display="block"
        btn.innerHTML = "Formações e Experiencias <i class='fa fa-plus-circle' aria-hidden='true'></i>"
       
        
    }else{
        formacao.style.display="none"
        profissional.style.display="none"
        btn.innerHTML = "Formações e Experiencias  <i class='fa fa-minus-circle' aria-hidden='true'></i>"
       
    }
    if(menu == "visivel"){
        formacao.style.display="block"
        profissional.style.display="block"
        btn.innerHTML = "Formações e Experiencias <i class='fa fa-plus-circle' aria-hidden='true'></i>"
    }


    
    
    
        
}



    

    


