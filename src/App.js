import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {

    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = async () => {
        const {
            data: {
                data: {movies},
            },
        } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        this.setState({movies, isLoading: false})
    };

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Загрузка...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map(({genres, id, medium_cover_image, summary, title, year}) => (
                            <Movie
                                key={id}
                                id={id}
                                year={year}
                                title={title}
                                summary={summary}
                                poster={medium_cover_image}
                                genres={genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default App;