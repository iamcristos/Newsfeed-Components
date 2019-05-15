// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement,index) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    this.index = index;
    // create close button
    this.button = document.createElement('button');
    // create a reference to the ".expandButton" class. 
    this.expandButton = document.querySelectorAll(`.expandButton`);
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton[this.index].innerText = 'Read';
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
   this.expandButton[this.index].addEventListener('click', (e)=>  this.expandArticle(e.target))
  //  close article
  this.closeArticle()
  }

  expandArticle(e) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
      const articleClass = this.domElement.classList
      articleClass.toggle('article-open');
      (articleClass[1] == 'article-open') ? e.innerText ='Show' : e.innerText = 'Read' 
  }

  closeArticle () {
    this.button.innerText = 'X'
    this.button.style.backgroundColor = 'red'
    this.domElement.prepend(this.button);
    this.button.addEventListener('click',()=>this.domElement.style.display = 'none')
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/



let articles= document.querySelectorAll('.article');
articles.forEach((article, index) =>new Article(article, index));
