 <div dir="rtl">

# کلاس BookingResponse

این کلاس مسئول ارائه پاسخ به درخواست‌های دریافت اطلاعات رزرو است. این کلاس شامل اطلاعات کامل یک رزرو می‌باشد.

## ویژگی‌های کلیدی

1. **اطلاعات رزرو**:
   - شامل شناسه رزرو، کاربر، آپارتمان و وضعیت
   - شامل اطلاعات مالی مانند قیمت و هزینه‌های اضافی
   - شامل مدت زمان رزرو و تاریخ ایجاد

## ساختار کد

```csharp
public sealed class BookingResponse
{
    public Guid Id { get; init; }

    public Guid UserId { get; init; }

    public Guid ApartmentId { get; init; }

    public int Status { get; init; }

    public decimal PriceAmount { get; init; }

    public string PriceCurrency { get; init; }

    public decimal CleaningFeeAmount { get; init; }

    public string CleaningFeeCurrency { get; init; }

    public decimal AmenitiesUpChargeAmount { get; init; }

    public string AmenitiesUpChargeCurrency { get; init; }

    public decimal TotalPriceAmount { get; init; }

    public string TotalPriceCurrency { get; init; }

    public DateOnly DurationStart { get; init; }

    public DateOnly DurationEnd { get; init; }

    public DateTime CreatedOnUtc { get; init; }
}
```

## نحوه کار

1. **ارائه اطلاعات رزرو**:
   - ارائه اطلاعات کامل رزرو به صورت ساختار یافته
   - استفاده از این کلاس به عنوان پاسخ به درخواست‌های دریافت اطلاعات رزرو

## مزایای این طراحی

1. **ارائه اطلاعات کامل**:
   - ارائه اطلاعات کامل و دقیق از رزرو
   - افزایش خوانایی و نگهداری‌پذیری کد

2. **قابلیت استفاده مجدد**:
   - استفاده از این کلاس در سراسر سیستم برای ارائه اطلاعات رزرو
   - کاهش تکرار کد

</div>