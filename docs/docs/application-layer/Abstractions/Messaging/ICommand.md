 <div dir="rtl">

# اینترفیس ICommand

این اینترفیس مسئول تعریف یک Command در سیستم است. این اینترفیس به عنوان یک درخواست برای اجرای عملیات عمل می‌کند.

## ویژگی‌های کلیدی

1. **تعریف Command**:
   - تعریف یک Command برای اجرای عملیات
   - استفاده از این اینترفیس برای مدیریت درخواست‌های اجرایی

## ساختار کد

```csharp
public interface ICommand : IRequest<Result>, IBaseCommand
{
}

public interface ICommand<TResponse> : IRequest<Result<TResponse>>, IBaseCommand
{
}

public interface IBaseCommand
{
}
```

## نحوه کار

1. **تعریف Command**:
   - تعریف یک Command برای اجرای عملیات
   - استفاده از این اینترفیس برای مدیریت درخواست‌های اجرایی

## مزایای این طراحی

1. **جداسازی مسئولیت‌ها**:
   - هر اینترفیس تنها یک وظیفه مشخص دارد
   - رعایت اصل Single Responsibility

2. **قابلیت استفاده مجدد**:
   - استفاده از این اینترفیس در سراسر سیستم برای مدیریت درخواست‌های اجرایی
   - کاهش تکرار کد

</div>