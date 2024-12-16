-- CreateTable
CREATE TABLE "blitzMode" (
    "id" SERIAL NOT NULL,
    "uid" TEXT,
    "score" TEXT,

    CONSTRAINT "blitzMode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "survivalMode" (
    "id" SERIAL NOT NULL,
    "uid" TEXT,
    "score" TEXT,

    CONSTRAINT "survivalMode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rampUp" (
    "id" SERIAL NOT NULL,
    "uid" TEXT,
    "score" TEXT,

    CONSTRAINT "rampUp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "puzzleMode" (
    "id" SERIAL NOT NULL,
    "uid" TEXT,
    "score" TEXT,

    CONSTRAINT "puzzleMode_pkey" PRIMARY KEY ("id")
);
