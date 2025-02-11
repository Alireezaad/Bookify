import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bookify",
  description: "Alireza Abasi",
  head: [['link', { rel: 'icon', href: '/icon2.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon2.png',
    nav: [
      { text: "Home", link: "/", },
      { text: 'Team', link: '/team' }, 
    ],
    footer: {
      message: 'Alireza Abasi - Released under the MIT License.',
      copyright: 'Copyright © 2025-present Bookify Team'
    },
    search: {
      provider: 'local' // or use 'algolia' for Algolia search
    },
    sidebar: [
      {
        text: "Domain Layer",
        collapsed: true,
        items: [
          { text: "Overview", link: "/docs/domain-layer/index.md" },
          { text: "Abstractions", collapsed: true,
            items:[
              {text: "Entity", link:"/docs/domain-layer/Abstractions/entity.md"},
              {text: "IDomainEvent", link:"/docs/domain-layer/Abstractions/IDomainEvent.md"},
              {text: "IUnitOfWork", link:"/docs/domain-layer/Abstractions/IUnitOfWork.md"},
            ]
           },
          { text: "Apartment", link: "/docs/domain-layer/Apartment/apartment.md", collapsed: true,
                items:[
                  { text: "ValueObjects", link:"/docs/domain-layer/Apartment/apartmentValueObjects.md"},
                  { text: "IApartmentRepository", link:"/docs/domain-layer/Apartment/iapartmentRepository.md"},
                ]
               },
          { text: "User", link: "/docs/domain-layer/User/user.md", collapsed: true,
                items:[
                  {text: "ValueObjects", link:"/docs/domain-layer/User/userValueObjects.md"},
                  {text: "Events", link: "/docs/domain-layer/User/userEvents.md"},
                  {text: "IUserRepository", link: "/docs/domain-layer/User/iuserRepository.md"}
                ]
          },
          { text: "Booking", link: "/docs/domain-layer/Booking/booking.md", collapsed: true,
            items:[
              {text: "ValueObjects", link:"/docs/domain-layer/Booking/bookingValueObjects.md"},
              {text: "Events", link: "/docs/domain-layer/Booking/bookingEvents.md"},
              {text: "PricingService", link: "/docs/domain-layer/Booking/pricingService.md"},
              {text: "BookingErrors", link: "/docs/domain-layer/Booking/bookingErrors.md"},
            ]
          },
          { text: "Shared", collapsed: true,
            items:[
              {text: "Currency", link:"/docs/domain-layer/Shared/currency.md"},
              {text: "Money", link: "/docs/domain-layer/Shared/money.md"},
            ]
          }

        ],
      },
      {
        text: "Application Layer",
        collapsed: true,
        items: [
          { text: "Overview", link: "/docs/application-layer/index.md" },
          { text: "Abstractions", collapsed: true, items:[
            { text: "Clock", items:[
              { text: "IDateTimeProvider", link: "/docs/application-layer/abstractions/clock/IDateTimeProvider.md" },
            ] },
            { text: "Data", items:[
              { text: "ISqlConnectionFactory", link: "/docs/application-layer/abstractions/data/ISqlConnectionFactory.md" },
            ] },
            { text: "Email", items:[
              { text: "IEmailService", link: "/docs/application-layer/abstractions/email/IEmailService.md" },
            ] },
            { text: "Messaging", collapsed: true, items:[
              { text: "IQuery", link: "/docs/application-layer/abstractions/messaging/IQuery.md" },
              { text: "IQueryHandler", link: "/docs/application-layer/abstractions/messaging/IQueryHandler.md" },
              { text: "ICommand", link: "/docs/application-layer/abstractions/messaging/ICommand.md" },
              { text: "ICommandHandler", link: "/docs/application-layer/abstractions/messaging/ICommandHandler.md" },
            ] },
          ] },
          { text: "Apartments", collapsed: true, items:[
            { text: "SearchApartments", collapsed: true,
              items: [
                { text: "SearchApartmentsQuery", link: "/docs/application-layer/apartments/searchapartments/searchapartmentsquery.md" },
                { text: "SearchApartmentsQueryHandler", link: "/docs/application-layer/apartments/searchapartments/searchapartmentsqueryhandler.md" },
                { text: "ApartmentResponse", link: "/docs/application-layer/apartments/searchapartments/apartmentresponse.md" },
                { text: "AddressResponse", link: "/docs/application-layer/apartments/searchapartments/addressresponse.md" },
              ]
            },
          ] },
          {
            text: "Bookings", collapsed: true,
            items: [
              { text: "GetBooking", collapsed: true,
                items: [
                  { text: "GetBookingQuery", link: "/docs/application-layer/bookings/getbooking/getbookingquery.md" },
                  { text: "GetBookingQueryHandler", link: "/docs/application-layer/bookings/getbooking/getbookingqueryhandler.md" },
                  { text: "BookingResponse", link: "/docs/application-layer/bookings/getbooking/bookingresponse.md" },
                ]
              },
              { text: "ReserveBooking", collapsed: true,
                items: [
                  { text: "ReserveBookingCommand", link: "/docs/application-layer/bookings/reservebooking/reservebookingcommand.md" },
                  { text: "ReserveBookingCommandHandler", link: "/docs/application-layer/bookings/reservebooking/reservebookingcommandhandler.md" },
                  { text: "ReserveBookingCommandValidator", link: "/docs/application-layer/bookings/reservebooking/reservebookingcommandvalidator.md" },
                  { text: "BookingReservedDomainEventHandler", link: "/docs/application-layer/bookings/reservebooking/bookingreserveddomaineventhandler.md" },
                ]
              },

              { text: "CancelBooking", collapsed: true,
                items: [
                  { text: "CancelBookingCommand", link: "/docs/application-layer/bookings/cancelbooking/cancelbookingcommand.md" },
                  { text: "CancelBookingCommandHandler", link: "/docs/application-layer/bookings/cancelbooking/cancelbookingcommandhandler.md" },
                ]
              },
              { text: "CompleteBooking", collapsed: true,
                items: [
                  { text: "CompleteBookingCommand", link: "/docs/application-layer/bookings/completebooking/completebookingcommand.md" },
                  { text: "CompleteBookingCommandHandler", link: "/docs/application-layer/bookings/completebooking/completebookingcommandhandler.md" },
                ]
              },
              { text: "ConfirmBooking", collapsed: true,
                items: [
                  { text: "ConfirmBookingCommand", link: "/docs/application-layer/bookings/confirmbooking/confirmbookingcommand.md" },
                  { text: "ConfirmBookingCommandHandler", link: "/docs/application-layer/bookings/confirmbooking/confirmbookingcommandhandler.md" },
                ]
              },
              { text: "RejectBooking", collapsed: true,
                items: [
                  { text: "RejectBookingCommand", link: "/docs/application-layer/bookings/rejectbooking/rejectbookingcommand.md" },
                  { text: "RejectBookingCommandHandler", link: "/docs/application-layer/bookings/rejectbooking/rejectbookingcommandhandler.md" },
                ]
              },
            ]
          },
          { text: "Behaviors", collapsed:true, items:[
            { text: "ValidationBehavior", link: "/docs/application-layer/behaviors/validationbehavior.md" },
            { text: "LoggingBehavior", link: "/docs/application-layer/behaviors/loggingbehavior.md" },
          ] },
          { text: "Exceptions", collapsed:true, items:[
            { text: "ConcurrencyException", link: "/docs/application-layer/exceptions/concurrencyexception.md" },
            { text: "ValidationException", link: "/docs/application-layer/exceptions/validationexception.md" },
            { text: "ValidationError", link: "/docs/application-layer/exceptions/validationerror.md" },
          ] },
          { text: "Dependency Injection", link: "/docs/application-layer/DependecyInjection.md" },
        ],
      },
      {
        text: "Infrastructure Layer",
        collapsed: true,
        items: [
          { text: "Overview", link: "/docs/infrastructure-layer/index.md" },
          { text: "ApplicationDbContext", link: "/docs/infrastructure-layer/ApplicationDbContext.md" },
          { text: "Dependency Injection", link: "/docs/infrastructure-layer/DependencyInjection.md" },
          { text: "Configurations", collapsed: true, items: [
            { text: "ReviewsConfigurations", link: "/docs/infrastructure-layer/Configurations/ReviewsConfigurations.md" },
            { text: "ApartmentConfiguration", link: "/docs/infrastructure-layer/Configurations/ApartmentConfiguration.md" },
            { text: "UserConfiguration", link: "/docs/infrastructure-layer/Configurations/UserConfiguration.md" },
            { text: "BookingConfiguration", link: "/docs/infrastructure-layer/Configurations/BookingConfiguration.md" },
          ] },
          { text: "Repositories", collapsed: true, items: [
            { text: "Repository", link: "/docs/infrastructure-layer/Repositories/Repository.md" },
            { text: "BookingRepository", link: "/docs/infrastructure-layer/Repositories/BookingRepository.md" },
            { text: "ApartmentRepository", link: "/docs/infrastructure-layer/Repositories/ApartmentRepository.md" },
            { text: "UserRepository", link: "/docs/infrastructure-layer/Repositories/UserRepository.md" },
          ] },
          { text: "Data", collapsed: true, items: [
            { text: "DateOnlyTypeHandler", link: "/docs/infrastructure-layer/Data/DateOnlyTypeHandler.md" },
            { text: "SqlConnectionFactory", link: "/docs/infrastructure-layer/Data/SqlConnectionFactory.md" },
          ] },
          { text: "Email", collapsed: true, items: [
            { text: "EmailService", link: "/docs/infrastructure-layer/Email/EmailService.md" },
          ] },
          { text: "Clock", collapsed: true, items: [
            { text: "DateTimeProvider", link: "/docs/infrastructure-layer/Clock/DateTimeProvider.md" },
          ] },
        ],
      },
      {
        text: "API Layer",
        collapsed: true,
        items: [
          { text: "Overview", link: "/docs/api-layer/index.md" },
          { text: "Program", link: "/docs/api-layer/Program.md" },
          { text: "Controllers", collapsed: true, items: [
            { text: "ApartmentsController", link: "/docs/api-layer/Controllers/ApartmentsController.md" },
            { text: "BookingsController", link: "/docs/api-layer/Controllers/BookingsController.md" },
            { text: "ReserveBookingRequest", link: "/docs/api-layer/Controllers/Bookings/ReserveBookingRequest.md" },
          ] },
          { text: "Extensions", collapsed: true, items: [
            { text: "ApplicationBuilderExtensions", link: "/docs/api-layer/Extensions/ApplicationBuilderExtensions.md" },
            { text: "SeedDataExtensions", link: "/docs/api-layer/Extensions/SeedDataExtensions.md" },
          ] },
          { text: "Middleware", collapsed: true, items: [
            { text: "ExceptionHandlingMiddleware", link: "/docs/api-layer/Middleware/ExceptionHandlingMiddleware.md" },
          ] },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Alireezaad/Bookify" },
      { icon: "telegram", link: "https://t.me/vortex22" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/alireza-abasi-7000000000000000000/" },
      { icon: "whatsapp", link: "https://wa.me/989023007950" },
    ],
  },
});