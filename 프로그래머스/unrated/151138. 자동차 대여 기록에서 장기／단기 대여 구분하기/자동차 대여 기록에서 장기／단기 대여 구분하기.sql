-- 코드를 입력하세요
SELECT history_id, car_id, DATE_FORMAT(start_date, '%Y-%m-%d') AS start_date, DATE_FORMAT(end_date, '%Y-%m-%d') AS end_date, IF(DATEDIFF(END_DATE, START_DATE) >= 29 , "장기 대여", "단기 대여") AS rent_type
FROM car_rental_company_rental_history
WHERE start_date LIKE '2022-09-%'
ORDER BY history_id DESC