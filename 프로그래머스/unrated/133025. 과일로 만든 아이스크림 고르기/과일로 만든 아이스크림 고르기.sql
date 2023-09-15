-- 코드를 입력하세요
SELECT flavor
FROM first_half
WHERE total_order > 3000 
AND (SELECT ingredient_type FROM icecream_info WHERE flavor = first_half.flavor) = 'fruit_based'