# Pathfinder

- Bu proje, her turda rastgele bir labirent oluşturan ve mavi karenin kırmızı kareye ulaştırılması mantığına dayanan bir browser oyunudur.

***

- Mavi kare ve kırmızı kare, rastgele yerlerde oluşurlar.

- Mavi kare ve kırmızı karenin, kenarlarda ve iç duvarların üzerinde oluşmaları engellenmiştir.

- Duvarlardan geçişi engellemek amacıyla "collision detection" uygulanmıştır.

- Herhangi iki nokta arasında sadece tek rota vardır.

- Labirentlerin oluşturulmasında DFS (Depth-First Search) algoritması kullanılmıştır.

- Labirentlerin "çözülebilir" nitelikte olup olmadığını kontrol etmek için BFS (Breadth-First Search) algoritması kullanılmıştır. Eğer mavi kareden kırmızı kareye ulaşan bir yol yoksa, yeni bir labirent oluşturulur.

- Labirent boyutu değiştirilebilmektedir.

- Generation esnasında hata olmaması için labirent boyutunun "tek sayı" olması gerekmektedir.

- Her çözüm sonrasında, bir sonraki seviyeye geçilir.

- Mouse "sağ tık" ile menü açma özelliği devre dışı bırakılmıştır.