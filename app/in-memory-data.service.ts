export class InMemoryDataService {
    createDb(){
        let heroes = [
            {id: 11, name: 'Mr. Nice', place:'what'},
            {id: 12, name: 'Narco', place:'what'},
            {id: 13, name: 'Bombasto', place:'what'},
            {id: 14, name: 'Celeritas', place:'what'},
            {id: 15, name: 'Magneta', place:'what'},
            {id: 16, name: 'RubberMan', place:'what'},
            {id: 17, name: 'Dynama', place:'what'},
            {id: 18, name: 'Dr IQ', place:'what'},
            {id: 19, name: 'Magma', place:'what'},
            {id: 20, name: 'Tornado', place:'what'}
        ];
        return {heroes};
    }
}