﻿// Ignore Spelling: Api

using Bookify.Application.Apartments.SearchApartments;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bookify.Api.Controllers.Apartments
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApartmentsController : ControllerBase
    {
        private readonly ISender _sender;

        public ApartmentsController(ISender sender)
        {
            _sender = sender;
        }

        [HttpGet]
        public async Task<IActionResult> SearchApartments(DateOnly start, DateOnly end, CancellationToken cancellationToken)
        {
            var query = new SearchApartmentsQuery(start, end);

            var result = await _sender.Send(query, cancellationToken);

            return Ok(result);
        }
    }
}
