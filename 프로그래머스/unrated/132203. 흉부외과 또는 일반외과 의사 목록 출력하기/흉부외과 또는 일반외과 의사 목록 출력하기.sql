-- 코드를 입력하세요
SELECT dr_name, dr_id, mcdp_cd, DATE_FORMAT(hire_ymd,'%Y-%m-%d') AS hire_ymd
FROM doctor
WHERE MCDP_CD = 'CS' 
OR MCDP_CD = 'GS'
ORDER BY hire_ymd DESC