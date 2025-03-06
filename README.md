# Pathfinder

- Bu proje, her turda rastgele bir labirent oluşturan ve mavi karenin kırmızı kareye ulaştırılması mantığına dayanan bir browser oyunudur.

***

- Mavi ve kırmızı kareler, rastgele yerlerde oluşurlar.

- Mavi ve kırmızı karelerin, kenarlarda ve iç duvarların üzerinde oluşmaları engellenmiştir.

- Duvarlardan geçişi engellemek amacıyla "collision detection" uygulanmıştır.

- Labirentlerin oluşturulmasında DFS (Depth-First Search) algoritması kullanılmıştır.

- Labirentlerin "çözülebilir" nitelikte olup olmadığını kontrol etmek için BFS (Breadth-First Search) algoritması kullanılmıştır. Eğer mavi kareden kırmızı kareye ulaşan bir yol yoksa, yeni bir labirent oluşturulur.

- Algoritma gereği, "multiply connected" değil, "simply connected" labirentler oluşur. Bu tip labirentlerde döngü (loop) yoktur, tek rota vardır.

- Labirent boyutu değiştirilebilmektedir. Ancak algoritmada hata olmaması için, kenar uzunluklarının "tek sayı" olması gerekmektedir.

- Her çözüm sonrasında, bir sonraki seviyeye geçilir.

- Mouse "sağ tık" ile menü açma özelliği devre dışı bırakılmıştır.