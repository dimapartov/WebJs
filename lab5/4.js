const commands = [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
];

var movies = [];

class Movie {
    constructor(name, director, date) {
        this.name = name;
        this.director = director;
        this.date = date;
    }
    printJSON() {
        if (this.name && this.director && this.date)
            console.log(JSON.stringify(this));
    }
}
function movieFunction(commands) {
    for (command of commands) {
        if (command.split(" ")[0] == 'addMovie') {
            movies.push(new Movie(command.split('addMovie')[1].trim()));
        } else if (command.includes("directedBy")) {
            movie = getMovie(command.split('directedBy')[0].trim());
            if (movie) {
                movie.director = command.split('directedBy')[1].trim();
            }
        } else if (command.includes("onDate")) {
            movie = getMovie(command.split('onDate')[0].trim());
            if (movie) {
                movie.date = command.split('onDate')[1].trim();
            }
        }
    }
    function getMovie(movieName) {
        for (let movie of movies) {
            if (movie.name === movieName) {
                return movie;
            }
        }
        return null;
    }
}
movieFunction(commands);
movies.forEach(movie => movie.printJSON());