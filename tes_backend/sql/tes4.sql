--
-- Mengambil nama user, dan menghitung rata-rata level hobby yang di miliki user
--
SELECT users.name AS 'name', ROUND(AVG(hobbies.level)) AS 'level_avg'
FROM map_user_hobby
INNER JOIN users
	ON map_user_hobby.id_user = users.id
INNER JOIN hobbies
	ON map_user_hobby.id_hobby = hobbies.id
GROUP BY users.name
ORDER BY users.id ASC;