/* eslint-disable */
import moment from 'moment';

export const labels = [
    {
        id   : 'bbc73458-940b-421c-8d5f-8dcd23a9b0d6',
        title: 'Disponible'
    },
    {
        id   : 'e2f749f5-41ed-49d0-a92a-1c83d879e371',
        title: 'Separadas'
    },
    {
        id   : 'f47c92e5-20b9-44d9-917f-9ff4ad25dfd0',
        title: 'Inconclusas'
    },
    
    {
        id   : '6c288794-47eb-4605-8bdf-785b61a449d3',
        title: 'Confirmadas'
    },
    {
        id   : 'b1cde9ee-e54d-4142-ad8b-cf55dafc9528',
        title: 'Cumplidas'
    }
    
];

export const notes = [
    {
        id       : '8f011ac5-b71c-4cd7-a317-857dcd7d85e0',
        title    : '',
        content  : '7:00 am - 7:30 am',
        tasks    : null,
        image    : null,
        reminder : null,
        labels   : ['bbc73458-940b-421c-8d5f-8dcd23a9b0d6'],
        archived : false,
        createdAt: moment().hour(10).minute(19).subtract(98, 'day').toISOString(),
        updatedAt: null
    },
    {
        id       : '8f011ac5-b71c-4cd7-a317-857dcd7d85e0',
        title    : '',
        content  : '8:00 am - 8:30 am',
        tasks    : null,
        image    : null,
        reminder : null,
        labels   : ['bbc73458-940b-421c-8d5f-8dcd23a9b0d6'],
        archived : false,
        createdAt: moment().hour(10).minute(19).subtract(98, 'day').toISOString(),
        updatedAt: null
    },
    {
        id       : 'ffd20f3c-2d43-4c6b-8021-278032fc9e92',
        title    : '8:00 am/ 8:30 am | Agendado por: Nicolas gutierrez ',
        content  : 'Juan Sebastian Gil Villa 3204502314 - 45288314 | Colmedica Medicina Prepagada',
        tasks    : [
            {
                id       : '330a924f-fb51-48f6-a374-1532b1dd353d',
                content  : 'Consulta de primera vez por especialista en pediatria - Dr Fabio Rivera',
                completed: false
            },
            {
                id       : '781855a6-2ad2-4df4-b0af-c3cb5f302b40',
                content  : 'Imuno terapia - Dra Maria camila Sanint',
                completed: true
            }
        ],
        image    : null,
        reminder : null,
        labels   : ['f47c92e5-20b9-44d9-917f-9ff4ad25dfd0'],
        archived : false,
        createdAt: moment().hour(16).minute(4).subtract(47, 'day').toISOString(),
        updatedAt: null
    },
    
   
  
    {
        id       : 'ffd20f3c-2d43-4c6b-8021-278032fc9e92',
        title    : '8:30 am/ 9:00 am Viviana Alejandra Villa 3204502314 - 45288314',
        content  : 'Colmedica Medicina Prepagada | Consulta de primera vez por especialista en pediatria',
        tasks    : [
            {
                id       : '330a924f-fb51-48f6-a374-1532b1dd353d',
                content  : 'Consulta de primera vez por especialista en pediatria',
                completed: false
            },
            {
                id       : '781855a6-2ad2-4df4-b0af-c3cb5f302b40',
                content  : 'Imuno terapia',
                completed: true
            }
        ],
        image    : null,
        reminder : null,
        labels   : ['f47c92e5-20b9-44d9-917f-9ff4ad25dfd0'],
        archived : false,
        createdAt: moment().hour(16).minute(4).subtract(47, 'day').toISOString(),
        updatedAt: null
    },
    {
        id       : '8f011ac5-b71c-4cd7-a317-857dcd7d85e0',
        title    : '',
        content  : '2:00 pm - 2:30 pm',
        tasks    : null,
        image    : null,
        reminder : null,
        labels   : ['bbc73458-940b-421c-8d5f-8dcd23a9b0d6'],
        archived : false,
        createdAt: moment().hour(10).minute(19).subtract(98, 'day').toISOString(),
        updatedAt: null
    },
];
