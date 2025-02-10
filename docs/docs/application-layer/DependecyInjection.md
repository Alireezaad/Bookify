<div dir="rtl">

# کلاس DependencyInjection

این کلاس مسئول تنظیم وابستگی‌ها در لایه Application است. این کلاس از الگوی Dependency Injection برای مدیریت وابستگی‌ها استفاده می‌کند.

## توضیحات خط به خط

1. **تعریف کلاس**:
   - `public static class DependencyInjection`: این خط یک کلاس استاتیک به نام `DependencyInjection` تعریف می‌کند که نمی‌تواند نمونه‌سازی شود و معمولاً برای نگهداری متدهای استاتیک استفاده می‌شود.

2. **تعریف متد AddApplication**:
   - `public static IServiceCollection AddApplication(this IServiceCollection services)`: این خط یک متد استاتیک به نام `AddApplication` تعریف می‌کند که یک `IServiceCollection` را به عنوان ورودی می‌پذیرد و یک `IServiceCollection` را برمی‌گرداند. این متد به عنوان یک متد توسعه‌دهنده برای `IServiceCollection` عمل می‌کند.

3. **افزودن MediatR**:
   - `services.AddMediatR(configuration =>`: این بخش از کد، MediatR را به مجموعه خدمات اضافه می‌کند. MediatR یک کتابخانه برای پیاده‌سازی الگوی CQRS است. 
   - `configuration.RegisterServicesFromAssembly(typeof(DependencyInjection).Assembly);`: این خط تمام خدمات موجود در اسمبلی فعلی را ثبت می‌کند.
   - `configuration.AddOpenBehavior(typeof(LoggingBehavior<,>));`: این خط رفتار مشترک `LoggingBehavior` را به MediatR اضافه می‌کند.
   - `configuration.AddOpenBehavior(typeof(ValidationBehavior<,>));`: این خط رفتار مشترک `ValidationBehavior` را به MediatR اضافه می‌کند.

4. **افزودن اعتبارسنج‌ها**:
   - `services.AddValidatorsFromAssembly(typeof(DependencyInjection).Assembly);`: این خط تمام اعتبارسنج‌های موجود در اسمبلی فعلی را به مجموعه خدمات اضافه می‌کند. این اعتبارسنج‌ها برای اعتبارسنجی داده‌ها در سیستم استفاده می‌شوند.

5. **افزودن PricingService**:
   - `services.AddTransient<PricingService>();`: این خط یک نمونه از `PricingService` را به عنوان یک وابستگی گذرا به مجموعه خدمات اضافه می‌کند. وابستگی‌های گذرا هر بار که درخواست می‌شوند، نمونه‌سازی می‌شوند.

6. **بازگشت مجموعه خدمات**:
   - `return services;`: این خط مجموعه خدمات را برمی‌گرداند تا بتواند در جای دیگری در برنامه استفاده شود.

7. **پایان متد و کلاس**:
   - `}`: این خط پایان متد `AddApplication` را نشان می‌دهد.
   - `}`: این خط پایان کلاس `DependencyInjection` را نشان می‌دهد.

## ویژگی‌های کلیدی

1. **تنظیم وابستگی‌ها**:
   - افزودن و تنظیم وابستگی‌های مورد نیاز در لایه Application
   - استفاده از MediatR برای مدیریت رفتارهای مشترک

## ساختار کد

```csharp
public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddMediatR(configuration =>
        {
            configuration.RegisterServicesFromAssembly(typeof(DependencyInjection).Assembly);

            configuration.AddOpenBehavior(typeof(LoggingBehavior<,>));

            configuration.AddOpenBehavior(typeof(ValidationBehavior<,>));
        });

        services.AddValidatorsFromAssembly(typeof(DependencyInjection).Assembly);

        services.AddTransient<PricingService>();

        return services;
    }
}
```

## نحوه کار

1. **تنظیم وابستگی‌ها**:
   - افزودن و تنظیم وابستگی‌های مورد نیاز در لایه Application
   - استفاده از MediatR برای مدیریت رفتارهای مشترک

## مزایای این طراحی

1. **مدیریت متمرکز وابستگی‌ها**:
   - استفاده از کلاس‌های اختصاصی برای مدیریت وابستگی‌ها
   - افزایش خوانایی و نگهداری‌پذیری کد

2. **افزایش تست‌پذیری**:
   - استفاده از الگوی Dependency Injection برای افزایش تست‌پذیری
   - کاهش وابستگی‌های سخت‌کد شده

</div>