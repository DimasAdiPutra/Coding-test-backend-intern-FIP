--
-- Mengambil nama user dan menghitung data dari banyaknya hobi yang di miliki user tersebut dengan status yang masih 'active'
--
SELECT users.name AS 'name_user', COUNT(map_user_hobby.id_hobby) AS 'total'
FROM map_user_hobby
INNER JOIN users
	ON map_user_hobby.id_user = users.id
GROUP BY users.name, map_user_hobby.status HAVING map_user_hobby.status = 'active'
ORDER BY users.id ASC;