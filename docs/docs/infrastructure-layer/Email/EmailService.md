# EmailService

The `EmailService` class implements the `IEmailService` interface and provides functionality for sending emails.

## Key Components

- **SendAsync Method**: Asynchronously sends an email to a specified recipient with a given subject and body. Currently, it returns a completed task, indicating a placeholder implementation.

```csharp
internal sealed class EmailService : IEmailService
{
    public Task SendAsync(Domain.Users.Email recipient, string subject, string body)
    {
        return Task.CompletedTask;
    }
} 