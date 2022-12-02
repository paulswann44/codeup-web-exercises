(async function() {

    const options = {
        method: "GET",
        headers: {
            'Authorization': GIT_TOKEN
        }
    }

    function githubUsername(username) {
        return fetch(`https://api.github.com/users/${username}/events`, options)
            .then((response) => response.json());


    }
    const lastCommit = await githubUsername("paulswann44")
    console.log(lastCommit[0].created_at)


})();