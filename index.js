const main = () => {
    const firstCoordinate = { x: 0, y: 0 };
    const secondCoordinate = { x: 0, y: 0 };
    const canvas = [
        ["+--------------------------+"],
        ["|                          |"],
        ["|                          |"],
        ["|                          |"],
        ["|                          |"],
        ["|                          |"],
        ["|                          |"],
        ["+--------------------------+"]
    ];

    const getCoordinate = () => {
        const firstInput = prompt("좌표를 입력하세요.범위(X: 1 ~ 26, Y: 1~6)").split(",");
        firstCoordinate.x = Number(firstInput[0]);
        firstCoordinate.y = Number(firstInput[1]);

        const secondInput = prompt("좌표를 입력하세요.범위(X: 1 ~ 26, Y: 1~6)").split(",");
        secondCoordinate.x = Number(secondInput[0]);
        secondCoordinate.y = Number(secondInput[1]);
    }

    const paintCanvas = () => {
        const topLine = [...canvas[firstCoordinate.y][0]];
        const bottomLine = [...canvas[secondCoordinate.y][0]];

        for (let i = firstCoordinate.x; i <= secondCoordinate.x; i++) {
            topLine[i] = "*";
            bottomLine[i] = "*";
        }

        canvas[firstCoordinate.y] = Array(topLine.join(""));
        canvas[secondCoordinate.y] = Array(topLine.join(""));

        for (let i = firstCoordinate.y + 1; i < secondCoordinate.y; i++) {
            const line = [...canvas[i][0]];
            line[firstCoordinate.x] = "*";
            line[secondCoordinate.x] = "*";
            canvas[i] = Array(line.join(""));
        }
    }

    const renderCanvas = () => {
        const board = document.querySelector(".canvas");
        for (let i = 0; i < canvas.length; i++) {
            const addList = document.createElement("pre");
            const listText = document.createTextNode(canvas[i][0]);
            addList.appendChild(listText);
            board.appendChild(addList);
        }
    }

    getCoordinate();
    paintCanvas();
    renderCanvas();
};

main();