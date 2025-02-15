using Bookify.Domain.Abstractions;

namespace Bookify.Domain.Reviews;

public sealed record Rating
{
    public static readonly Error Invalid = new("Rating.Invalid", "Rating must be between 1 and 5");
    public int Value { get; init; }

    private Rating(int value) => Value = value;

    public static Result<Rating> Create(int value){
        if (value < 1 || value > 5)
        {
            return Result.Failure<Rating>(Invalid);
        }
        return new Rating(value);
    }

    public static implicit operator Rating(int value) => Create(value).Value;

} 