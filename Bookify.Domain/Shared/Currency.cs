using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bookify.Domain.Shared
{
    public record Currency
    {
        internal readonly static Currency Usd = new("USD");
        public readonly static Currency Eur = new("EUR");
        public readonly static Currency None = new("");

        public string Code { get; init; }

        private Currency(string code) => Code = code;

        public static Currency FromCode(string code)
        {
            return All.FirstOrDefault(c => c.Code == code) ?? throw new ApplicationException("The currency code is invalid");
        }

        public readonly static IReadOnlyCollection<Currency> All = [Usd, Eur, None];
    }
}
