 <div dir="rtl">

# اینترفیس ICommandHandler

این اینترفیس مسئول پردازش Command‌ها در سیستم است. این اینترفیس به عنوان یک پردازشگر برای درخواست‌های اجرایی عمل می‌کند.

## ویژگی‌های کلیدی

1. **پردازش Command**:
   - پردازش یک Command برای اجرای عملیات
   - استفاده از این اینترفیس برای مدیریت پردازش درخواست‌های اجرایی

## ساختار کد

```csharp
public interface ICommandHandler<TCommand> : IRequestHandler<TCommand, Result> where TCommand : ICommand
{
}

public interface ICommandHandler<TCommand, TResponse> : IRequestHandler<TCommand, Result<TResponse>> where TCommand : ICommand<TResponse>
{
}
```

## نحوه کار

1. **پردازش Command**:
   - پردازش یک Command برای اجرای عملیات
   - استفاده از این اینترفیس برای مدیریت پردازش درخواست‌های اجرایی

## مزایای این طراحی

1. **جداسازی مسئولیت‌ها**:
   - هر اینترفیس تنها یک وظیفه مشخص دارد
   - رعایت اصل Single Responsibility

2. **قابلیت استفاده مجدد**:
   - استفاده از این اینترفیس در سراسر سیستم برای مدیریت پردازش درخواست‌های اجرایی
   - کاهش تکرار کد

</div>