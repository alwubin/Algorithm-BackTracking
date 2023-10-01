// 크기가 N × N인 체스판 위에 퀸 N개를 서로 공격할 수 없게 놓는 문제이다.
// N이 주어졌을 때, 퀸을 놓는 방법의 수를 구하는 프로그램

let n = Number(input[0]); //전체 맵의 크기
let queens = []; //현재 체스판에 놓인 퀸의 위치 정보

function possible(x,y) {
  for (let [a,b] of queens) {
    if (a == x || b == y) return false; // 행이나 열이 같다면 놓을 수 없음
    if (Math.abs(a-x) == Math.abs(b-y)) return false; //이전 퀸의 대각선도 놓을 수 없음
  }
  return true;
}

let cnt = 0;
function dfs(row) {
  if (row == n) cnt += 1;
  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue; // 현재 위치에 놓을 수 없으므로 무시
    queens.push([row, i]); // 현재 위치에 퀸 놓기
    dfs(row+1); //재귀 함수 호출
    queens.pop(); //현재 위치에서 퀸 제거
  }
}
dfs(0);
console.log(cnt);
