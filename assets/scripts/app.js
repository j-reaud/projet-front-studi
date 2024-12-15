import { Octokit, App } from "https://esm.sh/octokit";

// instantier la class ocktokit
const octokit = new Octokit({});

// octokit.rest.repos => provient du SDK 
// get => Méthode du SDK pour récupérer ici les repos. 
octokit.rest.repos
    .get({
        owner:"j-reaud"
    })
    .then(({data}) => {
        console.log("Followers", data)
    });
 