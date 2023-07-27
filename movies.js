class Movie{
   constructor(title,studio,rating){
   this.movieName=title;
   this.movieStudio=studio;
   this.movieRating=rating;

}

getPG(movies=[],rating=" ") {

    return movies.filter((m)=> {
        return m.movieRating === rating;
    });
}}

  let  casionRoyaleMovie = new Movie('Casion Royale', 'Eon Productions', 'PG13');
  let minions = new Movie ('Minions','Universal Picture Productions', 'R');
  const vikram = new Movie ('vikram','Rajkamal Productions ', 'PG13');
  const ponniyinSelvan = new Movie ('PonniyinSelvan','Lyca Productions', 'PG');
  const kgf = new Movie ('kgf','Hombale Productions', 'PG');

  const moviesArray = [casionRoyaleMovie, kgf,vikram, ponniyinSelvan, minions];

  console.log(casionRoyaleMovie.getPG(moviesArray,'R'));
  console.log(kgf.getPG(moviesArray,'PG'));
  console.log(kgf.getPG(moviesArray,'PG13'));

  