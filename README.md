# Design Patterns

Design patterns are general reusable solutions to common software design problems. They help you write code that is more maintainable, flexible, reusable and scalable

## Types of Design Patterns

Design patterns are typically divided into three categories:

### 1. **Creational Patterns**

Creational patterns focus on object creation mechanisms, providing ways to instantiate objects in a flexible manner. _Some commonly used creational patterns are:_

- **Singleton**: Ensures a class has only one instance and provides a global point of access to that instance
- **Factory Method**: Defines an interface for creating objects, but allows subclasses to decide which class to instantiate
- **Builder**: Separates the construction of a complex object from its representation, allowing the same construction process to create different representations

### 2. **Structural Patterns**

Structural patterns focus on object composition and typically identify simple ways to realize relationships between different objects. _Some commonly used structural patterns are:_

- **Adapter**: Allows the interface of an existing class to be used as another interface. It is often used to make existing classes work with others without modifying their source code
- **Decorator**: Allows behavior to be added to an object statically or dynamically, without affecting the behavior of other objects from the same class
- **Facade**: Provides a simplified interface to a complex subsystem, making it easier to use

### 3. **Behavioral Patterns**

Behavioral patterns focus on communication between objects and the distribution of responsibilities. _Some commonly used behavioral patterns are:_

- **Observer**: Defines a one-to-many dependency between objects, so that when one object changes state, all its dependents are notified and updated automatically
- **Strategy**: Defines a family of interchangeable algorithms, allowing the algorithm to be selected at runtime
- **Template Method**: Defines the structure of an algorithm but lets subclasses override specific steps
