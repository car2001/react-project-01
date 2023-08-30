const API ="https://api.themoviedb.org/3"


export function get(path){

    return fetch(API + path, {
        headers : {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTk3YzQxYTA2NDIwZjk2NDk5ZjUyN2QyMDYzODgwZiIsInN1YiI6IjY0ZWRlNjQ2ODM5MDE4MDBjODhiZTc4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H0HLHwLl1WqtVjoga-isDbWsi2yWF3hPRGGkufrA0So"
        }
    }).then(response => response.json());

}