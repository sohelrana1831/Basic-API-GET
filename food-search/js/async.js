document.getElementById('error-alert').style.display = "none";

const searchFood = async () => {
    const textField = document.getElementById('text-field');
    const textValue = textField.value;
    textField.value = "";
    if (textValue == "") {
        alert("Plase input food name")
    } else {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${textValue}`;
        try {
            const Response = await fetch(apiUrl);
            const foodData = await Response.json();
            try {
                foodSearchResult(foodData.meals);
            } catch (error) {
                alert("Result Not Found")
            }
            
        } catch (error) {
            errorAlert();
        }
    }
}

const errorAlert = () => {
    document.getElementById('error-alert').style.display = "block";
}

const foodSearchResult = (foods) => {
    const searchResult = document.getElementById('search-result');

    // Clear Data
    searchResult.textContent = '';
    for (const food of foods) {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <div onclick="foodId(${food.idMeal})" class="card" style="cursor: pointer;">
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
const foodId = async (mealId) =>{
    const foodIdApi = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    try {
        const Response = await fetch(foodIdApi);
        const data = await Response.json();
        singleFoodDetails(data.meals[0]);
    } catch (error) {
        errorAlert()
    }
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