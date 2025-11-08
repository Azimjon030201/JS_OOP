class Pagination {
  #everyVisiblePages
  constructor(items, pageSize = 10) {
    this.items = items;       
    this.pageSize = pageSize;   
    this.totalPages = Math.ceil(this.items.length/this.pageSize) 
    this.currentPage = 0; 
    this.#everyVisiblePages = []
    this.#visiblePages()
  
    
  }
  #visiblePages(){
    for (let i = 0; i < this.items.length; i += this.pageSize) {
      this.#everyVisiblePages.push(this.items.slice(i,i + this.pageSize))
    }
   


  }
  
  prevPage() {
    this.currentPage--;
    return this;
  }

 
  nextPage() {
    this.currentPage++;
    return this
  }

  
  firstPage() {
    this.currentPage = 0
    return this
  }

  
  lastPage() {
    this.currentPage = this.totalPages - 1;
    return this
  }

  
  goToPage(page) {
    this.currentPage = page;
    return this
  }

 
  getVisibleItems() {
    return this.#everyVisiblePages[this.currentPage]
  }
}


const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");


const p = new Pagination(alphabetArray, 4);
console.log(p.getVisibleItems());

let result = p.nextPage().nextPage().getVisibleItems();
console.log(result);
p.lastPage()
console.log(p.getVisibleItems());
p.goToPage(2)
console.log(p.getVisibleItems());



