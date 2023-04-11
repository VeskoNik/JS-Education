function getArticleGenerator(articles) {
    debugger
    const parent = document.querySelector('#content');
    return function showNext(){
        debugger
        if(articles.length > 0){
            const article = document.createElement('article')
            article.textContent = articles.shift()
            parent.appendChild(article)

        }
        return parent;
    }
}
