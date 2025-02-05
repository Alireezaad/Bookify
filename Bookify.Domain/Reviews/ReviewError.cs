using Bookify.Domain.Abstractions;
namespace Bookify.Domain.Reviews;

public static class ReviewError
{
    public static readonly Error NotEligible = new("Review.NotEligible", "User is not eligible to create a review");
}

