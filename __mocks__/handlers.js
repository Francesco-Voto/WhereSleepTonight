import {rest} from 'msw';

export const handlers = [
  rest.get(
    'https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507?id=12321',
    (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 12321,
            name: 'Park Plaza London Waterloo',
            location: {
              address: '6 Hercules Road',
              city: 'London',
              latitude: 51.49845,
              longitude: -0.11343,
            },
            stars: 4,
            checkIn: {
              from: '14:00',
              to: '20:00',
            },
            checkOut: {
              from: '07:00',
              to: '10:00',
            },
            contact: {
              phoneNumber: '+39 24322342',
              email: 'park_plaza@gmail.com',
            },
            gallery: [
              'https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1499779963/Swindon_yjsrwz.jpg',
            ],
            userRating: 9.8,
            price: 120,
            currency: 'EUR',
          },
          {
            id: 12322,
            name: 'Belgrave House Hotel',
            location: {
              address: '28-32 Belgrave Road Victoria',
              city: 'London',
              latitude: 51.49241,
              longitude: -0.14283,
            },
            stars: 4,
            checkIn: {
              from: '12:00',
              to: '20:00',
            },
            checkOut: {
              from: '07:00',
              to: '10:00',
            },
            contact: {
              phoneNumber: '+44 5477432',
              email: 'belgrave@gmail.com',
            },
            gallery: [
              'https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584265/g8wzbaqahffteguzal5d.jpg',
              'https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584267/zvpg4qui6pqp6t9lzmfz.jpg',
              'https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584269/storgpwbactbomqnevn5.jpg',
              'https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1491054438/Living_Area_26_7_mdxypk.jpg',
              'https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1491054438/Living_Area_25_6_rkyqhx.jpg',
              'https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1491054437/Guestroom_31_9_s2va2b.jpg',
              'https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1491054437/Guestroom_32_4_rpuq3s.jpg',
            ],
            userRating: 7.8,
            price: 100,
            currency: 'EUR',
          },
        ]),
      );
    },
  ),
];
