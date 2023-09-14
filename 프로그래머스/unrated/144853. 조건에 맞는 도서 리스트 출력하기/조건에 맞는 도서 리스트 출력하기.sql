-- 코드를 입력하세요
SELECT book_id, DATE_FORMAT(published_date, '%Y-%m-%d') AS published_date
FROM book
WHERE category = '인문'
AND published_date LIKE '2021%'
ORDER BY published_date