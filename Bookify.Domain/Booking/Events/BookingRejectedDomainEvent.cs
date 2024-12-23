using Bookify.Domain.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bookify.Domain.Booking.Events
{
    public sealed record BookingRejectedDomainEvent(Guid Id) : IDomainEvent
    {
    }
}
