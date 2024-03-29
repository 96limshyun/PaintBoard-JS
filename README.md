# PaintBoard-JS
- 1단계: 콘솔로 직사각형 그리기
---------------------

## 실행화면
https://github.com/limsbong/BlackJack-JS/assets/126482821/34937e28-ec8b-480d-b6ac-63134847830d

---------------------
## Content
1. prompt로 입력값을 받아 저장
2. 입력받은 좌표로 canvas에 그리기
3. 브라우저에 그리기

---------------------
## 1. prompt로 입력값을 받아 저장
- prompt로 자표를 입력받아 숫자로 변환하고 firstCoordinate, secondCoordinate 객체에 X, Y좌표를 담는다.
```
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
    getCoordinate();
};

main();
```

---------------------
## 2. 입력받은 좌표로 canvas에 그리기
- 맨 윗줄과 아랫줄을 먼저 그려주고 사이드줄을 순서대로 그린다.
- 맨 윗줄은 canvas배열에서 첫번째로 입력받은 Y값 번째 배열, 맨 아랫줄은 두번째로 입력받은 Y값 번째 배열, 각각 분해해 첫번째로 입력받은 X좌표부터 두번째로 입력받은 Y좌표까지 "*"를 넣어줬다.
- 분해한 배열을 join("")으로 합치고 Array를 사용해 배열로 다시 만든다음 canvas의 각 Y번째에 2차원 배열로 넣어줬다.
- 세로줄은 canvas에서 첫번째로 입력 받은 Y값 + 1부터 두번째로 입력 받은 Y값 전까지의 배열을 순서대로 가져와 분해해 첫번째로 입력받은 X값과 두번째로 입력받은 X값을 "*"로 바꿔주었다.
- 가로줄과 똑같이 분해한 배열을 join("")으로 합치고 Array를 사용해 배열로 다시 만든다음 canvas에 순서대로 2차원 배열로 넣어줬다.
```
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
```

---------------------
## 3. 브라우저에 그리기
- canvas를 순서대로 가져와 웹에 그려줬다.
- 띄어쓰기와 줄바꿈을 모두 그대로 브라우저 화면에 나타낼수 있는 pre태그를 사용했다.
```
const renderCanvas = () => {
        const board = document.querySelector(".canvas");
        for (let i = 0; i < canvas.length; i++) {
            const addList = document.createElement("pre");
            const listText = document.createTextNode(canvas[i][0]);
            addList.appendChild(listText);
            board.appendChild(addList);
        }
    }
```

