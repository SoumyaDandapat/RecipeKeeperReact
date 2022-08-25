class Recipe{
    constructor(
        id,
        name,
        description,
        imageUrl,
        steps,
        ingredients
    ){
        this.id = id
        this.name = name
        this.description = description
        this.imageUrl = imageUrl
        this.steps = steps
        this.ingredients = ingredients
    }
}

export default Recipe;