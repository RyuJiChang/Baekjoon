# [Bronze III] Balloons Colors - 9635 

[문제 링크](https://www.acmicpc.net/problem/9635) 

### 성능 요약

메모리: 9408 KB, 시간: 116 ms

### 분류

구현

### 제출 일자

2024년 1월 29일 21:24:24

### 문제 설명

<p>Assigning a balloon color to each problem is one of the tasks we need to do every year, and sometimes it is tricky.</p>

<p>We noticed that some contestants assume some colors for some problems according to the difficulty. For example, the easiest problem is the red one and the hardest problem is the black one.</p>

<p>We do not want these assumptions to be true, so we decided to add constraints for the easiest and the hardest problems.</p>

<p>There are N problems, numbered from 1 to N , the easiest problem is problem number 1, and the hardest problem is problem number N . Also there are N unique colors, for simplicity we will give each color a unique number from 1 to N .</p>

<p>We want to assign each color to exactly 1 problem, such that the easiest problem does not get the color X and the hardest problem does not get the color Y .</p>

<p>Given N , X , Y and an assignment of the colors, your task is to find if this assignment satisfies the above conditions or not.</p>

### 입력 

 <p>Your program will be tested on one or more test cases. The first line of the input will be a single integer T, the number of test cases (1 ≤ T ≤ 100). Followed by the test cases, the first line of each test case contains 3 integers separated by a single space N X Y (3 ≤ N ≤ 100) and (1 ≤ X , Y ≤ N ) representing the number of problems, the color which the easiest problem should not get and the color which the hardest problem should not get, respectively. Followed by a line which contains N integers separated by a single space (each integer from 1 to N should appear exactly once), the first integer is the color for the first problem (the easiest), the second integer is the color for the second problem and so on (the last integer is the color for the hardest problem).</p>

### 출력 

 <p>For each test case, print a single line which contains a single word, this word should be (without the quotes):</p>

<ul>
	<li>“BOTH”: If both the easiest and hardest problems got colors which they should not get.</li>
	<li>“EASY”: If only the easiest problem got a color which it should not get.</li>
	<li>“HARD”: If only the hardest problem got a color which it should not get.</li>
	<li>“OKAY”: If both the easiest and hardest problems got colors which they can get.</li>
</ul>

