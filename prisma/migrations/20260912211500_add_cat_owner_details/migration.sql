-- AlterTable
ALTER TABLE "Cat"
ADD COLUMN "parentName" TEXT NOT NULL DEFAULT 'Unknown owner',
ADD COLUMN "whatsapp" TEXT;

-- Preserve the required column while avoiding a permanent database default.
ALTER TABLE "Cat" ALTER COLUMN "parentName" DROP DEFAULT;
