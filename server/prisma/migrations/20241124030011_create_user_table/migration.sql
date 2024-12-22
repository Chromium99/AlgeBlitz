-- CreateTable
CREATE TABLE "sample" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sample_pkey" PRIMARY KEY ("id")
);
