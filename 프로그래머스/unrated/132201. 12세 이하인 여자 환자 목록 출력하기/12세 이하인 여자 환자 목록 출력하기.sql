-- 코드를 입력하세요
SELECT pt_name, pt_no, gend_cd, age, IFNULL(tlno, 'NONE') AS TLNO
FROM patient
WHERE gend_cd = 'W'
AND age <= 12
ORDER BY age DESC, pt_name