# API Layer Overview

The `Bookify.Api` layer serves as the entry point for the Bookify application, handling HTTP requests and responses. It is responsible for routing requests to the appropriate controllers and managing the application's middleware pipeline.

## Key Components

- **Program.cs**: Configures and starts the web application, setting up services and middleware.
- **Controllers**: Handle HTTP requests and execute application logic. Key controllers include `ApartmentsController` and `BookingsController`.
- **Extensions**: Provide extension methods to enhance the application's functionality, such as seeding data and applying migrations.
- **Middleware**: Custom middleware components, like `ExceptionHandlingMiddleware`, manage cross-cutting concerns such as error handling.

This layer is designed to be scalable and maintainable, facilitating communication between the client and the server. 