-- CreateTable
CREATE TABLE "Notice" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "author" TEXT,
    "description" TEXT,

    CONSTRAINT "Notice_pkey" PRIMARY KEY ("id")
);
