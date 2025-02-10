<div dir="rtl">

# کلاس ApartmentResponse

این کلاس مسئول ارائه اطلاعات مربوط به آپارتمان‌ها است. این کلاس شامل اطلاعات کامل آپارتمان می‌باشد.

## ویژگی‌های کلیدی

1. **اطلاعات آپارتمان**:
   - شامل شناسه، نام، توضیحات، قیمت و ارز
   - شامل اطلاعات آدرس با استفاده از کلاس AddressResponse

## ساختار کد

```csharp
public sealed class ApartmentResponse
{
    public Guid Id { get; init; }

    public string Name { get; init; }

    public string Description { get; init; }

    public decimal Price { get; init; }

    public string Currency { get; init; }

    public AddressResponse Address { get; set; }
}
```

## نحوه کار

1. **ارائه اطلاعات آپارتمان**:
   - ارائه اطلاعات کامل آپارتمان به صورت ساختار یافته
   - استفاده از این کلاس برای نمایش اطلاعات آپارتمان در سیستم

## مزایای این طراحی

1. **ارائه اطلاعات دقیق**:
   - ارائه اطلاعات دقیق از آپارتمان‌ها
   - افزایش خوانایی و نگهداری‌پذیری کد

2. **قابلیت استفاده مجدد**:
   - استفاده از این کلاس در سراسر سیستم برای نمایش اطلاعات آپارتمان
   - کاهش تکرار کد

</div>