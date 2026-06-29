# Emre Tellioğlu — CV

Bu klasör güncel CV'nin üç sürümünü içerir:

| Dosya | Açıklama |
|-------|----------|
| `emre_tellioglu_cv.pdf` | Doğrudan başvurularda kullanılabilecek hazır PDF (A4, 2 sayfa). |
| `emre_tellioglu_cv.html` | Düzenlenebilir kaynak. Tarayıcıda açıp güncelleyebilirsin. |
| `emre_tellioglu_cv.md` | Metni kolayca kopyalayıp yapıştırabileceğin sade sürüm (LinkedIn, e-posta vb.). |

## PDF'i yeniden oluşturma

HTML'de değişiklik yaptıktan sonra PDF'i güncellemek için:

```bash
google-chrome --headless=new --no-sandbox --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf=emre_tellioglu_cv.pdf emre_tellioglu_cv.html
```

> Tarayıcıdan da yapabilirsin: HTML dosyasını aç → Yazdır (Ctrl+P) → Hedef: "PDF olarak kaydet" → Kenar boşlukları: "Yok".

## Sonraki adımlar (öneri)
- **GitHub profili:** Paylaşılabilir projeleri repo olarak yükleyip CV'ye link ekleyebilirsin. Hesabını açtığında bu CV'ye GitHub satırını ekleriz.
- **İngilizce sürüm:** İhtiyaç olursa aynı tasarımdan İngilizce bir sürüm de hazırlanabilir.
