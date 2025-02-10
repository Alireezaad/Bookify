 <div dir="rtl">

# کلاس LoggingBehavior

این کلاس مسئول ثبت لاگ‌های مربوط به درخواست‌ها و پاسخ‌ها در سیستم است. این کلاس از MediatR برای مدیریت رفتارهای مشترک استفاده می‌کند و به عنوان یک Behavior عمل می‌کند.

## ویژگی‌های کلیدی

1. **ثبت لاگ‌ها**:
   - ثبت لاگ‌های مربوط به شروع و پایان پردازش درخواست‌ها
   - استفاده از ILogger برای مدیریت لاگ‌ها

2. **Pipeline Behavior**:
   - استفاده از MediatR برای مدیریت رفتارهای مشترک
   - افزایش تست‌پذیری و انعطاف‌پذیری

## ساختار کد

```csharp
public class LoggingBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse> where TRequest : IBaseCommand
{
    private readonly ILogger<TRequest> _logger;

    public LoggingBehavior(ILogger<TRequest> logger)
    {
        _logger = logger;
    }

    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {
        var name = request.GetType();

        try
        {
            _logger.LogInformation("Executing command {command}", name);

            var result = await next();

            _logger.LogInformation("Command {command} executed successfully", name);

            return result;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Command {command} processing failed", name);
            throw;
        }
    }
}
```

## نحوه کار

1. **ثبت لاگ‌ها**:
   - ثبت لاگ‌های مربوط به شروع و پایان پردازش درخواست‌ها
   - استفاده از ILogger برای مدیریت لاگ‌ها

2. **مدیریت رفتارها**:
   - استفاده از MediatR برای مدیریت رفتارهای مشترک
   - افزایش خوانایی و نگهداری‌پذیری کد

## مزایای این طراحی

1. **قابلیت استفاده مجدد**:
   - استفاده از رفتارهای مشترک در سراسر سیستم
   - کاهش تکرار کد

2. **قابلیت تست‌پذیری بالا**:
   - امکان تست رفتارهای مشترک به صورت مجزا
   - افزایش قابلیت اطمینان سیستم

3. **مدیریت خطا**:
   - استفاده از الگوی Logging برای مدیریت خطاها
   - بازگشت پیام‌های خطای معنادار

</div>