using Bookify.Domain.Apartments;
using Bookify.Domain.Shared;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bookify.Domain.Booking
{
    public class PricingService
    {
        public PricingDetails CalculatePrice(Apartment apartment, DateRange period)
        {
            var currency = apartment.Price.Currency;

            var priceForPeriod = new Money(apartment.Price.Amount * period.LengthInDays, currency);

            decimal percentageChargeUp = 0;
            foreach (var amenity in apartment.Amenities)
            {
                percentageChargeUp += amenity switch
                {
                    Amenity.GardenView or Amenity.MountainView => 0.05m,
                    Amenity.AirConditioning => 0.01m,
                    Amenity.Parking => 0.01m,
                    _ => 0
                };
            }

            var amenitiesChargeUp = Money.Zero(currency);
            if (percentageChargeUp > 0)
            {
                amenitiesChargeUp = new Money(priceForPeriod.Amount * percentageChargeUp, currency);
            }

            var totalPrice = Money.Zero(currency);
            totalPrice += priceForPeriod;

            if (!apartment.CleaningFee.IsZero())
            {
                totalPrice += apartment.CleaningFee;
            }

            totalPrice += amenitiesChargeUp;

            return new PricingDetails(priceForPeriod, apartment.CleaningFee, amenitiesChargeUp, totalPrice);

        }
    }
}
