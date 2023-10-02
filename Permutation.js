// 1부터 N까지 중복없이 M개를 고른 모든 수열 구하기 

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,m] = input[0].split(' ').map(Number);
let arr = []; //순열을 계산하고자 하는 원소가 담긴 배열 
for (let i = 1; i <= n; i++) arr.push(i);
let visited = new Array(n).fill(false); //방문 처리 배열
let selected = []; //현재 순열에 포함된 원소 

let answer = '';
function dfs(arr, depth) {
  if (depth == m) {
    let result = []; //순열 결과 저장 테이블 
    for (let i of selected) result.push(arr[i]); //각 순열 결과를 배열에 저장
    for (let x of result) answer += x + ' '; //저장된 순열 결과를 출력하기 위해 문자열에 옮겨서 저장
    answer += '\n';
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue; //중복을 허용하지 않으므로 이미 처리된 원소는 무시
    selected.push(i); //현재 원소 선택
    visited[i] = true; //현재 원소 방문 처리
    dfs(arr, depth+1); //재귀 함수 호출
    selected.pop(); //현재 원소 선택 취소
    visited[i] = false; //현재 원소 방문 처리 취소
  }
}

dfs(arr, 0); //깊이는 항상 0부터
console.log(answer);


