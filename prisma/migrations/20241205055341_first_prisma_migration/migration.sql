-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "id" SET DEFAULT nanoid(8, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
