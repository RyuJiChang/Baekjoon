-- 코드를 입력하세요
SELECT car_id, car_type, daily_fee, options
FROM car_rental_company_car
WHERE options like '%네비게이션%'
ORDER BY car_id DESC