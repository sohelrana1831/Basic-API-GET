const searchFood = () => {
    const textField = document.getElementById('text-field');
    const textValue = textField.value;
    textField.value = "";
    // console.log(textValue)
    if (textValue == "") {
        alert("Plase iput food name")
    } else {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${textValue}`;

        fetch(apiUrl)
            .then(Response => Response.json())
            .then(foodData => foodSearchResult(foodData.meals))
    }
 
}

const foodSearchResult = (foods) => {
    const searchResult = document.getElementById('search-result');
    console.log(foods)
    if (foods.length == 0) {
        // alert("Result Not Found")
        console.log('Result Not Found')
    }
    // Clear Data
    searchResult.textContent = '';
    for (const food of foods) {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <div onclick="foodId(${food.idMeal})" class="card">
                    <img src="${food.strMealThumb}" class="card-img-top" alt="${food.strMeal}" />
                    <div class="card-body">
                        <h5 class="card-title">${food.strMeal}</h5>
                        <p class="card-text">
                            ${(food.strInstructions).slice(0, 300)}
                        </p>
                    </div>
                </div>
            `;
        searchResult.appendChild(div);

    }
}

// Id By food result
const foodId = (mealId) =>{
    const foodIdApi = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(foodIdApi)
        .then(Response => Response.json())
        .then(data => singleFoodDetails(data.meals[0]))
}

const singleFoodDetails = (meal) =>{
    const singleFoodDetails = document.getElementById('single-food-details');
    //Clear data
    singleFoodDetails.textContent = "";
    const div = document.createElement('div');
    div.classList.add(`card`);
    div.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="${meal.strMeal}" />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                ${(meal.strInstructions).slice(0, 200)}
                </p>
                <p class="card-text">
                    <small class="text-muted">${meal.strTags}</small>
                </p>
                </div>
            </div>
        </div>
    `;
    singleFoodDetails.appendChild(div);
}