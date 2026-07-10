#include <stdio.h>
#include <string.h>
#define MAX 50

// struktur untuk menu dan keranjang
struct Menu {
    int id;
    char nama[50];
    int harga;
    int kategori;   
};
struct Cart {
    int id;
    char nama[50];
    int harga;
    int qty;
    int total;
};

struct Menu listMenu[MAX];
int jumlahMenu = 0;

struct Cart cartList[MAX];
int jumlahcart = 0;

// =======================
// FUNGSI DAN PROSEDUR
// =======================

// menu awal
void menuawal() {
    listMenu[0] = (struct Menu){1, "Americano", 18000, 2};
    listMenu[1] = (struct Menu){2, "Cappuccino", 20000, 2};
    listMenu[2] = (struct Menu){3, "Latte", 22000, 2};
    listMenu[3] = (struct Menu){4, "Lemon Tea", 12000, 2};
    listMenu[4] = (struct Menu){5, "Milkshake", 18000, 2};
    listMenu[5] = (struct Menu){6, "Thai Tea", 15000, 2};
    listMenu[6] = (struct Menu){7, "Matcha", 20000, 2};
    listMenu[7] = (struct Menu){8, "Chocolate Float", 18000, 2};
    listMenu[8] = (struct Menu){9, "Lychee Tea", 12000, 2};
    listMenu[9] = (struct Menu){10, "Orange Squash", 18000, 2};
    listMenu[10] = (struct Menu){11, "Nasi Goreng", 22000, 1};
    listMenu[11] = (struct Menu){12, "Mie Goreng", 20000, 1};
    listMenu[12] = (struct Menu){13, "Chicken Teriyaki", 25000, 1};
    listMenu[13] = (struct Menu){14, "Kentang Goreng", 17000, 1};
    listMenu[14] = (struct Menu){15, "Churos", 20000, 1};
    listMenu[15] = (struct Menu){16, "Pancake", 20000, 1};
    listMenu[16] = (struct Menu){17, "Roti Bakar", 20000, 1};
    listMenu[17] = (struct Menu){18, "Chicken Katsu", 27000, 1};
    listMenu[18] = (struct Menu){19, "Mango Sticky Rice", 22000, 1};
    listMenu[19] = (struct Menu){20, "Spaghetti Carbonara", 28000, 1};
    jumlahMenu = 20;
}

// menampilkan daftar menu
void daftarMenu() {
    printf("\n========================= DAFTAR MENU CAFE KITA ==========================\n");
    printf("%-32s     | %-32s\n", "Makanan", "Minuman");
    printf("-------------------------------------------------------------------------\n");
    
    int makananCount = 0, minumanCount = 0;
    struct Menu makanan[MAX], minuman[MAX];

    for (int i = 0; i < jumlahMenu; i++) {
        if (listMenu[i].kategori == 1)
            makanan[makananCount++] = listMenu[i];
        else
            minuman[minumanCount++] = listMenu[i];
    }

    int maxRow = (makananCount > minumanCount) ? makananCount : minumanCount;

    for (int i = 0; i < maxRow; i++) {
        if (i < makananCount)
            printf("%-2d. %-22s Rp%-7d", makanan[i].id, makanan[i].nama, makanan[i].harga);
        else
            printf("%-32s", " ");
        
        printf(" | ");

        if (i < minumanCount)
            printf("%-2d. %-22s Rp%-7d", minuman[i].id, minuman[i].nama, minuman[i].harga);

        printf("\n");
    }
}

// CRUD
void tambahMenu() {
    printf("\nTambah Menu Baru\n");

    listMenu[jumlahMenu].id = jumlahMenu + 1;

    printf("Nama: ");
    scanf(" %[^\n]", listMenu[jumlahMenu].nama);

    printf("Harga: ");
    scanf("%d", &listMenu[jumlahMenu].harga);

    printf("Kategori (1=Makanan, 2=Minuman): ");
    scanf("%d", &listMenu[jumlahMenu].kategori);

    jumlahMenu++;
    printf("Menu berhasil ditambahkan!\n");
}

void editMenu() {
    daftarMenu();
    int pilih;
    printf("\nPilih ID menu: ");
    scanf("%d", &pilih);

    int idx = pilih - 1;

    printf("Nama baru: ");
    scanf(" %[^\n]", listMenu[idx].nama);
    printf("Harga baru: ");
    scanf("%d", &listMenu[idx].harga);
    printf("Kategori baru (1/2): ");
    scanf("%d", &listMenu[idx].kategori);

    printf("Menu berhasil diperbarui!\n");
}

void hapusMenu() {
    daftarMenu();
    int pilih;
    printf("\nPilih ID menu: ");
    scanf("%d", &pilih);

    int idx = pilih - 1;

    for (int i = idx; i < jumlahMenu - 1; i++) {
        listMenu[i] = listMenu[i+1];
        listMenu[i].id = i + 1;
    }
    jumlahMenu--;
    printf("Menu berhasil dihapus!\n");
}

// searching
void searching() {
    char key[50];
    int found = 0;
    printf("\nCari menu : ");
    scanf(" %[^\n]", key);

    for (int i = 0; i < jumlahMenu; i++) {
        if (strstr(listMenu[i].nama, key)) {
            printf("%d | %s - Rp%d (%s)\n",
                listMenu[i].id,
                listMenu[i].nama,
                listMenu[i].harga,
                listMenu[i].kategori == 1 ? "Makanan" : "Minuman"
            );
            found = 1;
        }
    }
    if (!found) printf("Menu tidak ditemukan!\n");
}

// sorting
void sortHarga() {
    for (int i = 0; i < jumlahMenu - 1; i++) {
        for (int j = i + 1; j < jumlahMenu; j++) {
            if (listMenu[i].harga > listMenu[j].harga) {
                struct Menu tmp = listMenu[i];
                listMenu[i] = listMenu[j];
                listMenu[j] = tmp;
            }
        }
    }
    printf("Sorting harga selesai!\n");
}

void sortNama() {
    for (int i = 0; i < jumlahMenu - 1; i++) {
        for (int j = i + 1; j < jumlahMenu; j++) {
            if (strcmp(listMenu[i].nama, listMenu[j].nama) > 0) {
                struct Menu tmp = listMenu[i];
                listMenu[i] = listMenu[j];
                listMenu[j] = tmp;
            }
        }
    } 
    printf("Sorting nama selesai!\n");
}

// cart
void tambahCart(int idx, int qty) {
    cartList[jumlahcart].id = listMenu[idx].id;
    strcpy(cartList[jumlahcart].nama, listMenu[idx].nama);
    cartList[jumlahcart].harga = listMenu[idx].harga;
    cartList[jumlahcart].qty = qty;
    cartList[jumlahcart].total = qty * listMenu[idx].harga;
    jumlahcart++;
}

// transaksi
void transaksi() {
    int pilih, qty;

    printf("\n=== MULAI TRANSAKSI ===\n");
    daftarMenu();

    while (1) {
        printf("\nMasukkan ID menu (0 untuk selesai): ");
        scanf("%d", &pilih);

        if (pilih == 0) break;
        int idx = pilih - 1;

        if (idx < 0 || idx >= jumlahMenu) {
            printf("ID tidak valid!\n");
            continue;
        }

        printf("Jumlah: ");
        scanf("%d", &qty);

        tambahCart(idx, qty);
        printf("Ditambahkan ke keranjang!\n");
    }
}

void cetakStruk(int total) {
    int bayar, kembalian;

    printf("\n=================== STRUK PEMBELIAN ==================\n");
    printf("%-3s | %-20s | %-3s | %-10s\n", "ID", "Menu", "QTY", "Subtotal");
    printf("------------------------------------------------------\n");

    for (int i = 0; i < jumlahcart; i++) {
        printf("%-3d | %-20s | %-3d | Rp%-10d\n",
            cartList[i].id, cartList[i].nama, cartList[i].qty, cartList[i].total);
    }

    printf("------------------------------------------------------\n");
    printf("TOTAL BAYAR : Rp%d\n", total);

    printf("Uang pelanggan: Rp");
    scanf("%d", &bayar);

    kembalian = bayar - total;

    if (kembalian < 0) {
        printf("Uang tidak cukup! Transaksi dibatalkan.\n");
        return;
    }

    printf("Kembalian     : Rp%d\n", kembalian);
    printf("======================================================\n");
}

// login admin (function boolean)
int loginAdmin() {
    char user[20], pass[20];
    int salah = 0;

    while (salah < 3) {
        printf("\nUsername: ");
        scanf("%s", user);
        printf("Password: ");
        scanf("%s", pass);

        if (strcmp(user, "cafekita") == 0 && strcmp(pass, "kelompok2") == 0) {
            printf("Login berhasil!\n");
            return 1; // TRUE
        }

        salah++;
        printf("Salah! Percobaan %d/3\n", salah);
    }

    printf("Akses ditolak!\n");
    return 0; // FALSE
}

void menuAdmin() {
    int pilih;

    do {
        printf("\n=== MENU ADMIN ===\n");
        printf("1. Tambah Menu\n");
        printf("2. Edit Menu\n");
        printf("3. Hapus Menu\n");
        printf("4. Lihat Menu\n");
        printf("5. Searching\n");
        printf("6. Sorting Harga\n");
        printf("7. Sorting Nama\n");
        printf("0. Kembali\n");
        printf("Pilih: ");
        scanf("%d", &pilih);

        switch (pilih) {
            case 1: tambahMenu(); break;
            case 2: editMenu(); break;
            case 3: hapusMenu(); break;
            case 4: daftarMenu(); break;
            case 5: searching(); break;
            case 6: sortHarga(); break;
            case 7: sortNama(); break;
        }
    } while (pilih != 0);
}

void menuKasir() {
    int pilih;

    do {
        printf("\n=== MENU KASIR ===\n");
        printf("1. Mulai Transaksi\n");
        printf("2. Cetak Struk\n");
        printf("0. Kembali\n");
        printf("Pilih: ");
        scanf("%d", &pilih);

        switch (pilih) {
            case 1:
                transaksi();
                break;

            case 2:
                if (jumlahcart == 0) {
                    printf("\nKeranjang masih kosong!\n");
                    break;
                }

                int total = 0;
                for (int i = 0; i < jumlahcart; i++)
                    total += cartList[i].total;

                cetakStruk(total);
                jumlahcart = 0;
                break;
        }
    } while (pilih != 0);
}

// ============================
// MAIN PROGRAM
// ============================
int main() {
    menuawal();
    int pilih;

    do {
        printf("\n=== APLIKASI KASIR CAFE KITA ===\n");
        printf("1. Login Admin\n");
        printf("2. Kasir\n");
        printf("0. Keluar\n");
        printf("Pilih: ");
        scanf("%d", &pilih);

        switch (pilih) {
            case 1:
                if (loginAdmin())
                    menuAdmin();
                menuawal();
                break;

            case 2:
                menuKasir();
                break;
        }
    } while (pilih != 0);

    return 0;
}