using Bookify.Application.Abstractions.Clock;
using Bookify.Application.Abstractions.Messaging;
using Bookify.Domain.Abstractions;
using Bookify.Domain.Booking;

internal sealed class ConfirmBookingHandler : ICommandHandler<ConfirmBookingCommand>
{
    private readonly IBookingRepository _bookingRepository;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IDateTimeProvider _dateTimeProvider;
    public ConfirmBookingHandler(IBookingRepository bookingRepository, IUnitOfWork unitOfWork, IDateTimeProvider dateTimeProvider)
    {
        _bookingRepository = bookingRepository;
        _unitOfWork = unitOfWork;
        _dateTimeProvider = dateTimeProvider;
    }
    public async Task<Result> Handle(ConfirmBookingCommand request, CancellationToken cancellationToken)

    {
        var booking = await _bookingRepository.GetByIdAsync(request.BookingId, cancellationToken);
        if (booking is null)
        {
            return Result.Failure(BookingErrors.NotFound);
        }

        var result = booking.Confirm(_dateTimeProvider.UtcNow);
        if (result.IsFailure)
        {
            return result;
        }

        await _unitOfWork.SaveChangesAsync();
        return Result.Success();
    }
}

