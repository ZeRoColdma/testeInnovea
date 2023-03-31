-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Notice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "author" TEXT,
    "description" TEXT
);
INSERT INTO "new_Notice" ("author", "description", "id", "title") SELECT "author", "description", "id", "title" FROM "Notice";
DROP TABLE "Notice";
ALTER TABLE "new_Notice" RENAME TO "Notice";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
