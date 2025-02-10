 <div dir="rtl">

# کلاس SearchApartmentsQueryHandler

این کلاس مسئول پردازش درخواست‌های جستجوی آپارتمان‌ها است. این کلاس از الگوی CQRS پیروی می‌کند و به عنوان یک Query Handler عمل می‌کند.

## ویژگی‌های کلیدی

1. **پردازش جستجوی آپارتمان‌ها**:
   - مدیریت تراکنش‌ها و ذخیره‌سازی
   - استفاده از الگوی Query Handler برای جداسازی مسئولیت‌ها

2. **Dependency Injection**:
   - استفاده از DI برای مدیریت وابستگی‌ها
   - افزایش تست‌پذیری و انعطاف‌پذیری

## ساختار کد

```csharp
internal sealed class SearchApartmentsQueryHandler : IQueryHandler<SearchApartmentsQuery, IReadOnlyList<ApartmentResponse>>
{
    private readonly ISqlConnectionFactory _sqlConnectionFactory;
    private static readonly int[] ActiveBookingStatuses =
        [
        (int)BookingStatus.Reserved,
        (int)BookingStatus.Confirmed,
        (int)BookingStatus.Completed,
        ];
    public SearchApartmentsQueryHandler(ISqlConnectionFactory sqlConnectionFactory)
    {
        _sqlConnectionFactory = sqlConnectionFactory;
    }

    public async Task<Result<IReadOnlyList<ApartmentResponse>>> Handle(SearchApartmentsQuery request, CancellationToken cancellationToken)
    {
        if(request.StartDate > request.EndDate)
        {
            return new List<ApartmentResponse>();
        }

        using var connection = _sqlConnectionFactory.CreateConnection();

        var sql = """
                  SELECT
                      a.id AS Id,
                      a.name AS Name,
                      a.description AS Description,
                      a.price_amount AS Price,
                      a.price_currency AS Currency,
                      a.address_country AS Country,
                      a.address_state AS State,
                      a.address_zip_code AS ZipCode,
                      a.address_city AS City,
                      a.address_street AS Street
                  FROM apartments AS a
                  WHERE NOT EXISTS
                  (
                      SELECT 1
                      FROM bookings AS b
                      WHERE
                          b.apartment_id = a.id AND
                          b.duration_start <= @EndDate AND
                          b.duration_end >= @StartDate AND
                          b.status = ANY(@ActiveBookingStatuses)
                  )
                  """;

        var apartments = await connection.QueryAsync<ApartmentResponse, AddressResponse, ApartmentResponse>(sql,
            (apartment, address) =>
            {
                apartment.Address = address;
                return apartment;
            },
            new
            {
                request.StartDate,
                request.EndDate,
                ActiveBookingStatuses
            },
            splitOn: "Country");

        return apartments.ToList();
    }
}
```

## نحوه کار

1. **دریافت درخواست**:
   - دریافت اطلاعات جستجوی آپارتمان‌ها
   - اعتبارسنجی اولیه داده‌ها توسط Validator

2. **پردازش درخواست**:
   - بررسی وجود آپارتمان‌ها
   - جستجوی آپارتمان‌ها و مدیریت تراکنش‌ها

3. **ذخیره‌سازی**:
   - ذخیره تغییرات با استفاده از UnitOfWork
   - بازگرداندن نتیجه در صورت موفقیت

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