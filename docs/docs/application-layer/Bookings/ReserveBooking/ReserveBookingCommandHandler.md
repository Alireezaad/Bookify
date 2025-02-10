 <div dir="rtl">

# کلاس ReserveBookingCommandHandler

این کلاس مسئول پردازش درخواست‌های رزرو آپارتمان است. این کلاس از الگوی CQRS پیروی می‌کند و به عنوان یک Command Handler عمل می‌کند.

## ویژگی‌های کلیدی

1. **پردازش رزرو**:
   - مدیریت تراکنش‌ها و ذخیره‌سازی
   - استفاده از الگوی Command Handler برای جداسازی مسئولیت‌ها

2. **Dependency Injection**:
   - استفاده از DI برای مدیریت وابستگی‌ها
   - افزایش تست‌پذیری و انعطاف‌پذیری

## ساختار کد

```csharp
internal sealed class ReserveBookingCommandHandler : ICommandHandler<ReserveBookingCommand, Guid>
{
    private readonly IUserRepository _userRepository;
    private readonly IApartmentRepository _apartmentRepository;
    private readonly IBookingRepository _bookingRepository;
    private readonly IUnitOfWork _unitOfWork;
    private readonly PricingService _pricingService;
    private readonly IDateTimeProvider _dateTimeProvider;

    public ReserveBookingCommandHandler(IUserRepository userRepository, IApartmentRepository apartmentRepository, IBookingRepository bookingRepository, IUnitOfWork unitOfWork, PricingService pricingService, IDateTimeProvider dateTimeProvider)
    {
        _userRepository = userRepository;
        _apartmentRepository = apartmentRepository;
        _bookingRepository = bookingRepository;
        _unitOfWork = unitOfWork;
        _pricingService = pricingService;
        _dateTimeProvider = dateTimeProvider;
    }

    public async Task<Result<Guid>> Handle(ReserveBookingCommand request, CancellationToken cancellationToken)
    {
        var user = await _userRepository.GetByIdAsync(request.UserId, cancellationToken);
        if (user is null)
            return Result.Failure<Guid>(UserErrors.NotFound);

        var apartment = await _apartmentRepository.GetByIdAsync(request.UserId, cancellationToken);
        if (apartment is null)
            return Result.Failure<Guid>(ApartmentErrors.NotFound);

        var duration = DateRange.Create(request.StartDate, request.EndDate);

        if (await _bookingRepository.IsOverlappingAsync(apartment, duration, cancellationToken))
        {
            return Result.Failure<Guid>(BookingErrors.Overlap);
        }

        try
        {
            var booking = Booking.Reserve(apartment, user.Id, duration, _dateTimeProvider.UtcNow, _pricingService);

            _bookingRepository.Add(booking);

            await _unitOfWork.SaveChangesAsync(cancellationToken);

            return booking.Id;

        }
        catch (ConcurrencyException)
        {
            return Result.Failure<Guid>(BookingErrors.Overlap);
        }
    }
}
```

## نحوه کار

1. **دریافت درخواست**:
   - دریافت اطلاعات رزرو شامل شناسه آپارتمان، کاربر و تاریخ‌ها
   - اعتبارسنجی اولیه داده‌ها توسط Validator

2. **پردازش درخواست**:
   - بررسی وجود آپارتمان
   - ایجاد محدوده تاریخ و اعتبارسنجی آن
   - محاسبه قیمت توسط PricingService
   - ایجاد رزرو جدید

3. **ذخیره‌سازی**:
   - افزودن رزرو به مخزن داده
   - ذخیره تغییرات با استفاده از UnitOfWork
   - بازگرداندن شناسه رزرو در صورت موفقیت

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