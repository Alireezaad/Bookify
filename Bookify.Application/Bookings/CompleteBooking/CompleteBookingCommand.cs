using Bookify.Application.Abstractions.Messaging;

public sealed record CompleteBookingCommand(Guid BookingId) : ICommand;