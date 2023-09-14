-- 코드를 입력하세요
SELECT warehouse_id, warehouse_name, address, IFNULL(freezer_yn, 'N') AS freezer_yn
FROM food_warehouse
WHERE warehouse_name LIKE '%경기%'