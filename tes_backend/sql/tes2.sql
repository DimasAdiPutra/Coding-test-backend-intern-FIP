--
-- Mengambil gender dan total dari banyaknya users berdasarkan gendernya dan berdasarkan hobi tertentu
--
SELECT users.gender AS 'gender', COUNT(users.id) AS 'total'
FROM map_user_hobby 
INNER JOIN users
	ON map_user_hobby.id_user = users.id
INNER JOIN hobbies
	ON map_user_hobby.id_hobby = hobbies.id
GROUP BY users.gender, hobbies.name HAVING hobbies.name LIKE 'skipping'
ORDER BY users.gender DESC;