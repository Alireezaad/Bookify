<div dir="rtl">

# کلاس BookingReservedDomainEventHandler

این کلاس مسئول مدیریت رویدادهای دامنه مربوط به رزرو آپارتمان است. این کلاس از MediatR برای مدیریت رویدادها استفاده می‌کند و به عنوان یک Event Handler عمل می‌کند.

## ویژگی‌های کلیدی

1. **مدیریت رویدادها**:
   - دریافت و پردازش رویدادهای دامنه
   - ارسال ایمیل به کاربر پس از رزرو

2. **Dependency Injection**:
   - استفاده از DI برای مدیریت وابستگی‌ها
   - افزایش تست‌پذیری و انعطاف‌پذیری

## ساختار کد

```csharp
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
```

## نحوه کار

1. **دریافت رویداد**:
   - دریافت رویدادهای دامنه مربوط به رزرو آپارتمان
   - پردازش رویداد و استخراج اطلاعات مربوطه

2. **ارسال ایمیل**:
   - ارسال ایمیل به کاربر پس از رزرو
   - استفاده از IEmailService برای ارسال ایمیل

## مزایای این طراحی

1. **مدیریت متمرکز رویدادها**:
   - استفاده از MediatR برای مدیریت رویدادها
   - افزایش خوانایی و نگهداری‌پذیری کد

2. **قابلیت تست‌پذیری بالا**:
   - امکان mock کردن وابستگی‌ها
   - تست‌های مجزا برای هر بخش

3. **افزایش تجربه کاربری**:
   - ارسال ایمیل‌های اطلاع‌رسانی به کاربران
   - افزایش تعامل با کاربران

</div>