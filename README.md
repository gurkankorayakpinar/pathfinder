# Pathfinder

- Bu proje, her turda rastgele bir labirent oluşturan ve mavi karenin, "yön tuşları" kullanılarak kırmızı kareye ulaştırılmaya çalışıldığı bir JavaScript oyunudur.

*

- Mavi kare ve kırmızı kare, her turda rastgele yerlerde oluşurlar.

- Mavi kare ve kırmızı karenin, duvarların üzerinde oluşmaları engellenmiştir.

- Duvarlardan geçişi engellemek için "collision detection" uygulanmıştır.

- Labirentlerin oluşturulmasında DFS (Depth-First Search) algoritması kullanılmıştır.

- Labirentin "çözülebilir" olup olmadığını kontrol etmek ve çözümü bulunamayan labirentleri (oyuncuya fark ettirmeden) yeniden oluşturmak için BFS (Breadth-First Search) algoritması kullanılmıştır.

- Generation esnasında hata olmaması için labirent boyutunun "tek sayı" olması gerekmektedir.

- Her çözüm sonrasında bir sonraki seviyeye geçilir.