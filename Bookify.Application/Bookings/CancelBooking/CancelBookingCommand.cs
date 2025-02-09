using Bookify.Application.Abstractions.Messaging;

public sealed record CancelBookingCommand(Guid BookingId) : ICommand;