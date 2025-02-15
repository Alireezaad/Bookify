 <div dir="rtl">

# کلاس GetBookingQuery

این کلاس مسئولیت دریافت اطلاعات یک رزرو خاص را بر عهده دارد. این کلاس از الگوی CQRS پیروی می‌کند و به عنوان یک Query عمل می‌کند.

## ویژگی‌های کلیدی

1. **دریافت اطلاعات رزرو**:
   - شامل شناسه رزرو برای دریافت اطلاعات
   - استفاده از الگوی Query برای جداسازی مسئولیت‌ها

## ساختار کد

```csharp
public sealed record GetBookingQuery(Guid BookingId) : IQuery<BookingResponse>;
```

## نحوه کار

1. **دریافت اطلاعات**:
   - دریافت شناسه رزرو برای دریافت اطلاعات
   - آماده‌سازی داده‌ها برای پردازش

2. **ارسال به Handler**:
   - ارسال Query به QueryHandler مربوطه برای پردازش

## مزایای این طراحی

1. **جداسازی مسئولیت‌ها**:
   - هر کلاس تنها یک وظیفه مشخص دارد
   - رعایت اصل Single Responsibility

2. **قابلیت تست‌پذیری بالا**:
   - امکان تست Query به صورت مجزا
   - افزایش قابلیت اطمینان سیستم

</div>