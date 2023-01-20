# [Bronze I] JOI ソート (JOI Sort) - 20977 

[문제 링크](https://www.acmicpc.net/problem/20977) 

### 성능 요약

메모리: 9320 KB, 시간: 132 ms

### 분류

구현(implementation), 정렬(sorting), 문자열(string)

### 문제 설명

<p>長さ <var>N</var> の文字列 <var>S</var> が与えられる．<var>S</var> の各文字は ‘<code>J</code>’，‘<code>O</code>’，‘<code>I</code>’ のいずれかである．</p>

<p>あなたは <var>S</var> の文字を並び替えて次の条件を満たすようにしたい．</p>

<ul>
	<li>すべての文字 ‘<code>J</code>’ と文字 ‘<code>O</code>’ の組について ‘<code>J</code>’ が ‘<code>O</code>’ よりも前にある．</li>
	<li>すべての文字 ‘<code>O</code>’ と文字 ‘<code>I</code>’ の組について ‘<code>O</code>’ が ‘<code>I</code>’ よりも前にある．</li>
	<li>すべての文字 ‘<code>J</code>’ と文字 ‘<code>I</code>’ の組について ‘<code>J</code>’ が ‘<code>I</code>’ よりも前にある．</li>
</ul>

<p>文字列 <var>S</var> が与えられたとき，上の条件を満たすように <var>S</var> の文字を並び替えた文字列を出力するプログラムを作成せよ．</p>

### 입력 

 <p>入力は以下の形式で標準入力から与えられる．</p>

<p><var>N</var><br>
<var>S</var></p>

### 출력 

 <p>条件を満たすように <var>S</var> の文字を並び替えた文字列を出力せよ．</p>

