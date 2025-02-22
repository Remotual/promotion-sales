-- CreateTable
CREATE TABLE `Company` (
    `companyId` VARCHAR(191) NOT NULL,
    `companyName` VARCHAR(191) NOT NULL,
    `servicesTags` VARCHAR(191) NOT NULL,
    `buckSavingsTags` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`companyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
