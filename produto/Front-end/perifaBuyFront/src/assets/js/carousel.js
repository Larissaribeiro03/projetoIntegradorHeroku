//1. Precisamos iniciar o carrossel achando o item 'ativo' e aplicando as classes 'prev' e 'next' nos itens adjacentes.

//2. Queremos adicionar a transição do nosso marcador de slide 'slide-marker'

//3. Adicionar eventos de clique para nossos botões de navegação (clicando)

//4. Criar duas funções para tratar cada direção

//5. Para evitar o 'over-clicking' dos botões, vamos desativar a interatividade quando o carrossel estiver animando e ativar quando acabar

//6. Queremos lidar com todas as funções que movem itens para o nosso carrossel por descobrindo quais itens atualizar, e atualiza-los com classes para ativar as transições do CSS3


window.addEventListener("load", function(event) {
    var itemClassName = "slide",
    items = document.getElementsByClassName(itemClassName),
    totalItems = items.length,
    slide = 0,
    moving = true;

    console.log(items);
    console.log(items.item(0));
    // Colocar classes iniciais
    function setInitialClasses() {
        // mire no anterior, atual e próximo items

        items[totalItems - 1].classList.add("prev");
        items[0].classList.add("ativo");
        items[1].classList.add("next");
    }

    // Colocar event listeners

    function setEventListeners() {
        var next = document.getElementsByClassName('carousel__button--next')[0],
            prev = document.getElementsByClassName('carousel__button--prev')[0];
        console.log(next);
        console.log(prev);
        next.addEventListener('click', moveNext);
        prev.addEventListener('click', movePrev);
    }

    // função para mover o carrossel
    function moveCarouselTo(slide) {

        // cheque se o carrossel está movendo, caso não, permita a interação
        if (!moving) {

            // temporariamente disative a interatividade
            disableInteraction();

            // atualize o slide adjacente 'antigo' com os 'novos'
            var novoAnterior = slide - 1,
                novoProximo = slide + 1,
                antigoAnterior = slide - 2,
                antigoProximo = slide + 2;

            // teste se o carrossel them mais de três itens
            if ((totalItems - 1) > 3) {

                // cheque e atualize se os novos slides estão fora dos limites
                if (novoAnterior <= 0) {
                    antigoAnterior = (totalItems - 1);
                } else if (novoProximo >= (totalItems - 1)) {
                    antigoProximo = 0;
                }

                // cheque e atualize se o slide está no início/fim
                if (slide == 0) {
                    novoAnterior = (totalItems - 1);
                    antigoAnterior = (totalItems - 2);
                    antigoProximo = (slide + 1);
                } else if (slide == (totalItems - 1)) {
                    novoAnterior = (slide - 1);
                    novoProximo = 0;
                    antigoProximo = 1;
                }

                // agora conseguimos saber onde estamos e para onde vamos
                // ao adicionar/remover classes vamos acionar as transições

                // reset os antigos elementos next/prev para as classes padrão

                items[antigoAnterior].className = itemClassName;
                items[antigoProximo].className = itemClassName;

                // adicione novas classes
                items[novoAnterior].className = itemClassName + " prev";
                items[slide].className = itemClassName + ' ativo';
                items[novoProximo].className = itemClassName + " next";
            
            }
        }
    }

    // função para o carrossel mudar automaticamente
    function moveCarousel() {
        //
        if (!moving) {
            // pare a interação para o carrossel começar a se mover
            disableInteraction();

            // mova o carrossel para o próximo slide 
            moveNext();
        }
    }

    // Criar moveNext e movePrev para o evento de click, a função checará quaisquer seja o número do slide atual e ou incrementa, decrementa ou coloca no último ou primeiro item

    // Next
    function moveNext() {
        
        // Cheque se o carrossel está movendo
        if(!moving) {

            // 'if' for o último slide, resetar para 0, 'else' +1
            if (slide == (totalItems - 1)) {
                slide = 0;
            } else {
                slide++;
            }
            
            // mova o carrossel para o slide atualizado
            moveCarouselTo(slide);
        }
    }

    // Prev
    function movePrev() {

        // Cheque se o carrossel está movendo
        if(!moving) {

            // 'if' for o primeiro slide, resetar para o último, 'else' -1
            if (slide == 0) {
                slide = (totalItems - 1);
            } else {
                slide--;
            }
            
            // mova o carrossel para o slide atualizado
            moveCarouselTo(slide);
        }
    }

    // função para desabilidar interação enquanto o slide está em animação onde a variável 'moving' é setada para true durante a transição e depois para false após
    function disableInteraction() {
        // Coloque 'moving' em true com a mesma duração de nossa transição
        // (0.5s = 500ms)
        moving = true;

        // setTimeout roda a própria função uma vez após o tempo dado
        setTimeout(function() {
            moving = false
        }, 500);
    }


    // função para iniciar o carrosel
    function initCarousel() {
        setInitialClasses();
        setEventListeners();
        // coloque moving em false para que o carrossel se inicie interativo
        moving = false;
        while (true) {
            setTimeout(moveCarousel(), 2000);
        }
    }

    initCarousel();
});
