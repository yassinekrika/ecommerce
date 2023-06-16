-- CreateTable
CREATE TABLE `CartProducts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cartId` INTEGER NULL,
    `productId` INTEGER NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CartProducts` ADD CONSTRAINT `CartProducts_cartId_fkey` FOREIGN KEY (`cartId`) REFERENCES `Carts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartProducts` ADD CONSTRAINT `CartProducts_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
