POST /movies
Content-Type: application/json
{
  "title": "Inception",
  "director": "Christopher Nolan",
  "releaseYear": 2010,
  "genre": "Sci-Fi"
}

GET /movies

GET /movies/:id

PUT /movies/:id
Content-Type: application/json
{
  "title": "Inception Updated",
  "director": "Christopher Nolan",
  "releaseYear": 2010,
  "genre": "Sci-Fi"
}

DELETE /movies/:id



POST /reviews
Content-Type: application/json
{
  "movieId": "movieId",
  "userId": "userId",
  "rating": 5,
  "comment": "Amazing movie!"
}

GET /reviews

GET /reviews/:id

PUT /reviews/:id
Content-Type: application/json
{
  "rating": 4,
  "comment": "Great movie!"
}

DELETE /reviews/:id

GET /movies/:id/reviews: 

POST /users/register
Content-Type: application/json
{
  "username": "newuser",
  "email": "newuser@example.com",
  "password": "password123"
}


POST /users/login
Content-Type: application/json
{
  "email": "newuser@example.com",
  "password": "password123"
}
