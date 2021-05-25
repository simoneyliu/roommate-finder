export const schema = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  type: 'object',
  properties: {
    '@context': {
      type: 'string',
    },
    '@type': {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    numberOfRooms: {
      type: 'integer',
    },
    occupancy: {
      type: 'object',
      properties: {
        '@type': {
          type: 'string',
        },
        minValue: {
          type: 'integer',
        },
        maxValue: {
          type: 'integer',
        },
      },
      required: ['@type', 'minValue', 'maxValue'],
    },
    floorLevel: {
      type: 'integer',
    },
    floorSize: {
      type: 'object',
      properties: {
        '@type': {
          type: 'string',
        },
        value: {
          type: 'integer',
        },
        unitCode: {
          type: 'string',
        },
      },
      required: ['@type', 'value', 'unitCode'],
    },
    numberOfBathroomsTotal: {
      type: 'integer',
    },
    numberOfBedrooms: {
      type: 'integer',
    },
    petsAllowed: {
      type: 'boolean',
    },
    tourBookingPage: {
      type: 'string',
    },
    yearBuilt: {
      type: 'integer',
    },
    telephone: {
      type: 'string',
    },
    address: {
      type: 'object',
      properties: {
        '@type': {
          type: 'string',
        },
        addressCountry: {
          type: 'string',
        },
        addressLocality: {
          type: 'string',
        },
        addressRegion: {
          type: 'string',
        },
        postalCode: {
          type: 'string',
        },
        streetAddress: {
          type: 'string',
        },
      },
      required: ['@type', 'addressCountry', 'addressLocality', 'addressRegion', 'postalCode', 'streetAddress'],
    },
    latitude: {
      type: 'number',
    },
    longitude: {
      type: 'number',
    },
  },
  required: [
    '@context',
    '@type',
    'name',
    'description',
    'numberOfRooms',
    'occupancy',
    'floorLevel',
    'floorSize',
    'numberOfBathroomsTotal',
    'numberOfBedrooms',
    'petsAllowed',
    'tourBookingPage',
    'yearBuilt',
    'telephone',
    'address',
    'latitude',
    'longitude',
  ],
};
