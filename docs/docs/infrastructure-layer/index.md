# Infrastructure Layer Overview

The Infrastructure Layer in the Bookify application is responsible for handling the technical details of data access, email services, and time management. It acts as a bridge between the domain layer and external systems, ensuring that the application can interact with databases, send emails, and manage time effectively.

## Key Components

- **ApplicationDbContext**: Manages database connections and transactions, and publishes domain events.
- **DependencyInjection**: Registers infrastructure services with the dependency injection container.
- **Configurations**: Contains entity configurations for the database, ensuring proper mapping and relationships.
- **Repositories**: Provides data access methods for entities, abstracting the database operations.
- **Data**: Includes custom type handlers and connection factories for database interactions.
- **Email**: Manages email sending functionality.
- **Clock**: Provides the current date and time.

This layer is designed to be flexible and maintainable, allowing for easy integration with different data sources and external services. 