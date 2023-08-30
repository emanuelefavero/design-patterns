// The singleton pattern ensures that only one instance of a class is created
// A good example of a singleton is a Logger class, which could be used to log every activity of a user in a social network (like logins, logout, likes, etc.)
class Logger {
  constructor() {
    // Check if there is already an instance created
    if (!Logger.instance) {
      // If not, create one
      Logger.instance = this
    }

    // If there is already an instance created, return that instance
    return Logger.instance
  }

  // A method to log a message
  log(message) {
    console.log('Message: ', message)
  }
}

// TIP: Both logger1 and logger2 will use the same instance of the Logger class even though we are instantiating it twice
const logger1 = new Logger()
const logger2 = new Logger()

console.log(logger1 === logger2) // true

logger1.log('Hello from logger 1')
logger2.log('Hello from logger 2')

// NOTE: The singleton pattern is often criticized because it introduces global state in your application and it makes it harder to test your code
