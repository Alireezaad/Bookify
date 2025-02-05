using System.Runtime.InteropServices;
using Bookify.Domain.Abstractions;
using Bookify.Domain.Booking;
namespace Bookify.Domain.Reviews;

public class Review : Entity
{
    public Guid BookingId { get; private set; }
    public Guid UserId { get; private set; }
    public Guid ApartmentId { get; private set; }
    public Comment Comment { get; private set; }
    public Rating Rating { get; private set; }
    public DateTime CreatedOnUtc { get; private set; }


    private Review(
        Guid id,
        Guid bookingId,
        Guid userId, 
        Guid apartmentId,
        Comment comment,
        Rating rating,
        DateTime createdOnUtc) : base(id)

    {
        BookingId = bookingId;
        UserId = userId;
        ApartmentId = apartmentId;
        Comment = comment;
        Rating = rating;
        CreatedOnUtc = createdOnUtc;
    }

    public static Result<Review> Create(
        Booking.Booking booking,
        Comment comment,
        Rating rating)

    {
        if (booking.Status != BookingStatus.Completed)
        {
            return Result.Failure<Review>(new Error("Review.BookingNotCompleted", "Cannot create review for an incomplete booking"));
        }
        var review = new Review(
            Guid.NewGuid(),
            booking.Id,
            booking.UserId,
            booking.ApartmentId,
            comment,
            rating,
            DateTime.UtcNow);

        review.RaiseDomainEvent(new ReviewCreatedDomainEvent(review.Id));
        return review;
    }
}
