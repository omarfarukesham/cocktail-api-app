//global code here
const searchBox = document.getElementById('search-box')
const container = document.getElementById('product')


const cocktailDataLoad = () =>{
    const searchboxValue = searchBox.value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchboxValue}`
   fetch(url)
   .then(res => res.json())
   .then(data => displayCocktail(data.drinks))


   //cleaning the input field value
   searchBox.value = ''

}

const displayCocktail = (cocktails) => {
    console.log(cocktails)
    cocktails.forEach(product => {
        const div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.innerHTML = `
        <div class="card">
            <img src="${product.strDrinkThumb} " class="card-img-top" alt="Cocktail Img">
            <div class="card-body">
            <h5 class="card-title">${product.strAlcoholic}</h5>
                <p class="card-text">${product.strCategory}</p>
                <p class="card-text">${product.strInstructions.slice(0,150)}</p>
                <a href="#" class="btn btn-warning">Details</a>
                <a href="#" class="btn btn-danger">Delete</a>
            </div>
        </div>
                       
        `
        container.appendChild(div)
    });
  


    
}
