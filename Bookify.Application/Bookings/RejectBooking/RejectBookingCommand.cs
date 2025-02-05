using Bookify.Application.Abstractions.Messaging;
using Bookify.Domain.Booking;

public sealed record RejectBookingCommand(Guid BookingId) : ICommand;