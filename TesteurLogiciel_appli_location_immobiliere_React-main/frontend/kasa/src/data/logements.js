const logements = [
  {
    id: 'a6r0c',
    title: 'Appartement cozy Paris 11e',
    cover: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80',
    pictures: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80'
    ],
    tags: ['Appartement', 'Paris'],
    rating: '4',
    host: { name: 'Marius K', picture: '' },
    description: 'Superbe appartement lumineux au cœur de Paris, idéal pour un séjour en couple ou solo. Proche des transports et des commerces.',
    equipments: ['Wifi', 'Machine à laver', 'Climatisation', 'Cuisine équipée'],
  },
  {
    id: 'b9f2d',
    title: 'Loft industriel Bordeaux',
    cover: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
    pictures: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80'
    ],
    tags: ['Loft', 'Bordeaux'],
    rating: '5',
    host: { name: 'Sophie D', picture: '' },
    description: 'Grand loft au style industriel avec vue panoramique sur la Garonne. Espaces ouverts et déco soignée.',
    equipments: ['Wifi', 'Parking', 'Balcon', 'Lave-vaisselle'],
  },
  {
    id: 'c3e8b',
    title: 'Maison avec jardin Lyon',
    cover: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=600&q=80',
    tags: ['Maison', 'Lyon'],
    rating: '3',
    host: { name: 'Ahmed B', picture: '' },
    description: 'Charmante maison de ville avec jardin privatif à Lyon. Parfait pour les familles.',
    equipments: ['Jardin', 'Barbecue', 'Wifi', 'Machine à laver'],
  },
  {
    id: 'd7k1a',
    title: 'Studio moderne Marseille',
    cover: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80',
    tags: ['Studio', 'Marseille'],
    rating: '4',
    host: { name: 'Lucie M', picture: '' },
    description: 'Studio entièrement rénové à deux pas du Vieux-Port. Idéal pour un court séjour.',
    equipments: ['Wifi', 'Climatisation', 'Cuisine équipée'],
  },
  {
    id: 'e2p4n',
    title: 'Chalet montagne Annecy',
    cover: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=600&q=80',
    tags: ['Chalet', 'Annecy'],
    rating: '5',
    host: { name: 'Pierre R', picture: '' },
    description: 'Chalet authentique au pied des pistes avec vue imprenable sur le lac d\'Annecy.',
    equipments: ['Cheminée', 'Sauna', 'Parking', 'Wifi'],
  },
  {
    id: 'f5q9m',
    title: 'Villa bord de mer Nice',
    cover: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
    pictures: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80'
    ],
    tags: ['Villa', 'Nice'],
    rating: '5',
    host: { name: 'Clara V', picture: '' },
    description: 'Magnifique villa avec piscine privée à 5 minutes de la Promenade des Anglais.',
    equipments: ['Piscine', 'Terrasse', 'Wifi', 'Parking', 'Climatisation'],
  },
]

export default logements
