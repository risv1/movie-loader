package main

import (
	"fmt"
	"log"
	"net/http"
)

const port = 8080

type application struct {
	Domain string
}

func main() {
	// set application config (type that stores bits of info)
	var app application
	// read from command line

	// connect to database

	app.Domain = "example.com"

	log.Println("Starting application on port", port)

	// start web server
	err := http.ListenAndServe(fmt.Sprintf("127.0.0.1:%d", port), app.routes())
	if err!=nil{
		log.Fatal(err)
	}
}