---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Bookify"
  text: "Alireza Abasi"
  tagline: A web application for booking location reservations<br>Started at September 17, 2024<br>Developed by C# | .NET Core 8
  image:
    src: /house.png
    alt: Bookify
  actions:
    - theme: brand
      text: Get Started
      link: /docs/domain-layer
    - theme: alt
      text: API Examples
      link: /api-examples
features:
  - icon: 🧰
    title: Clean Architecture
    details: Implements a clean architecture approach, ensuring separation of concerns and maintainability.
  - icon: 🏗️
    title: Modular Architecture
    details: Utilizes the Repository and Unit of Work patterns for data access, ensuring maintainability and testability.
  - icon: 🔍
    title: Advanced Query Handling
    details: Implements MediatR for handling queries and commands, promoting a clean separation of concerns.
  - icon: 🛡️
    title: Custom Middleware
    details: Includes custom middleware for exception handling, enhancing the application's resilience and user experience.
  - icon: 🔐
    title: Authentication and Authorization
    details: Integrates Keycloak for robust authentication and authorization, ensuring secure access control.
  - icon: 🐳
    title: Docker Support
    details: Provides Docker support for easy deployment and scalability across different environments.
  - icon: 📖
    title: Comprehensive Documentation
    details: Uses VitePress to generate detailed documentation, ensuring clarity and ease of use for developers and stakeholders.
  - icon: 🌱
    title: Data Seeding and Migrations
    details: Provides extensions for applying migrations and seeding initial data, facilitating easy setup and deployment.
---