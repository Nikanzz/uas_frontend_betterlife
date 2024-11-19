const mongoose = require("mongoose");

// Model untuk buku
const BookSchema = new mongoose.Schema({
    judul: { type: String, required: true },
    penulis: { type: String, required: true },
    deskripsi: { type: String },
    kutipan: { type: String }
});

const Book = mongoose.model("Book", BookSchema);

// Data buku
const books = [
    {
        judul: "Deep Work",
        penulis: "Cal Newport",
        deskripsi: "Membahas pentingnya kerja mendalam (deep work) dalam mencapai hasil yang luar biasa di era yang penuh distraksi.",
        kutipan: "Clarity about what matters provides clarity about what does not."
    },
    {
        judul: "Atomic Habits",
        penulis: "James Clear",
        deskripsi: "Menjelaskan cara membangun kebiasaan kecil yang membawa perubahan besar dalam kehidupan.",
        kutipan: "You do not rise to the level of your goals. You fall to the level of your systems."
    },
    {
        judul: "The 4-Hour Workweek",
        penulis: "Timothy Ferriss",
        deskripsi: "Panduan untuk merancang hidup yang lebih bebas dengan bekerja lebih cerdas, bukan lebih keras.",
        kutipan: "Focus on being productive instead of busy."
    },
    {
        judul: "Eat That Frog!",
        penulis: "Brian Tracy",
        deskripsi: "Menawarkan teknik sederhana untuk mengelola waktu dan menyelesaikan tugas-tugas penting.",
        kutipan: "If you have to eat two frogs, eat the ugliest one first."
    },
    {
        judul: "Getting Things Done",
        penulis: "David Allen",
        deskripsi: "Sistem produktivitas untuk mengatur pekerjaan dan hidup agar lebih terstruktur.",
        kutipan: "Your mind is for having ideas, not holding them."
    }
    // Tambahkan buku lainnya sesuai data Anda
];

// Fungsi untuk memasukkan data buku ke MongoDB
async function seedBooks() {
    try {
        // Koneksi ke MongoDB
        await mongoose.connect("mongodb://127.0.0.1:27017/uas_frontend_betterlife", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Terhubung ke MongoDB...");

        // Hapus data lama (opsional)
        await Book.deleteMany({});
        console.log("Data lama dihapus.");

        // Tambahkan data buku
        await Book.insertMany(books);
        console.log("Data buku berhasil dimasukkan!");
    } catch (err) {
        console.error("Gagal menyimpan data ke MongoDB:", err);
    } finally {
        mongoose.connection.close();
    }
}

// Jalankan fungsi seed
seedBooks();
