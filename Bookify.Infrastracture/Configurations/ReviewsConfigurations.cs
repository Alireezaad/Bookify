using Bookify.Domain.Apartments;
using Bookify.Domain.Booking;
using Bookify.Domain.Reviews;
using Bookify.Domain.Users;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public sealed class ReviewsConfigurations : IEntityTypeConfiguration<Review>
{
    public void Configure(EntityTypeBuilder<Review> builder)
    {

        builder.ToTable("reviews");

        builder.HasKey(r => r.Id);

        builder.Property(r => r.Comment)
            .HasMaxLength(1000)
            .HasConversion(commeent => commeent.Value, comment => new Comment(comment));

        builder.Property(r => r.Rating)
            .HasConversion(rating => rating.Value, value => Rating.Create(value).Value);

        builder.HasOne<Booking>()
            .WithMany()
            .HasForeignKey(r => r.BookingId);

        builder.HasOne<User>()
            .WithMany()
            .HasForeignKey(r => r.UserId);

        builder.HasOne<Apartment>()
            .WithMany()
            .HasForeignKey(r => r.ApartmentId);
    }
}
