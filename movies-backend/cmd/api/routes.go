package main

import (
	"net/http"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func (app *application) routes() http.Handler {
	// create router mux (multiplexer)
	mux := chi.NewRouter()

	mux.Use(middleware.Recoverer) // when application errors, logs with location of error, and brings appl back 
	mux.Use(app.enableCORS)

	mux.Get("/", app.Home)
	mux.Get("/movies", app.AllMovies)

	return mux
}