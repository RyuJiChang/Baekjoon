# [Gold V] Bulls and Cows - 6096 

[문제 링크](https://www.acmicpc.net/problem/6096) 

### 성능 요약

메모리: 11544 KB, 시간: 2148 ms

### 분류

다이나믹 프로그래밍(dp)

### 문제 설명

<p>Farmer John wants to position N (1 <= N <= 100,000) cows and bulls in a single row to present at the annual fair.</p>

<p>FJ has observed that the bulls have been quite pugnacious lately; if two bulls too close together in the line, they will argue and begin to fight, ruining the presentation. Ever resourceful, FJ calculated that any two bulls must have at least K (0 <= K < N) cows between them in order to avoid a fight.</p>

<p>FJ would like you to help him by counting the number of possible sequences of N bulls and cows that avoid any fighting. FJ considers all bulls the to be the same and all cows to be the same; thus, two sequences are only different if they have different kinds of cattle in some position.</p>

### 입력 

 <ul>
	<li>Line 1: Two space-separated integers: N and K</li>
</ul>

<p> </p>

### 출력 

 <ul>
	<li>Line 1: A single integer representing the number of ways FJ could create such a sequence of cattle. Since this number can be quite large, output the result modulo 5,000,011.</li>
</ul>

<p> </p>

