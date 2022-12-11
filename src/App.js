import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col"
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';


const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchMovies, setSearchMovies]  = useState(null)

	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=avengers&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

	console.log(responseJson);
  setMovies(responseJson.Search);
			
		};
	

	useEffect(() => {
		getMovieRequest();
	}, []);

  const searchBox = async (searchValue) => 
  { 
   
    if (searchValue.lenght < 3 )  return
      
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
    console.log(responseJson);
    

    
    
 

  }

	return (
		<div >
			<Row >
       <Col>
      <Header/>
				</Col>
			</Row>
      <Hero />

      <Container>
      <SearchBox searchBox={searchBox}/>
      </Container>

      
          <div className="ca">
        <MovieListHeading heading='Category'/>
    </div>
       <div className="fl">
        <div className="fll">
    
      <MovieList movies={movies} searchMovies={searchMovies} /> 
      </div>
        </div>
     
        <div className="ca">
        <MovieListHeading heading='Category'/>
    </div>
        <div className="fl">
        <div className="fll">
     
      <MovieList movies={movies} /> 
      </div>
        </div>
       
		</div>
	);
};

export default App;