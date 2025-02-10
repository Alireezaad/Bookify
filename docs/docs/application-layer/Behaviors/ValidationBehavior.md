 <div dir="rtl">

# کلاس ValidationBehavior

این کلاس مسئول اعتبارسنجی درخواست‌ها در سیستم است. این کلاس از FluentValidation برای اعتبارسنجی داده‌ها استفاده می‌کند و به عنوان یک Behavior در MediatR عمل می‌کند.

## ویژگی‌های کلیدی

1. **اعتبارسنجی درخواست‌ها**:
   - بررسی صحت داده‌های ورودی
   - استفاده از FluentValidation برای تعریف قوانین اعتبارسنجی

2. **Pipeline Behavior**:
   - استفاده از MediatR برای مدیریت رفتارهای مشترک
   - افزایش تست‌پذیری و انعطاف‌پذیری

## ساختار کد

```csharp
public class ValidationBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse> where TRequest : IBaseCommand
{
    private readonly IEnumerable<IValidator<TRequest>> _validators;

    public ValidationBehavior(IEnumerable<IValidator<TRequest>> validators)
    {
        _validators = validators;
    }

    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {
        if (!_validators.Any())
        {
            return await next();
        }

        var context = new ValidationContext<TRequest>(request);

        var validationErrors = _validators
            .Select(validator => validator.Validate(context))
            .Where(validationResult => validationResult.Errors.Any())
            .SelectMany(validationResult => validationResult.Errors)
            .Select(validationFailure => new ValidationError(
                validationFailure.PropertyName,
                validationFailure.ErrorMessage))
            .ToList();

        if (validationErrors.Any())
        {
            throw new Exceptions.ValidationException(validationErrors);
        }

        return await next();
    }
}
```

## نحوه کار

1. **اعتبارسنجی داده‌ها**:
   - بررسی داده‌های ورودی بر اساس قوانین تعریف شده
   - پرتاب خطا در صورت وجود خطاهای اعتبارسنجی

2. **مدیریت رفتارها**:
   - استفاده از MediatR برای مدیریت رفتارهای مشترک
   - افزایش خوانایی و نگهداری‌پذیری کد

## مزایای این طراحی

1. **قابلیت استفاده مجدد**:
   - استفاده از قوانین اعتبارسنجی مشترک در سراسر سیستم
   - کاهش تکرار کد

2. **قابلیت تست‌پذیری بالا**:
   - امکان تست رفتارهای مشترک به صورت مجزا
   - افزایش قابلیت اطمینان سیستم

3. **مدیریت خطا**:
   - استفاده از الگوی Validation برای مدیریت خطاها
   - بازگشت پیام‌های خطای معنادار

</div>