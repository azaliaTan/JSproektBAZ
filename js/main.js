let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})


//Пишите здесь

    let newsArray = [];
    
    
   
    const sendButton = document.querySelector('.send');
    const titleInput = document.querySelector('input');
    const textInput = document.querySelector('textarea');

   
    sendButton.addEventListener('click', () => {
        const title = titleInput.value;
        const text = textInput.value;

        let flag = true;



        if(!title){
            alert("введите заголовок новости");
             flag = false;
        }else if(title.length<8){
            alert("не менее 8 символов в заголовке");
           flag = false;
        }

        if(!text){
            alert("введите текст новости");
           flag = false;
        }else if(text.length>300){
            alert("не более 300 символов в тексте");
            flag = false;
        }
            if(!flag){
                return;
            }

     
            newsArray.push({ title: title, text: text });
            
            
            titleInput.value = '';
            textInput.value = '';

           
            modal.style.display = 'none';

           
            showNews();
        
    });

   
    function showNews() {
        const newsWrapper = document.querySelector('.news-wrapper');
        newsWrapper.innerHTML = ''; 

        newsArray.forEach(news => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');

            const newsTitle = document.createElement('h3');
            newsTitle.classList.add('h3');
            newsTitle.textContent = news.title;

            const newsText = document.createElement('p');
            newsText.classList.add('news-item__p');
            newsText.textContent = news.text;

            newsItem.appendChild(newsTitle);
            newsItem.appendChild(newsText);

            newsWrapper.appendChild(newsItem);
        });
    }

    
document.addEventListener('keydown', function(event){
    const key = event.key.toLowerCase();
    if(key==='w'){
        document.getElementById('color').style.backgroundColor='#bdf1b4';
    } else if (key==='b'){
        document.getElementById('color').style.backgroundColor='hsl(288, 22%, 24%)';
    }
}
);           

