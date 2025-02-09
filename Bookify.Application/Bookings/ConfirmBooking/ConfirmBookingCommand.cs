using Bookify.Application.Abstractions.Messaging;

public sealed record ConfirmBookingCommand(Guid BookingId) : ICommand;