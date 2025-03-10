 <div dir="rtl">

# اینترفیس IQuery

این اینترفیس مسئول تعریف یک Query در سیستم است. این اینترفیس به عنوان یک درخواست برای دریافت داده‌ها عمل می‌کند.

## ویژگی‌های کلیدی

1. **تعریف Query**:
   - تعریف یک Query برای دریافت داده‌ها
   - استفاده از این اینترفیس برای مدیریت درخواست‌های دریافت داده‌ها

## ساختار کد

```csharp
public interface IQuery<TResponse> : IRequest<Result<TResponse>>
{
}
```

## نحوه کار

1. **تعریف Query**:
   - تعریف یک Query برای دریافت داده‌ها
   - استفاده از این اینترفیس برای مدیریت درخواست‌های دریافت داده‌ها

## مزایای این طراحی

1. **جداسازی مسئولیت‌ها**:
   - هر اینترفیس تنها یک وظیفه مشخص دارد
   - رعایت اصل Single Responsibility

2. **قابلیت استفاده مجدد**:
   - استفاده از این اینترفیس در سراسر سیستم برای مدیریت درخواست‌های دریافت داده‌ها
   - کاهش تکرار کد

</div>