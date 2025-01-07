using Bookify.Domain.Booking.Events;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using Bookify.Domain.Users;
using Bookify.Domain.Booking;
using Bookify.Application.Abstractions.Email;

namespace Bookify.Application.Bookings.ReserveBooking
{
    internal class BookingReservedDomainEventHandler : INotificationHandler<BookingReservedDomainEvent>
    {
        private readonly IUserRepository _userRepository;
        private readonly IBookingRepository _bookingRepository;
        private readonly IEmailService _emailService;

        public BookingReservedDomainEventHandler(IUserRepository userRepository, IBookingRepository bookingRepository, IEmailService emailService)
        {
            _userRepository = userRepository;
            _bookingRepository = bookingRepository;
            _emailService = emailService;
        }

        public async Task Handle(BookingReservedDomainEvent notification, CancellationToken cancellationToken)
        {
            var booking = await _bookingRepository.GetByIdAsync(notification.BookingId);
            if (booking is null) return;

            var user = await _userRepository.GetByIdAsync(booking.UserId);
            if (user is null) return;

            await _emailService.SendAsync(user.Email, "Booking reserved", "You have 10 minutes to confirm this booking.");
        }
    }
}
