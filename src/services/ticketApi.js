import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ticketApi = createApi({
  reducerPath: "ticketApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cscticketapi.onrender.com/"
  }),
  endpoints: (builder) => ({
    getTickets: builder.query({
      query: () => "tickets",
    }),
    searchTicket: builder.mutation({
      query: (ticketData) => ({
        url: `api/flights/trips`,
        method: 'GET',
        params: {
          from: ticketData?.leavingPort,  
          to: ticketData?.goingPort,  
        },
      }),
    }), 
  }),
});

export const { useGetTicketsQuery, useSearchTicketMutation } = ticketApi;

