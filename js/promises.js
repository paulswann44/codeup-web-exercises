(async function() {

    const options = {
        method: "GET",
        headers: {
            'Authorization': GIT_TOKEN
        }
    }
//Part #1
    function githubUsername(username) {
        return fetch(`https://api.github.com/users/${username}/events/public`, options)
            .then((response) => response.json());


    }
//Part #2
    const lastCommit = await githubUsername("paulswann44")
    console.log(lastCommit[0].created_at)


})();