class Restaurant {
  constructor(name, city, employees) {
    // Check if there is already an instance created
    if (!Restaurant.instance) {
      this.name = name
      this.city = city
      this.employees = employees

      Restaurant.instance = this
    }

    // If there is already an instance created, return that instance
    return Restaurant.instance
  }
}

let restaurant1 = new Restaurant("McDonald's", 'New York', '25')
let restaurant2 = new Restaurant('Burger King', 'New York', '30')

console.log(restaurant2) // Restaurant { name: "McDonald's", city: 'New York', employees: '25' }

// TIP: Both restaurant1 and restaurant2 will use the same instance of the Restaurant class (the first one that was created) even though we are instantiating it twice
