with data1 as (
    SELECT 
        A.title, 
        A.board_id, 
        B.reply_id, 
        B.writer_id, 
        B.contents, 
        DATE_FORMAT(B.created_date, '%Y-%m-%d') AS created_date,
        A.created_date AS board_date
    FROM used_goods_board A 
    JOIN used_goods_reply B
    ON A.BOARD_ID = B.BOARD_ID
)

SELECT title, board_id, reply_id, writer_id, contents, created_date
FROM data1
WHERE board_date BETWEEN '2022-10-01' AND '2022-10-31'
ORDER BY created_date, title