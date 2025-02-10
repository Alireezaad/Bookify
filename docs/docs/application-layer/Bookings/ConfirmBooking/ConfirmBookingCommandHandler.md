 <div dir="rtl">

# کلاس ConfirmBookingHandler

این کلاس مسئول پردازش درخواست‌های تایید رزرو است. این کلاس از الگوی CQRS پیروی می‌کند و به عنوان یک Command Handler عمل می‌کند.

## ویژگی‌های کلیدی

1. **پردازش تایید رزرو**:
   - مدیریت تراکنش‌ها و ذخیره‌سازی
   - استفاده از الگوی Command Handler برای جداسازی مسئولیت‌ها

2. **Dependency Injection**:
   - استفاده از DI برای مدیریت وابستگی‌ها
   - افزایش تست‌پذیری و انعطاف‌پذیری

## ساختار کد

```csharp
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
```

## نحوه کار

1. **دریافت درخواست**:
   - دریافت شناسه رزرو برای تایید
   - اعتبارسنجی اولیه داده‌ها توسط Validator

2. **پردازش درخواست**:
   - بررسی وجود رزرو
   - تایید رزرو و مدیریت تراکنش‌ها

3. **ذخیره‌سازی**:
   - ذخیره تغییرات با استفاده از UnitOfWork
   - بازگرداندن نتیجه در صورت موفقیت

## مزایای این طراحی

1. **جداسازی مسئولیت‌ها**:
   - هر کلاس تنها یک وظیفه مشخص دارد
   - رعایت اصل Single Responsibility

2. **قابلیت تست‌پذیری بالا**:
   - امکان mock کردن وابستگی‌ها
   - تست‌های مجزا برای هر بخش

3. **مدیریت خطا**:
   - استفاده از الگوی Result برای مدیریت خطاها
   - بازگشت پیام‌های خطای معنادار

</div>