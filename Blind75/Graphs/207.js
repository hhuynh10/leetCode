// Course Schedule
function canFinish (numCourses, prerequisites) {
    const preMap = new Array(numCourses).fill().map(() => []);

    for (const [crs, pre] of prerequisites) {
        preMap[crs].push(pre);
    }

    console.log(preMap)

    const visiting = new Set();

    function dfs (crs) {
        if (visiting.has(crs)) {
            return false;
        }
        if (preMap[crs].length === 0) {
            return true;
        }

        visiting.add(crs);
        for (const pre of preMap[crs]) {
            if (!dfs(pre)) {
                return false;
            }
        }
        visiting.delete(crs);
        preMap[crs] = [];
        return true;
    };

    for (let c = 0; c < numCourses; c++) {
        if (!dfs(c)) {
            return false;
        }
    }
    return true;
};

canFinish(5, [[0,1], [0,2], [1,3], [1,4], [3,4]])