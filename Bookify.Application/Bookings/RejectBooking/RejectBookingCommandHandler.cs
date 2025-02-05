using Bookify.Application.Abstractions.Messaging;
using Bookify.Domain.Abstractions;
using Bookify.Domain.Booking;

public sealed class RejectBookingCommandHandler : ICommandHandler<RejectBookingCommand>
{

    private readonly IBookingRepository _bookingRepository;
    public RejectBookingCommandHandler(IBookingRepository bookingRepository)
    {
        _bookingRepository = bookingRepository;
    }


    public async Task<Result> Handle(RejectBookingCommand request, CancellationToken cancellationToken)
    {
        var booking = await _bookingRepository.GetByIdAsync(request.BookingId, cancellationToken);
        if (booking is null)
        {
            return Result.Failure(BookingErrors.NotFound);
        }

        booking.Reject(DateTime.UtcNow);
        await _bookingRepository.(booking, cancellationToken);
        return Result.Success();

    }


}
