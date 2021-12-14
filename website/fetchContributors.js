#!/usr/bin/env node

const fs = require('fs');
const path = require('path');


const axios = require('axios');


(async() => {
    let page = 1;
    const repoArray = [];
    try {
        while (1) {
            const res = await axios(
                'https://api.github.com/orgs/moja-global/repos?per_page=100&page=' + page
            );

            const repos = res.data;

            for (const repo of repos) {
                const repoInfo = { name: repo.name, contribUrl: repo.contributors_url, url: repo.html_url };

                repoArray.push(repoInfo);
            }

            if (repos.length === 0) {
                break;
            }

            page++;
        }

        const contributorsInfo = [];

        function checkAlreadyExist(username, contributorsInfo) {
            for (let i = 0; i < contributorsInfo.length; i++) {
                if (contributorsInfo[i].username === username) {
                    return i;

                }
            }

            return -1;
        }

        for (const repo of repoArray) {
            const res = await axios(repo.contribUrl);

            const contributors = res.data;

            const projectInfo = { projectName: repo.name, projectUrl: repo.url };

            for (const constributor of contributors) {
                const username = constributor.login;

                const contributorIndex = checkAlreadyExist(username, contributorsInfo);

                if (contributorIndex === -1) {
                    const contributorInfo = {
                        username: username,
                        photoUrl: constributor.avatar_url,
                        url: constributor.html_url,
                        projects: [projectInfo],
                    };

                    contributorsInfo.push(contributorInfo);
                } else {
                    contributorsInfo[contributorIndex].projects.push(projectInfo);
                }
            }
        }

    } catch (error) {
        console.log(error)
    }

    fs.writeFile(
        path.resolve(__dirname, 'src/contributors.json'),
        JSON.stringify(contributorsInfo, null, 2) + '\n',
        (err) => {
            if (err) {
                console.error('Failed to write contributors file: ', err);
            } else console.log('Fetched 1 file: contributors.json');
        }
    );

})();